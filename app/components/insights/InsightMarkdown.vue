<script setup lang="ts">
import InsightMarkdownNode from "~~/app/components/insights/InsightMarkdownNode.vue";
import type { InsightMarkdownDocument } from "~~/shared/types/markdown";

defineProps<{ document: InsightMarkdownDocument }>();
</script>

<template>
  <div class="insight-markdown">
    <InsightMarkdownNode
      v-for="(node, index) in document.nodes"
      :key="index"
      :node="node"
    />
  </div>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
@use "~~/app/assets/scss/abstracts/mixins" as *;

.insight-markdown {
  min-width: 0;
  color: $color-text-secondary;
  font-family: $font-body;
  font-size: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
  line-height: 1.8;
  overflow-wrap: anywhere;

  :deep(p),
  :deep(ul),
  :deep(ol),
  :deep(blockquote),
  :deep(pre),
  :deep(.insight-markdown__table) {
    margin-block: 1.25em;
  }

  :deep(h2),
  :deep(h3) {
    color: $color-black;
    font-family: $font-heading;
    line-height: 1.3;
    scroll-margin-block-start: 2rem;
  }

  :deep(h2) {
    margin-block: 2em 0.75em;
    font-size: clamp(1.5rem, 1.2rem + 1vw, 2.125rem);
  }

  :deep(h3) {
    margin-block: 1.75em 0.65em;
    font-size: clamp(1.2rem, 1.1rem + 0.4vw, 1.5rem);
  }

  :deep(strong) {
    color: $color-text;
    font-weight: 700;
  }

  :deep(a) {
    color: $color-brand-blue;
    text-decoration: underline;
    text-decoration-thickness: 0.08em;
    text-underline-offset: 0.2em;
  }

  :deep(a:hover) {
    color: $color-brand-red;
  }

  :deep(ul) {
    padding-inline-start: 1.4em;
    list-style: disc;
  }

  :deep(ul ul) {
    list-style: circle;
  }

  :deep(li + li) {
    margin-block-start: 0.65em;
  }

  :deep(li > p),
  :deep(li > ul),
  :deep(li > ol),
  :deep(.insight-markdown__list-content > p),
  :deep(.insight-markdown__list-content > ul),
  :deep(.insight-markdown__list-content > ol) {
    margin-block: 0.5em;
  }

  :deep(ol) {
    padding: 0;
    list-style: none;
  }

  :deep(ol > li) {
    @include sequence-row("> .insight-markdown__list-content > :first-child");
  }

  :deep(.insight-markdown__list-content) {
    min-width: 0;
  }

  :deep(blockquote) {
    margin-inline: 0;
    padding-inline-start: 1.25em;
    border-inline-start: 3px solid $color-border-strong;
  }

  :deep(img) {
    display: block;
    max-width: 100%;
    height: auto;
    margin-block: 1em;
    border-radius: $radius-sm;
  }

  :deep(code) {
    padding: 0.15em 0.35em;
    color: $color-text;
    background: $color-background-subtle;
    font-family: monospace;
    font-size: 0.9em;
    border-radius: 0.25em;
  }

  :deep(pre) {
    max-width: 100%;
    padding: 1rem;
    color: $color-dark-text;
    background: $color-dark-surface;
    line-height: 1.65;
    white-space: pre;
    overflow-x: auto;
    overflow-wrap: normal;
    border-radius: $radius-sm;
  }

  :deep(pre code) {
    padding: 0;
    color: inherit;
    background: transparent;
    border-radius: 0;
  }

  :deep(.insight-markdown__table) {
    max-width: 100%;
    overflow-x: auto;
    border: 1px solid $color-border;
    border-radius: $radius-sm;
  }

  :deep(table) {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95em;
  }

  :deep(th),
  :deep(td) {
    min-width: 8rem;
    padding: 0.75em 1em;
    text-align: start;
    vertical-align: top;
    border-block-end: 1px solid $color-border;
  }

  :deep(th) {
    color: $color-text;
    background: $color-background-soft;
    font-weight: 700;
  }

  :deep(tbody tr:last-child td) {
    border-block-end: 0;
  }

  :deep(hr) {
    margin-block: 2em;
    border: 0;
    border-block-start: 1px solid $color-border;
  }

  > :first-child {
    margin-block-start: 0;
  }

  > :last-child {
    margin-block-end: 0;
  }
}
</style>
