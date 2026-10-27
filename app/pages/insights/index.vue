<script setup lang="ts">
import DataStateMessage from "~~/app/components/ui/DataStateMessage.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import SectionHeading from "~~/app/components/ui/SectionHeading.vue";
import { useFetch, useHead, useRequestURL, useSeoMeta } from "#imports";

import HomeProjectCTA from "~~/app/components/home/HomeProjectCTA.vue";
import InsightArticleList from "~~/app/components/insights/InsightArticleList.vue";
import InsightCategoryDirectory from "~~/app/components/insights/InsightCategoryDirectory.vue";
import InsightFeatureCollection from "~~/app/components/insights/InsightFeatureCollection.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";
import type { InsightsHubDto } from "~~/shared/types/insights";

const { data, error, status, refresh } = await useFetch<InsightsHubDto>(
  "/api/insights",
  { lazy: true },
);

const title = "Insights | Webphin";
const description =
  "Practical perspectives on websites, software, infrastructure, automation, AI and technology decisions for businesses and teams.";
const canonical = new URL("/insights", useRequestURL().origin).href;

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
});
useHead({ link: [{ rel: "canonical", href: canonical }] });
</script>

<template>
  <div class="insights-hub">
    <SectionWrapper spacing="lg" class="insights-hub__intro">
      <header>
        <SectionEyebrow class="insights-hub__eyebrow"
          >Webphin Insights</SectionEyebrow
        >
        <h1>Insights</h1>
        <p>
          Clear perspectives on technology, software and digital products,
          helping businesses and teams make informed project decisions.
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
    </SectionWrapper>

    <SectionWrapper v-if="data" spacing="lg">
      <InsightFeatureCollection :articles="data.featured" />
    </SectionWrapper>

    <SectionWrapper v-if="data" tone="soft" spacing="lg">
      <InsightCategoryDirectory :categories="data.categories" />
    </SectionWrapper>

    <SectionWrapper v-if="data" spacing="lg">
      <section aria-labelledby="all-insights" class="insights-hub__articles">
        <SectionHeading id="all-insights" title="All Articles" />
        <InsightArticleList :articles="data.articles" label="All articles" />
        <DataStateMessage
          v-if="!data.articles.length"
          kind="empty"
          message="No insights have been published yet."
        />
      </section>
    </SectionWrapper>

    <HomeProjectCTA />
  </div>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
.insights-hub {
  &__intro header {
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
  }
}
@media (max-width: 575px) {
  .insights-hub h1 {
    font-size: clamp(2.75rem, 13vw, 4rem);
  }
}
</style>
