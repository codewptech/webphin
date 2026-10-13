<script setup lang="ts">
import AppFooter from "~~/app/components/layout/AppFooter.vue";
import AppHeader from "~~/app/components/layout/AppHeader.vue";
</script>

<template>
  <div class="site-shell">
    <AppHeader />

    <main id="main-content" class="site-main">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.site-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site-main {
  flex: 1;
}
</style>
