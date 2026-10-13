<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useRoute } from "#imports";
import { NuxtLink } from "#components";

import WebphinBrand from "~~/app/components/branding/WebphinBrand.vue";

import {
  primaryNavigation,
  type NavigationItem,
} from "~~/app/config/navigation";

const route = useRoute();

const isMobileNavigationOpen = ref<boolean>(false);

const currentPath = computed<string>(() => route.path);

const isActiveRoute = (item: NavigationItem): boolean => {
  if (item.to === "/") {
    return currentPath.value === "/";
  }

  return (
    currentPath.value === item.to || currentPath.value.startsWith(`${item.to}/`)
  );
};

const toggleMobileNavigation = (): void => {
  isMobileNavigationOpen.value = !isMobileNavigationOpen.value;
};

const closeMobileNavigation = (): void => {
  isMobileNavigationOpen.value = false;
};

watch(
  () => route.fullPath,
  () => {
    closeMobileNavigation();
  },
);
</script>

<template>
  <header class="site-header">
    <div class="page-container site-header__inner">
      <WebphinBrand />

      <nav class="desktop-navigation" aria-label="Primary navigation">
        <NuxtLink
          v-for="item in primaryNavigation"
          :key="item.to"
          :to="item.to"
          class="desktop-navigation__link"
          :class="{
            'desktop-navigation__link--active': isActiveRoute(item),
          }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="site-header__actions">
        <NuxtLink to="/contact" class="project-cta">
          Discuss Your Project
        </NuxtLink>

        <button
          type="button"
          class="mobile-navigation-trigger"
          :class="{
            'mobile-navigation-trigger--open': isMobileNavigationOpen,
          }"
          :aria-expanded="isMobileNavigationOpen"
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
          @click="toggleMobileNavigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <div
      v-show="isMobileNavigationOpen"
      id="mobile-navigation"
      class="mobile-navigation"
    >
      <nav
        class="page-container mobile-navigation__inner"
        aria-label="Mobile navigation"
      >
        <NuxtLink
          v-for="item in primaryNavigation"
          :key="item.to"
          :to="item.to"
          class="mobile-navigation__link"
          :class="{
            'mobile-navigation__link--active': isActiveRoute(item),
          }"
        >
          {{ item.label }}
        </NuxtLink>

        <NuxtLink to="/contact" class="mobile-navigation__cta">
          Discuss Your Project
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
@use "~~/app/assets/scss/abstracts/mixins" as *;

.site-header {
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100%;
  background: rgb(255 255 255 / 94%);
  border-bottom: 1px solid $color-border;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 1.5rem;
}

.desktop-navigation {
  display: none;
  align-items: center;
  gap: 0.15rem;

  @include lg {
    display: flex;
  }
}

.desktop-navigation__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding-inline: 0.8rem;
  color: $color-text-secondary;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1;
  border-radius: $radius-sm;
  transition:
    color $transition-fast,
    background-color $transition-fast;

  &:hover {
    color: $color-black;
    background: $color-background-soft;
  }
}

.desktop-navigation__link--active {
  color: $color-black;

  &::after {
    content: "";
    position: absolute;
    right: 0.8rem;
    bottom: 4px;
    left: 0.8rem;
    height: 2px;
    background: $color-brand-red;
    border-radius: $radius-pill;
  }
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.project-cta {
  display: none;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding-inline: 1.15rem;
  color: $color-white;
  background: $color-brand-red;
  font-size: 0.875rem;
  font-weight: 650;
  line-height: 1;
  border-radius: $radius-pill;
  transition:
    background-color $transition-fast,
    transform $transition-fast;

  @include md {
    display: inline-flex;
  }

  &:hover {
    background: $color-brand-red-dark;
    transform: translateY(-1px);
  }
}

.mobile-navigation-trigger {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  gap: 4px;
  color: $color-black;
  background: transparent;
  border: 1px solid $color-border;
  border-radius: $radius-sm;

  @include lg {
    display: none;
  }

  span {
    display: block;
    width: 18px;
    height: 1.5px;
    background: currentColor;
    border-radius: $radius-pill;
    transition:
      transform $transition-base,
      opacity $transition-base;
  }
}

.mobile-navigation-trigger--open {
  span:nth-child(1) {
    transform: translateY(5.5px) rotate(45deg);
  }

  span:nth-child(2) {
    opacity: 0;
  }

  span:nth-child(3) {
    transform: translateY(-5.5px) rotate(-45deg);
  }
}

.mobile-navigation {
  background: $color-white;
  border-top: 1px solid $color-border;

  @include lg {
    display: none !important;
  }
}

.mobile-navigation__inner {
  display: flex;
  flex-direction: column;
  padding-top: 0.75rem;
  padding-bottom: 1.5rem;
}

.mobile-navigation__link {
  display: flex;
  align-items: center;
  min-height: 52px;
  color: $color-text;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 1px solid $color-border;
  transition: color $transition-fast;

  &:hover {
    color: $color-brand-red;
  }
}

.mobile-navigation__link--active {
  color: $color-brand-red;
}

.mobile-navigation__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  margin-top: 1.25rem;
  padding-inline: 1.25rem;
  color: $color-white;
  background: $color-brand-red;
  font-weight: 650;
  border-radius: $radius-pill;
}
</style>
