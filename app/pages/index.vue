<template>
  <NuxtWelcome />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['sync-user'],
});
</script>
