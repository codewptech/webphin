<script setup lang="ts">
import { definePageMeta } from "#imports";

import HomeApproach from "~~/app/components/home/HomeApproach.vue";
import HomeEngineeringOutcome from "~~/app/components/home/HomeEngineeringOutcome.vue";
import HomeFeaturedWork from "~~/app/components/home/HomeFeaturedWork.vue";
import HomeHero from "~~/app/components/home/HomeHero.vue";
import HomeInsightsPreview from "~~/app/components/home/HomeInsightsPreview.vue";
import HomePricingPreview from "~~/app/components/home/HomePricingPreview.vue";
import HomeProjectCTA from "~~/app/components/home/HomeProjectCTA.vue";
import HomeServicesOverview from "~~/app/components/home/HomeServicesOverview.vue";

definePageMeta({
  middleware: ["sync-user"],
});
</script>

<template>
  <div>
    <HomeHero />

    <HomeServicesOverview />

    <HomeApproach />

    <HomeFeaturedWork />

    <HomeEngineeringOutcome />

    <HomeInsightsPreview />

    <HomePricingPreview />

    <HomeProjectCTA />
  </div>
</template>
