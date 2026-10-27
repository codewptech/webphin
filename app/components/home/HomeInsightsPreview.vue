<script setup lang="ts">
import DataStateMessage from "~~/app/components/ui/DataStateMessage.vue";
import { useFetch } from "#imports";

import BaseButton from "~~/app/components/ui/BaseButton.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";
import { formatInsightDate } from "~~/app/utils/insight-date";
import type { InsightsHomeDto } from "~~/shared/types/insights";
import { buildInsightArticlePath } from "~~/shared/utils/insight-routes";

const { data, error, status, refresh } = await useFetch<InsightsHomeDto>(
  "/api/insights/home",
  { lazy: true },
);
</script>

<template>
  <SectionWrapper spacing="lg">
    <section class="home-insights" aria-labelledby="home-insights-title">
      <header class="home-insights__intro">
        <SectionEyebrow>Webphin Insights</SectionEyebrow>
        <h2 id="home-insights-title">
          Ideas for clearer technology decisions.
        </h2>
        <p>
          Practical perspectives on websites, software, infrastructure,
          automation, AI and digital products — for the decisions businesses and
          teams make.
        </p>
      </header>

      <DataStateMessage
        v-if="!data && status === 'pending'"
        kind="pending"
        message="Loading Insights…"
      />
      <DataStateMessage
        v-else-if="
          !data && (error || status === 'error' || status === 'success')
        "
        kind="error"
        message="We couldn’t load Insights right now."
        detail="Please try again."
        retryable
        @retry="refresh()"
      />
      <DataStateMessage
        v-else-if="data && !data.articles.length"
        kind="empty"
        message="No insights are available here yet."
      />

      <div v-if="data && data.articles.length" class="home-insights__articles">
        <article v-for="article in data.articles" :key="article.public_id">
          <SectionEyebrow class="home-insights__category">{{
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
          <p class="home-insights__summary">{{ article.summary }}</p>
          <time :datetime="article.published_at">{{
            formatInsightDate(article.published_at)
          }}</time>
        </article>
      </div>

      <div class="home-insights__action">
        <BaseButton to="/insights" variant="text">Explore Insights</BaseButton>
      </div>
    </section>
  </SectionWrapper>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
.home-insights {
  &__intro {
    max-width: 760px;
    h2 {
      margin-block: 1rem 1.25rem;
    }
    p {
      max-width: 680px;
      font-size: clamp(1rem, 1.8vw, 1.15rem);
      line-height: 1.7;
    }
  }
  &__action {
    margin-block-start: 1.75rem;
  }

  &__articles {
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
      .home-insights__summary {
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
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
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
