import {
  findFeaturedInsights,
  findHomeInsights,
  findPublishedInsightById,
  findPublishedInsightCategories,
  findPublishedInsightCategoryById,
  findPublishedInsightCategoryIdentityByPublicId,
  findPublishedInsightIdentityByPublicId,
  findPublishedInsights,
  findPublishedInsightsByCategoryId,
  findRelatedInsights,
} from "~~/server/repositories/insights";
import type {
  InsightArticleDto,
  InsightArticlePageDto,
  InsightCategoryDto,
  InsightCategoryPageDto,
  InsightCategoryReferenceDto,
  InsightCategorySummaryDto,
  InsightPreviewDto,
  InsightsHomeDto,
  InsightsHubDto,
} from "~~/shared/types/insights";

function mapCategoryReference(
  category: Awaited<ReturnType<typeof findHomeInsights>>[number]["category"],
): InsightCategoryReferenceDto {
  return {
    public_id: category.public_id,
    name: category.name,
    slug_text: category.slug_text,
  };
}

function mapCategorySummary(
  category: Awaited<ReturnType<typeof findPublishedInsightCategories>>[number],
): InsightCategorySummaryDto {
  return {
    ...mapCategoryReference(category),
    description: category.description,
  };
}

function mapCategoryDetail(
  category: NonNullable<
    Awaited<ReturnType<typeof findPublishedInsightCategoryById>>
  >,
): InsightCategoryDto {
  return {
    ...mapCategorySummary(category),
    seo_title: category.seo_title,
    seo_description: category.seo_description,
  };
}

function publishedAtToIso(publishedAt: Date | null): string {
  if (publishedAt === null) {
    throw new Error("Published Insight is missing published_at.");
  }

  return publishedAt.toISOString();
}

function mapInsightPreview(
  insight: Awaited<ReturnType<typeof findHomeInsights>>[number],
): InsightPreviewDto {
  return {
    public_id: insight.public_id,
    title: insight.title,
    slug_text: insight.slug_text,
    summary: insight.summary,
    category: mapCategoryReference(insight.category),
    published_at: publishedAtToIso(insight.published_at),
  };
}

function mapInsightArticle(
  insight: NonNullable<Awaited<ReturnType<typeof findPublishedInsightById>>>,
): InsightArticleDto {
  return {
    ...mapInsightPreview(insight),
    body_markdown: insight.body_markdown,
    hero_url: insight.hero_url,
    seo_title: insight.seo_title,
    seo_description: insight.seo_description,
  };
}

// Only boundary resolvers accept public IDs; their results never become DTOs.
export function resolvePublishedInsightIdentity(publicId: string) {
  const now = new Date();
  return findPublishedInsightIdentityByPublicId(publicId, now);
}

export function resolvePublishedInsightCategoryIdentity(publicId: string) {
  const now = new Date();
  return findPublishedInsightCategoryIdentityByPublicId(publicId, now);
}

export async function getHomeInsights(): Promise<InsightsHomeDto> {
  const now = new Date();
  const articles = await findHomeInsights(now);

  return { articles: articles.map(mapInsightPreview) };
}

export async function getInsightsHub(): Promise<InsightsHubDto> {
  const now = new Date();
  const [featured, categories, articles] = await Promise.all([
    findFeaturedInsights(now),
    findPublishedInsightCategories(now),
    findPublishedInsights(now),
  ]);

  return {
    featured: featured.map(mapInsightPreview),
    categories: categories.map(mapCategorySummary),
    articles: articles.map(mapInsightPreview),
  };
}

export async function getInsightCategoryPage(
  categoryId: string,
): Promise<InsightCategoryPageDto | null> {
  const now = new Date();
  const category = await findPublishedInsightCategoryById(categoryId, now);

  if (category === null) {
    return null;
  }

  const articles = await findPublishedInsightsByCategoryId(categoryId, now);

  return {
    category: mapCategoryDetail(category),
    articles: articles.map(mapInsightPreview),
  };
}

export async function getInsightArticlePage(
  insightId: string,
): Promise<InsightArticlePageDto | null> {
  const now = new Date();
  const insight = await findPublishedInsightById(insightId, now);

  if (insight === null) {
    return null;
  }

  const relatedArticles = await findRelatedInsights(
    insight.category_id,
    insightId,
    now,
  );

  return {
    article: mapInsightArticle(insight),
    related_articles: relatedArticles.map(mapInsightPreview),
  };
}
