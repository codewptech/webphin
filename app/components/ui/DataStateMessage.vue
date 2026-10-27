<script setup lang="ts">
import BaseButton from "~~/app/components/ui/BaseButton.vue";

defineProps<{
  kind: "pending" | "empty" | "error";
  message: string;
  detail?: string;
  retryable?: boolean;
}>();

const emit = defineEmits<{ retry: [] }>();
</script>

<template>
  <div class="data-state-message">
    <div :role="kind === 'error' ? 'alert' : 'status'" aria-atomic="true">
      <p>{{ message }}</p>
      <p v-if="detail">{{ detail }}</p>
    </div>
    <BaseButton
      v-if="kind === 'error' && retryable"
      class="data-state-message__retry"
      variant="text"
      @click="emit('retry')"
      >Try again</BaseButton
    >
  </div>
</template>

<style scoped lang="scss">
.data-state-message {
  max-width: 680px;
  margin-block-start: 1.75rem;

  p {
    font-size: clamp(1rem, 1.8vw, 1.15rem);
    line-height: 1.7;
  }

  p + p {
    margin-block-start: 0.75rem;
  }
  &__retry {
    margin-block-start: 1.75rem;
  }
}
</style>
