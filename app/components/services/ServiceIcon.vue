<script setup lang="ts">
import type { ServiceIcon } from "~~/app/config/services";

interface Props {
  icon: ServiceIcon;
}

defineProps<Props>();
</script>

<template>
  <!-- Website -->
  <svg
    v-if="icon === 'website'"
    class="service-icon"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />

    <path d="M3 8.5H21" />

    <path d="M6.5 6.25H6.51" />
    <path d="M9 6.25H9.01" />
  </svg>

  <!-- Application -->
  <svg
    v-else-if="icon === 'application'"
    class="service-icon"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="7" height="7" rx="1.5" />

    <rect x="14" y="3" width="7" height="7" rx="1.5" />

    <rect x="3" y="14" width="7" height="7" rx="1.5" />

    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>

  <!-- Backend / Data -->
  <svg
    v-else-if="icon === 'data'"
    class="service-icon"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <ellipse cx="12" cy="5.5" rx="7" ry="3" />

    <path
      d="
        M5 5.5V12
        C5 13.7 8.1 15 12 15
        C15.9 15 19 13.7 19 12
        V5.5
      "
    />

    <path
      d="
        M5 12V18.5
        C5 20.2 8.1 21.5 12 21.5
        C15.9 21.5 19 20.2 19 18.5
        V12
      "
    />
  </svg>

  <!-- Infrastructure -->
  <svg
    v-else-if="icon === 'infrastructure'"
    class="service-icon"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect x="4" y="3" width="16" height="7" rx="2" />

    <rect x="4" y="14" width="16" height="7" rx="2" />

    <path d="M7.5 6.5H7.51" />
    <path d="M7.5 17.5H7.51" />

    <path d="M11 6.5H17" />
    <path d="M11 17.5H17" />
  </svg>

  <!-- Automation -->
  <svg
    v-else-if="icon === 'automation'"
    class="service-icon"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />

    <circle cx="5" cy="6" r="2" />

    <circle cx="19" cy="6" r="2" />

    <circle cx="5" cy="18" r="2" />

    <circle cx="19" cy="18" r="2" />

    <path d="M7 7.5L9.5 9.7" />
    <path d="M17 7.5L14.5 9.7" />
    <path d="M7 16.5L9.5 14.3" />
    <path d="M17 16.5L14.5 14.3" />
  </svg>

  <!-- Support -->
  <svg
    v-else
    class="service-icon"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="
        M12 3
        L19 6
        V11
        C19 15.5 16.2 19.2 12 21
        C7.8 19.2 5 15.5 5 11
        V6
        L12 3Z
      "
    />

    <path d="M9 12L11 14L15.5 9.5" />
  </svg>
</template>

<style scoped lang="scss">
.service-icon {
  display: block;

  width: 100%;
  height: 100%;

  overflow: visible;

  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
