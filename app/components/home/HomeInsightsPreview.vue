<script setup lang="ts">
import { NuxtLink } from '#components';

import BaseButton from '~~/app/components/ui/BaseButton.vue';
import SectionEyebrow from '~~/app/components/ui/SectionEyebrow.vue';
import SectionWrapper from '~~/app/components/ui/SectionWrapper.vue';

import { homepageInsights, type HomepageInsight } from '~~/app/config/insights';

const featuredInsight: HomepageInsight | undefined = homepageInsights.find(
  (insight) => {
    return insight.featured;
  },
);

const supportingInsights: readonly HomepageInsight[] = homepageInsights.filter(
  (insight) => {
    return !insight.featured;
  },
);
</script>

<template>
  <SectionWrapper tone="default" spacing="lg">
    <section class="home-insights">
      <header class="home-insights__header">
        <div class="home-insights__heading">
          <SectionEyebrow class="home-insights__eyebrow">
            Insights
          </SectionEyebrow>

          <h2 class="home-insights__title">
            Practical technology knowledge

            <span class="home-insights__title-accent">
              for better business decisions.
            </span>
          </h2>
        </div>

        <div class="home-insights__introduction">
          <p>
            Technology decisions become easier when you understand what you are
            paying for, how systems work and where complexity is actually
            necessary.
          </p>

          <p>
            Webphin Insights turns technical subjects into useful, practical
            guidance for people making business and technology decisions.
          </p>
        </div>
      </header>

      <div class="home-insights__editorial">
        <NuxtLink
          v-if="featuredInsight"
          :to="featuredInsight.to"
          class="featured-insight"
          :aria-label="`Read ${featuredInsight.title}`"
        >
          <div class="featured-insight__top">
            <span class="featured-insight__label"> Featured guide </span>

            <span class="featured-insight__read-time">
              {{ featuredInsight.readTime }}
            </span>
          </div>

          <div class="featured-insight__content">
            <p class="featured-insight__category">
              {{ featuredInsight.category }}
            </p>

            <h3 class="featured-insight__title">
              {{ featuredInsight.title }}
            </h3>

            <p class="featured-insight__summary">
              {{ featuredInsight.summary }}
            </p>
          </div>

          <div class="featured-insight__action">
            <span class="featured-insight__action-label">
              Explore the guide
            </span>

            <span class="featured-insight__action-arrow" aria-hidden="true">
              →
            </span>
          </div>

          <span class="featured-insight__decorative-mark" aria-hidden="true">
            I
          </span>
        </NuxtLink>

        <div class="insight-list">
          <div class="insight-list__header">
            <div>
              <p class="insight-list__eyebrow">Explore</p>

              <h3 class="insight-list__title">More practical thinking</h3>
            </div>

            <span class="insight-list__count">
              {{ supportingInsights.length }} guides
            </span>
          </div>

          <div class="insight-list__items">
            <NuxtLink
              v-for="insight in supportingInsights"
              :key="insight.title"
              :to="insight.to"
              class="insight-item"
              :aria-label="`Read ${insight.title}`"
            >
              <div class="insight-item__content">
                <div class="insight-item__meta">
                  <span class="insight-item__category">
                    {{ insight.category }}
                  </span>

                  <span class="insight-item__separator" aria-hidden="true" />

                  <span class="insight-item__read-time">
                    {{ insight.readTime }}
                  </span>
                </div>

                <h4 class="insight-item__title">
                  {{ insight.title }}
                </h4>

                <p class="insight-item__summary">
                  {{ insight.summary }}
                </p>
              </div>

              <span class="insight-item__arrow" aria-hidden="true"> → </span>
            </NuxtLink>
          </div>

          <div class="insight-list__footer">
            <BaseButton to="/insights" variant="text">
              Explore all Insights
            </BaseButton>
          </div>
        </div>
      </div>

      <div class="home-insights__principle">
        <span class="home-insights__principle-mark" aria-hidden="true" />

        <p>
          Useful technical content should make decisions clearer, not make
          technology sound more complicated than it is.
        </p>
      </div>
    </section>
  </SectionWrapper>
</template>

<style scoped lang="scss">
@use '~~/app/assets/scss/abstracts/variables' as *;

// --------------------------------------------------
// Section
// --------------------------------------------------

.home-insights {
  display: flex;
  flex-direction: column;

  gap: clamp(3rem, 6vw, 5rem);
}

// --------------------------------------------------
// Section header
// --------------------------------------------------

.home-insights__header {
  display: grid;

  gap: 1.75rem;

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(320px, 0.6fr);

    align-items: end;

    gap: clamp(4rem, 8vw, 8rem);
  }
}

.home-insights__heading {
  max-width: 780px;
}

.home-insights__eyebrow {
  margin-bottom: 1.2rem;
}

.home-insights__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(2.5rem, 4.5vw, 4.2rem);
  font-weight: 700;

  line-height: 1.02;

  letter-spacing: -0.048em;
}

.home-insights__title-accent {
  display: block;

  color: $color-brand-red;
}

.home-insights__introduction {
  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  max-width: 530px;
}

.home-insights__introduction p {
  color: $color-text-secondary;

  font-size: clamp(0.96rem, 1.25vw, 1.05rem);

  line-height: 1.72;
}

// --------------------------------------------------
// Editorial layout
// --------------------------------------------------

.home-insights__editorial {
  display: grid;

  gap: clamp(1.5rem, 3vw, 2.25rem);

  align-items: stretch;

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 1.08fr)
      minmax(390px, 0.92fr);
  }
}

// --------------------------------------------------
// Featured Insight
// --------------------------------------------------

.featured-insight {
  position: relative;

  display: flex;
  flex-direction: column;

  min-width: 0;
  min-height: 520px;

  overflow: hidden;

  padding: clamp(1.6rem, 3.5vw, 2.6rem);

  color: $color-white;

  text-decoration: none;

  background: linear-gradient(145deg, #1b1e23 0%, #111317 62%, #20242a 100%);

  border: 1px solid rgb(255 255 255 / 7%);
  border-radius: $radius-xl;

  transition:
    box-shadow $transition-base,
    transform $transition-base;

  &::before {
    content: '';

    position: absolute;

    top: 0;
    right: 0;
    left: 0;

    height: 3px;

    background: linear-gradient(
      90deg,
      $color-brand-red 0%,
      $color-brand-red 36%,
      $color-brand-orange 36%,
      $color-brand-orange 54%,
      $color-brand-blue 54%,
      $color-brand-blue 76%,
      $color-brand-magenta 76%,
      $color-brand-magenta 89%,
      $color-brand-yellow 89%,
      $color-brand-yellow 100%
    );
  }

  &:hover {
    box-shadow: 0 28px 70px rgb(17 19 23 / 18%);

    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 3px solid rgb(227 40 47 / 28%);
    outline-offset: 4px;
  }
}

.featured-insight__top {
  position: relative;

  z-index: 2;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
}

.featured-insight__label {
  color: rgb(255 255 255 / 52%);

  font-size: 0.62rem;
  font-weight: 750;

  letter-spacing: 0.1em;

  text-transform: uppercase;
}

.featured-insight__read-time {
  display: inline-flex;
  align-items: center;

  min-height: 29px;

  padding-inline: 0.75rem;

  color: rgb(255 255 255 / 66%);

  background: rgb(255 255 255 / 5%);

  font-size: 0.61rem;
  font-weight: 650;

  border: 1px solid rgb(255 255 255 / 9%);
  border-radius: $radius-pill;
}

.featured-insight__content {
  position: relative;

  z-index: 2;

  max-width: 650px;

  margin-top: auto;
  padding-top: clamp(4rem, 8vw, 7rem);
}

.featured-insight__category {
  margin-bottom: 0.8rem;

  color: $color-brand-red;

  font-size: 0.64rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.featured-insight__title {
  color: $color-white;

  font-family: $font-heading;

  font-size: clamp(2rem, 4.3vw, 3.6rem);
  font-weight: 700;

  line-height: 1.04;

  letter-spacing: -0.048em;
}

.featured-insight__summary {
  max-width: 590px;

  margin-top: 1.25rem;

  color: rgb(255 255 255 / 63%);

  font-size: 0.9rem;

  line-height: 1.75;
}

.featured-insight__action {
  position: relative;

  z-index: 2;

  display: inline-flex;
  align-items: center;

  gap: 0.5rem;

  width: fit-content;

  margin-top: 1.8rem;

  color: $color-white;

  font-size: 0.76rem;
  font-weight: 700;
}

.featured-insight__action-arrow {
  color: $color-brand-red;

  font-size: 1rem;

  transition: transform $transition-fast;
}

.featured-insight:hover .featured-insight__action-arrow {
  transform: translateX(4px);
}

.featured-insight__decorative-mark {
  position: absolute;

  top: 0.16em;
  right: -0.04em;

  z-index: 1;

  color: rgb(255 255 255 / 2.5%);

  font-family: $font-heading;

  font-size: clamp(16rem, 32vw, 30rem);
  font-weight: 800;

  line-height: 0.8;

  pointer-events: none;
}

// --------------------------------------------------
// Supporting list
// --------------------------------------------------

.insight-list {
  display: flex;
  flex-direction: column;

  min-width: 0;

  padding: clamp(1.4rem, 3vw, 2rem) clamp(1.4rem, 3vw, 2rem)
    clamp(1.2rem, 2.5vw, 1.7rem);

  background: $color-background-soft;

  border: 1px solid $color-border;
  border-radius: $radius-xl;
}

.insight-list__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 1rem;

  padding-bottom: 1.3rem;

  border-bottom: 1px solid $color-border;
}

.insight-list__eyebrow {
  margin-bottom: 0.4rem;

  color: $color-brand-red;

  font-size: 0.6rem;
  font-weight: 750;

  letter-spacing: 0.09em;

  text-transform: uppercase;
}

.insight-list__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.35rem, 2vw, 1.7rem);
  font-weight: 700;

  line-height: 1.15;

  letter-spacing: -0.03em;
}

.insight-list__count {
  flex: 0 0 auto;

  color: $color-text-muted;

  font-size: 0.62rem;
  font-weight: 650;

  white-space: nowrap;
}

// --------------------------------------------------
// List item
// --------------------------------------------------

.insight-list__items {
  display: flex;
  flex-direction: column;
}

.insight-item {
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto;

  align-items: center;

  gap: 1rem;

  padding-block: 1.35rem;

  color: inherit;

  text-decoration: none;

  border-bottom: 1px solid $color-border;

  transition: padding-left $transition-fast;

  &:hover {
    padding-left: 0.35rem;
  }

  &:focus-visible {
    outline: 2px solid rgb(227 40 47 / 22%);
    outline-offset: 3px;
  }
}

.insight-item__content {
  min-width: 0;
}

.insight-item__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 0.5rem;

  margin-bottom: 0.55rem;
}

.insight-item__category,
.insight-item__read-time {
  color: $color-text-muted;

  font-size: 0.57rem;
  font-weight: 700;

  letter-spacing: 0.055em;

  text-transform: uppercase;
}

.insight-item__category {
  color: $color-brand-red;
}

.insight-item__separator {
  width: 3px;
  height: 3px;

  background: $color-border-strong;

  border-radius: 50%;
}

.insight-item__title {
  max-width: 520px;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1rem, 1.7vw, 1.2rem);
  font-weight: 650;

  line-height: 1.35;

  letter-spacing: -0.02em;
}

.insight-item__summary {
  max-width: 520px;

  margin-top: 0.5rem;

  color: $color-text-muted;

  font-size: 0.72rem;

  line-height: 1.6;
}

.insight-item__arrow {
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;

  width: 30px;
  height: 30px;

  color: $color-text-muted;

  font-size: 0.95rem;

  border: 1px solid $color-border;
  border-radius: 50%;

  transition:
    color $transition-fast,
    border-color $transition-fast,
    transform $transition-fast;
}

.insight-item:hover .insight-item__arrow {
  color: $color-brand-red;

  border-color: rgb(227 40 47 / 25%);

  transform: translateX(3px);
}

// --------------------------------------------------
// List footer
// --------------------------------------------------

.insight-list__footer {
  padding-top: 1.2rem;
}

// --------------------------------------------------
// Principle
// --------------------------------------------------

.home-insights__principle {
  display: grid;

  grid-template-columns:
    28px
    minmax(0, 1fr);

  align-items: start;

  gap: 0.9rem;

  max-width: 760px;
}

.home-insights__principle-mark {
  position: relative;

  width: 10px;
  height: 10px;

  margin-top: 0.43rem;
  margin-left: 4px;

  background: $color-brand-red;

  border-radius: 50%;

  &::before {
    content: '';

    position: absolute;

    inset: -5px;

    border: 1px solid rgb(227 40 47 / 18%);
    border-radius: 50%;
  }
}

.home-insights__principle p {
  color: $color-text-muted;

  font-size: 0.8rem;

  line-height: 1.7;
}

// --------------------------------------------------
// Tablet / mobile
// --------------------------------------------------

@media (max-width: 767px) {
  .featured-insight {
    min-height: 460px;
  }
}

@media (max-width: 575px) {
  .home-insights {
    gap: 3rem;
  }

  .home-insights__title {
    font-size: clamp(2.25rem, 11vw, 3.15rem);
  }

  .featured-insight {
    min-height: 440px;

    padding: 1.4rem;

    border-radius: $radius-lg;
  }

  .featured-insight__content {
    padding-top: 3rem;
  }

  .featured-insight__title {
    font-size: clamp(1.9rem, 9vw, 2.7rem);
  }

  .insight-list {
    padding: 1.35rem;

    border-radius: $radius-lg;
  }

  .insight-list__header {
    flex-direction: column;
  }

  .insight-item {
    grid-template-columns: 1fr;

    gap: 0.8rem;
  }

  .insight-item__arrow {
    width: auto;
    height: auto;

    justify-content: flex-start;

    border: 0;
    border-radius: 0;
  }
}

// --------------------------------------------------
// Reduced motion
// --------------------------------------------------

@media (prefers-reduced-motion: reduce) {
  .featured-insight,
  .featured-insight__action-arrow,
  .insight-item,
  .insight-item__arrow {
    transition: none;
  }

  .featured-insight:hover {
    transform: none;
  }

  .featured-insight:hover .featured-insight__action-arrow,
  .insight-item:hover .insight-item__arrow {
    transform: none;
  }
}
</style>
