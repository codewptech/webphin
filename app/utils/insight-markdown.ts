import MarkdownIt from "markdown-it";
import type { Token } from "markdown-it";

import type {
  InsightMarkdownBlockNode,
  InsightMarkdownDocument,
  InsightMarkdownInlineNode,
  InsightMarkdownListItem,
  InsightMarkdownTableCell,
} from "~~/shared/types/markdown";

const markdown = new MarkdownIt({
  html: false,
  breaks: false,
  linkify: false,
  typographer: false,
}).disable("strikethrough");

function attribute(token: Token, name: string): string | null {
  const value = token.attrGet(name);
  return typeof value === "string" ? value : null;
}

function inlineText(nodes: InsightMarkdownInlineNode[]): string {
  return nodes
    .map((node) => {
      switch (node.type) {
        case "text":
        case "inline-code":
          return node.text;
        case "strong":
        case "emphasis":
        case "link":
          return inlineText(node.children);
        case "image":
          return node.alt;
        case "break":
          return "\n";
      }
    })
    .join("");
}

function normalizeInline(tokens: Token[]): InsightMarkdownInlineNode[] {
  let index = 0;

  function read(closingType?: string): InsightMarkdownInlineNode[] {
    const nodes: InsightMarkdownInlineNode[] = [];

    while (index < tokens.length) {
      const token = tokens[index++]!;

      if (token.type === closingType) {
        return nodes;
      }

      switch (token.type) {
        case "text":
          nodes.push({ type: "text", text: token.content });
          break;
        case "code_inline":
          nodes.push({ type: "inline-code", text: token.content });
          break;
        case "softbreak":
        case "hardbreak":
          nodes.push({ type: "break", hard: token.type === "hardbreak" });
          break;
        case "strong_open":
        case "em_open":
          nodes.push({
            type: token.type === "strong_open" ? "strong" : "emphasis",
            children: read(
              token.type === "strong_open" ? "strong_close" : "em_close",
            ),
          });
          break;
        case "link_open": {
          const children = read("link_close");
          const href = attribute(token, "href");

          if (href !== null && markdown.validateLink(href)) {
            nodes.push({
              type: "link",
              href,
              title: attribute(token, "title"),
              children,
            });
          } else {
            nodes.push(...children);
          }
          break;
        }
        case "image": {
          const alt = inlineText(normalizeInline(token.children ?? []));
          const src = attribute(token, "src");

          if (src !== null && markdown.validateLink(src)) {
            nodes.push({
              type: "image",
              src,
              alt,
              title: attribute(token, "title"),
            });
          } else {
            nodes.push({ type: "text", text: alt });
          }
          break;
        }
        default:
          throw new Error(
            `Unsupported Insights Markdown inline token: ${token.type}`,
          );
      }
    }

    if (closingType) {
      throw new Error(
        `Unclosed Insights Markdown inline token: ${closingType}`,
      );
    }

    return nodes;
  }

  return read();
}

/** One tokenization produces both the render tree and its H2-only TOC. */
export function parseInsightMarkdown(source: string): InsightMarkdownDocument {
  const tokens = markdown.parse(source, {});
  const toc: InsightMarkdownDocument["toc"] = [];
  const headingIds = new Set<string>();
  let index = 0;

  function take(): Token {
    const token = tokens[index++];

    if (!token) {
      throw new Error("Unexpected end of Insights Markdown tokens.");
    }

    return token;
  }

  function expect(type: string): Token {
    const token = take();

    if (token.type !== type) {
      throw new Error(
        `Expected Insights Markdown ${type}, received ${token.type}.`,
      );
    }

    return token;
  }

  function readInline(): InsightMarkdownInlineNode[] {
    return normalizeInline(expect("inline").children ?? []);
  }

  function headingId(label: string): string {
    const base =
      label
        .normalize("NFKC")
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\p{M}]+/gu, "-")
        .replace(/^-+|-+$/gu, "") || "section";
    let id = base;
    let suffix = 2;

    while (headingIds.has(id)) {
      id = `${base}-${suffix++}`;
    }

    headingIds.add(id);
    return id;
  }

  function readList(closingType: string): InsightMarkdownListItem[] {
    const items: InsightMarkdownListItem[] = [];

    while (tokens[index]?.type !== closingType) {
      expect("list_item_open");
      items.push({ nodes: readBlocks("list_item_close") });
    }

    expect(closingType);
    return items;
  }

  function readTableRow(cellTag: "th" | "td"): InsightMarkdownTableCell[] {
    expect("tr_open");
    const cells: InsightMarkdownTableCell[] = [];

    while (tokens[index]?.type !== "tr_close") {
      const cell = expect(`${cellTag}_open`);
      const style = attribute(cell, "style");
      const alignment =
        style === "text-align:left"
          ? "left"
          : style === "text-align:center"
            ? "center"
            : style === "text-align:right"
              ? "right"
              : null;
      const children = readInline();
      expect(`${cellTag}_close`);
      cells.push({ children, alignment });
    }

    expect("tr_close");
    return cells;
  }

  function readTable(): InsightMarkdownBlockNode {
    expect("thead_open");
    const header = readTableRow("th");
    expect("thead_close");
    const rows: InsightMarkdownTableCell[][] = [];

    if (tokens[index]?.type === "tbody_open") {
      take();
      while (tokens[index]?.type !== "tbody_close") {
        rows.push(readTableRow("td"));
      }
      expect("tbody_close");
    }

    expect("table_close");
    return { type: "table", header, rows };
  }

  function readBlocks(closingType?: string): InsightMarkdownBlockNode[] {
    const nodes: InsightMarkdownBlockNode[] = [];

    while (index < tokens.length) {
      const token = take();

      if (token.type === closingType) {
        return nodes;
      }

      switch (token.type) {
        case "paragraph_open": {
          const children = readInline();
          expect("paragraph_close");
          nodes.push({ type: "paragraph", children });
          break;
        }
        case "heading_open": {
          if (token.tag !== "h2" && token.tag !== "h3") {
            const line = (token.map?.[0] ?? 0) + 1;
            throw new Error(
              `Insights Markdown supports only H2/H3 body headings; found ${token.tag.toUpperCase()} at line ${line}. The article title supplies H1.`,
            );
          }

          const children = readInline();
          expect("heading_close");
          const label = inlineText(children).replace(/\s+/gu, " ").trim();
          const id = headingId(label);
          nodes.push({
            type: "heading",
            level: token.tag === "h2" ? 2 : 3,
            id,
            children,
          });

          if (token.tag === "h2") {
            toc.push({ id, label });
          }
          break;
        }
        case "blockquote_open":
          nodes.push({
            type: "blockquote",
            nodes: readBlocks("blockquote_close"),
          });
          break;
        case "bullet_list_open":
          nodes.push({
            type: "unordered-list",
            items: readList("bullet_list_close"),
          });
          break;
        case "ordered_list_open":
          nodes.push({
            type: "ordered-list",
            start: Number(token.attrGet("start") ?? 1),
            items: readList("ordered_list_close"),
          });
          break;
        case "fence":
        case "code_block":
          nodes.push({
            type: "code-block",
            code: token.content,
            language:
              token.type === "fence"
                ? token.info.trim().split(/\s+/u)[0] || null
                : null,
          });
          break;
        case "hr":
          nodes.push({ type: "horizontal-rule" });
          break;
        case "table_open":
          nodes.push(readTable());
          break;
        default:
          throw new Error(
            `Unsupported Insights Markdown block token: ${token.type}`,
          );
      }
    }

    if (closingType) {
      throw new Error(`Unclosed Insights Markdown block token: ${closingType}`);
    }

    return nodes;
  }

  return { nodes: readBlocks(), toc };
}
