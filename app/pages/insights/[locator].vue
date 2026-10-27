<script setup lang="ts">
import { computed } from "vue";
import DataStateMessage from "~~/app/components/ui/DataStateMessage.vue";
import { useHead, useRequestURL, useSeoMeta } from "#imports";

import HomeProjectCTA from "~~/app/components/home/HomeProjectCTA.vue";
import InsightArticleHeader from "~~/app/components/insights/InsightArticleHeader.vue";
import InsightBreadcrumbs from "~~/app/components/insights/InsightBreadcrumbs.vue";
import InsightMarkdown from "~~/app/components/insights/InsightMarkdown.vue";
import InsightRelatedArticles from "~~/app/components/insights/InsightRelatedArticles.vue";
import InsightTableOfContents from "~~/app/components/insights/InsightTableOfContents.vue";
import BaseButton from "~~/app/components/ui/BaseButton.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";
import { useInsightArticleRouteData } from "~~/app/composables/useInsightArticleRouteData";
import { parseInsightMarkdown } from "~~/app/utils/insight-markdown";
import { buildInsightArticlePath } from "~~/shared/utils/insight-routes";

const { data, status, error, refresh } = await useInsightArticleRouteData();
const bodyMarkdown = computed(() => data.value?.article.body_markdown);
const document = computed(() =>
  bodyMarkdown.value === undefined
    ? null
    : parseInsightMarkdown(bodyMarkdown.value),
);
const origin = useRequestURL().origin;

useSeoMeta({
  title: () =>
    data.value
      ? (data.value.article.seo_title ?? data.value.article.title)
      : undefined,
  description: () =>
    data.value
      ? (data.value.article.seo_description ?? data.value.article.summary)
      : undefined,
  ogTitle: () =>
    data.value
      ? (data.value.article.seo_title ?? data.value.article.title)
      : undefined,
  ogDescription: () =>
    data.value
      ? (data.value.article.seo_description ?? data.value.article.summary)
      : undefined,
  ogType: "article",
  ogImage: () => data.value?.article.hero_url ?? undefined,
});
useHead(() => ({
  link: data.value
    ? [
        {
          rel: "canonical",
          href: new URL(buildInsightArticlePath(data.value.article), origin)
            .href,
        },
      ]
    : [],
}));
</script>

<template>
  <div class="insight-page">
    <SectionWrapper spacing="lg">
      <article v-if="data && document" class="insight-article">
        <InsightBreadcrumbs :article="data.article" />
        <InsightArticleHeader :article="data.article" />

        <img
          v-if="data.article.hero_url !== null"
          class="insight-article__hero"
          :src="data.article.hero_url"
          alt=""
          decoding="async"
        />

        <div
          class="insight-article__reading"
          :class="{ 'insight-article__reading--with-toc': document.toc.length }"
        >
          <div class="insight-article__body">
            <InsightMarkdown :document="document" />
          </div>
          <InsightTableOfContents
            v-if="document.toc.length"
            class="insight-article__toc"
            :items="document.toc"
          />
        </div>

        <div class="insight-article__afterword">
          <InsightRelatedArticles :articles="data.related_articles" />
          <div class="insight-article__explore">
            <BaseButton to="/insights" variant="text"
              >Explore all Insights</BaseButton
            >
          </div>
        </div>
      </article>
      <DataStateMessage
        v-else-if="status === 'pending'"
        kind="pending"
        message="Loading article…"
      />
      <DataStateMessage
        v-else-if="error && error.statusCode !== 404"
        kind="error"
        message="We couldn’t load this Insight right now."
        detail="Please try again."
        retryable
        @retry="refresh()"
      />
    </SectionWrapper>
    <HomeProjectCTA />
  </div>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
@use "~~/app/assets/scss/abstracts/mixins" as *;

.insight-article {
  min-width: 0;

  &__hero {
    display: block;
    max-width: 100%;
    height: auto;
    margin-block: 0 clamp(3rem, 7vw, 7rem);
    border-radius: $radius-md;
  }

  &__body,
  &__afterword {
    width: 100%;
    max-width: 46rem;
    min-width: 0;
  }

  &__reading {
    max-width: 46rem;

    @include md {
      display: grid;
      gap: clamp(3rem, 7vw, 7rem);
    }

    @include xl {
      &--with-toc {
        grid-template-columns: minmax(0, 1fr) minmax(0, 46rem);
        grid-template-areas: "toc body";
        align-items: start;
        gap: clamp(3rem, 7vw, 7rem);
        max-width: none;

        .insight-article__body {
          grid-area: body;
        }
        .insight-article__toc {
          grid-area: toc;
        }
      }
    }
  }

  @include xl {
    &__reading--with-toc ~ .insight-article__afterword {
      margin-inline-start: auto;
    }
  }

  &__body :deep(.insight-markdown h2),
  &__body :deep(.insight-markdown h3) {
    scroll-margin-block-start: calc(76px + 2rem);
  }

  &__explore {
    margin-block-start: 2.5rem;
    padding-block-start: 1.5rem;
    border-block-start: 1px solid $color-border;
  }
}
</style>
