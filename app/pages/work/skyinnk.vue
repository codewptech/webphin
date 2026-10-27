<script setup lang="ts">
import { skyinnkContent } from "~~/app/config/content/work/skyinnk";
import { services } from "~~/app/config/services";
import { workProjects } from "~~/app/config/projects";
import SequenceMarker from "~~/app/components/ui/SequenceMarker.vue";
import { useSeoMeta } from "#imports";

import { NuxtLink } from "#components";

import BaseButton from "~~/app/components/ui/BaseButton.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";
import ServiceIcon from "~~/app/components/services/ServiceIcon.vue";

const content = skyinnkContent;
const {
  platformChallenges,
  platformFocus,
  academicJourney,
  structurePrinciples,
  projectDecisions,
  projectFocus,
  heroJourney,
} = content;

const project = workProjects.find((item) => item.slug === "/work/skyinnk");

if (!project) {
  throw new Error("Skyinnk project configuration is missing.");
}

useSeoMeta(content.seo);

const relatedServices = content.relatedServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service) => service !== undefined);
</script>

<template>
  <div class="project-page">
    <!-- ==================================================
         HERO
    ================================================== -->

    <SectionWrapper tone="default" spacing="lg">
      <section class="project-hero">
        <div class="project-hero__content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <NuxtLink to="/work" class="breadcrumb__link">
              {{ content.sections.hero.link }}
            </NuxtLink>

            <span class="breadcrumb__separator" aria-hidden="true">
              {{ "/" }}
            </span>

            <span aria-current="page"> {{ project.name }} </span>
          </nav>

          <SectionEyebrow class="project-hero__eyebrow">
            {{ project.category }}
          </SectionEyebrow>

          <h1 class="project-hero__title">
            {{ content.sections.hero.title }}

            <span> {{ content.sections.hero.accent }} </span>
          </h1>

          <p class="project-hero__description">
            {{ content.sections.hero.descriptions[0] }}
          </p>

          <p class="project-hero__description">
            {{ content.sections.hero.descriptions[1] }}
          </p>

          <div class="project-hero__actions">
            <BaseButton to="/contact" variant="primary" size="lg">
              {{ content.sections.hero.contactAction }}
            </BaseButton>

            <BaseButton href="#platform-focus" variant="secondary" size="lg">
              {{ content.sections.hero.platformFocusAction }}
            </BaseButton>
          </div>

          <div class="project-hero__principle">
            <span aria-hidden="true" />

            <p>
              {{ content.sections.hero.principle.description }}
            </p>
          </div>
        </div>

        <div class="project-visual">
          <div class="project-visual__accent" />

          <div class="project-visual__header">
            <div class="project-visual__identity">
              <span class="project-mark"> {{ project.logoText }} </span>

              <div>
                <span> {{ project.name }} </span>

                <strong> {{ content.sections.hero.visual.statement }} </strong>
              </div>
            </div>

            <span class="project-visual__status">
              {{ content.sections.hero.visual.status }}
            </span>
          </div>

          <div class="project-visual__statement">
            <span> {{ content.sections.hero.statement.label }} </span>

            <h2>{{ content.sections.hero.statement.title }}</h2>
          </div>

          <ol class="project-flow" role="list">
            <li v-for="(label, index) in heroJourney" :key="label">
              <SequenceMarker :step="index + 1" :label="label" />
            </li>
          </ol>

          <div class="project-visual__outcome">
            <span> {{ content.sections.hero.outcome.label }} </span>

            <strong> {{ content.sections.hero.outcome.statement }} </strong>
          </div>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         CONTEXT
    ================================================== -->

    <SectionWrapper tone="soft" spacing="lg">
      <section>
        <header class="section-intro">
          <div>
            <SectionEyebrow class="section-intro__eyebrow">
              {{ content.sections.context.eyebrow }}
            </SectionEyebrow>

            <h2 class="section-intro__title">
              {{ content.sections.context.title }}

              <span> {{ content.sections.context.accent }} </span>
            </h2>
          </div>

          <p class="section-intro__description">
            {{ content.sections.context.description }}
          </p>
        </header>

        <div class="challenge-grid">
          <article
            v-for="challenge in platformChallenges"
            :key="challenge.title"
            class="challenge-card"
          >
            <div>
              <h3>
                {{ challenge.title }}
              </h3>

              <p>
                {{ challenge.description }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         PLATFORM FOCUS
    ================================================== -->

    <SectionWrapper tone="default" spacing="lg">
      <section id="platform-focus" class="scope-section">
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
            v-for="item in platformFocus"
            :key="item.title"
            class="scope-card"
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

    <!-- ==================================================
         SIGNATURE SECTION
    ================================================== -->

    <SectionWrapper tone="dark" spacing="lg">
      <section class="academic-section">
        <div class="academic-section__intro">
          <SectionEyebrow class="academic-section__eyebrow">
            {{ content.sections.academicStructure.eyebrow }}
          </SectionEyebrow>

          <h2 class="academic-section__title">
            {{ content.sections.academicStructure.title }}

            <span> {{ content.sections.academicStructure.accent }} </span>
          </h2>

          <p class="academic-section__description">
            {{ content.sections.academicStructure.description }}
          </p>

          <div class="structure-principles">
            <article
              v-for="principle in structurePrinciples"
              :key="principle.label"
            >
              <span>
                {{ principle.label }}
              </span>

              <h3>
                {{ principle.title }}
              </h3>

              <p>
                {{ principle.description }}
              </p>
            </article>
          </div>
        </div>

        <ol class="academic-map" role="list">
          <li
            v-for="(stage, index) in academicJourney"
            :key="stage.label"
            class="academic-stage"
          >
            <SequenceMarker
              :step="index + 1"
              :label="stage.label"
              variant="inverse"
            />

            <div>
              <h3>
                {{ stage.title }}
              </h3>

              <p>
                {{ stage.description }}
              </p>
            </div>
          </li>
        </ol>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         DECISIONS
    ================================================== -->

    <SectionWrapper tone="soft" spacing="lg">
      <section>
        <header class="section-intro">
          <div>
            <SectionEyebrow class="section-intro__eyebrow">
              {{ content.sections.decisions.eyebrow }}
            </SectionEyebrow>

            <h2 class="section-intro__title">
              {{ content.sections.decisions.title }}

              <span> {{ content.sections.decisions.accent }} </span>
            </h2>
          </div>

          <p class="section-intro__description">
            {{ content.sections.decisions.description }}
          </p>
        </header>

        <div class="decision-grid">
          <article
            v-for="decision in projectDecisions"
            :key="decision.title"
            class="decision-card"
          >
            <div>
              <h3>
                {{ decision.title }}
              </h3>

              <p>
                {{ decision.description }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         PROJECT FOCUS SUMMARY
    ================================================== -->

    <SectionWrapper tone="default" spacing="lg">
      <section class="focus-section">
        <div class="focus-section__intro">
          <SectionEyebrow class="focus-section__eyebrow">
            {{ content.sections.focus.eyebrow }}
          </SectionEyebrow>

          <h2 class="focus-section__title">
            {{ content.sections.focus.title }}

            <span> {{ content.sections.focus.accent }} </span>
          </h2>

          <p>
            {{ content.sections.focus.description }}
          </p>
        </div>

        <div class="focus-list">
          <div
            v-for="item in projectFocus"
            :key="item"
            class="focus-list__item"
          >
            <span aria-hidden="true"> {{ "✓" }} </span>

            <strong>
              {{ item }}
            </strong>
          </div>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         SERVICES
    ================================================== -->

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

        <div class="service-grid">
          <NuxtLink
            v-for="service in relatedServices"
            :key="service.slug"
            :to="service.slug"
            class="service-card"
          >
            <div class="service-card__icon">
              <ServiceIcon :icon="service.icon" />
            </div>

            <span class="service-card__layer">
              {{ service.layer }}
            </span>

            <h3>
              {{ service.title }}
            </h3>

            <div class="service-card__action">
              {{ content.sections.relatedServices.action }}
              <span aria-hidden="true">→</span>
            </div>
          </NuxtLink>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         FINAL CTA
    ================================================== -->

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

.project-page {
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

.section-intro__title,
.focus-section__title {
  max-width: 820px;
  color: $color-black;
  font-family: $font-heading;
  font-size: clamp(2.4rem, 4.4vw, 4.1rem);
  font-weight: 700;
  line-height: 1.03;
  letter-spacing: -0.048em;
}

.section-intro__title span,
.focus-section__title span {
  display: block;
  color: $color-brand-red;
}

.section-intro__description {
  max-width: 540px;
  color: $color-text-secondary;
  font-size: clamp(0.95rem, 1.25vw, 1.04rem);
  line-height: 1.75;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.45rem;
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

.project-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 30rem), 1fr));
  gap: clamp(3rem, 7vw, 7rem);
  align-items: center;
}

.project-hero__content {
  max-width: 820px;
}

.project-hero__eyebrow {
  margin-bottom: 1.15rem;
}

.project-hero__title {
  color: $color-black;
  font-family: $font-heading;
  font-size: clamp(3rem, 5.8vw, 5.5rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.058em;
}

.project-hero__title span {
  display: block;
  color: $color-brand-red;
}

.project-hero__description {
  max-width: 680px;
  margin-top: 1.35rem;
  color: $color-text-secondary;
  font-size: clamp(0.98rem, 1.3vw, 1.08rem);
  line-height: 1.78;
}

.project-hero__description + .project-hero__description {
  margin-top: 0.75rem;
}

.project-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.9rem;
}

.project-hero__principle {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.8rem;
  max-width: 610px;
  margin-top: 1.8rem;
  padding-top: 1.4rem;
  border-top: 1px solid $color-border;
}

.project-hero__principle > span {
  position: relative;
  width: 8px;
  height: 8px;
  margin-top: 0.42rem;
  background: $color-brand-red;
  border-radius: 50%;
}

.project-hero__principle > span::before {
  content: "";
  position: absolute;
  inset: -5px;
  border: 1px solid rgb(227 40 47 / 18%);
  border-radius: 50%;
}

.project-hero__principle p {
  color: $color-text-muted;
  font-size: 0.76rem;
  font-weight: 600;
  line-height: 1.65;
}

.project-visual {
  position: relative;
  overflow: hidden;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-xl;
  box-shadow: 0 30px 80px rgb(17 19 23 / 7%);
}

.project-visual__accent {
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

.project-visual__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.35rem;
  border-bottom: 1px solid $color-border;
}

.project-visual__identity {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.project-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: $color-black;
  background: $color-background-soft;
  font-family: $font-heading;
  font-size: 0.7rem;
  font-weight: 750;
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.project-visual__identity div > span {
  display: block;
  margin-bottom: 0.28rem;
  color: $color-brand-red;
  font-size: 0.55rem;
  font-weight: 750;
  text-transform: uppercase;
}

.project-visual__identity strong {
  color: $color-black;
  font-family: $font-heading;
  font-size: 0.83rem;
}

.project-visual__status {
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

.project-visual__statement {
  padding-block: 1.45rem;
}

.project-visual__statement > span {
  display: block;
  margin-bottom: 0.5rem;
  color: $color-text-muted;
  font-size: 0.56rem;
  font-weight: 750;
  text-transform: uppercase;
}

.project-visual__statement h2 {
  color: $color-black;
  font-family: $font-heading;
  font-size: clamp(1.55rem, 2.7vw, 2.1rem);
  line-height: 1.16;
  letter-spacing: -0.038em;
}

.project-flow {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 0.35rem;
}

.project-flow > li {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.8rem;
  align-items: center;
  padding: 0.8rem 0.9rem;
  background: $color-background-soft;
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.project-visual__outcome {
  margin-top: 1.25rem;
  padding: 1rem;
  background: $color-background-soft;
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.project-visual__outcome span {
  display: block;
  margin-bottom: 0.35rem;
  color: $color-brand-red;
  font-size: 0.55rem;
  font-weight: 750;
  text-transform: uppercase;
}

.project-visual__outcome strong {
  color: $color-black;
  font-family: $font-heading;
  font-size: 0.84rem;
}

.challenge-grid,
.scope-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: 1rem;
}

.challenge-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1rem;
  padding: clamp(1.35rem, 2.4vw, 1.8rem);
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-lg;
}

.challenge-card h3,
.scope-card h3,
.decision-card h3 {
  color: $color-black;
  font-family: $font-heading;
  font-size: 1.05rem;
  line-height: 1.4;
}

.scope-card h3 {
  margin-top: 1rem;
}

.challenge-card p,
.scope-card p,
.decision-card p {
  margin-top: 0.55rem;
  color: $color-text-muted;
  font-size: 0.71rem;
  line-height: 1.65;
}

.scope-section {
  scroll-margin-top: 100px;
}

.scope-card {
  padding: clamp(1.35rem, 2.4vw, 1.8rem);
  border: 1px solid $color-border;
  border-radius: $radius-lg;
}

.academic-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 29rem), 1fr));
  gap: clamp(3rem, 7vw, 7rem);
  align-items: start;
}

.academic-section__eyebrow {
  margin-bottom: 1.1rem;
}

.academic-section__title {
  color: $color-white;
  font-family: $font-heading;
  font-size: clamp(2.5rem, 4.6vw, 4.2rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
}

.academic-section__title span {
  display: block;
  color: $color-brand-red;
}

.academic-section__description {
  margin-top: 1.4rem;
  color: rgb(255 255 255 / 62%);
  font-size: 0.94rem;
  line-height: 1.75;
}

.structure-principles {
  display: grid;
  gap: 0.6rem;
  margin-top: 1.6rem;
}

.structure-principles article {
  padding: 0.9rem 1rem;
  background: rgb(255 255 255 / 4%);
  border: 1px solid rgb(255 255 255 / 9%);
  border-radius: $radius-md;
}

.structure-principles span {
  color: $color-brand-red;
  font-size: 0.55rem;
  font-weight: 750;
  text-transform: uppercase;
}

.structure-principles h3 {
  margin-top: 0.32rem;
  color: $color-white;
  font-family: $font-heading;
  font-size: 0.86rem;
}

.structure-principles p {
  margin-top: 0.35rem;
  color: rgb(255 255 255 / 48%);
  font-size: 0.65rem;
  line-height: 1.55;
}

.academic-map {
  overflow: hidden;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: $radius-xl;
}

.academic-stage {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.2rem;
  padding: clamp(1.1rem, 2vw, 1.45rem);
  border-bottom: 1px solid rgb(255 255 255 / 9%);
}

.academic-stage:last-child {
  border-bottom: 0;
}

.academic-stage h3 {
  color: $color-white;
  font-family: $font-heading;
  font-size: 0.91rem;
  line-height: 1.4;
}

.academic-stage p {
  margin-top: 0.4rem;
  color: rgb(255 255 255 / 50%);
  font-size: 0.67rem;
  line-height: 1.6;
}

.decision-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 19rem), 1fr));
  gap: 1rem;
}

.decision-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1rem;
  padding: clamp(1.35rem, 2.4vw, 1.8rem);
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-lg;
}

.focus-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 27rem), 1fr));
  gap: clamp(3rem, 7vw, 7rem);
  align-items: start;
}

.focus-section__eyebrow {
  margin-bottom: 1.1rem;
}

.focus-section__intro > p {
  max-width: 570px;
  margin-top: 1.2rem;
  color: $color-text-secondary;
  font-size: 0.9rem;
  line-height: 1.75;
}

.focus-list {
  display: grid;
  gap: 0.65rem;
}

.focus-list__item {
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr);
  gap: 0.65rem;
  align-items: center;
  padding: 0.95rem 1rem;
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.focus-list__item span {
  color: $color-brand-red;
  font-size: 0.67rem;
  font-weight: 750;
}

.focus-list__item strong {
  color: $color-text-secondary;
  font-size: 0.72rem;
  font-weight: 650;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: 1rem;
}

.service-card {
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
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

.service-card:hover {
  border-color: $color-border-strong;
  box-shadow: 0 18px 45px rgb(17 19 23 / 6%);
  transform: translateY(-2px);
}

.service-card__icon {
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

.service-card__layer {
  margin-top: 1.1rem;
  color: $color-brand-red;
  font-size: 0.55rem;
  font-weight: 750;
  text-transform: uppercase;
}

.service-card h3 {
  margin-top: 0.5rem;
  color: $color-black;
  font-family: $font-heading;
  font-size: 1.2rem;
  line-height: 1.3;
}

.service-card__action {
  display: inline-flex;
  gap: 0.45rem;
  width: fit-content;
  margin-top: auto;
  padding-top: 1.3rem;
  color: $color-black;
  font-size: 0.68rem;
  font-weight: 700;
}

.service-card__action span {
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
  .project-hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .project-hero__title {
    font-size: clamp(2.75rem, 13vw, 4rem);
  }

  .project-visual,
  .academic-map {
    border-radius: $radius-lg;
  }

  .project-visual__header {
    flex-direction: column;
  }

  .challenge-card,
  .decision-card,
  .academic-stage {
    grid-template-columns: 1fr;
  }

  .final-cta__title {
    font-size: clamp(2.35rem, 12vw, 3.4rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .breadcrumb__link,
  .service-card {
    transition: none;
  }

  .service-card:hover {
    transform: none;
  }
}
.academic-map {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
