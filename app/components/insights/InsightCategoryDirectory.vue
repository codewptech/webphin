<script setup lang="ts">
import DataStateMessage from "~~/app/components/ui/DataStateMessage.vue";
import SectionHeading from "~~/app/components/ui/SectionHeading.vue";
import BaseButton from "~~/app/components/ui/BaseButton.vue";

import type { InsightCategorySummaryDto } from "~~/shared/types/insights";
import { buildInsightCategoryPath } from "~~/shared/utils/insight-routes";

defineProps<{ categories: InsightCategorySummaryDto[] }>();
</script>

<template>
  <section class="insight-directory" aria-labelledby="insight-categories">
    <SectionHeading id="insight-categories" title="Explore by Category" />
    <ul v-if="categories.length" role="list">
      <li v-for="category in categories" :key="category.public_id">
        <h3>
          <BaseButton
            :to="buildInsightCategoryPath(category)"
            variant="text"
            class="insight-title-link"
          >
            {{ category.name }}
          </BaseButton>
        </h3>
        <p>{{ category.description }}</p>
      </li>
    </ul>
    <DataStateMessage
      v-if="!categories.length"
      kind="empty"
      message="No insight categories are available yet."
    />
  </section>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
.insight-directory {
  ul {
    margin-block-start: clamp(2.75rem, 6vw, 5rem);
    list-style: none;
  }
  li {
    padding-block: clamp(1.5rem, 3vw, 2.2rem);
    border-block-start: 1px solid $color-border;
  }
  h3 {
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    line-height: 1.3;
    letter-spacing: -0.02em;
    overflow-wrap: anywhere;
  }
  p {
    max-width: 700px;
    margin-block-start: 0.95rem;
    color: $color-text-secondary;
    font-size: clamp(0.9rem, 1.2vw, 0.98rem);
    line-height: 1.72;
    white-space: pre-line;
    overflow-wrap: anywhere;
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
