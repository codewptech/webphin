export interface InsightMarkdownTocItem {
  id: string;
  label: string;
}

export interface InsightMarkdownDocument {
  nodes: InsightMarkdownBlockNode[];
  toc: InsightMarkdownTocItem[];
}

export type InsightMarkdownInlineNode =
  | { type: "text" | "inline-code"; text: string }
  | {
      type: "strong" | "emphasis";
      children: InsightMarkdownInlineNode[];
    }
  | {
      type: "link";
      href: string;
      title: string | null;
      children: InsightMarkdownInlineNode[];
    }
  | { type: "image"; src: string; alt: string; title: string | null }
  | { type: "break"; hard: boolean };

export interface InsightMarkdownListItem {
  nodes: InsightMarkdownBlockNode[];
}

export interface InsightMarkdownTableCell {
  children: InsightMarkdownInlineNode[];
  alignment: "left" | "center" | "right" | null;
}

export type InsightMarkdownBlockNode =
  | { type: "paragraph"; children: InsightMarkdownInlineNode[] }
  | {
      type: "heading";
      level: 2 | 3;
      id: string;
      children: InsightMarkdownInlineNode[];
    }
  | { type: "blockquote"; nodes: InsightMarkdownBlockNode[] }
  | { type: "unordered-list"; items: InsightMarkdownListItem[] }
  | { type: "ordered-list"; start: number; items: InsightMarkdownListItem[] }
  | { type: "code-block"; code: string; language: string | null }
  | {
      type: "table";
      header: InsightMarkdownTableCell[];
      rows: InsightMarkdownTableCell[][];
    }
  | { type: "horizontal-rule" };
