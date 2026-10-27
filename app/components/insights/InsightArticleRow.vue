<script setup lang="ts">
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import BaseButton from "~~/app/components/ui/BaseButton.vue";

import { formatInsightDate } from "~~/app/utils/insight-date";
import type { InsightPreviewDto } from "~~/shared/types/insights";
import { buildInsightArticlePath } from "~~/shared/utils/insight-routes";

withDefaults(
  defineProps<{ article: InsightPreviewDto; showCategory?: boolean }>(),
  { showCategory: true },
);
</script>

<template>
  <article class="insight-row">
    <SectionEyebrow v-if="showCategory" class="insight-row__category">
      {{ article.category.name }}
    </SectionEyebrow>
    <h3 class="insight-row__title">
      <BaseButton
        :to="buildInsightArticlePath(article)"
        variant="text"
        class="insight-title-link"
      >
        {{ article.title }}
      </BaseButton>
    </h3>
    <p class="insight-row__summary">{{ article.summary }}</p>
    <time :datetime="article.published_at">{{
      formatInsightDate(article.published_at)
    }}</time>
  </article>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
.insight-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;
  min-width: 0;
  padding: 1rem 0.25rem;
  border-block-start: 1px solid $color-border;
  &__category {
    display: -webkit-box;
    flex-shrink: 0;
    height: 1.25rem;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow-wrap: anywhere;
  }
  &__title {
    min-height: 3.8rem;
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    line-height: 1.3;
    letter-spacing: -0.02em;
  }
  &__title .insight-title-link :deep(.base-button__content) {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  &__summary {
    display: -webkit-box;
    flex-shrink: 0;
    height: 3.4rem;
    max-width: 700px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: $color-text-secondary;
    font-size: clamp(0.9rem, 1.2vw, 0.98rem);
    line-height: 1.72;
    white-space: pre-line;
    overflow-wrap: anywhere;
  }

  time {
    color: $color-text-muted;
    font-size: 0.82rem;
    font-weight: 650;
    line-height: 1.5;
  }
}

.insight-title-link {
  max-width: 100%;
  font: inherit;
  letter-spacing: inherit;
  text-align: left;

  :deep(.base-button__content) {
    min-width: 0;
    overflow-wrap: anywhere;
  }
}
</style>
