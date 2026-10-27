<script setup lang="ts">
import InsightMarkdownInline from "~~/app/components/insights/InsightMarkdownInline.vue";
import InsightMarkdownNode from "~~/app/components/insights/InsightMarkdownNode.vue";
import SequenceMarker from "~~/app/components/ui/SequenceMarker.vue";
import type { InsightMarkdownBlockNode } from "~~/shared/types/markdown";

defineProps<{ node: InsightMarkdownBlockNode }>();
</script>

<template>
  <p v-if="node.type === 'paragraph'">
    <InsightMarkdownInline :nodes="node.children" />
  </p>
  <component
    :is="node.level === 2 ? 'h2' : 'h3'"
    v-else-if="node.type === 'heading'"
    :id="node.id"
  >
    <InsightMarkdownInline :nodes="node.children" />
  </component>
  <blockquote v-else-if="node.type === 'blockquote'">
    <InsightMarkdownNode
      v-for="(child, index) in node.nodes"
      :key="index"
      :node="child"
    />
  </blockquote>
  <ul v-else-if="node.type === 'unordered-list'">
    <li v-for="(item, index) in node.items" :key="index">
      <InsightMarkdownNode
        v-for="(child, childIndex) in item.nodes"
        :key="childIndex"
        :node="child"
      />
    </li>
  </ul>
  <ol v-else-if="node.type === 'ordered-list'" :start="node.start" role="list">
    <li
      v-for="(item, index) in node.items"
      :key="index"
      :value="node.start + index"
    >
      <SequenceMarker :step="node.start + index" />
      <div class="insight-markdown__list-content">
        <InsightMarkdownNode
          v-for="(child, childIndex) in item.nodes"
          :key="childIndex"
          :node="child"
        />
      </div>
    </li>
  </ol>
  <pre v-else-if="node.type === 'code-block'" tabindex="0"><code
    :class="node.language ? `language-${node.language}` : undefined"
    :data-language="node.language ?? undefined"
  >{{ node.code }}</code></pre>
  <div
    v-else-if="node.type === 'table'"
    class="insight-markdown__table"
    role="region"
    aria-label="Article table"
    tabindex="0"
  >
    <table>
      <thead>
        <tr>
          <th
            v-for="(cell, index) in node.header"
            :key="index"
            scope="col"
            :style="cell.alignment ? { textAlign: cell.alignment } : undefined"
          >
            <InsightMarkdownInline :nodes="cell.children" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in node.rows" :key="rowIndex">
          <td
            v-for="(cell, index) in row"
            :key="index"
            :style="cell.alignment ? { textAlign: cell.alignment } : undefined"
          >
            <InsightMarkdownInline :nodes="cell.children" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <hr v-else-if="node.type === 'horizontal-rule'" />
</template>
