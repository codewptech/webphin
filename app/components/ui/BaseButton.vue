<script setup lang="ts">
import { NuxtLink } from "#components";

type ButtonVariant = "primary" | "secondary" | "text";

type ButtonSize = "sm" | "md" | "lg";

type ButtonType = "button" | "submit" | "reset";

interface Props {
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  external?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  href: undefined,
  variant: "primary",
  size: "md",
  type: "button",
  disabled: false,
  external: false,
});
</script>

<template>
  <NuxtLink
    v-if="props.to"
    :to="props.to"
    class="base-button"
    :class="[`base-button--${props.variant}`, `base-button--${props.size}`]"
  >
    <span class="base-button__content">
      <slot />
    </span>

    <span
      v-if="props.variant === 'text'"
      class="base-button__arrow"
      aria-hidden="true"
    >
      →
    </span>
  </NuxtLink>

  <a
    v-else-if="props.href"
    :href="props.href"
    class="base-button"
    :class="[`base-button--${props.variant}`, `base-button--${props.size}`]"
    :target="props.external ? '_blank' : undefined"
    :rel="props.external ? 'noopener noreferrer' : undefined"
  >
    <span class="base-button__content">
      <slot />
    </span>

    <span
      v-if="props.variant === 'text'"
      class="base-button__arrow"
      aria-hidden="true"
    >
      →
    </span>
  </a>

  <button
    v-else
    :type="props.type"
    class="base-button"
    :class="[`base-button--${props.variant}`, `base-button--${props.size}`]"
    :disabled="props.disabled"
  >
    <span class="base-button__content">
      <slot />
    </span>

    <span
      v-if="props.variant === 'text'"
      class="base-button__arrow"
      aria-hidden="true"
    >
      →
    </span>
  </button>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;

.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: fit-content;
  font-weight: 650;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  border: 1px solid transparent;
  transition:
    color $transition-fast,
    background-color $transition-fast,
    border-color $transition-fast,
    box-shadow $transition-fast,
    transform $transition-fast;
}

.base-button--sm {
  min-height: 40px;
  padding-inline: 1rem;
  font-size: 0.825rem;
  border-radius: $radius-pill;
}

.base-button--md {
  min-height: 46px;
  padding-inline: 1.25rem;
  font-size: 0.9rem;
  border-radius: $radius-pill;
}

.base-button--lg {
  min-height: 52px;
  padding-inline: 1.5rem;
  font-size: 0.95rem;
  border-radius: $radius-pill;
}

.base-button--primary {
  color: $color-white;
  background: $color-brand-red;

  &:hover {
    background: $color-brand-red-dark;
    box-shadow: $shadow-sm;
    transform: translateY(-1px);
  }
}

.base-button--secondary {
  color: $color-black;
  background: $color-white;
  border-color: $color-border-strong;

  &:hover {
    background: $color-background-soft;
    border-color: $color-black;
    transform: translateY(-1px);
  }
}

.base-button--text {
  min-height: auto;
  padding: 0;
  color: $color-black;
  background: transparent;
  border: 0;
  border-radius: 0;

  &:hover {
    color: $color-brand-red;
  }

  &:hover .base-button__arrow {
    transform: translateX(4px);
  }
}

.base-button__arrow {
  color: $color-brand-red;
  transition: transform $transition-fast;
}

.base-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  transform: none;
}
</style>
