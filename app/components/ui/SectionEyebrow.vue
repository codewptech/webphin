<template>
  <span class="section-eyebrow">
    <slot />
  </span>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;

.section-eyebrow {
  display: inline-block;
  color: $color-brand-red;
  font-size: 0.75rem;
  font-weight: 750;
  line-height: 1.3;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}
</style>
