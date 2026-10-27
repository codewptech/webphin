<script setup lang="ts">
import {
  Teleport,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  useId,
} from "vue";

import type { InsightMarkdownTocItem } from "~~/shared/types/markdown";

defineProps<{ items: InsightMarkdownTocItem[] }>();

const dialogId = `_insight-toc-${useId()}`;
const titleId = `${dialogId}-title`;
const isOpen = ref(false);
const dialog = ref<HTMLDialogElement | null>(null);
const trigger = ref<HTMLButtonElement | null>(null);
const flowNavigation = ref<HTMLElement | null>(null);
let largerScreen: MediaQueryList | undefined;
let previousOverflow = "";
let scrollLocked = false;

function restoreScroll() {
  if (scrollLocked) {
    document.body.style.overflow = previousOverflow;
    scrollLocked = false;
  }
}

function finishClose(restoreFocus = true) {
  const wasOpen = isOpen.value;
  isOpen.value = false;
  restoreScroll();

  if (wasOpen && restoreFocus) {
    void nextTick(() => trigger.value?.focus({ preventScroll: true }));
  }
}

function closeToc(restoreFocus = true) {
  dialog.value?.close();
  finishClose(restoreFocus);
}

function openToc() {
  if (!dialog.value || largerScreen?.matches || isOpen.value) return;

  dialog.value.showModal();
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  scrollLocked = true;
  isOpen.value = true;
  void nextTick(() => trigger.value?.focus({ preventScroll: true }));
}

function selectItem(id: string) {
  closeToc(false);
  void nextTick(() => {
    const heading = document.getElementById(id);
    heading?.setAttribute("tabindex", "-1");
    heading?.focus({ preventScroll: true });
  });
}

function handleModeChange(event: MediaQueryListEvent) {
  if (event.matches && isOpen.value) {
    closeToc(false);
    void nextTick(() => flowNavigation.value?.querySelector("a")?.focus());
  }
}

onMounted(() => {
  // Matches the existing Sass $breakpoint-md.
  largerScreen = window.matchMedia("(min-width: 768px)");
  largerScreen.addEventListener("change", handleModeChange);
});

onBeforeUnmount(() => {
  largerScreen?.removeEventListener("change", handleModeChange);
  closeToc(false);
});
</script>

<template>
  <div class="insight-toc">
    <nav
      ref="flowNavigation"
      class="insight-toc__flow"
      aria-label="In this article"
    >
      <p class="insight-toc__title">In this article</p>
      <ul role="list">
        <li v-for="item in items" :key="item.id">
          <a :href="`#${item.id}`">{{ item.label }}</a>
        </li>
      </ul>
    </nav>

    <!-- The same bottom toggle stays interactive inside the native modal's top layer. -->
    <Teleport :to="dialog ?? 'body'" :disabled="!isOpen">
      <button
        ref="trigger"
        class="insight-toc__trigger"
        type="button"
        :aria-expanded="isOpen"
        :aria-controls="dialogId"
        aria-haspopup="dialog"
        @click="isOpen ? closeToc() : openToc()"
      >
        {{ isOpen ? "In this article ↓" : "In this article ↑" }}
      </button>
    </Teleport>

    <dialog
      :id="dialogId"
      ref="dialog"
      class="insight-toc__dialog"
      :aria-labelledby="titleId"
      aria-modal="true"
      @cancel.prevent="closeToc()"
      @close="finishClose()"
    >
      <div class="insight-toc__panel">
        <h2 :id="titleId" class="insight-toc__title">In this article</h2>
        <nav aria-label="In this article">
          <ul role="list">
            <li v-for="item in items" :key="item.id">
              <a :href="`#${item.id}`" @click="selectItem(item.id)">{{
                item.label
              }}</a>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          class="insight-toc__close"
          :aria-controls="dialogId"
          :aria-expanded="isOpen"
          @click="closeToc()"
        >
          In this article ↓
        </button>
      </div>
    </dialog>
  </div>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
@use "~~/app/assets/scss/abstracts/mixins" as *;

.insight-toc {
  min-width: 0;

  ul {
    display: grid;
    gap: 0.25rem;
    list-style: none;
  }

  a {
    display: block;
    padding-block: 0.6rem;
    color: $color-text-secondary;
    font-size: 0.9rem;
    line-height: 1.6;
    overflow-wrap: anywhere;
    transition: color $transition-fast;

    &:hover {
      color: $color-brand-red;
    }
  }

  &__title {
    margin-block-end: 1rem;
    color: $color-text;
    font-family: $font-heading;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
  }

  &__flow {
    display: none;

    @include md {
      display: block;
      padding-block-start: 1.5rem;
      border-block-start: 1px solid $color-border;
    }
  }

  &__trigger,
  &__close {
    min-height: 46px;
    padding-inline: 1.25rem;
    color: $color-black;
    background: $color-background;
    font-size: 0.9rem;
    font-weight: 650;
    line-height: 1;
    text-align: center;
    transition:
      color $transition-fast,
      background-color $transition-fast,
      border-color $transition-fast,
      box-shadow $transition-fast,
      transform $transition-fast;
    border: 1px solid $color-border-strong;
    border-radius: $radius-pill;

    &:hover {
      background: $color-background-soft;
      border-color: $color-black;
      transform: translateY(-1px);
    }
  }

  &__trigger {
    position: fixed;
    right: 1rem;
    bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
    z-index: 110;
    box-shadow: $shadow-md;

    @include md {
      display: none;
    }
  }

  &__dialog {
    width: calc(100% - 2rem);
    max-width: 32rem;
    max-height: calc(100dvh - 2rem);
    margin: auto;
    padding: 0;
    color: $color-text;
    background: $color-background;
    overflow-y: auto;
    overscroll-behavior: contain;
    border: 1px solid $color-border;
    border-radius: $radius-lg;

    &::backdrop {
      background: rgba($color-black, 0.6);
    }

    @include md {
      display: none;
    }
  }

  &__panel {
    padding: 1.5rem;
  }

  &__close {
    display: block;
    margin-block-start: 1.5rem;
  }

  @include xl {
    position: sticky;
    top: calc(76px + 2rem);
    align-self: start;
    max-height: calc(100vh - 76px - 4rem);
    overflow-y: auto;
  }
}
</style>
