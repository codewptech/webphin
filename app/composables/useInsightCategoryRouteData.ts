import { computed, watch } from "vue";
import {
  createError,
  navigateTo,
  showError,
  useFetch,
  useNuxtApp,
  useRoute,
} from "#imports";

import type {
  InsightCategoryPageDto,
  InsightRouteLoadResult,
} from "~~/shared/types/insights";

/** SSR-aware public route data plus Nuxt request state and a real refresh action. */
export async function useInsightCategoryRouteData() {
  const route = useRoute();
  const nuxtApp = useNuxtApp();
  const locator = route.params.locator;

  if (typeof locator !== "string") {
    throw createError({ statusCode: 404, statusMessage: "Not Found" });
  }

  const request = useFetch<InsightRouteLoadResult<InsightCategoryPageDto>>(
    `/api/insights/categories/${encodeURIComponent(locator)}`,
    { lazy: true },
  );

  const data = computed(() =>
    request.data.value?.kind === "data" ? request.data.value.data : null,
  );
  const error = computed(
    () =>
      request.error.value ??
      (request.status.value === "success" && !request.data.value
        ? createError({
            statusCode: 500,
            statusMessage: "Invalid Insights response",
          })
        : undefined),
  );

  function navigateCanonical(location: string) {
    return nuxtApp.runWithContext(() =>
      navigateTo(
        { path: location, query: route.query, hash: route.hash },
        { redirectCode: 301, replace: true },
      ),
    );
  }

  // Register in setup scope, before awaiting, so navigation disposes this watcher.
  if (import.meta.client) {
    watch([request.data, request.error], ([result, requestError]) => {
      if (requestError?.statusCode === 404) {
        nuxtApp.runWithContext(() =>
          showError({ statusCode: 404, statusMessage: "Not Found" }),
        );
      } else if (result?.kind === "redirect") {
        void navigateCanonical(result.location);
      }
    });
  }

  await request;

  if (request.error.value?.statusCode === 404) {
    throw createError({ statusCode: 404, statusMessage: "Not Found" });
  }

  if (request.data.value?.kind === "redirect") {
    await navigateCanonical(request.data.value.location);
  }

  return { data, status: request.status, error, refresh: request.refresh };
}
