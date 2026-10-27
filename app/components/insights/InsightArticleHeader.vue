<script setup lang="ts">
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import { formatInsightDate } from "~~/app/utils/insight-date";
import type { InsightArticleDto } from "~~/shared/types/insights";

defineProps<{ article: InsightArticleDto }>();
</script>

<template>
  <header class="insight-header">
    <SectionEyebrow class="insight-header__category">{{
      article.category.name
    }}</SectionEyebrow>
    <h1>{{ article.title }}</h1>
    <p class="insight-header__summary">{{ article.summary }}</p>
    <time :datetime="article.published_at">
      {{ formatInsightDate(article.published_at) }}
    </time>
  </header>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;

.insight-header {
  max-width: 800px;
  margin-block-end: clamp(3rem, 7vw, 7rem);

  &__category {
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

  &__summary {
    max-width: 680px;
    margin-top: 1.4rem;
    color: $color-text-secondary;
    font-size: clamp(0.98rem, 1.3vw, 1.08rem);
    line-height: 1.78;
    white-space: pre-line;
  }

  time {
    display: inline-flex;
    width: fit-content;
    margin-top: 1.75rem;
    padding-top: 1rem;
    color: $color-text-muted;
    font-size: 0.82rem;
    font-weight: 650;
    line-height: 1.5;
    border-top: 1px solid $color-border;
  }
}

@media (max-width: 575px) {
  .insight-header h1 {
    font-size: clamp(2.75rem, 13vw, 4rem);
  }
}
</style>
