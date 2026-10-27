import { createError, getRequestURL, getRouterParam } from "h3";
import type { H3Event } from "h3";

import { parseInsightPublicLocator } from "~~/shared/utils/insight-routes";

export function readInsightRouteLocator(event: H3Event) {
  if (typeof getRouterParam(event, "locator") !== "string") {
    throw createError({ statusCode: 404, statusMessage: "Not Found" });
  }

  // H3 decodes the path before matching, which can truncate slugs containing
  // encoded question marks. Read the matched segment from the original URL.
  const pathname = getRequestURL(event).pathname;
  let requestedLocator: string;

  try {
    requestedLocator = decodeURIComponent(
      pathname.slice(pathname.lastIndexOf("/") + 1),
    );
  } catch {
    throw createError({ statusCode: 404, statusMessage: "Not Found" });
  }

  const locator = parseInsightPublicLocator(requestedLocator);

  if (locator === null) {
    throw createError({ statusCode: 404, statusMessage: "Not Found" });
  }

  return { requestedLocator, locator };
}
