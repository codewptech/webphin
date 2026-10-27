<script setup lang="ts">
import { infrastructureDeploymentContent } from "~~/app/config/content/services/infrastructure-deployment";
import SequenceMarker from "~~/app/components/ui/SequenceMarker.vue";
import { useSeoMeta } from "#imports";

import { NuxtLink } from "#components";

import BaseButton from "~~/app/components/ui/BaseButton.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";
import ServiceIcon from "~~/app/components/services/ServiceIcon.vue";

import { services } from "~~/app/config/services";

const content = infrastructureDeploymentContent;
const {
  usefulSituations,
  infrastructureScope,
  releasePath,
  operatingResponsibilities,
  stackItems,
  deliverySteps,
} = content;

useSeoMeta(content.seo);

const service = services.find((item) => {
  return item.slug === "/services/infrastructure-deployment";
});

if (!service) {
  throw new Error(
    "Infrastructure & Deployment service configuration is missing.",
  );
}

const relatedServiceSlugs = new Set<string>(content.relatedServiceSlugs);

const relatedServices = services.filter((item) => {
  return relatedServiceSlugs.has(item.slug);
});
</script>

<template>
  <div class="service-detail-page">
    <SectionWrapper tone="default" spacing="lg">
      <section class="service-hero">
        <div class="service-hero__content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <NuxtLink to="/services" class="breadcrumb__link">
              {{ content.sections.hero.link }}
            </NuxtLink>

            <span class="breadcrumb__separator" aria-hidden="true">
              {{ "/" }}
            </span>

            <span aria-current="page">
              {{ service.title }}
            </span>
          </nav>

          <SectionEyebrow class="service-hero__eyebrow">
            {{ service.title }}
          </SectionEyebrow>

          <h1 class="service-hero__title">
            {{ content.sections.hero.title }}

            <span> {{ content.sections.hero.accent }} </span>
          </h1>

          <p class="service-hero__description">
            {{ service.description }}
          </p>

          <p class="service-hero__description">
            {{ content.sections.hero.description }}
          </p>

          <div class="service-hero__actions">
            <BaseButton to="/contact" variant="primary" size="lg">
              {{ content.sections.hero.contactAction }}
            </BaseButton>

            <BaseButton
              href="#infrastructure-scope"
              variant="secondary"
              size="lg"
            >
              {{ content.sections.hero.infrastructureScopeAction }}
            </BaseButton>
          </div>

          <div class="service-hero__principle">
            <span class="service-hero__principle-mark" aria-hidden="true" />

            <p>
              {{ content.sections.hero.principle.description }}
            </p>
          </div>
        </div>

        <div class="infra-visual">
          <div class="infra-visual__accent" />

          <div class="infra-visual__header">
            <div class="infra-visual__identity">
              <span class="infra-visual__icon">
                <ServiceIcon :icon="service.icon" />
              </span>

              <div>
                <span> {{ content.sections.hero.infraVisual.label }} </span>

                <strong>
                  {{ content.sections.hero.infraVisual.statement }}
                </strong>
              </div>
            </div>

            <span class="infra-visual__status">
              {{ content.sections.hero.infraVisual.status }}
            </span>
          </div>

          <div class="infra-visual__stack">
            <div>
              <span>{{
                content.sections.hero.infraVisual.items[0].label
              }}</span>
              <strong>{{
                content.sections.hero.infraVisual.items[0].description
              }}</strong>
            </div>

            <div>
              <span>{{
                content.sections.hero.infraVisual.items[1].label
              }}</span>
              <strong>{{
                content.sections.hero.infraVisual.items[1].description
              }}</strong>
            </div>

            <div>
              <span>{{
                content.sections.hero.infraVisual.items[2].label
              }}</span>
              <strong>{{
                content.sections.hero.infraVisual.items[2].description
              }}</strong>
            </div>

            <div>
              <span>{{
                content.sections.hero.infraVisual.items[3].label
              }}</span>
              <strong>{{
                content.sections.hero.infraVisual.items[3].description
              }}</strong>
            </div>

            <div>
              <span>{{
                content.sections.hero.infraVisual.items[4].label
              }}</span>
              <strong>{{
                content.sections.hero.infraVisual.items[4].description
              }}</strong>
            </div>

            <div>
              <span>{{
                content.sections.hero.infraVisual.items[5].label
              }}</span>
              <strong>{{
                content.sections.hero.infraVisual.items[5].description
              }}</strong>
            </div>
          </div>

          <div class="infra-visual__outcome">
            <span> {{ content.sections.hero.outcome.label }} </span>

            <strong> {{ content.sections.hero.outcome.statement }} </strong>
          </div>
        </div>
      </section>
    </SectionWrapper>

    <SectionWrapper tone="soft" spacing="lg">
      <section>
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

        <div class="situation-grid">
          <article
            v-for="situation in usefulSituations"
            :key="situation.title"
            class="situation-card"
          >
            <div>
              <h3>
                {{ situation.title }}
              </h3>

              <p>
                {{ situation.description }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </SectionWrapper>

    <SectionWrapper tone="default" spacing="lg">
      <section id="infrastructure-scope" class="scope-section">
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

        <div class="scope-grid">
          <article
            v-for="item in infrastructureScope"
            :key="item.title"
            class="scope-item"
          >
            <h3>
              {{ item.title }}
            </h3>

            <p>
              {{ item.description }}
            </p>
          </article>
        </div>
      </section>
    </SectionWrapper>

    <SectionWrapper tone="dark" spacing="lg">
      <section class="operations-section">
        <div class="operations-section__intro">
          <SectionEyebrow class="operations-section__eyebrow">
            {{ content.sections.operations.eyebrow }}
          </SectionEyebrow>

          <h2 class="operations-section__title">
            {{ content.sections.operations.title }}

            <span> {{ content.sections.operations.accent }} </span>
          </h2>

          <p class="operations-section__description">
            {{ content.sections.operations.description }}
          </p>

          <div class="operations-stack">
            <span v-for="item in stackItems" :key="item">
              {{ item }}
            </span>
          </div>
        </div>

        <div class="operations-map">
          <section class="operations-group">
            <h3 class="operations-group__title">
              {{ content.sections.operations.releasePathTitle }}
            </h3>
            <ol class="release-path" role="list">
              <li
                v-for="(stage, index) in releasePath"
                :key="stage.label"
                class="operation-stage"
              >
                <SequenceMarker
                  :step="index + 1"
                  :label="stage.label"
                  variant="inverse"
                />
                <div>
                  <h4>{{ stage.title }}</h4>
                  <p>{{ stage.description }}</p>
                </div>
              </li>
            </ol>
          </section>

          <section class="operations-group">
            <h3 class="operations-group__title">
              {{ content.sections.operations.operatingResponsibilitiesTitle }}
            </h3>
            <ul class="operating-responsibilities" role="list">
              <li
                v-for="responsibility in operatingResponsibilities"
                :key="responsibility.label"
                class="operation-stage"
              >
                <span class="operation-stage__label">{{
                  responsibility.label
                }}</span>
                <div>
                  <h4>{{ responsibility.title }}</h4>
                  <p>{{ responsibility.description }}</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </SectionWrapper>

    <SectionWrapper tone="soft" spacing="lg">
      <section>
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

        <ol class="process-grid" role="list">
          <li
            v-for="(step, index) in deliverySteps"
            :key="step.title"
            class="process-step"
          >
            <div class="process-step__heading">
              <SequenceMarker :step="index + 1" />
              <h3>
                {{ step.title }}
              </h3>
            </div>

            <p>
              {{ step.description }}
            </p>
          </li>
        </ol>
      </section>
    </SectionWrapper>

    <SectionWrapper tone="default" spacing="lg">
      <section class="outcome-section">
        <div class="outcome-section__content">
          <SectionEyebrow class="outcome-section__eyebrow">
            {{ content.sections.engineeringOutcome.eyebrow }}
          </SectionEyebrow>

          <h2 class="outcome-section__title">
            {{ content.sections.engineeringOutcome.title }}

            <span> {{ content.sections.engineeringOutcome.accent }} </span>
          </h2>

          <p>
            {{ content.sections.engineeringOutcome.descriptions[0] }}
          </p>

          <p>
            {{ content.sections.engineeringOutcome.descriptions[1] }}
          </p>
        </div>

        <div class="outcome-panel">
          <span class="outcome-panel__label">
            {{ content.sections.engineeringOutcome.outcomePanel.labels[0] }}
          </span>

          <h3>{{ content.sections.engineeringOutcome.outcomePanel.title }}</h3>

          <div class="outcome-panel__stack">
            <span>{{
              content.sections.engineeringOutcome.outcomePanel.labels[1]
            }}</span>
            <span>{{
              content.sections.engineeringOutcome.outcomePanel.labels[2]
            }}</span>
            <span>{{
              content.sections.engineeringOutcome.outcomePanel.labels[3]
            }}</span>
            <span>{{
              content.sections.engineeringOutcome.outcomePanel.labels[4]
            }}</span>
            <span>{{
              content.sections.engineeringOutcome.outcomePanel.labels[5]
            }}</span>
            <span>{{
              content.sections.engineeringOutcome.outcomePanel.labels[6]
            }}</span>
          </div>

          <div class="outcome-panel__capabilities">
            <span>{{
              content.sections.engineeringOutcome.outcomePanel.labels[7]
            }}</span>
            <span>{{
              content.sections.engineeringOutcome.outcomePanel.labels[8]
            }}</span>
            <span>{{
              content.sections.engineeringOutcome.outcomePanel.labels[9]
            }}</span>
            <span>{{
              content.sections.engineeringOutcome.outcomePanel.labels[10]
            }}</span>
            <span>{{
              content.sections.engineeringOutcome.outcomePanel.labels[11]
            }}</span>
          </div>

          <p class="outcome-panel__note">
            {{ content.sections.engineeringOutcome.outcomePanel.note }}
          </p>
        </div>
      </section>
    </SectionWrapper>

    <SectionWrapper tone="soft" spacing="lg">
      <section>
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

        <div class="connected-grid">
          <NuxtLink
            v-for="relatedService in relatedServices"
            :key="relatedService.slug"
            :to="relatedService.slug"
            class="connected-card"
          >
            <div class="connected-card__icon">
              <ServiceIcon :icon="relatedService.icon" />
            </div>

            <span class="connected-card__layer">
              {{ relatedService.layer }}
            </span>

            <h3>
              {{ relatedService.title }}
            </h3>

            <p>
              {{ relatedService.description }}
            </p>

            <div class="connected-card__action">
              {{ content.sections.relatedServices.action }}
              <span aria-hidden="true">→</span>
            </div>
          </NuxtLink>
        </div>
      </section>
    </SectionWrapper>

    <SectionWrapper class="final-cta-section" tone="dark" spacing="lg">
      <section class="final-cta">
        <div>
          <SectionEyebrow class="final-cta__eyebrow">
            {{ content.sections.cta.eyebrow }}
          </SectionEyebrow>

          <h2 class="final-cta__title">
            {{ content.sections.cta.title }}

            <span> {{ content.sections.cta.accent }} </span>
          </h2>
        </div>

        <div class="final-cta__content">
          <p>
            {{ content.sections.cta.description }}
          </p>

          <BaseButton to="/contact" variant="primary" size="lg">
            {{ content.sections.cta.contactAction }}
          </BaseButton>

          <div class="final-cta__note">
            <span aria-hidden="true" />

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

.service-detail-page {
  overflow: hidden;
}

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

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: $color-text-secondary;
  font-size: 0.66rem;
  font-weight: 650;
}

.breadcrumb__link {
  color: $color-text-muted;
  transition: color $transition-fast;
}

.breadcrumb__link:hover {
  color: $color-brand-red;
}

.breadcrumb__separator {
  color: $color-border-strong;
}

.service-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 30rem), 1fr));
  gap: clamp(3rem, 7vw, 7rem);
  align-items: center;
}

.service-hero__content {
  max-width: 800px;
}

.service-hero__eyebrow {
  margin-bottom: 1.2rem;
}

.service-hero__title {
  color: $color-black;
  font-family: $font-heading;
  font-size: clamp(3rem, 5.8vw, 5.5rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.058em;
}

.service-hero__title span {
  display: block;
  color: $color-brand-red;
}

.service-hero__description {
  max-width: 680px;
  margin-top: 1.4rem;
  color: $color-text-secondary;
  font-size: clamp(0.98rem, 1.3vw, 1.08rem);
  line-height: 1.78;
}

.service-hero__description + .service-hero__description {
  margin-top: 0.8rem;
}

.service-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.9rem;
}

.service-hero__principle {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.8rem;
  max-width: 610px;
  margin-top: 1.8rem;
  padding-top: 1.45rem;
  border-top: 1px solid $color-border;
}

.service-hero__principle-mark {
  position: relative;
  width: 8px;
  height: 8px;
  margin-top: 0.42rem;
  background: $color-brand-red;
  border-radius: 50%;
}

.service-hero__principle-mark::before {
  content: "";
  position: absolute;
  inset: -5px;
  border: 1px solid rgb(227 40 47 / 18%);
  border-radius: 50%;
}

.service-hero__principle p {
  color: $color-text-muted;
  font-size: 0.76rem;
  font-weight: 600;
  line-height: 1.65;
}

.infra-visual {
  position: relative;
  overflow: hidden;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-xl;
  box-shadow: 0 30px 80px rgb(17 19 23 / 7%);
}

.infra-visual__accent {
  position: absolute;
  inset: 0 0 auto;
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

.infra-visual__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.35rem;
  border-bottom: 1px solid $color-border;
}

.infra-visual__identity {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.infra-visual__icon,
.connected-card__icon {
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

.infra-visual__identity span {
  display: block;
  margin-bottom: 0.28rem;
  color: $color-brand-red;
  font-size: 0.55rem;
  font-weight: 750;
  text-transform: uppercase;
}

.infra-visual__identity strong {
  color: $color-black;
  font-family: $font-heading;
  font-size: 0.83rem;
}

.infra-visual__status {
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

.infra-visual__stack {
  display: grid;
  gap: 0.55rem;
  margin-top: 1.4rem;
}

.infra-visual__stack > div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 0.95rem;
  background: $color-background-soft;
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.infra-visual__stack span {
  color: $color-brand-red;
  font-size: 0.58rem;
  font-weight: 750;
  text-transform: uppercase;
}

.infra-visual__stack strong {
  color: $color-text-secondary;
  font-size: 0.64rem;
  font-weight: 650;
}

.infra-visual__outcome {
  margin-top: 1.3rem;
  padding: 1rem;
  background: $color-background-soft;
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.infra-visual__outcome span {
  display: block;
  margin-bottom: 0.35rem;
  color: $color-brand-red;
  font-size: 0.55rem;
  font-weight: 750;
  text-transform: uppercase;
}

.infra-visual__outcome strong {
  color: $color-black;
  font-family: $font-heading;
  font-size: 0.84rem;
}

.situation-grid,
.connected-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 19rem), 1fr));
  gap: 1rem;
}

.situation-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  padding: clamp(1.35rem, 2.4vw, 1.8rem);
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-lg;
}

.situation-card h3,
.scope-item h3 {
  color: $color-black;
  font-family: $font-heading;
  font-size: 1rem;
  line-height: 1.4;
}

.situation-card p,
.scope-item p {
  margin-top: 0.55rem;
  color: $color-text-muted;
  font-size: 0.72rem;
  line-height: 1.65;
}

.scope-section {
  scroll-margin-top: 100px;
}

.scope-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  border-top: 1px solid $color-border;
  border-left: 1px solid $color-border;
}

.scope-item {
  padding: clamp(1.35rem, 2.5vw, 1.8rem);
  border-right: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
}

.operations-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 29rem), 1fr));
  gap: clamp(3rem, 7vw, 7rem);
  align-items: start;
}

.operations-section__intro {
  max-width: 600px;
}

.operations-section__eyebrow {
  margin-bottom: 1.15rem;
}

.operations-section__title {
  color: $color-white;
  font-family: $font-heading;
  font-size: clamp(2.5rem, 4.6vw, 4.2rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
}

.operations-section__title span {
  display: block;
  color: $color-brand-red;
}

.operations-section__description {
  margin-top: 1.4rem;
  color: rgb(255 255 255 / 62%);
  font-size: 0.94rem;
  line-height: 1.75;
}

.operations-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.6rem;
}

.operations-stack span {
  display: inline-flex;
  align-items: center;
  min-height: 29px;
  padding-inline: 0.7rem;
  color: rgb(255 255 255 / 64%);
  background: rgb(255 255 255 / 5%);
  font-size: 0.58rem;
  border: 1px solid rgb(255 255 255 / 9%);
  border-radius: $radius-pill;
}

.operations-map {
  overflow: hidden;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: $radius-xl;
}

.operation-stage {
  display: grid;
  grid-template-columns: minmax(140px, 0.35fr) minmax(0, 0.65fr);
  gap: 1.2rem;
  padding: clamp(1.1rem, 2vw, 1.45rem);
  border-bottom: 1px solid rgb(255 255 255 / 9%);
}

.operation-stage:last-child {
  border-bottom: 0;
}

.operation-stage h4 {
  color: $color-white;
  font-family: $font-heading;
  font-size: 0.91rem;
}

.operation-stage p {
  margin-top: 0.4rem;
  color: rgb(255 255 255 / 50%);
  font-size: 0.67rem;
  line-height: 1.6;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));
  margin: 0;
  padding: 0;
  border-top: 1px solid $color-border;
  list-style: none;
}

.process-step {
  padding: 1.5rem clamp(0rem, 1.3vw, 1rem) 1.6rem;
  border-bottom: 1px solid $color-border;
}

.process-step h3 {
  color: $color-black;
  font-family: $font-heading;
  font-size: 1rem;
}

.process-step p {
  margin-top: 0.55rem;
  color: $color-text-muted;
  font-size: 0.67rem;
  line-height: 1.62;
}

.outcome-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 28rem), 1fr));
  gap: clamp(3rem, 7vw, 7rem);
  align-items: center;
}

.outcome-section__eyebrow {
  margin-bottom: 1.1rem;
}

.outcome-section__title {
  color: $color-black;
  font-family: $font-heading;
  font-size: clamp(2.4rem, 4.3vw, 4rem);
  line-height: 1.03;
  letter-spacing: -0.048em;
}

.outcome-section__title span {
  display: block;
  color: $color-brand-red;
}

.outcome-section__content > p {
  max-width: 600px;
  margin-top: 1.2rem;
  color: $color-text-secondary;
  font-size: 0.9rem;
  line-height: 1.75;
}

.outcome-panel {
  padding: clamp(1.4rem, 3vw, 2rem);
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-xl;
  box-shadow: 0 24px 60px rgb(17 19 23 / 6%);
}

.outcome-panel__label {
  color: $color-brand-red;
  font-size: 0.57rem;
  font-weight: 750;
  text-transform: uppercase;
}

.outcome-panel h3 {
  margin-top: 0.65rem;
  color: $color-black;
  font-family: $font-heading;
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  line-height: 1.15;
}

.outcome-panel__stack,
.outcome-panel__capabilities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.3rem;
}

.outcome-panel__stack span,
.outcome-panel__capabilities span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding-inline: 0.68rem;
  color: $color-text-secondary;
  background: $color-background-soft;
  font-size: 0.58rem;
  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

.outcome-panel__capabilities {
  padding-top: 1.2rem;
  border-top: 1px solid $color-border;
}

.outcome-panel__note {
  margin-top: 1.2rem;
  color: $color-text-muted;
  font-size: 0.63rem;
  line-height: 1.6;
}

.connected-card {
  display: flex;
  flex-direction: column;
  padding: clamp(1.4rem, 2.5vw, 1.8rem);
  color: inherit;
  text-decoration: none;
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-lg;
  transition:
    border-color $transition-fast,
    box-shadow $transition-fast,
    transform $transition-fast;
}

.connected-card:hover {
  border-color: $color-border-strong;
  box-shadow: 0 18px 45px rgb(17 19 23 / 6%);
  transform: translateY(-2px);
}

.connected-card__layer {
  margin-top: 1.1rem;
  color: $color-brand-red;
  font-size: 0.56rem;
  font-weight: 750;
  text-transform: uppercase;
}

.connected-card h3 {
  margin-top: 0.55rem;
  color: $color-black;
  font-family: $font-heading;
  font-size: 1.35rem;
}

.connected-card p {
  margin-top: 0.8rem;
  color: $color-text-muted;
  font-size: 0.71rem;
  line-height: 1.65;
}

.connected-card__action {
  display: inline-flex;
  gap: 0.45rem;
  width: fit-content;
  margin-top: auto;
  padding-top: 1.35rem;
  color: $color-black;
  font-size: 0.68rem;
  font-weight: 700;
}

.connected-card__action span {
  color: $color-brand-red;
}

.final-cta-section {
  background: #1b1e23;
}

.final-cta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 28rem), 1fr));
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: end;
}

.final-cta__eyebrow {
  margin-bottom: 1.1rem;
}

.final-cta__title {
  color: $color-white;
  font-family: $font-heading;
  font-size: clamp(2.6rem, 5vw, 4.6rem);
  line-height: 1;
  letter-spacing: -0.052em;
}

.final-cta__title span {
  display: block;
  color: $color-brand-red;
}

.final-cta__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 540px;
}

.final-cta__content > p {
  color: rgb(255 255 255 / 64%);
  font-size: 0.94rem;
  line-height: 1.75;
}

.final-cta__content > :nth-child(2) {
  margin-top: 1.5rem;
}

.final-cta__note {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgb(255 255 255 / 10%);
}

.final-cta__note > span {
  width: 8px;
  height: 8px;
  margin-top: 0.42rem;
  background: $color-brand-red;
  border-radius: 50%;
}

.final-cta__note p {
  color: rgb(255 255 255 / 44%);
  font-size: 0.69rem;
  line-height: 1.65;
}

@media (max-width: 575px) {
  .service-hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .service-hero__title {
    font-size: clamp(2.75rem, 13vw, 4rem);
  }

  .infra-visual,
  .operations-map,
  .outcome-panel {
    border-radius: $radius-lg;
  }

  .infra-visual__header {
    flex-direction: column;
  }

  .situation-card,
  .operation-stage {
    grid-template-columns: 1fr;
  }

  .final-cta__title {
    font-size: clamp(2.35rem, 12vw, 3.4rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .breadcrumb__link,
  .connected-card {
    transition: none;
  }

  .connected-card:hover {
    transform: none;
  }
}
.process-step__heading {
  @include sequence-row("> h3");
}

.operations-group__title {
  padding: 1.1rem clamp(1.1rem, 2vw, 1.45rem);
  color: $color-white;
  font-family: $font-heading;
  font-size: 0.85rem;
  border-bottom: 1px solid $color-dark-border;
}

.operations-group + .operations-group {
  border-top: 1px solid $color-dark-border;
}

.release-path,
.operating-responsibilities {
  margin: 0;
  padding: 0;
  list-style: none;
}

.operation-stage__label {
  color: $color-dark-text-secondary;
  font-size: 0.68rem;
  font-weight: 700;
}
</style>
