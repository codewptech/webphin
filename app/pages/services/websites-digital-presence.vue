<script setup lang="ts">
import { websitesDigitalPresenceContent } from "~~/app/config/content/services/websites-digital-presence";
import SequenceMarker from "~~/app/components/ui/SequenceMarker.vue";
import { useSeoMeta } from "#imports";

import { NuxtLink } from "#components";

import BaseButton from "~~/app/components/ui/BaseButton.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";
import ServiceIcon from "~~/app/components/services/ServiceIcon.vue";

import { services } from "~~/app/config/services";

import { workProjects } from "~~/app/config/projects";

const content = websitesDigitalPresenceContent;
const { usefulSituations, websiteScope, websiteLayers, deliverySteps } =
  content;

useSeoMeta(content.seo);

const service = services.find((item) => {
  return item.slug === "/services/websites-digital-presence";
});

if (!service) {
  throw new Error(
    "Websites & Digital Presence service configuration is missing.",
  );
}

const relatedServiceSlugs = new Set<string>(content.relatedServiceSlugs);

const relatedServices = services.filter((item) => {
  return relatedServiceSlugs.has(item.slug);
});

const relevantProjects = workProjects.filter((project) => {
  return content.relatedProjectSlugs.some((slug) => slug === project.slug);
});
</script>

<template>
  <div class="website-service-page">
    <!-- ==================================================
         HERO
    ================================================== -->

    <SectionWrapper tone="default" spacing="lg">
      <section class="service-detail-hero">
        <div class="service-detail-hero__content">
          <nav class="service-breadcrumb" aria-label="Breadcrumb">
            <NuxtLink to="/services" class="service-breadcrumb__link">
              {{ content.sections.hero.link }}
            </NuxtLink>

            <span class="service-breadcrumb__separator" aria-hidden="true">
              {{ "/" }}
            </span>

            <span class="service-breadcrumb__current" aria-current="page">
              {{ service.title }}
            </span>
          </nav>

          <SectionEyebrow class="service-detail-hero__eyebrow">
            {{ service.title }}
          </SectionEyebrow>

          <h1 class="service-detail-hero__title">
            {{ content.sections.hero.title }}

            <span> {{ content.sections.hero.accent }} </span>
          </h1>

          <p class="service-detail-hero__description">
            {{ service.description }}
          </p>

          <p class="service-detail-hero__description">
            {{ content.sections.hero.description }}
          </p>

          <div class="service-detail-hero__actions">
            <BaseButton to="/contact" variant="primary" size="lg">
              {{ content.sections.hero.contactAction }}
            </BaseButton>

            <BaseButton href="#website-scope" variant="secondary" size="lg">
              {{ content.sections.hero.websiteScopeAction }}
            </BaseButton>
          </div>

          <div class="service-detail-hero__principle">
            <span
              class="service-detail-hero__principle-mark"
              aria-hidden="true"
            />

            <p>
              {{ content.sections.hero.principle.description }}
            </p>
          </div>
        </div>

        <div class="website-system">
          <div class="website-system__accent" />

          <div class="website-system__header">
            <div class="website-system__identity">
              <span class="website-system__icon">
                <ServiceIcon :icon="service.icon" />
              </span>

              <div>
                <span class="website-system__label">
                  {{ content.sections.hero.websiteSystem.label }}
                </span>

                <strong>
                  {{ content.sections.hero.websiteSystem.statement }}
                </strong>
              </div>
            </div>

            <span class="website-system__status">
              {{ content.sections.hero.websiteSystem.status }}
            </span>
          </div>

          <div class="website-system__statement">
            <span class="website-system__statement-label">
              {{ content.sections.hero.statement.statementLabel }}
            </span>

            <h2>{{ content.sections.hero.statement.title }}</h2>
          </div>

          <div class="website-system__layers">
            <div class="website-system__layer">
              <span>
                {{ content.sections.hero.websiteSystem.items[0].label }}
              </span>

              <strong>
                {{ content.sections.hero.websiteSystem.items[0].description }}
              </strong>
            </div>

            <div class="website-system__layer">
              <span>
                {{ content.sections.hero.websiteSystem.items[1].label }}
              </span>

              <strong>
                {{ content.sections.hero.websiteSystem.items[1].description }}
              </strong>
            </div>

            <div class="website-system__layer">
              <span>
                {{ content.sections.hero.websiteSystem.items[2].label }}
              </span>

              <strong>
                {{ content.sections.hero.websiteSystem.items[2].description }}
              </strong>
            </div>

            <div class="website-system__layer">
              <span>
                {{ content.sections.hero.websiteSystem.items[3].label }}
              </span>

              <strong>
                {{ content.sections.hero.websiteSystem.items[3].description }}
              </strong>
            </div>

            <div class="website-system__layer">
              <span>
                {{ content.sections.hero.websiteSystem.items[4].label }}
              </span>

              <strong>
                {{ content.sections.hero.websiteSystem.items[4].description }}
              </strong>
            </div>
          </div>

          <div class="website-system__outcome">
            <span> {{ content.sections.hero.outcome.label }} </span>

            <strong> {{ content.sections.hero.outcome.statement }} </strong>
          </div>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         WHEN THIS SERVICE IS USEFUL
    ================================================== -->

    <SectionWrapper tone="soft" spacing="lg">
      <section class="useful-when">
        <header class="section-intro">
          <div>
            <SectionEyebrow class="section-intro__eyebrow">
              {{ content.sections.whenUseful.eyebrow }}
            </SectionEyebrow>

            <h2 class="section-intro__title">
              {{ content.sections.whenUseful.title }}

              <span> {{ content.sections.whenUseful.accent }} </span>
            </h2>
          </div>

          <p class="section-intro__description">
            {{ content.sections.whenUseful.description }}
          </p>
        </header>

        <div class="useful-when__grid">
          <article
            v-for="situation in usefulSituations"
            :key="situation.title"
            class="situation"
          >
            <div>
              <h3 class="situation__title">
                {{ situation.title }}
              </h3>

              <p class="situation__description">
                {{ situation.description }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         SCOPE
    ================================================== -->

    <SectionWrapper tone="default" spacing="lg">
      <section id="website-scope" class="website-scope">
        <header class="section-intro">
          <div>
            <SectionEyebrow class="section-intro__eyebrow">
              {{ content.sections.scope.eyebrow }}
            </SectionEyebrow>

            <h2 class="section-intro__title">
              {{ content.sections.scope.title }}

              <span> {{ content.sections.scope.accent }} </span>
            </h2>
          </div>

          <p class="section-intro__description">
            {{ content.sections.scope.description }}
          </p>
        </header>

        <div class="website-scope__grid">
          <article
            v-for="item in websiteScope"
            :key="item.title"
            class="scope-item"
          >
            <h3 class="scope-item__title">
              {{ item.title }}
            </h3>

            <p class="scope-item__description">
              {{ item.description }}
            </p>
          </article>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         GOOD WEBSITE SYSTEM
    ================================================== -->

    <SectionWrapper tone="dark" spacing="lg">
      <section class="website-layers">
        <div class="website-layers__intro">
          <SectionEyebrow class="website-layers__eyebrow">
            {{ content.sections.websiteSystem.eyebrow }}
          </SectionEyebrow>

          <h2 class="website-layers__title">
            {{ content.sections.websiteSystem.title }}

            <span> {{ content.sections.websiteSystem.accent }} </span>
          </h2>

          <p class="website-layers__description">
            {{ content.sections.websiteSystem.description }}
          </p>

          <div class="website-layers__principle">
            <span class="website-layers__principle-mark" aria-hidden="true" />

            <p>
              {{ content.sections.websiteSystem.principle.description }}
            </p>
          </div>
        </div>

        <div class="website-layers__map">
          <article
            v-for="layer in websiteLayers"
            :key="layer.title"
            class="website-layer"
          >
            <div class="website-layer__identity">
              <span class="website-layer__label">
                {{ layer.label }}
              </span>
            </div>

            <div class="website-layer__content">
              <h3>
                {{ layer.title }}
              </h3>

              <p>
                {{ layer.description }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         PROCESS
    ================================================== -->

    <SectionWrapper tone="soft" spacing="lg">
      <section class="website-process">
        <header class="section-intro">
          <div>
            <SectionEyebrow class="section-intro__eyebrow">
              {{ content.sections.delivery.eyebrow }}
            </SectionEyebrow>

            <h2 class="section-intro__title">
              {{ content.sections.delivery.title }}

              <span> {{ content.sections.delivery.accent }} </span>
            </h2>
          </div>

          <p class="section-intro__description">
            {{ content.sections.delivery.description }}
          </p>
        </header>

        <ol class="website-process__steps">
          <li
            v-for="(step, index) in deliverySteps"
            :key="step.title"
            class="process-step"
          >
            <div class="process-step__heading">
              <SequenceMarker :step="index + 1" />
              <h3 class="process-step__title">
                {{ step.title }}
              </h3>
            </div>

            <p class="process-step__description">
              {{ step.description }}
            </p>
          </li>
        </ol>

        <div class="website-process__note">
          <span class="website-process__note-mark" aria-hidden="true" />

          <p>
            {{ content.sections.delivery.note.description }}
          </p>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         CONNECTED SERVICES
    ================================================== -->

    <SectionWrapper tone="default" spacing="lg">
      <section class="connected-services">
        <header class="section-intro">
          <div>
            <SectionEyebrow class="section-intro__eyebrow">
              {{ content.sections.relatedServices.eyebrow }}
            </SectionEyebrow>

            <h2 class="section-intro__title">
              {{ content.sections.relatedServices.title }}

              <span> {{ content.sections.relatedServices.accent }} </span>
            </h2>
          </div>

          <p class="section-intro__description">
            {{ content.sections.relatedServices.description }}
          </p>
        </header>

        <div class="connected-services__grid">
          <NuxtLink
            v-for="relatedService in relatedServices"
            :key="relatedService.slug"
            :to="relatedService.slug"
            class="connected-service"
          >
            <div class="connected-service__icon">
              <ServiceIcon :icon="relatedService.icon" />
            </div>

            <span class="connected-service__layer">
              {{ relatedService.layer }}
            </span>

            <h3 class="connected-service__title">
              {{ relatedService.title }}
            </h3>

            <p class="connected-service__description">
              {{ relatedService.description }}
            </p>

            <div class="connected-service__action">
              <span> {{ content.sections.relatedServices.label }} </span>

              <span aria-hidden="true"> → </span>
            </div>
          </NuxtLink>
        </div>

        <div class="connected-services__all">
          <BaseButton to="/services" variant="text">
            {{ content.sections.relatedServices.servicesAction }}
          </BaseButton>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         RELEVANT WORK
    ================================================== -->

    <SectionWrapper v-if="relevantProjects.length" tone="soft" spacing="lg">
      <section class="related-work">
        <header class="section-intro">
          <div>
            <SectionEyebrow class="section-intro__eyebrow">
              {{ content.sections.relatedWork.eyebrow }}
            </SectionEyebrow>

            <h2 class="section-intro__title">
              {{ content.sections.relatedWork.title }}

              <span> {{ content.sections.relatedWork.accent }} </span>
            </h2>
          </div>

          <div class="related-work__intro">
            <p>
              {{ content.sections.relatedWork.description }}
            </p>

            <BaseButton to="/work" variant="text">
              {{ content.sections.relatedWork.workAction }}
            </BaseButton>
          </div>
        </header>

        <div class="related-work__projects">
          <NuxtLink
            v-for="project in relevantProjects"
            :key="project.slug"
            :to="project.slug"
            class="related-project"
          >
            <div class="related-project__identity">
              <span class="related-project__category">
                {{ project.category }}
              </span>

              <h3 class="related-project__title">
                {{ project.name }}
              </h3>
            </div>

            <p class="related-project__description">
              {{ project.description }}
            </p>

            <div class="related-project__capabilities">
              <span
                v-for="capability in project.capabilities.slice(0, 4)"
                :key="capability"
              >
                {{ capability }}
              </span>
            </div>

            <div class="related-project__action">
              <span> {{ content.sections.relatedWork.label }} </span>

              <span aria-hidden="true"> → </span>
            </div>
          </NuxtLink>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         FINAL CTA
    ================================================== -->

    <SectionWrapper class="website-cta-section" tone="dark" spacing="lg">
      <section class="website-cta">
        <div>
          <SectionEyebrow class="website-cta__eyebrow">
            {{ content.sections.cta.eyebrow }}
          </SectionEyebrow>

          <h2 class="website-cta__title">
            {{ content.sections.cta.title }}

            <span> {{ content.sections.cta.accent }} </span>
          </h2>
        </div>

        <div class="website-cta__content">
          <p>
            {{ content.sections.cta.description }}
          </p>

          <BaseButton to="/contact" variant="primary" size="lg">
            {{ content.sections.cta.contactAction }}
          </BaseButton>

          <div class="website-cta__note">
            <span class="website-cta__note-mark" aria-hidden="true" />

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

.website-service-page {
  overflow: hidden;
}

// ==================================================
// SHARED SECTION INTRO
// ==================================================

.section-intro {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 26rem), 1fr));

  gap: clamp(1.75rem, 6vw, 7rem);

  align-items: end;

  margin-bottom: clamp(3rem, 6vw, 5rem);
}

.section-intro__eyebrow {
  margin-bottom: 1.1rem;
}

.section-intro__title {
  max-width: 800px;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(2.4rem, 4.4vw, 4.1rem);
  font-weight: 700;

  line-height: 1.03;

  letter-spacing: -0.048em;
}

.section-intro__title span {
  display: block;

  color: $color-brand-red;
}

.section-intro__description {
  max-width: 530px;

  color: $color-text-secondary;

  font-size: clamp(0.95rem, 1.25vw, 1.04rem);

  line-height: 1.75;
}

// ==================================================
// BREADCRUMB
// ==================================================

.service-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 0.5rem;

  margin-bottom: 1.5rem;

  font-size: 0.66rem;
  font-weight: 650;

  line-height: 1.4;
}

.service-breadcrumb__link {
  color: $color-text-muted;

  transition: color $transition-fast;

  &:hover {
    color: $color-brand-red;
  }
}

.service-breadcrumb__separator {
  color: $color-border-strong;
}

.service-breadcrumb__current {
  color: $color-text-secondary;
}

// ==================================================
// HERO
// ==================================================

.service-detail-hero {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 30rem), 1fr));

  gap: clamp(3rem, 7vw, 7rem);

  align-items: center;
}

.service-detail-hero__content {
  max-width: 800px;
}

.service-detail-hero__eyebrow {
  margin-bottom: 1.2rem;
}

.service-detail-hero__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(3rem, 5.8vw, 5.5rem);
  font-weight: 700;

  line-height: 0.98;

  letter-spacing: -0.058em;
}

.service-detail-hero__title span {
  display: block;

  color: $color-brand-red;
}

.service-detail-hero__description {
  max-width: 680px;

  margin-top: 1.4rem;

  color: $color-text-secondary;

  font-size: clamp(0.98rem, 1.3vw, 1.08rem);

  line-height: 1.78;
}

.service-detail-hero__description + .service-detail-hero__description {
  margin-top: 0.8rem;
}

.service-detail-hero__actions {
  display: flex;
  flex-wrap: wrap;

  gap: 0.8rem;

  margin-top: 1.9rem;
}

.service-detail-hero__principle {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 0.8rem;

  max-width: 610px;

  margin-top: 1.8rem;
  padding-top: 1.45rem;

  border-top: 1px solid $color-border;
}

.service-detail-hero__principle-mark {
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

.service-detail-hero__principle p {
  color: $color-text-muted;

  font-size: 0.76rem;
  font-weight: 600;

  line-height: 1.65;
}

// --------------------------------------------------
// Hero system visual
// --------------------------------------------------

.website-system {
  position: relative;

  overflow: hidden;

  padding: clamp(1.5rem, 3vw, 2.25rem);

  background: $color-white;

  border: 1px solid $color-border;
  border-radius: $radius-xl;

  box-shadow: 0 30px 80px rgb(17 19 23 / 7%);
}

.website-system__accent {
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

.website-system__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  padding-bottom: 1.35rem;

  border-bottom: 1px solid $color-border;
}

.website-system__identity {
  display: flex;
  align-items: center;

  gap: 0.85rem;
}

.website-system__icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  padding: 10px;

  color: $color-text-secondary;

  background: $color-background-soft;

  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.website-system__label {
  display: block;

  margin-bottom: 0.28rem;

  color: $color-brand-red;

  font-size: 0.55rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.website-system__identity strong {
  color: $color-black;

  font-family: $font-heading;

  font-size: 0.83rem;
  font-weight: 650;
}

.website-system__status {
  display: inline-flex;
  align-items: center;

  min-height: 28px;

  padding-inline: 0.7rem;

  color: $color-text-muted;

  background: $color-background-soft;

  font-size: 0.57rem;
  font-weight: 650;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

.website-system__statement {
  padding-block: 1.5rem;
}

.website-system__statement-label {
  display: block;

  margin-bottom: 0.5rem;

  color: $color-text-muted;

  font-size: 0.57rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.website-system__statement h2 {
  max-width: 460px;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.55rem, 2.8vw, 2.1rem);
  font-weight: 700;

  line-height: 1.16;

  letter-spacing: -0.038em;
}

.website-system__layers {
  border-top: 1px solid $color-border;
}

.website-system__layer {
  display: grid;

  grid-template-columns:
    minmax(90px, 0.3fr)
    minmax(0, 0.7fr);

  gap: 1rem;

  padding-block: 0.82rem;

  border-bottom: 1px solid $color-border;
}

.website-system__layer span {
  color: $color-text-muted;

  font-size: 0.61rem;
  font-weight: 700;
}

.website-system__layer strong {
  color: $color-text-secondary;

  font-size: 0.63rem;
  font-weight: 600;

  line-height: 1.5;
}

.website-system__outcome {
  margin-top: 1.35rem;

  padding: 1rem 1.05rem;

  background: $color-background-soft;

  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.website-system__outcome span {
  display: block;

  margin-bottom: 0.35rem;

  color: $color-brand-red;

  font-size: 0.55rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.website-system__outcome strong {
  color: $color-black;

  font-family: $font-heading;

  font-size: 0.84rem;
  font-weight: 650;
}

// ==================================================
// Situations
// ==================================================

// ==================================================
// WHEN USEFUL
// ==================================================

.useful-when__grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 19rem), 1fr));

  gap: 1rem;
}

.situation {
  display: grid;

  grid-template-columns: minmax(0, 1fr);

  gap: 1rem;

  min-width: 0;

  padding: clamp(1.35rem, 2.4vw, 1.8rem);

  background: $color-white;

  border: 1px solid $color-border;
  border-radius: $radius-lg;
}

.situation__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: 1rem;
  font-weight: 700;

  line-height: 1.4;

  letter-spacing: -0.02em;
}

.situation__description {
  margin-top: 0.55rem;

  color: $color-text-muted;

  font-size: 0.72rem;

  line-height: 1.65;
}

// ==================================================
// SCOPE
// ==================================================

.website-scope {
  scroll-margin-top: 100px;
}

.website-scope__grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));

  border-top: 1px solid $color-border;
  border-left: 1px solid $color-border;
}

.scope-item {
  min-width: 0;

  padding: clamp(1.35rem, 2.5vw, 1.8rem);

  border-right: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
}

.scope-item__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: 1.03rem;
  font-weight: 700;

  line-height: 1.35;

  letter-spacing: -0.02em;
}

.scope-item__description {
  margin-top: 0.6rem;

  color: $color-text-muted;

  font-size: 0.7rem;

  line-height: 1.65;
}

// ==================================================
// WEBSITE LAYERS
// ==================================================

.website-layers {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 29rem), 1fr));

  gap: clamp(3rem, 7vw, 7rem);

  align-items: start;
}

.website-layers__intro {
  max-width: 600px;
}

.website-layers__eyebrow {
  margin-bottom: 1.15rem;
}

.website-layers__title {
  color: $color-white;

  font-family: $font-heading;

  font-size: clamp(2.5rem, 4.6vw, 4.2rem);
  font-weight: 700;

  line-height: 1.02;

  letter-spacing: -0.05em;
}

.website-layers__title span {
  display: block;

  color: $color-brand-red;
}

.website-layers__description {
  margin-top: 1.4rem;

  color: rgb(255 255 255 / 62%);

  font-size: 0.94rem;

  line-height: 1.75;
}

.website-layers__principle {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 0.8rem;

  margin-top: 1.8rem;
  padding-top: 1.45rem;

  border-top: 1px solid rgb(255 255 255 / 10%);
}

.website-layers__principle-mark {
  width: 9px;
  height: 9px;

  margin-top: 0.43rem;

  background: $color-brand-red;

  border-radius: 50%;
}

.website-layers__principle p {
  color: rgb(255 255 255 / 48%);

  font-size: 0.75rem;
  font-weight: 600;

  line-height: 1.65;
}

.website-layers__map {
  overflow: hidden;

  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: $radius-xl;
}

.website-layer {
  display: grid;

  grid-template-columns:
    minmax(105px, 0.3fr)
    minmax(0, 0.7fr);

  gap: 1.2rem;

  padding: clamp(1.1rem, 2vw, 1.45rem);

  border-bottom: 1px solid rgb(255 255 255 / 9%);

  &:last-child {
    border-bottom: 0;
  }
}

.website-layer__identity {
  min-width: 0;
}

.website-layer__label {
  color: rgb(255 255 255 / 46%);

  font-size: 0.58rem;
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.website-layer__content h3 {
  color: $color-white;

  font-family: $font-heading;

  font-size: 0.91rem;
  font-weight: 650;

  line-height: 1.4;
}

.website-layer__content p {
  margin-top: 0.4rem;

  color: rgb(255 255 255 / 50%);

  font-size: 0.67rem;

  line-height: 1.6;
}

// ==================================================
// PROCESS
// ==================================================

.website-process__steps {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));

  margin: 0;
  padding: 0;

  border-top: 1px solid $color-border;

  list-style: none;
}

.process-step {
  min-width: 0;

  padding: 1.5rem clamp(0rem, 1.3vw, 1rem) 1.6rem;

  border-bottom: 1px solid $color-border;
}

.process-step__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: 1rem;
  font-weight: 700;

  line-height: 1.35;

  letter-spacing: -0.02em;
}

.process-step__description {
  margin-top: 0.55rem;

  color: $color-text-muted;

  font-size: 0.67rem;

  line-height: 1.62;
}

.website-process__note {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 0.8rem;

  max-width: 760px;

  margin-top: 2rem;
}

.website-process__note-mark {
  width: 9px;
  height: 9px;

  margin-top: 0.44rem;

  background: $color-brand-red;

  border-radius: 50%;
}

.website-process__note p {
  color: $color-text-secondary;

  font-size: 0.78rem;
  font-weight: 600;

  line-height: 1.65;
}

// ==================================================
// CONNECTED SERVICES
// ==================================================

.connected-services__grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 19rem), 1fr));

  gap: 1rem;
}

.connected-service {
  display: flex;
  flex-direction: column;

  min-width: 0;

  padding: clamp(1.4rem, 2.5vw, 1.8rem);

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

  &:focus-visible {
    outline: 3px solid rgb(227 40 47 / 18%);
    outline-offset: 4px;
  }
}

.connected-service__icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  padding: 10px;

  color: $color-text-secondary;

  background: $color-background-soft;

  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.connected-service__layer {
  margin-top: 1.2rem;

  color: $color-brand-red;

  font-size: 0.56rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.connected-service__title {
  margin-top: 0.55rem;

  color: $color-black;

  font-family: $font-heading;

  font-size: 1.35rem;
  font-weight: 700;

  line-height: 1.3;

  letter-spacing: -0.03em;
}

.connected-service__description {
  margin-top: 0.8rem;

  color: $color-text-muted;

  font-size: 0.71rem;

  line-height: 1.65;
}

.connected-service__action {
  display: inline-flex;
  align-items: center;

  gap: 0.45rem;

  width: fit-content;

  margin-top: auto;
  padding-top: 1.35rem;

  color: $color-black;

  font-size: 0.68rem;
  font-weight: 700;
}

.connected-service__action span:last-child {
  color: $color-brand-red;

  transition: transform $transition-fast;
}

.connected-service:hover .connected-service__action span:last-child {
  transform: translateX(4px);
}

.connected-services__all {
  margin-top: 1.5rem;
}

// ==================================================
// RELATED WORK
// ==================================================

.related-work__intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;

  max-width: 520px;
}

.related-work__intro p {
  color: $color-text-secondary;

  font-size: 0.94rem;

  line-height: 1.72;
}

.related-work__projects {
  display: grid;

  gap: 1rem;
}

.related-project {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));

  gap: clamp(1.5rem, 4vw, 4rem);

  align-items: center;

  padding: clamp(1.5rem, 3vw, 2rem);

  color: inherit;

  text-decoration: none;

  background: $color-white;

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

.related-project__category {
  color: $color-brand-red;

  font-size: 0.57rem;
  font-weight: 750;

  letter-spacing: 0.075em;

  text-transform: uppercase;
}

.related-project__title {
  margin-top: 0.5rem;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;

  letter-spacing: -0.04em;
}

.related-project__description {
  max-width: 520px;

  color: $color-text-secondary;

  font-size: 0.77rem;

  line-height: 1.68;
}

.related-project__capabilities {
  display: flex;
  flex-wrap: wrap;

  gap: 0.4rem;
}

.related-project__capabilities span {
  display: inline-flex;
  align-items: center;

  min-height: 28px;

  padding-inline: 0.68rem;

  color: $color-text-muted;

  background: $color-background-soft;

  font-size: 0.58rem;
  font-weight: 600;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

.related-project__action {
  display: inline-flex;
  align-items: center;

  gap: 0.45rem;

  color: $color-black;

  font-size: 0.68rem;
  font-weight: 700;
}

.related-project__action span:last-child {
  color: $color-brand-red;
}

// ==================================================
// FINAL CTA
// ==================================================

.website-cta-section {
  background: #1b1e23;
}

.website-cta {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 28rem), 1fr));

  gap: clamp(2.5rem, 7vw, 7rem);

  align-items: end;
}

.website-cta__eyebrow {
  margin-bottom: 1.1rem;
}

.website-cta__title {
  max-width: 820px;

  color: $color-white;

  font-family: $font-heading;

  font-size: clamp(2.6rem, 5vw, 4.6rem);
  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.052em;
}

.website-cta__title span {
  display: block;

  color: $color-brand-red;
}

.website-cta__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 540px;
}

.website-cta__content > p {
  color: rgb(255 255 255 / 64%);

  font-size: 0.94rem;

  line-height: 1.75;
}

.website-cta__content > :nth-child(2) {
  margin-top: 1.5rem;
}

.website-cta__note {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 0.75rem;

  margin-top: 1.5rem;
  padding-top: 1.25rem;

  border-top: 1px solid rgb(255 255 255 / 10%);
}

.website-cta__note-mark {
  width: 8px;
  height: 8px;

  margin-top: 0.42rem;

  background: $color-brand-red;

  border-radius: 50%;
}

.website-cta__note p {
  color: rgb(255 255 255 / 44%);

  font-size: 0.69rem;

  line-height: 1.65;
}

// ==================================================
// SMALL-SCREEN REFINEMENTS
// ==================================================

@media (max-width: 575px) {
  .service-detail-hero__actions {
    align-items: stretch;

    flex-direction: column;
  }

  .service-detail-hero__title {
    font-size: clamp(2.75rem, 13vw, 4rem);
  }

  .website-system,
  .website-layers__map {
    border-radius: $radius-lg;
  }

  .website-system__header {
    align-items: flex-start;

    flex-direction: column;
  }

  .website-system__layer {
    grid-template-columns: 1fr;

    gap: 0.3rem;
  }

  .situation {
    grid-template-columns: 1fr;
  }

  .website-layer {
    grid-template-columns: 1fr;

    gap: 0.75rem;
  }

  .website-cta__title {
    font-size: clamp(2.35rem, 12vw, 3.4rem);
  }
}

// ==================================================
// REDUCED MOTION
// ==================================================

@media (prefers-reduced-motion: reduce) {
  .service-breadcrumb__link,
  .connected-service,
  .connected-service__action span:last-child,
  .related-project {
    transition: none;
  }

  .connected-service:hover,
  .related-project:hover,
  .connected-service:hover .connected-service__action span:last-child {
    transform: none;
  }
}
.process-step__heading {
  @include sequence-row("> h3");
}
</style>
