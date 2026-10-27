<script setup lang="ts">
import { NuxtLink } from "#components";

import type { InsightArticleDto } from "~~/shared/types/insights";
import { buildInsightCategoryPath } from "~~/shared/utils/insight-routes";

defineProps<{ article: InsightArticleDto }>();
</script>

<template>
  <nav class="insight-breadcrumbs" aria-label="Breadcrumb">
    <ol role="list">
      <li><NuxtLink to="/insights">Insights</NuxtLink></li>
      <li aria-hidden="true">/</li>
      <li>
        <NuxtLink :to="buildInsightCategoryPath(article.category)">
          {{ article.category.name }}
        </NuxtLink>
      </li>
      <li aria-hidden="true">/</li>
      <li aria-current="page">{{ article.title }}</li>
    </ol>
  </nav>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
.insight-breadcrumbs {
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
}
</style>
