import { createError, defineEventHandler } from "h3";

import {
  getInsightCategoryPage,
  resolvePublishedInsightCategoryIdentity,
} from "~~/server/services/insights";
import { readInsightRouteLocator } from "~~/server/utils/insight-route-locator";
import type {
  InsightCategoryPageDto,
  InsightRouteLoadResult,
} from "~~/shared/types/insights";
import {
  buildInsightCategoryPath,
  buildInsightPublicLocator,
} from "~~/shared/utils/insight-routes";

export default defineEventHandler(
  async (event): Promise<InsightRouteLoadResult<InsightCategoryPageDto>> => {
    const { requestedLocator, locator } = readInsightRouteLocator(event);
    const identity = await resolvePublishedInsightCategoryIdentity(
      locator.public_id,
    );

    if (identity === null) {
      throw createError({ statusCode: 404, statusMessage: "Not Found" });
    }

    const canonical = {
      public_id: locator.public_id,
      slug_text: identity.slug_text,
    };

    if (requestedLocator !== buildInsightPublicLocator(canonical)) {
      return {
        kind: "redirect",
        location: buildInsightCategoryPath(canonical),
      };
    }

    const data = await getInsightCategoryPage(identity.id);

    if (data === null) {
      throw createError({ statusCode: 404, statusMessage: "Not Found" });
    }

    return { kind: "data", data };
  },
);
