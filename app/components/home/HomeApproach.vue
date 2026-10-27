<script setup lang="ts">
import { homeContent } from "~~/app/config/content/home";
import SequenceMarker from "~~/app/components/ui/SequenceMarker.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";

const content = homeContent.approach;
const { problems, approach } = content;
</script>

<template>
  <SectionWrapper tone="soft" spacing="lg">
    <div class="home-approach">
      <header class="home-approach__header">
        <div class="home-approach__heading">
          <SectionEyebrow class="home-approach__eyebrow">
            {{ content.eyebrow }}
          </SectionEyebrow>

          <h2 class="home-approach__title">
            {{ content.title }}
            <span class="home-approach__title-accent">
              {{ content.accent }}
            </span>
          </h2>
        </div>

        <p class="home-approach__intro">
          {{ content.intro }}
        </p>
      </header>

      <div class="home-approach__comparison">
        <article class="approach-column approach-column--problems">
          <div class="approach-column__header">
            <span class="approach-column__label">
              {{ content.problemColumn.label }}
            </span>

            <p class="approach-column__summary">
              {{ content.problemColumn.summary }}
            </p>
          </div>

          <div class="approach-column__items">
            <article
              v-for="problem in problems"
              :key="problem.title"
              class="approach-item approach-item--problem"
            >
              <div class="approach-item__content">
                <h3 class="approach-item__title">
                  {{ problem.title }}
                </h3>

                <p class="approach-item__description">
                  {{ problem.description }}
                </p>
              </div>
            </article>
          </div>
        </article>

        <div class="home-approach__bridge" aria-hidden="true">
          <span class="home-approach__bridge-line" />
          <span class="home-approach__bridge-mark">→</span>
          <span class="home-approach__bridge-line" />
        </div>

        <article class="approach-column approach-column--webphin">
          <div class="approach-column__header">
            <span class="approach-column__label">
              {{ content.webphinColumn.label }}
            </span>

            <p class="approach-column__summary">
              {{ content.webphinColumn.summary }}
            </p>
          </div>

          <ol class="approach-column__items" role="list">
            <li
              v-for="(item, index) in approach"
              :key="item.title"
              class="approach-item approach-item--webphin"
            >
              <SequenceMarker :step="index + 1" variant="inverse" />

              <div class="approach-item__content">
                <h3 class="approach-item__title">
                  {{ item.title }}
                </h3>

                <p class="approach-item__description">
                  {{ item.description }}
                </p>
              </div>
            </li>
          </ol>
        </article>
      </div>

      <div class="home-approach__principle">
        <div class="home-approach__principle-marker">
          <span class="home-approach__principle-dot" aria-hidden="true" />
        </div>

        <div class="home-approach__principle-content">
          <span class="home-approach__principle-label">
            {{ content.principleContent.principleLabel }}
          </span>

          <p class="home-approach__principle-text">
            {{ content.principleContent.principleText }}
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
@use "~~/app/assets/scss/abstracts/mixins" as *;

.home-approach {
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 5rem);
}

.home-approach__header {
  display: grid;
  gap: 1.75rem;

  @include lg {
    grid-template-columns:
      minmax(0, 0.95fr)
      minmax(320px, 0.75fr);
    align-items: end;
    gap: clamp(4rem, 8vw, 8rem);
  }
}

.home-approach__heading {
  max-width: 680px;
}

.home-approach__eyebrow {
  margin-bottom: 1.2rem;
}

.home-approach__title {
  font-size: clamp(2.5rem, 4.5vw, 4.15rem);
  line-height: 1.02;
  letter-spacing: -0.048em;
}

.home-approach__title-accent {
  display: block;
  color: $color-brand-red;
}

.home-approach__intro {
  max-width: 560px;
  color: $color-text-secondary;
  font-size: clamp(1rem, 1.45vw, 1.1rem);
  line-height: 1.75;
}

.home-approach__comparison {
  display: grid;
  gap: 1.75rem;

  @include lg {
    grid-template-columns:
      minmax(0, 1fr)
      52px
      minmax(0, 1fr);
    align-items: stretch;
    gap: 1.5rem;
  }
}

.approach-column {
  overflow: hidden;
  border-radius: $radius-lg;
}

.approach-column--problems {
  background: $color-white;
  border: 1px solid $color-border;
}

.approach-column--webphin {
  color: $color-white;
  background: $color-dark-surface;
  border: 1px solid $color-dark-surface;
}

.approach-column__header {
  padding: 1.5rem;
  border-bottom: 1px solid $color-border;

  @include sm {
    padding: 1.75rem;
  }
}

.approach-column--webphin .approach-column__header {
  border-bottom-color: $color-dark-border;
}

.approach-column__label {
  display: block;
  margin-bottom: 0.65rem;
  color: $color-black;
  font-size: 0.72rem;
  font-weight: 750;
  line-height: 1.3;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.approach-column--webphin .approach-column__label {
  color: $color-brand-red;
}

.approach-column__summary {
  max-width: 490px;
  color: $color-text-secondary;
  font-size: 0.88rem;
  line-height: 1.65;
}

.approach-column--webphin .approach-column__summary {
  color: $color-dark-text-secondary;
}

.approach-column__items {
  display: flex;
  flex-direction: column;
}

.approach-item {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.9rem;
  padding: 1.4rem 1.5rem;
  border-bottom: 1px solid $color-border;

  @include sm {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.1rem;
    padding: 1.55rem 1.75rem;
  }

  &:last-child {
    border-bottom: 0;
  }
}

.approach-column__items {
  margin: 0;
  padding: 0;
  list-style: none;
}

.approach-item--webphin {
  @include sequence-row("> .approach-item__content > .approach-item__title");

  border-bottom-color: $color-dark-border;
}

.approach-item__content {
  min-width: 0;
}

.approach-item__title {
  margin-bottom: 0.4rem;
  color: $color-black;
  font-family: $font-heading;
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.35;
  letter-spacing: -0.018em;
}

.approach-item--webphin .approach-item__title {
  color: $color-white;
}

.approach-item__description {
  max-width: 500px;
  color: $color-text-secondary;
  font-size: 0.8rem;
  line-height: 1.65;
}

.approach-item--webphin .approach-item__description {
  color: $color-dark-text-secondary;
}

.home-approach__bridge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  min-height: 34px;

  @include lg {
    flex-direction: column;
    min-height: 100%;
  }
}

.home-approach__bridge-line {
  flex: 1;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    $color-border-strong,
    transparent
  );

  @include lg {
    width: 1px;
    height: auto;
    background: linear-gradient(
      180deg,
      transparent,
      $color-border-strong,
      transparent
    );
  }
}

.home-approach__bridge-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  color: $color-white;
  background: $color-brand-red;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 50%;
  box-shadow: 0 0 0 6px rgb(227 40 47 / 8%);
}

.home-approach__principle {
  display: grid;
  grid-template-columns:
    46px
    minmax(0, 1fr);
  gap: 1rem;
  max-width: 850px;
  margin-inline: auto;
  padding-top: 0.5rem;
}

.home-approach__principle-marker {
  display: flex;
  justify-content: center;
  padding-top: 0.35rem;
}

.home-approach__principle-dot {
  position: relative;
  display: block;
  width: 10px;
  height: 10px;
  background: $color-brand-red;
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    inset: -6px;
    border: 1px solid rgb(227 40 47 / 20%);
    border-radius: 50%;
  }
}

.home-approach__principle-content {
  min-width: 0;
}

.home-approach__principle-label {
  display: block;
  margin-bottom: 0.45rem;
  color: $color-brand-red;
  font-size: 0.65rem;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.home-approach__principle-text {
  color: $color-black;
  font-family: $font-heading;
  font-size: clamp(1.15rem, 2.1vw, 1.55rem);
  font-weight: 650;
  line-height: 1.45;
  letter-spacing: -0.02em;
}

@media (max-width: 575px) {
  .home-approach {
    gap: 3rem;
  }

  .home-approach__title {
    font-size: clamp(2.3rem, 11vw, 3.1rem);
  }

  .approach-column__header {
    padding: 1.35rem;
  }

  .approach-item {
    padding: 1.25rem 1.35rem;
  }

  .home-approach__principle {
    grid-template-columns:
      34px
      minmax(0, 1fr);
    gap: 0.75rem;
  }
}
</style>
