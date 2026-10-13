<script setup lang="ts">
type SectionTone = "default" | "soft" | "dark";

type SectionSpacing = "sm" | "md" | "lg";

interface Props {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  contained?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  tone: "default",
  spacing: "md",
  contained: true,
});
</script>

<template>
  <section
    class="section-wrapper"
    :class="[
      `section-wrapper--${props.tone}`,
      `section-wrapper--spacing-${props.spacing}`,
    ]"
  >
    <div v-if="props.contained" class="page-container">
      <slot />
    </div>

    <slot v-else />
  </section>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;

.section-wrapper {
  width: 100%;
}

.section-wrapper--spacing-sm {
  padding-block: $section-spacing-sm;
}

.section-wrapper--spacing-md {
  padding-block: $section-spacing-md;
}

.section-wrapper--spacing-lg {
  padding-block: $section-spacing-lg;
}

.section-wrapper--default {
  color: $color-text;
  background: $color-background;
}

.section-wrapper--soft {
  color: $color-text;
  background: $color-background-soft;
}

.section-wrapper--dark {
  color: $color-dark-text;
  background: $color-dark-surface;

  :deep(h1),
  :deep(h2),
  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    color: $color-dark-text;
  }

  :deep(p) {
    color: $color-dark-text-secondary;
  }
}
</style>
