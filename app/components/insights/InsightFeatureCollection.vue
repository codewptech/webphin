<script setup lang="ts">
import DataStateMessage from "~~/app/components/ui/DataStateMessage.vue";
import SectionHeading from "~~/app/components/ui/SectionHeading.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import BaseButton from "~~/app/components/ui/BaseButton.vue";

import { formatInsightDate } from "~~/app/utils/insight-date";
import type { InsightPreviewDto } from "~~/shared/types/insights";
import { buildInsightArticlePath } from "~~/shared/utils/insight-routes";

defineProps<{ articles: InsightPreviewDto[] }>();
</script>

<template>
  <section class="insight-featured" aria-labelledby="featured-insights">
    <SectionHeading id="featured-insights" title="Featured Insights" />
    <div v-if="articles.length" class="insight-featured__grid">
      <article v-for="article in articles" :key="article.public_id">
        <SectionEyebrow class="insight-featured__category">{{
          article.category.name
        }}</SectionEyebrow>
        <h3>
          <BaseButton
            :to="buildInsightArticlePath(article)"
            variant="text"
            class="insight-title-link"
          >
            {{ article.title }}
          </BaseButton>
        </h3>
        <p class="insight-featured__summary">{{ article.summary }}</p>
        <time :datetime="article.published_at">{{
          formatInsightDate(article.published_at)
        }}</time>
      </article>
    </div>
    <DataStateMessage
      v-if="!articles.length"
      kind="empty"
      message="No featured insights are available yet."
    />
  </section>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
.insight-featured {
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 26rem), 1fr));
    gap: 2rem;
    margin-block-start: clamp(2.75rem, 6vw, 5rem);
  }
  article {
    min-width: 0;
    padding-block: clamp(1.5rem, 3vw, 2.2rem);
    border-block-start: 1px solid $color-border;
    &:first-child {
      grid-column: 1 / -1;
      h3 {
        max-width: 760px;
        font-size: clamp(1.55rem, 2.6vw, 2.25rem);
        font-weight: 680;
        line-height: 1.2;
        letter-spacing: -0.032em;
      }
      .insight-featured__summary {
        max-width: 700px;
      }
    }
  }
  &__category {
    margin-block-end: 0.75rem;
    overflow-wrap: anywhere;
  }
  h3 {
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    line-height: 1.3;
    letter-spacing: -0.02em;
    overflow-wrap: anywhere;
  }
  &__summary {
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
