/**
 * Public Insights contracts. Reusable project types belong in shared/types;
 * app/config is reserved for configuration and content.
 *
 * Consumers use explicit type imports from "~~/shared/types/insights".
 * public_id is the public UUIDv4; public_id and slug_text stay separate fields.
 * Only published content crosses the public boundary; dates are ISO 8601 strings.
 */
export interface InsightCategoryReferenceDto {
  public_id: string;
  name: string;
  slug_text: string;
}

export interface InsightCategorySummaryDto extends InsightCategoryReferenceDto {
  description: string;
}

export interface InsightCategoryDto extends InsightCategorySummaryDto {
  seo_title: string | null;
  seo_description: string | null;
}

/** Shared by every article list; summary is the stored canonical summary. */
export interface InsightPreviewDto {
  public_id: string;
  title: string;
  slug_text: string;
  summary: string;
  category: InsightCategoryReferenceDto;
  published_at: string;
}

/** Article detail adds Markdown, optional imagery, and unresolved SEO values. */
export interface InsightArticleDto extends InsightPreviewDto {
  body_markdown: string;
  hero_url: string | null;
  seo_title: string | null;
  seo_description: string | null;
}

/** Articles selected and ordered by home_order; ordering stays server-side. */
export interface InsightsHomeDto {
  articles: InsightPreviewDto[];
}

export interface InsightsHubDto {
  /** Articles selected and ordered by featured_order. */
  featured: InsightPreviewDto[];
  categories: InsightCategorySummaryDto[];
  articles: InsightPreviewDto[];
}

export interface InsightCategoryPageDto {
  category: InsightCategoryDto;
  /** Published articles in chronological order; empty for a category with none. */
  articles: InsightPreviewDto[];
}

export interface InsightArticlePageDto {
  article: InsightArticleDto;
  related_articles: InsightPreviewDto[];
}

/** Public route identity; it never contains the private database primary key. */
export interface InsightPublicLocator {
  public_id: string;
  slug_text: string;
}

export type InsightRouteLoadResult<T> =
  { kind: "data"; data: T } | { kind: "redirect"; location: string };
