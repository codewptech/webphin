<script setup lang="ts">
import { homeContent } from "~~/app/config/content/home";
import { NuxtLink } from "#components";

import BaseButton from "~~/app/components/ui/BaseButton.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";

import { workProjects } from "~~/app/config/projects";

const content = homeContent.featuredWork;
</script>

<template>
  <SectionWrapper tone="default" spacing="lg">
    <section class="home-work">
      <header class="home-work__header">
        <div class="home-work__heading">
          <SectionEyebrow class="home-work__eyebrow">
            {{ content.eyebrow }}
          </SectionEyebrow>

          <h2 class="home-work__title">
            {{ content.title }}

            <span class="home-work__title-accent">
              {{ content.accent }}
            </span>
          </h2>
        </div>

        <div class="home-work__header-content">
          <p class="home-work__intro">
            {{ content.intro }}
          </p>

          <BaseButton to="/work" variant="text">
            {{ content.workAction }}
          </BaseButton>
        </div>
      </header>

      <div class="home-work__grid">
        <NuxtLink
          v-for="project in workProjects"
          :key="project.slug"
          :to="project.slug"
          class="work-card"
          :aria-label="`View ${project.name} project`"
        >
          <div class="work-card__header">
            <div class="work-card__logo">
              <img
                v-if="project.logoUrl"
                :src="project.logoUrl"
                :alt="project.logoAlt ?? `${project.name} logo`"
                class="work-card__logo-image"
                loading="lazy"
                decoding="async"
              />

              <span
                v-else
                class="work-card__logo-placeholder"
                aria-hidden="true"
              >
                {{ project.logoText }}
              </span>
            </div>

            <div class="work-card__identity">
              <h3 class="work-card__name">
                {{ project.name }}
              </h3>

              <p class="work-card__category">
                {{ project.category }}
              </p>
            </div>
          </div>

          <p class="work-card__description">
            {{ project.description }}
          </p>

          <div class="work-card__capabilities">
            <span
              v-for="capability in project.capabilities"
              :key="capability"
              class="work-card__capability"
            >
              {{ capability }}
            </span>
          </div>

          <div class="work-card__action">
            <span class="work-card__action-label"> {{ content.action }} </span>

            <span class="work-card__action-arrow" aria-hidden="true"> → </span>
          </div>
        </NuxtLink>
      </div>

      <div class="home-work__closing">
        <span class="home-work__closing-mark" aria-hidden="true" />

        <p>
          {{ content.description }}
        </p>
      </div>
    </section>
  </SectionWrapper>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;

// --------------------------------------------------
// Section
// --------------------------------------------------

.home-work {
  display: flex;
  flex-direction: column;

  gap: clamp(3rem, 6vw, 5rem);
}

// --------------------------------------------------
// Section header
// --------------------------------------------------

.home-work__header {
  display: grid;

  gap: 1.75rem;

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(300px, 0.58fr);

    align-items: end;

    gap: clamp(4rem, 8vw, 8rem);
  }
}

.home-work__heading {
  max-width: 760px;
}

.home-work__eyebrow {
  margin-bottom: 1.2rem;
}

.home-work__title {
  font-size: clamp(2.5rem, 4.5vw, 4.2rem);

  line-height: 1.02;

  letter-spacing: -0.048em;
}

.home-work__title-accent {
  display: block;

  color: $color-brand-red;
}

.home-work__header-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.35rem;

  max-width: 520px;
}

.home-work__intro {
  color: $color-text-secondary;

  font-size: clamp(0.98rem, 1.35vw, 1.08rem);

  line-height: 1.75;
}

// --------------------------------------------------
// Project grid
//
// Maximum: two columns.
// If two comfortable cards cannot fit,
// the browser automatically moves to one column.
// --------------------------------------------------

.home-work__grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 32rem), 1fr));

  gap: clamp(1.25rem, 2.5vw, 2rem);

  align-items: stretch;
}

// --------------------------------------------------
// Work card
// --------------------------------------------------

.work-card {
  display: flex;
  flex-direction: column;

  min-width: 0;
  height: 100%;

  padding: clamp(1.5rem, 3vw, 2rem);

  color: inherit;

  text-decoration: none;

  background: $color-white;

  border: 1px solid $color-border;
  border-radius: $radius-lg;

  transition:
    border-color $transition-base,
    box-shadow $transition-base,
    transform $transition-base;

  &:hover {
    border-color: $color-border-strong;

    box-shadow: 0 20px 50px rgb(17 19 23 / 7%);

    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 3px solid rgb(227 40 47 / 20%);
    outline-offset: 4px;

    border-color: rgb(227 40 47 / 40%);

    box-shadow: 0 20px 50px rgb(17 19 23 / 7%);
  }
}

// --------------------------------------------------
// Project identity
// --------------------------------------------------

.work-card__header {
  display: flex;
  align-items: center;

  gap: 1rem;

  min-width: 0;
}

.work-card__logo {
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;

  width: 64px;
  height: 64px;

  overflow: hidden;
}

.work-card__logo-image {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;
}

.work-card__logo-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  color: $color-black;

  background: $color-background-soft;

  font-family: $font-heading;

  font-size: 0.85rem;
  font-weight: 750;

  letter-spacing: -0.02em;

  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.work-card__identity {
  min-width: 0;
}

.work-card__name {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.55rem, 3vw, 2rem);
  font-weight: 700;

  line-height: 1.1;

  letter-spacing: -0.038em;
}

.work-card__category {
  margin-top: 0.35rem;

  color: $color-brand-red;

  font-size: 0.72rem;
  font-weight: 700;

  line-height: 1.4;

  letter-spacing: 0.025em;
}

// --------------------------------------------------
// Description
// --------------------------------------------------

.work-card__description {
  max-width: 600px;

  margin-top: 1.35rem;

  color: $color-text-secondary;

  font-size: 0.92rem;

  line-height: 1.72;
}

// --------------------------------------------------
// Capabilities
// --------------------------------------------------

.work-card__capabilities {
  display: flex;
  flex-wrap: wrap;

  gap: 0.45rem;

  margin-top: 1.35rem;
}

.work-card__capability {
  display: inline-flex;
  align-items: center;

  min-height: 30px;

  padding-inline: 0.75rem;

  color: $color-text-muted;

  background: $color-background-soft;

  font-size: 0.63rem;
  font-weight: 600;

  line-height: 1;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

// --------------------------------------------------
// Action
// --------------------------------------------------

.work-card__action {
  display: inline-flex;
  align-items: center;

  gap: 0.45rem;

  width: fit-content;

  margin-top: auto;
  padding-top: 1.7rem;

  color: $color-black;

  font-size: 0.78rem;
  font-weight: 700;

  line-height: 1.2;
}

.work-card__action-label {
  position: relative;

  &::after {
    content: "";

    position: absolute;

    right: 0;
    bottom: -5px;
    left: 0;

    height: 1px;

    background: $color-brand-red;

    opacity: 0;

    transform: scaleX(0.65);
    transform-origin: left center;

    transition:
      opacity $transition-fast,
      transform $transition-fast;
  }
}

.work-card__action-arrow {
  color: $color-brand-red;

  font-size: 1rem;

  line-height: 1;

  transition: transform $transition-fast;
}

.work-card:hover .work-card__action-label::after,
.work-card:focus-visible .work-card__action-label::after {
  opacity: 1;

  transform: scaleX(1);
}

.work-card:hover .work-card__action-arrow,
.work-card:focus-visible .work-card__action-arrow {
  transform: translateX(4px);
}

// --------------------------------------------------
// Closing note
// --------------------------------------------------

.home-work__closing {
  display: grid;

  grid-template-columns:
    28px
    minmax(0, 1fr);

  align-items: start;

  gap: 0.9rem;

  max-width: 720px;
}

.home-work__closing-mark {
  position: relative;

  width: 10px;
  height: 10px;

  margin-top: 0.42rem;
  margin-left: 4px;

  background: $color-brand-red;

  border-radius: 50%;

  &::before {
    content: "";

    position: absolute;

    inset: -5px;

    border: 1px solid rgb(227 40 47 / 18%);
    border-radius: 50%;
  }
}

.home-work__closing p {
  color: $color-text-muted;

  font-size: 0.8rem;

  line-height: 1.7;
}

// --------------------------------------------------
// Mobile
// --------------------------------------------------

@media (max-width: 575px) {
  .home-work {
    gap: 3rem;
  }

  .home-work__title {
    font-size: clamp(2.3rem, 11vw, 3.15rem);
  }

  .work-card {
    padding: 1.35rem;
  }

  .work-card__header {
    align-items: flex-start;
  }

  .work-card__logo {
    width: 56px;
    height: 56px;
  }

  .work-card__name {
    font-size: 1.5rem;
  }

  .work-card__description {
    margin-top: 1.2rem;
  }

  .work-card__capabilities {
    margin-top: 1.2rem;
  }

  .work-card__action {
    padding-top: 1.5rem;
  }
}

// --------------------------------------------------
// Reduced motion
// --------------------------------------------------

@media (prefers-reduced-motion: reduce) {
  .work-card,
  .work-card__action-label::after,
  .work-card__action-arrow {
    transition: none;
  }

  .work-card:hover {
    transform: none;
  }

  .work-card:hover .work-card__action-arrow,
  .work-card:focus-visible .work-card__action-arrow {
    transform: none;
  }
}
</style>
