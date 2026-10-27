import { createError, defineEventHandler } from "h3";

import {
  getInsightArticlePage,
  resolvePublishedInsightIdentity,
} from "~~/server/services/insights";
import { readInsightRouteLocator } from "~~/server/utils/insight-route-locator";
import type {
  InsightArticlePageDto,
  InsightRouteLoadResult,
} from "~~/shared/types/insights";
import {
  buildInsightArticlePath,
  buildInsightPublicLocator,
} from "~~/shared/utils/insight-routes";

export default defineEventHandler(
  async (event): Promise<InsightRouteLoadResult<InsightArticlePageDto>> => {
    const { requestedLocator, locator } = readInsightRouteLocator(event);
    const identity = await resolvePublishedInsightIdentity(locator.public_id);

    if (identity === null) {
      throw createError({ statusCode: 404, statusMessage: "Not Found" });
    }

    const canonical = {
      public_id: locator.public_id,
      slug_text: identity.slug_text,
    };

    if (requestedLocator !== buildInsightPublicLocator(canonical)) {
      return { kind: "redirect", location: buildInsightArticlePath(canonical) };
    }

    const data = await getInsightArticlePage(identity.id);

    if (data === null) {
      throw createError({ statusCode: 404, statusMessage: "Not Found" });
    }

    return { kind: "data", data };
  },
);
