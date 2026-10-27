<script setup lang="ts">
import InsightArticleRow from "~~/app/components/insights/InsightArticleRow.vue";
import type { InsightPreviewDto } from "~~/shared/types/insights";

withDefaults(
  defineProps<{
    articles: InsightPreviewDto[];
    label: string;
    showCategory?: boolean;
  }>(),
  { showCategory: true },
);
</script>

<template>
  <div
    v-if="articles.length"
    class="insight-list"
    role="region"
    :aria-label="label"
    :tabindex="articles.length > 6 ? 0 : undefined"
  >
    <ul role="list">
      <li v-for="article in articles" :key="article.public_id">
        <InsightArticleRow :article="article" :show-category="showCategory" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;

.insight-list {
  // Each border and padding belongs to its row, so the viewport ends at row six.
  --insight-row-height: 14rem;

  margin-block-start: clamp(2.75rem, 6vw, 5rem);
  max-block-size: calc(6 * var(--insight-row-height));
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: $color-border-strong transparent;
  scroll-snap-type: y mandatory;

  ul {
    display: grid;
    grid-auto-rows: var(--insight-row-height);
    list-style: none;
  }

  li {
    min-width: 0;
    scroll-snap-align: start;
  }
}
</style>
