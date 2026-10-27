<script setup lang="ts">
import DataStateMessage from "~~/app/components/ui/DataStateMessage.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import SectionHeading from "~~/app/components/ui/SectionHeading.vue";
import { NuxtLink } from "#components";
import { useHead, useRequestURL, useSeoMeta } from "#imports";

import HomeProjectCTA from "~~/app/components/home/HomeProjectCTA.vue";
import InsightArticleList from "~~/app/components/insights/InsightArticleList.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";
import { useInsightCategoryRouteData } from "~~/app/composables/useInsightCategoryRouteData";
import { buildInsightCategoryPath } from "~~/shared/utils/insight-routes";

const { data, status, error, refresh } = await useInsightCategoryRouteData();
const origin = useRequestURL().origin;

useSeoMeta({
  title: () =>
    data.value
      ? (data.value.category.seo_title ?? data.value.category.name)
      : undefined,
  description: () =>
    data.value
      ? (data.value.category.seo_description ?? data.value.category.description)
      : undefined,
  ogTitle: () =>
    data.value
      ? (data.value.category.seo_title ?? data.value.category.name)
      : undefined,
  ogDescription: () =>
    data.value
      ? (data.value.category.seo_description ?? data.value.category.description)
      : undefined,
  ogType: "website",
});
useHead(() => ({
  link: data.value
    ? [
        {
          rel: "canonical",
          href: new URL(buildInsightCategoryPath(data.value.category), origin)
            .href,
        },
      ]
    : [],
}));
</script>

<template>
  <div class="insight-category-page">
    <SectionWrapper spacing="lg">
      <template v-if="data">
        <nav class="insight-category-page__breadcrumb" aria-label="Breadcrumb">
          <ol role="list">
            <li><NuxtLink to="/insights">Insights</NuxtLink></li>
            <li>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{{ data.category.name }}</span>
            </li>
          </ol>
        </nav>

        <header class="insight-category-page__intro">
          <SectionEyebrow class="insight-category-page__eyebrow"
            >Insights</SectionEyebrow
          >
          <h1>{{ data.category.name }}</h1>
          <p>{{ data.category.description }}</p>
        </header>

        <section
          aria-labelledby="category-articles"
          class="insight-category-page__articles"
        >
          <SectionHeading id="category-articles" title="Articles" />
          <InsightArticleList
            :articles="data.articles"
            :show-category="false"
            :label="`Articles in ${data.category.name}`"
          />
          <DataStateMessage
            v-if="!data.articles.length"
            kind="empty"
            message="No insights have been published in this category yet."
          />
        </section>
      </template>
      <DataStateMessage
        v-else-if="status === 'pending'"
        kind="pending"
        message="Loading articles…"
      />
      <DataStateMessage
        v-else-if="error && error.statusCode !== 404"
        kind="error"
        message="We couldn’t load this category right now."
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
.insight-category-page {
  &__breadcrumb {
    margin-bottom: 1.5rem;
    font-size: 0.66rem;
    font-weight: 650;
    line-height: 1.4;

    ol {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
      list-style: none;
    }

    li {
      min-width: 0;
      overflow-wrap: anywhere;
    }
    a {
      color: $color-text-muted;
      transition: color $transition-fast;
    }
    a:hover {
      color: $color-brand-red;
    }
    [aria-hidden] {
      color: $color-border-strong;
    }
    [aria-current] {
      color: $color-text-secondary;
    }

    @media (prefers-reduced-motion: reduce) {
      a {
        transition: none;
      }
    }

    li > span[aria-hidden] {
      margin-inline-end: 0.5rem;
    }
  }
  &__intro {
    max-width: 800px;
  }
  &__eyebrow {
    margin-bottom: 1.2rem;
  }

  h1 {
    color: $color-black;
    font-family: $font-heading;
    font-size: clamp(3rem, 5.8vw, 5.5rem);
    font-weight: 700;
    line-height: 0.98;
    letter-spacing: -0.058em;
    overflow-wrap: anywhere;
  }

  &__intro p {
    max-width: 680px;
    margin-top: 1.4rem;
    color: $color-text-secondary;
    font-size: clamp(0.98rem, 1.3vw, 1.08rem);
    line-height: 1.78;
    white-space: pre-line;
    overflow-wrap: anywhere;
  }
  &__articles {
    margin-block-start: $section-spacing-lg;
  }
}
@media (max-width: 575px) {
  .insight-category-page h1 {
    font-size: clamp(2.75rem, 13vw, 4rem);
  }
}
</style>
