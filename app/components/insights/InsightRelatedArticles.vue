<script setup lang="ts">
import SectionHeading from "~~/app/components/ui/SectionHeading.vue";
import BaseButton from "~~/app/components/ui/BaseButton.vue";
import { useId } from "vue";

import { formatInsightDate } from "~~/app/utils/insight-date";
import type { InsightPreviewDto } from "~~/shared/types/insights";
import { buildInsightArticlePath } from "~~/shared/utils/insight-routes";

defineProps<{ articles: InsightPreviewDto[] }>();
const titleId = `_insight-related-${useId()}`;
</script>

<template>
  <section
    v-if="articles.length"
    class="insight-related"
    :aria-labelledby="titleId"
  >
    <SectionHeading :id="titleId" title="More from this category" />
    <ul role="list">
      <li v-for="article in articles" :key="article.public_id">
        <h3>
          <BaseButton
            :to="buildInsightArticlePath(article)"
            variant="text"
            class="insight-title-link"
          >
            {{ article.title }}
          </BaseButton>
        </h3>
        <p>{{ article.summary }}</p>
        <time :datetime="article.published_at">{{
          formatInsightDate(article.published_at)
        }}</time>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
.insight-related {
  margin-block-start: $section-spacing-sm;
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
    margin-block: 0.95rem;
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
