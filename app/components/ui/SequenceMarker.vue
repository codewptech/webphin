<script setup lang="ts">
import { computed } from "vue";

interface Props {
  step: number;
  label?: string;
  variant?: "default" | "inverse";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
});

const formattedStep = computed(() => String(props.step).padStart(2, "0"));
</script>

<template>
  <span class="sequence-marker" :class="`sequence-marker--${variant}`">
    <span class="sequence-marker__value" aria-hidden="true">
      {{ formattedStep }}
    </span>
    <span v-if="label" class="sequence-marker__label">{{ label }}</span>
  </span>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
@use "~~/app/assets/scss/abstracts/mixins" as *;

.sequence-marker {
  display: inline-flex;
  align-items: flex-start;
  gap: $sequence-marker-gap;
  flex-shrink: 0;
  min-width: $sequence-marker-size;
  max-width: 100%;
}

.sequence-marker__value {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: $sequence-marker-size;
  height: $sequence-marker-size;
  color: $color-brand-red;
  background: $color-white;
  font-size: 0.57rem;
  font-weight: 750;
  letter-spacing: 0.04em;
  border: 1px solid rgb(227 40 47 / 18%);
  border-radius: 50%;
}

.sequence-marker__label {
  @include sequence-first-line;

  min-width: 0;
  color: $color-text-secondary;
  font-size: 0.68rem;
  font-weight: 700;
  line-height: 1.4;
}

.sequence-marker--inverse {
  .sequence-marker__value {
    background: rgb(255 255 255 / 4%);
    border-color: rgb(227 40 47 / 35%);
  }

  .sequence-marker__label {
    color: $color-dark-text;
  }
}
</style>
