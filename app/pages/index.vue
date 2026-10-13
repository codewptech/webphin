<script setup lang="ts">
import { definePageMeta } from "#imports";

import HomeApproach from "~~/app/components/home/HomeApproach.vue";
import HomeFeaturedWork from "~~/app/components/home/HomeFeaturedWork.vue";
import HomeHero from "~~/app/components/home/HomeHero.vue";
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
  </div>
</template>
