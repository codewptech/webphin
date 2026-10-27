import type { InsightPublicLocator } from "~~/shared/types/insights";

const publicUuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/** Parse a decoded route segment without trimming or rewriting its slug. */
export function parseInsightPublicLocator(
  locator: unknown,
): InsightPublicLocator | null {
  if (typeof locator !== "string" || locator[36] !== "-") {
    return null;
  }

  const publicId = locator.slice(0, 36);
  const slugText = locator.slice(37);

  if (!publicUuidPattern.test(publicId) || slugText.length === 0) {
    return null;
  }

  return { public_id: publicId.toLowerCase(), slug_text: slugText };
}

export function buildInsightPublicLocator(
  locator: InsightPublicLocator,
): string {
  return `${locator.public_id.toLowerCase()}-${locator.slug_text}`;
}

export function buildInsightArticlePath(locator: InsightPublicLocator): string {
  return `/insights/${encodeURIComponent(buildInsightPublicLocator(locator))}`;
}

export function buildInsightCategoryPath(
  locator: InsightPublicLocator,
): string {
  return `/insights/category/${encodeURIComponent(buildInsightPublicLocator(locator))}`;
}
