<script setup lang="ts">
import InsightMarkdownInline from "~~/app/components/insights/InsightMarkdownInline.vue";
import type { InsightMarkdownInlineNode } from "~~/shared/types/markdown";

defineProps<{ nodes: InsightMarkdownInlineNode[] }>();
</script>

<template>
  <template v-for="(node, index) in nodes" :key="index">
    <template v-if="node.type === 'text'">{{ node.text }}</template>
    <code v-else-if="node.type === 'inline-code'">{{ node.text }}</code>
    <strong v-else-if="node.type === 'strong'">
      <InsightMarkdownInline :nodes="node.children" />
    </strong>
    <em v-else-if="node.type === 'emphasis'">
      <InsightMarkdownInline :nodes="node.children" />
    </em>
    <a
      v-else-if="node.type === 'link'"
      :href="node.href"
      :title="node.title ?? undefined"
    >
      <InsightMarkdownInline :nodes="node.children" />
    </a>
    <img
      v-else-if="node.type === 'image'"
      :src="node.src"
      :alt="node.alt"
      :title="node.title ?? undefined"
      loading="lazy"
      decoding="async"
    />
    <br v-else-if="node.type === 'break' && node.hard" />
    <template v-else-if="node.type === 'break'">{{ "\n" }}</template>
  </template>
</template>
