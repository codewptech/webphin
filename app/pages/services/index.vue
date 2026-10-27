<script setup lang="ts">
import { servicesContent } from "~~/app/config/content/services/index";
import SequenceMarker from "~~/app/components/ui/SequenceMarker.vue";
import { useSeoMeta } from "#imports";

import { NuxtLink } from "#components";

import BaseButton from "~~/app/components/ui/BaseButton.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";
import ServiceIcon from "~~/app/components/services/ServiceIcon.vue";

import { services } from "~~/app/config/services";

import { workProjects } from "~~/app/config/projects";

const content = servicesContent;
const { systemLayers, typicalSituations, approachSteps } = content;

useSeoMeta(content.seo);

const selectedProjects = workProjects.slice(0, 3);
</script>

<template>
  <div class="services-page">
    <!-- ==================================================
         HERO
    ================================================== -->

    <SectionWrapper tone="default" spacing="lg">
      <section class="services-hero">
        <div class="services-hero__content">
          <SectionEyebrow class="services-hero__eyebrow">
            {{ content.sections.hero.eyebrow }}
          </SectionEyebrow>

          <h1 class="services-hero__title">
            {{ content.sections.hero.title }}

            <span class="services-hero__title-accent">
              {{ content.sections.hero.accent }}
            </span>
          </h1>

          <p class="services-hero__description">
            {{ content.sections.hero.description }}
          </p>

          <div class="services-hero__actions">
            <BaseButton to="/contact" variant="primary" size="lg">
              {{ content.sections.hero.contactAction }}
            </BaseButton>

            <BaseButton href="#service-areas" variant="secondary" size="lg">
              {{ content.sections.hero.serviceAreasAction }}
            </BaseButton>
          </div>

          <div class="services-hero__principle">
            <span class="services-hero__principle-mark" aria-hidden="true" />

            <p>
              {{ content.sections.hero.principle.description }}
            </p>
          </div>
        </div>

        <div class="services-hero__framework">
          <div class="services-hero__framework-accent" />

          <div class="services-hero__framework-header">
            <span class="services-hero__framework-label">
              {{ content.sections.hero.frameworkHeader.frameworkLabel }}
            </span>

            <span class="services-hero__framework-status">
              {{ content.sections.hero.frameworkHeader.frameworkStatus }}
            </span>
          </div>

          <h2 class="services-hero__framework-title">
            {{ content.sections.hero.framework.frameworkTitle }}
          </h2>

          <div class="services-hero__questions">
            <div class="services-hero__question">
              <p>{{ content.sections.hero.questions[0] }}</p>
            </div>

            <div class="services-hero__question">
              <p>{{ content.sections.hero.questions[1] }}</p>
            </div>

            <div class="services-hero__question">
              <p>{{ content.sections.hero.questions[2] }}</p>
            </div>

            <div class="services-hero__question">
              <p>{{ content.sections.hero.questions[3] }}</p>
            </div>
          </div>

          <div class="services-hero__framework-outcome">
            <span> {{ content.sections.hero.frameworkOutcome.label }} </span>

            <strong>
              {{ content.sections.hero.frameworkOutcome.statement }}
            </strong>
          </div>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         SERVICE AREAS
    ================================================== -->

    <SectionWrapper tone="soft" spacing="lg">
      <section id="service-areas" class="service-areas">
        <header class="service-areas__header">
          <div>
            <SectionEyebrow class="service-areas__eyebrow">
              {{ content.sections.serviceAreas.eyebrow }}
            </SectionEyebrow>

            <h2 class="service-areas__title">
              {{ content.sections.serviceAreas.title }}

              <span class="service-areas__title-accent">
                {{ content.sections.serviceAreas.accent }}
              </span>
            </h2>
          </div>

          <p class="service-areas__intro">
            {{ content.sections.serviceAreas.intro }}
          </p>
        </header>

        <div class="service-areas__list">
          <NuxtLink
            v-for="service in services"
            :key="service.slug"
            :to="service.slug"
            class="service-area"
          >
            <div class="service-area__identity">
              <div class="service-area__icon">
                <ServiceIcon :icon="service.icon" />
              </div>

              <div>
                <span class="service-area__layer">
                  {{ service.layer }}
                </span>

                <h3 class="service-area__title">
                  {{ service.title }}
                </h3>

                <p class="service-area__description">
                  {{ service.description }}
                </p>
              </div>
            </div>

            <div class="service-area__detail">
              <div class="service-area__use">
                <span class="service-area__detail-label">
                  {{ content.sections.serviceAreas.detailLabel }}
                </span>

                <p>
                  {{ service.whenUseful }}
                </p>
              </div>

              <div class="service-area__capabilities">
                <span
                  v-for="capability in service.capabilities"
                  :key="capability"
                  class="service-area__capability"
                >
                  {{ capability }}
                </span>
              </div>

              <div class="service-area__action">
                <span> {{ content.sections.serviceAreas.label }} </span>

                <span class="service-area__arrow" aria-hidden="true"> → </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         CONNECTED SYSTEM
    ================================================== -->

    <SectionWrapper tone="dark" spacing="lg">
      <section class="service-system">
        <div class="service-system__intro">
          <SectionEyebrow class="service-system__eyebrow">
            {{ content.sections.serviceSystem.eyebrow }}
          </SectionEyebrow>

          <h2 class="service-system__title">
            {{ content.sections.serviceSystem.title }}

            <span> {{ content.sections.serviceSystem.accent }} </span>
          </h2>

          <p class="service-system__description">
            {{ content.sections.serviceSystem.descriptions[0] }}
          </p>

          <div class="service-system__principle">
            <span class="service-system__principle-mark" aria-hidden="true" />

            <p>
              {{ content.sections.serviceSystem.principle.description }}
            </p>
          </div>
        </div>

        <div class="system-map">
          <div
            v-for="layer in systemLayers"
            :key="layer.label"
            class="system-layer"
          >
            <div class="system-layer__header">
              <span class="system-layer__label">
                {{ layer.label }}
              </span>

              <h3 class="system-layer__title">
                {{ layer.title }}
              </h3>
            </div>

            <p class="system-layer__description">
              {{ layer.description }}
            </p>

            <div class="system-layer__examples">
              <span v-for="example in layer.examples" :key="example">
                {{ example }}
              </span>
            </div>
          </div>

          <div class="system-map__cross-layer">
            <div>
              <span class="system-map__cross-label">
                {{ content.sections.serviceSystem.crossLabel }}
              </span>

              <strong> {{ content.sections.serviceSystem.statement }} </strong>
            </div>

            <p>
              {{ content.sections.serviceSystem.descriptions[1] }}
            </p>
          </div>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         TYPICAL SITUATIONS
    ================================================== -->

    <SectionWrapper tone="default" spacing="lg">
      <section class="service-situations">
        <header class="service-situations__header">
          <div>
            <SectionEyebrow class="service-situations__eyebrow">
              {{ content.sections.serviceSituations.eyebrow }}
            </SectionEyebrow>

            <h2 class="service-situations__title">
              {{ content.sections.serviceSituations.title }}

              <span> {{ content.sections.serviceSituations.accent }} </span>
            </h2>
          </div>

          <p class="service-situations__intro">
            {{ content.sections.serviceSituations.intro }}
          </p>
        </header>

        <div class="service-situations__grid">
          <article
            v-for="situation in typicalSituations"
            :key="situation.statement"
            class="situation-card"
          >
            <span class="situation-card__label">
              {{ situation.label }}
            </span>

            <h3 class="situation-card__statement">
              {{ content.sections.serviceSituations.statements[0]
              }}{{ situation.statement
              }}{{ content.sections.serviceSituations.statements[1] }}
            </h3>

            <p class="situation-card__response">
              {{ situation.response }}
            </p>
          </article>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         APPROACH
    ================================================== -->

    <SectionWrapper tone="soft" spacing="lg">
      <section class="services-approach">
        <header class="services-approach__header">
          <div>
            <SectionEyebrow class="services-approach__eyebrow">
              {{ content.sections.servicesApproach.eyebrow }}
            </SectionEyebrow>

            <h2 class="services-approach__title">
              {{ content.sections.servicesApproach.title }}

              <span> {{ content.sections.servicesApproach.accent }} </span>
            </h2>
          </div>

          <p class="services-approach__intro">
            {{ content.sections.servicesApproach.intro }}
          </p>
        </header>

        <ol class="services-approach__steps">
          <li
            v-for="(step, index) in approachSteps"
            :key="step.title"
            class="approach-step"
          >
            <div class="approach-step__heading">
              <SequenceMarker :step="index + 1" />
              <h3 class="approach-step__title">
                {{ step.title }}
              </h3>
            </div>

            <p class="approach-step__description">
              {{ step.description }}
            </p>
          </li>
        </ol>

        <div class="services-approach__principle">
          <span class="services-approach__principle-mark" aria-hidden="true" />

          <p>
            {{ content.sections.servicesApproach.principle.description }}
          </p>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         WORK CONNECTION
    ================================================== -->

    <SectionWrapper tone="default" spacing="lg">
      <section class="services-work">
        <header class="services-work__header">
          <div>
            <SectionEyebrow class="services-work__eyebrow">
              {{ content.sections.servicesWork.eyebrow }}
            </SectionEyebrow>

            <h2 class="services-work__title">
              {{ content.sections.servicesWork.title }}

              <span> {{ content.sections.servicesWork.accent }} </span>
            </h2>
          </div>

          <div class="services-work__intro">
            <p>
              {{ content.sections.servicesWork.description }}
            </p>

            <BaseButton to="/work" variant="text">
              {{ content.sections.servicesWork.workAction }}
            </BaseButton>
          </div>
        </header>

        <div class="services-work__projects">
          <NuxtLink
            v-for="project in selectedProjects"
            :key="project.slug"
            :to="project.slug"
            class="services-project"
          >
            <span class="services-project__category">
              {{ project.category }}
            </span>

            <h3 class="services-project__title">
              {{ project.name }}
            </h3>

            <p class="services-project__description">
              {{ project.description }}
            </p>

            <div class="services-project__action">
              <span> {{ content.sections.servicesWork.label }} </span>

              <span aria-hidden="true"> → </span>
            </div>
          </NuxtLink>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         FINAL CTA
    ================================================== -->

    <SectionWrapper class="services-cta-section" tone="dark" spacing="lg">
      <section class="services-cta">
        <div>
          <SectionEyebrow class="services-cta__eyebrow">
            {{ content.sections.cta.eyebrow }}
          </SectionEyebrow>

          <h2 class="services-cta__title">
            {{ content.sections.cta.title }}

            <span> {{ content.sections.cta.accent }} </span>
          </h2>
        </div>

        <div class="services-cta__content">
          <p>
            {{ content.sections.cta.description }}
          </p>

          <BaseButton to="/contact" variant="primary" size="lg">
            {{ content.sections.cta.contactAction }}
          </BaseButton>

          <div class="services-cta__note">
            <span class="services-cta__note-mark" aria-hidden="true" />

            <p>
              {{ content.sections.cta.note.description }}
            </p>
          </div>
        </div>
      </section>
    </SectionWrapper>
  </div>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
@use "~~/app/assets/scss/abstracts/mixins" as *;

// ==================================================
// PAGE
// ==================================================

.services-page {
  overflow: hidden;
}

// ==================================================
// HERO
// ==================================================

.services-hero {
  display: grid;

  gap: clamp(3rem, 7vw, 7rem);

  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 1.05fr)
      minmax(410px, 0.95fr);
  }
}

.services-hero__content {
  max-width: 780px;
}

.services-hero__eyebrow {
  margin-bottom: 1.2rem;
}

.services-hero__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 700;

  line-height: 0.97;

  letter-spacing: -0.058em;
}

.services-hero__title-accent {
  display: block;

  color: $color-brand-red;
}

.services-hero__description {
  max-width: 650px;

  margin-top: 1.6rem;

  color: $color-text-secondary;

  font-size: clamp(1rem, 1.4vw, 1.1rem);

  line-height: 1.78;
}

.services-hero__actions {
  display: flex;
  flex-wrap: wrap;

  gap: 0.8rem;

  margin-top: 1.9rem;
}

.services-hero__principle {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  align-items: start;

  gap: 0.8rem;

  max-width: 590px;

  margin-top: 1.8rem;
  padding-top: 1.45rem;

  border-top: 1px solid $color-border;
}

.services-hero__principle-mark {
  position: relative;

  width: 8px;
  height: 8px;

  margin-top: 0.42rem;

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

.services-hero__principle p {
  color: $color-text-muted;

  font-size: 0.76rem;
  font-weight: 600;

  line-height: 1.65;
}

// --------------------------------------------------
// Hero framework
// --------------------------------------------------

.services-hero__framework {
  position: relative;

  overflow: hidden;

  padding: clamp(1.5rem, 3vw, 2.25rem);

  background: $color-white;

  border: 1px solid $color-border;
  border-radius: $radius-xl;

  box-shadow: 0 30px 80px rgb(17 19 23 / 7%);
}

.services-hero__framework-accent {
  position: absolute;

  top: 0;
  right: 0;
  left: 0;

  height: 3px;

  background: linear-gradient(
    90deg,
    $color-brand-red 0%,
    $color-brand-red 34%,
    $color-brand-orange 34%,
    $color-brand-orange 52%,
    $color-brand-blue 52%,
    $color-brand-blue 74%,
    $color-brand-magenta 74%,
    $color-brand-magenta 88%,
    $color-brand-yellow 88%,
    $color-brand-yellow 100%
  );
}

.services-hero__framework-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  padding-bottom: 1.4rem;

  border-bottom: 1px solid $color-border;
}

.services-hero__framework-label {
  color: $color-text-muted;

  font-size: 0.61rem;
  font-weight: 750;

  letter-spacing: 0.09em;

  text-transform: uppercase;
}

.services-hero__framework-status {
  display: inline-flex;
  align-items: center;

  min-height: 28px;

  padding-inline: 0.72rem;

  color: $color-text-muted;

  background: $color-background-soft;

  font-size: 0.58rem;
  font-weight: 650;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

.services-hero__framework-title {
  max-width: 470px;

  margin-top: 1.5rem;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.7rem, 3vw, 2.4rem);
  font-weight: 700;

  line-height: 1.12;

  letter-spacing: -0.04em;
}

.services-hero__questions {
  margin-top: 1.4rem;

  border-top: 1px solid $color-border;
}

.services-hero__question {
  display: grid;

  grid-template-columns: minmax(0, 1fr);

  gap: 1rem;

  align-items: center;

  padding-block: 0.82rem;

  border-bottom: 1px solid $color-border;
}

.services-hero__question p {
  color: $color-text-secondary;

  font-size: 0.75rem;
  font-weight: 650;

  line-height: 1.45;
}

.services-hero__framework-outcome {
  margin-top: 1.4rem;

  padding: 1rem 1.05rem;

  background: $color-background-soft;

  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.services-hero__framework-outcome span {
  display: block;

  margin-bottom: 0.35rem;

  color: $color-brand-red;

  font-size: 0.56rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.services-hero__framework-outcome strong {
  color: $color-black;

  font-family: $font-heading;

  font-size: 0.84rem;
  font-weight: 650;

  line-height: 1.45;
}

// ==================================================
// SERVICE AREAS
// ==================================================

.service-areas {
  scroll-margin-top: 100px;
}

.service-areas__header {
  display: grid;

  gap: 1.75rem;

  margin-bottom: clamp(3rem, 6vw, 5rem);

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(300px, 0.55fr);

    align-items: end;

    gap: clamp(4rem, 8vw, 8rem);
  }
}

.service-areas__eyebrow {
  margin-bottom: 1.1rem;
}

.service-areas__title {
  max-width: 760px;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(2.5rem, 4.5vw, 4.2rem);
  font-weight: 700;

  line-height: 1.02;

  letter-spacing: -0.048em;
}

.service-areas__title-accent {
  display: block;

  color: $color-brand-red;
}

.service-areas__intro {
  max-width: 520px;

  color: $color-text-secondary;

  font-size: clamp(0.96rem, 1.25vw, 1.05rem);

  line-height: 1.75;
}

// --------------------------------------------------
// Service rows
// --------------------------------------------------

.service-areas__list {
  border-top: 1px solid $color-border;
}

.service-area {
  display: grid;

  gap: clamp(1.75rem, 4vw, 4rem);

  padding-block: clamp(2rem, 4vw, 3rem);

  color: inherit;

  text-decoration: none;

  border-bottom: 1px solid $color-border;

  transition:
    padding-left $transition-fast,
    padding-right $transition-fast,
    background-color $transition-fast;

  @media (min-width: 900px) {
    grid-template-columns:
      minmax(0, 0.9fr)
      minmax(0, 1.1fr);

    align-items: start;
  }

  &:hover {
    padding-right: clamp(0.5rem, 1vw, 1rem);
    padding-left: clamp(0.5rem, 1vw, 1rem);

    background: rgb(255 255 255 / 58%);
  }

  &:focus-visible {
    outline: 3px solid rgb(227 40 47 / 18%);
    outline-offset: 5px;
  }
}

.service-area__identity {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 1rem;
}

.service-area__icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  padding: 12px;

  color: $color-text-secondary;

  background: $color-white;

  border: 1px solid $color-border;
  border-radius: $radius-md;

  transition:
    color $transition-fast,
    border-color $transition-fast,
    transform $transition-fast;
}

.service-area:hover .service-area__icon {
  color: $color-brand-red;

  border-color: rgb(227 40 47 / 20%);

  transform: translateY(-2px);
}

.service-area__layer {
  display: block;

  margin-bottom: 0.5rem;

  color: $color-brand-red;

  font-size: 0.58rem;
  font-weight: 750;

  letter-spacing: 0.09em;

  text-transform: uppercase;
}

.service-area__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.65rem, 3vw, 2.4rem);
  font-weight: 700;

  line-height: 1.12;

  letter-spacing: -0.038em;
}

.service-area__description {
  max-width: 590px;

  margin-top: 0.85rem;

  color: $color-text-secondary;

  font-size: 0.85rem;

  line-height: 1.7;
}

.service-area__detail {
  min-width: 0;
}

.service-area__detail-label {
  display: block;

  margin-bottom: 0.5rem;

  color: $color-text-muted;

  font-size: 0.57rem;
  font-weight: 750;

  letter-spacing: 0.085em;

  text-transform: uppercase;
}

.service-area__use p {
  max-width: 620px;

  color: $color-text-secondary;

  font-size: 0.78rem;

  line-height: 1.68;
}

.service-area__capabilities {
  display: flex;
  flex-wrap: wrap;

  gap: 0.45rem;

  margin-top: 1.25rem;
}

.service-area__capability {
  display: inline-flex;
  align-items: center;

  min-height: 29px;

  padding-inline: 0.72rem;

  color: $color-text-muted;

  background: $color-white;

  font-size: 0.6rem;
  font-weight: 600;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

.service-area__action {
  display: inline-flex;
  align-items: center;

  gap: 0.45rem;

  margin-top: 1.35rem;

  color: $color-black;

  font-size: 0.7rem;
  font-weight: 700;
}

.service-area__arrow {
  color: $color-brand-red;

  transition: transform $transition-fast;
}

.service-area:hover .service-area__arrow {
  transform: translateX(4px);
}

// ==================================================
// CONNECTED SYSTEM
// ==================================================

.service-system {
  display: grid;

  gap: clamp(3rem, 7vw, 7rem);

  align-items: start;

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 0.72fr)
      minmax(480px, 1.28fr);
  }
}

.service-system__intro {
  max-width: 570px;
}

.service-system__eyebrow {
  margin-bottom: 1.2rem;
}

.service-system__title {
  color: $color-white;

  font-family: $font-heading;

  font-size: clamp(2.5rem, 4.6vw, 4.2rem);
  font-weight: 700;

  line-height: 1.02;

  letter-spacing: -0.05em;
}

.service-system__title span {
  display: block;

  color: $color-brand-red;
}

.service-system__description {
  margin-top: 1.4rem;

  color: rgb(255 255 255 / 64%);

  font-size: 0.95rem;

  line-height: 1.75;
}

.service-system__principle {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 0.85rem;

  margin-top: 1.8rem;
  padding-top: 1.5rem;

  border-top: 1px solid rgb(255 255 255 / 10%);
}

.service-system__principle-mark {
  width: 9px;
  height: 9px;

  margin-top: 0.45rem;

  background: $color-brand-red;

  border-radius: 50%;
}

.service-system__principle p {
  color: rgb(255 255 255 / 50%);

  font-size: 0.75rem;
  font-weight: 600;

  line-height: 1.65;
}

// --------------------------------------------------
// System map
// --------------------------------------------------

.system-map {
  overflow: hidden;

  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: $radius-xl;
}

.system-layer {
  display: grid;

  gap: 0.8rem;

  padding: clamp(1.3rem, 2.5vw, 1.8rem);

  border-bottom: 1px solid rgb(255 255 255 / 9%);

  @media (min-width: 700px) {
    grid-template-columns:
      minmax(155px, 0.32fr)
      minmax(0, 0.68fr);

    column-gap: 1.5rem;
  }
}

.system-layer__header {
  min-width: 0;
}

.system-layer__label {
  display: block;

  margin-bottom: 0.4rem;

  color: $color-brand-red;

  font-size: 0.56rem;
  font-weight: 750;

  letter-spacing: 0.09em;

  text-transform: uppercase;
}

.system-layer__title {
  color: $color-white;

  font-family: $font-heading;

  font-size: 1rem;
  font-weight: 650;

  line-height: 1.4;
}

.system-layer__description {
  color: rgb(255 255 255 / 54%);

  font-size: 0.72rem;

  line-height: 1.65;
}

.system-layer__examples {
  display: flex;
  flex-wrap: wrap;

  grid-column: 1 / -1;

  gap: 0.4rem;
}

.system-layer__examples span {
  display: inline-flex;
  align-items: center;

  min-height: 27px;

  padding-inline: 0.67rem;

  color: rgb(255 255 255 / 65%);

  background: rgb(255 255 255 / 5%);

  font-size: 0.58rem;
  font-weight: 600;

  border: 1px solid rgb(255 255 255 / 9%);
  border-radius: $radius-pill;
}

.system-map__cross-layer {
  display: grid;

  gap: 0.8rem;

  padding: clamp(1.35rem, 2.5vw, 1.9rem);

  background: rgb(227 40 47 / 7%);

  @media (min-width: 700px) {
    grid-template-columns:
      minmax(155px, 0.32fr)
      minmax(0, 0.68fr);

    gap: 1.5rem;
  }
}

.system-map__cross-label {
  display: block;

  margin-bottom: 0.4rem;

  color: $color-brand-red;

  font-size: 0.56rem;
  font-weight: 750;

  letter-spacing: 0.09em;

  text-transform: uppercase;
}

.system-map__cross-layer strong {
  color: $color-white;

  font-family: $font-heading;

  font-size: 1rem;
  font-weight: 650;
}

.system-map__cross-layer p {
  color: rgb(255 255 255 / 56%);

  font-size: 0.72rem;

  line-height: 1.65;
}

// ==================================================
// SITUATIONS
// ==================================================

.service-situations__header {
  display: grid;

  gap: 1.75rem;

  margin-bottom: clamp(3rem, 6vw, 5rem);

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(300px, 0.55fr);

    align-items: end;

    gap: clamp(4rem, 8vw, 8rem);
  }
}

.service-situations__eyebrow {
  margin-bottom: 1.1rem;
}

.service-situations__title {
  max-width: 780px;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(2.5rem, 4.5vw, 4.1rem);
  font-weight: 700;

  line-height: 1.03;

  letter-spacing: -0.048em;
}

.service-situations__title span {
  display: block;

  color: $color-brand-red;
}

.service-situations__intro {
  max-width: 500px;

  color: $color-text-secondary;

  font-size: 0.98rem;

  line-height: 1.72;
}

.service-situations__grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 19rem), 1fr));

  gap: 1rem;
}

.situation-card {
  min-width: 0;

  padding: clamp(1.4rem, 2.5vw, 1.8rem);

  background: $color-white;

  border: 1px solid $color-border;
  border-radius: $radius-lg;
}

.situation-card__label {
  color: $color-brand-red;

  font-size: 0.57rem;
  font-weight: 750;

  letter-spacing: 0.085em;

  text-transform: uppercase;
}

.situation-card__statement {
  margin-top: 0.8rem;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 650;

  line-height: 1.35;

  letter-spacing: -0.025em;
}

.situation-card__response {
  margin-top: 1rem;

  color: $color-text-muted;

  font-size: 0.72rem;

  line-height: 1.65;
}

// ==================================================
// APPROACH
// ==================================================

.services-approach__header {
  display: grid;

  gap: 1.75rem;

  margin-bottom: clamp(2.5rem, 5vw, 4rem);

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(300px, 0.55fr);

    align-items: end;

    gap: clamp(4rem, 8vw, 8rem);
  }
}

.services-approach__eyebrow {
  margin-bottom: 1.1rem;
}

.services-approach__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(2.3rem, 4vw, 3.7rem);
  font-weight: 700;

  line-height: 1.03;

  letter-spacing: -0.045em;
}

.services-approach__title span {
  display: block;

  color: $color-brand-red;
}

.services-approach__intro {
  max-width: 500px;

  color: $color-text-secondary;

  font-size: 0.95rem;

  line-height: 1.7;
}

.services-approach__steps {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));

  margin: 0;
  padding: 0;

  border-top: 1px solid $color-border;

  list-style: none;
}

.approach-step {
  min-width: 0;

  padding: 1.5rem clamp(0rem, 1.5vw, 1.2rem) 1.6rem;

  border-bottom: 1px solid $color-border;
}

.approach-step__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: 1.05rem;
  font-weight: 700;

  line-height: 1.35;

  letter-spacing: -0.02em;
}

.approach-step__description {
  margin-top: 0.55rem;

  color: $color-text-muted;

  font-size: 0.68rem;

  line-height: 1.6;
}

.services-approach__principle {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 0.85rem;

  max-width: 690px;

  margin-top: 2rem;
}

.services-approach__principle-mark {
  width: 9px;
  height: 9px;

  margin-top: 0.44rem;

  background: $color-brand-red;

  border-radius: 50%;
}

.services-approach__principle p {
  color: $color-black;

  font-family: $font-heading;

  font-size: 0.92rem;
  font-weight: 650;

  line-height: 1.55;

  letter-spacing: -0.015em;
}

// ==================================================
// WORK
// ==================================================

.services-work__header {
  display: grid;

  gap: 1.75rem;

  margin-bottom: clamp(2.5rem, 5vw, 4rem);

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(300px, 0.55fr);

    align-items: end;

    gap: clamp(4rem, 8vw, 8rem);
  }
}

.services-work__eyebrow {
  margin-bottom: 1.1rem;
}

.services-work__title {
  max-width: 780px;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(2.3rem, 4vw, 3.7rem);
  font-weight: 700;

  line-height: 1.03;

  letter-spacing: -0.045em;
}

.services-work__title span {
  display: block;

  color: $color-brand-red;
}

.services-work__intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;

  max-width: 510px;
}

.services-work__intro p {
  color: $color-text-secondary;

  font-size: 0.92rem;

  line-height: 1.7;
}

.services-work__projects {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));

  gap: 1rem;
}

.services-project {
  display: flex;
  flex-direction: column;

  min-width: 0;

  padding: 1.5rem;

  color: inherit;

  text-decoration: none;

  border: 1px solid $color-border;
  border-radius: $radius-lg;

  transition:
    border-color $transition-fast,
    box-shadow $transition-fast,
    transform $transition-fast;

  &:hover {
    border-color: $color-border-strong;

    box-shadow: 0 18px 45px rgb(17 19 23 / 6%);

    transform: translateY(-2px);
  }
}

.services-project__category {
  color: $color-brand-red;

  font-size: 0.56rem;
  font-weight: 750;

  letter-spacing: 0.07em;

  text-transform: uppercase;
}

.services-project__title {
  margin-top: 0.6rem;

  color: $color-black;

  font-family: $font-heading;

  font-size: 1.45rem;
  font-weight: 700;

  letter-spacing: -0.03em;
}

.services-project__description {
  margin-top: 0.8rem;

  color: $color-text-muted;

  font-size: 0.72rem;

  line-height: 1.65;
}

.services-project__action {
  display: inline-flex;
  align-items: center;

  gap: 0.45rem;

  width: fit-content;

  margin-top: auto;
  padding-top: 1.4rem;

  color: $color-black;

  font-size: 0.68rem;
  font-weight: 700;
}

.services-project__action span:last-child {
  color: $color-brand-red;
}

// ==================================================
// FINAL CTA
// ==================================================

.services-cta-section {
  background: #1b1e23;
}

.services-cta {
  display: grid;

  gap: clamp(2.5rem, 6vw, 6rem);

  align-items: end;

  @media (min-width: 900px) {
    grid-template-columns:
      minmax(0, 1.1fr)
      minmax(340px, 0.9fr);
  }
}

.services-cta__eyebrow {
  margin-bottom: 1.1rem;
}

.services-cta__title {
  max-width: 780px;

  color: $color-white;

  font-family: $font-heading;

  font-size: clamp(2.6rem, 5vw, 4.7rem);
  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.052em;
}

.services-cta__title span {
  display: block;

  color: $color-brand-red;
}

.services-cta__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 520px;
}

.services-cta__content > p {
  color: rgb(255 255 255 / 66%);

  font-size: 0.94rem;

  line-height: 1.75;
}

.services-cta__content > :nth-child(2) {
  margin-top: 1.5rem;
}

.services-cta__note {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 0.75rem;

  margin-top: 1.5rem;
  padding-top: 1.25rem;

  border-top: 1px solid rgb(255 255 255 / 10%);
}

.services-cta__note-mark {
  width: 8px;
  height: 8px;

  margin-top: 0.42rem;

  background: $color-brand-red;

  border-radius: 50%;
}

.services-cta__note p {
  color: rgb(255 255 255 / 46%);

  font-size: 0.69rem;

  line-height: 1.65;
}

// ==================================================
// SMALL-SCREEN REFINEMENTS
// ==================================================

@media (max-width: 575px) {
  .services-hero__actions {
    align-items: stretch;

    flex-direction: column;
  }

  .services-hero__title {
    font-size: clamp(2.75rem, 13vw, 4rem);
  }

  .services-hero__framework,
  .system-map {
    border-radius: $radius-lg;
  }

  .service-area__identity {
    grid-template-columns: 1fr;
  }

  .service-area__icon {
    width: 44px;
    height: 44px;

    padding: 11px;
  }

  .services-cta__title {
    font-size: clamp(2.4rem, 12vw, 3.4rem);
  }
}

// ==================================================
// REDUCED MOTION
// ==================================================

@media (prefers-reduced-motion: reduce) {
  .service-area,
  .service-area__icon,
  .service-area__arrow,
  .services-project {
    transition: none;
  }

  .service-area:hover {
    padding-right: 0;
    padding-left: 0;
  }

  .service-area:hover .service-area__icon,
  .service-area:hover .service-area__arrow,
  .services-project:hover {
    transform: none;
  }
}
.approach-step__heading {
  @include sequence-row("> h3");
}
</style>
