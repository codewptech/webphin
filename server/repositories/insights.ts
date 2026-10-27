import type { Prisma } from "@prisma/client";

import prisma from "~~/server/utils/prisma";

const categoryReferenceSelect = {
  public_id: true,
  name: true,
  slug_text: true,
} satisfies Prisma.InsightCategorySelect;

const categorySummarySelect = {
  ...categoryReferenceSelect,
  description: true,
} satisfies Prisma.InsightCategorySelect;

const categoryDetailSelect = {
  ...categorySummarySelect,
  seo_title: true,
  seo_description: true,
} satisfies Prisma.InsightCategorySelect;

const insightPreviewSelect = {
  public_id: true,
  title: true,
  slug_text: true,
  summary: true,
  published_at: true,
  category: { select: categoryReferenceSelect },
} satisfies Prisma.InsightSelect;

const insightDetailSelect = {
  ...insightPreviewSelect,
  body_markdown: true,
  hero_url: true,
  seo_title: true,
  seo_description: true,
  // Required only for the server-side related-article lookup.
  category_id: true,
} satisfies Prisma.InsightSelect;

function publishedCategoryWhere(now: Date): Prisma.InsightCategoryWhereInput {
  return { published_at: { not: null, lte: now } };
}

function publishedInsightWhere(now: Date): Prisma.InsightWhereInput {
  return {
    published_at: { not: null, lte: now },
    category: { is: publishedCategoryWhere(now) },
  };
}

// These are the only public-ID lookups. Their results stay server-internal.
export function findPublishedInsightIdentityByPublicId(
  publicId: string,
  now: Date,
) {
  return prisma.insight.findFirst({
    where: { ...publishedInsightWhere(now), public_id: publicId },
    select: { id: true, slug_text: true },
  });
}

export function findPublishedInsightCategoryIdentityByPublicId(
  publicId: string,
  now: Date,
) {
  return prisma.insightCategory.findFirst({
    where: { ...publishedCategoryWhere(now), public_id: publicId },
    select: { id: true, slug_text: true },
  });
}

export function findHomeInsights(now: Date) {
  return prisma.insight.findMany({
    where: { ...publishedInsightWhere(now), home_order: { not: null } },
    orderBy: { home_order: "asc" },
    select: insightPreviewSelect,
  });
}

export function findFeaturedInsights(now: Date) {
  return prisma.insight.findMany({
    where: { ...publishedInsightWhere(now), featured_order: { not: null } },
    orderBy: { featured_order: "asc" },
    select: insightPreviewSelect,
  });
}

export function findPublishedInsightCategories(now: Date) {
  return prisma.insightCategory.findMany({
    where: publishedCategoryWhere(now),
    orderBy: { name: "asc" },
    select: categorySummarySelect,
  });
}

export function findPublishedInsights(now: Date) {
  return prisma.insight.findMany({
    where: publishedInsightWhere(now),
    orderBy: { published_at: "desc" },
    select: insightPreviewSelect,
  });
}

export function findPublishedInsightCategoryById(id: string, now: Date) {
  return prisma.insightCategory.findFirst({
    where: { ...publishedCategoryWhere(now), id },
    select: categoryDetailSelect,
  });
}

export function findPublishedInsightsByCategoryId(
  categoryId: string,
  now: Date,
) {
  return prisma.insight.findMany({
    where: { ...publishedInsightWhere(now), category_id: categoryId },
    orderBy: { published_at: "desc" },
    select: insightPreviewSelect,
  });
}

export function findPublishedInsightById(id: string, now: Date) {
  return prisma.insight.findFirst({
    where: { ...publishedInsightWhere(now), id },
    select: insightDetailSelect,
  });
}

export function findRelatedInsights(
  categoryId: string,
  insightId: string,
  now: Date,
) {
  return prisma.insight.findMany({
    where: {
      ...publishedInsightWhere(now),
      category_id: categoryId,
      id: { not: insightId },
    },
    orderBy: { published_at: "desc" },
    select: insightPreviewSelect,
  });
}
