<script setup lang="ts">
import { NuxtLink } from "#components";

type BrandVariant = "default" | "inverse";

interface Props {
  variant?: BrandVariant;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
});
</script>

<template>
  <NuxtLink
    to="/"
    class="webphin-brand"
    :class="{
      'webphin-brand--inverse': props.variant === 'inverse',
    }"
    aria-label="Webphin home"
  >
    <span class="webphin-brand__wordmark" aria-hidden="true">
      <span class="webphin-brand__web"> web </span>

      <span class="webphin-brand__phin"> phin </span>
    </span>
  </NuxtLink>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;

.webphin-brand {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
}

.webphin-brand__wordmark {
  display: inline-flex;
  align-items: baseline;
  font-family: $font-heading;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.055em;
}

.webphin-brand__web {
  color: $color-black;
}

.webphin-brand__phin {
  color: $color-brand-red;
}

.webphin-brand--inverse {
  .webphin-brand__web {
    color: $color-white;
  }

  .webphin-brand__phin {
    color: $color-brand-red;
  }
}
</style>
