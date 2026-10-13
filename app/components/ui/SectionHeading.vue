<script setup lang="ts">
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";

type HeadingAlignment = "left" | "center";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: HeadingAlignment;
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: undefined,
  description: undefined,
  alignment: "left",
});
</script>

<template>
  <div
    class="section-heading"
    :class="{
      'section-heading--center': props.alignment === 'center',
    }"
  >
    <SectionEyebrow v-if="props.eyebrow" class="section-heading__eyebrow">
      {{ props.eyebrow }}
    </SectionEyebrow>

    <h2 class="section-heading__title">
      {{ props.title }}
    </h2>

    <p v-if="props.description" class="section-heading__description">
      {{ props.description }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;

.section-heading {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 760px;
}

.section-heading--center {
  align-items: center;
  margin-inline: auto;
  text-align: center;
}

.section-heading__eyebrow {
  margin-bottom: 1rem;
}

.section-heading__title {
  margin-bottom: 1.25rem;
}

.section-heading__description {
  max-width: 680px;
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  line-height: 1.7;
}
</style>
