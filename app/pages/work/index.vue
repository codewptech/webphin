<script setup lang="ts">
import { workContent } from "~~/app/config/content/work/index";
import { useSeoMeta } from "#imports";

import { NuxtLink } from "#components";

import BaseButton from "~~/app/components/ui/BaseButton.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";
import ServiceIcon from "~~/app/components/services/ServiceIcon.vue";

import { workProjects } from "~~/app/config/projects";

import { services } from "~~/app/config/services";

const content = workContent;
const {
  projectNarratives,
  projectDimensions,
  engineeringStack,
  engineeringCapabilities,
} = content;

useSeoMeta(content.seo);

const featuredProjects = workProjects
  .filter((project) => {
    return project.name in projectNarratives;
  })
  .map((project) => {
    const narrative =
      projectNarratives[project.name as keyof typeof projectNarratives];

    return {
      ...project,
      narrative,
    };
  });
</script>

<template>
  <div class="work-page">
    <!-- ==================================================
         HERO
    ================================================== -->

    <SectionWrapper tone="default" spacing="lg">
      <section class="work-hero">
        <div class="work-hero__content">
          <SectionEyebrow class="work-hero__eyebrow">
            {{ content.sections.hero.eyebrow }}
          </SectionEyebrow>

          <h1 class="work-hero__title">
            {{ content.sections.hero.title }}

            <span> {{ content.sections.hero.accent }} </span>
          </h1>

          <p class="work-hero__description">
            {{ content.sections.hero.description }}
          </p>

          <div class="work-hero__actions">
            <BaseButton to="/contact" variant="primary" size="lg">
              {{ content.sections.hero.contactAction }}
            </BaseButton>

            <BaseButton href="#projects" variant="secondary" size="lg">
              {{ content.sections.hero.projectsAction }}
            </BaseButton>
          </div>

          <div class="work-hero__principle">
            <span class="work-hero__principle-mark" aria-hidden="true" />

            <p>
              {{ content.sections.hero.principle.description }}
            </p>
          </div>
        </div>

        <div class="project-anatomy">
          <div class="project-anatomy__accent" />

          <div class="project-anatomy__header">
            <span class="project-anatomy__label">
              {{ content.sections.hero.anatomy.label }}
            </span>

            <span class="project-anatomy__status">
              {{ content.sections.hero.anatomy.status }}
            </span>
          </div>

          <div class="project-anatomy__group">
            <span class="project-anatomy__group-label">
              {{ content.sections.hero.anatomy.requirement.label }}
            </span>

            <div class="project-anatomy__items">
              <span>{{
                content.sections.hero.anatomy.requirement.points[0]
              }}</span>
              <span>{{
                content.sections.hero.anatomy.requirement.points[1]
              }}</span>
              <span>{{
                content.sections.hero.anatomy.requirement.points[2]
              }}</span>
              <span>{{
                content.sections.hero.anatomy.requirement.points[3]
              }}</span>
            </div>
          </div>

          <div class="project-anatomy__connector" aria-hidden="true">↓</div>

          <div class="project-anatomy__group">
            <span class="project-anatomy__group-label">
              {{ content.sections.hero.anatomy.needs.label }}
            </span>

            <div class="project-anatomy__items">
              <span>{{ content.sections.hero.anatomy.needs.points[0] }}</span>
              <span>{{ content.sections.hero.anatomy.needs.points[1] }}</span>
              <span>{{ content.sections.hero.anatomy.needs.points[2] }}</span>
              <span>{{ content.sections.hero.anatomy.needs.points[3] }}</span>
              <span>{{ content.sections.hero.anatomy.needs.points[4] }}</span>
            </div>
          </div>

          <div class="project-anatomy__connector" aria-hidden="true">↓</div>

          <div class="project-anatomy__outcome">
            <span> {{ content.sections.hero.outcome.label }} </span>

            <strong> {{ content.sections.hero.outcome.statement }} </strong>
          </div>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         PROJECTS
    ================================================== -->

    <SectionWrapper tone="soft" spacing="lg">
      <section id="projects" class="projects-section">
        <header class="section-intro">
          <div>
            <SectionEyebrow class="section-intro__eyebrow">
              {{ content.sections.projectsSection.eyebrow }}
            </SectionEyebrow>

            <h2 class="section-intro__title">
              {{ content.sections.projectsSection.title }}

              <span> {{ content.sections.projectsSection.accent }} </span>
            </h2>
          </div>

          <p class="section-intro__description">
            {{ content.sections.projectsSection.description }}
          </p>
        </header>

        <div class="project-list">
          <NuxtLink
            v-for="project in featuredProjects"
            :key="project.slug"
            :to="project.slug"
            class="project-row"
          >
            <div class="project-row__identity">
              <div class="project-row__mark">
                <img
                  v-if="project.logoUrl"
                  :src="project.logoUrl"
                  :alt="project.logoAlt || `${project.name} logo`"
                />

                <span v-else>
                  {{ project.logoText }}
                </span>
              </div>

              <div>
                <span class="project-row__category">
                  {{ project.category }}
                </span>

                <h3 class="project-row__title">
                  {{ project.name }}
                </h3>

                <span v-if="project.status" class="project-row__status">
                  {{ project.status }}
                </span>
              </div>
            </div>

            <div class="project-row__content">
              <p class="project-row__description">
                {{ project.narrative.summary }}
              </p>

              <div class="project-row__capabilities">
                <span
                  v-for="capability in project.capabilities"
                  :key="capability"
                >
                  {{ capability }}
                </span>
              </div>

              <div class="project-row__action">
                <span> {{ content.sections.projectsSection.label }} </span>

                <span class="project-row__arrow" aria-hidden="true"> → </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         DIFFERENT SYSTEMS
    ================================================== -->

    <SectionWrapper tone="dark" spacing="lg">
      <section class="project-systems">
        <div class="project-systems__intro">
          <SectionEyebrow class="project-systems__eyebrow">
            {{ content.sections.projectSystems.eyebrow }}
          </SectionEyebrow>

          <h2 class="project-systems__title">
            {{ content.sections.projectSystems.title }}

            <span> {{ content.sections.projectSystems.accent }} </span>
          </h2>

          <p class="project-systems__description">
            {{ content.sections.projectSystems.description }}
          </p>

          <div class="project-systems__principle">
            <span aria-hidden="true" />

            <p>
              {{ content.sections.projectSystems.principle.description }}
            </p>
          </div>
        </div>

        <div class="project-system-grid">
          <article
            v-for="project in featuredProjects"
            :key="project.name"
            class="project-system"
          >
            <span class="project-system__category">
              {{ project.category }}
            </span>

            <h3 class="project-system__title">
              {{ project.name }}
            </h3>

            <div class="project-system__areas">
              <div
                v-for="area in project.narrative.systemAreas"
                :key="area"
                class="project-system__area"
              >
                <strong>{{ area }}</strong>
              </div>
            </div>
          </article>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         HOW WE READ A PROJECT
    ================================================== -->

    <SectionWrapper tone="default" spacing="lg">
      <section class="project-dimensions">
        <header class="section-intro">
          <div>
            <SectionEyebrow class="section-intro__eyebrow">
              {{ content.sections.projectDimensions.eyebrow }}
            </SectionEyebrow>

            <h2 class="section-intro__title">
              {{ content.sections.projectDimensions.title }}

              <span> {{ content.sections.projectDimensions.accent }} </span>
            </h2>
          </div>

          <p class="section-intro__description">
            {{ content.sections.projectDimensions.description }}
          </p>
        </header>

        <div class="dimension-grid">
          <article
            v-for="dimension in projectDimensions"
            :key="dimension.title"
            class="dimension-card"
          >
            <span class="dimension-card__label">
              {{ dimension.title }}
            </span>

            <h3 class="dimension-card__question">
              {{ dimension.question }}
            </h3>

            <p class="dimension-card__description">
              {{ dimension.description }}
            </p>
          </article>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         ENGINEERING OUTCOME
    ================================================== -->

    <SectionWrapper tone="soft" spacing="lg">
      <section class="engineering-outcome">
        <div class="engineering-outcome__content">
          <SectionEyebrow class="engineering-outcome__eyebrow">
            {{ content.sections.engineeringOutcome.eyebrow }}
          </SectionEyebrow>

          <h2 class="engineering-outcome__title">
            {{ content.sections.engineeringOutcome.title }}

            <span> {{ content.sections.engineeringOutcome.accent }} </span>
          </h2>

          <p>
            {{ content.sections.engineeringOutcome.descriptions[0] }}
          </p>

          <p>
            {{ content.sections.engineeringOutcome.descriptions[1] }}
          </p>

          <BaseButton to="/services/infrastructure-deployment" variant="text">
            {{
              content.sections.engineeringOutcome
                .servicesInfrastructureDeploymentAction
            }}
          </BaseButton>
        </div>

        <div class="engineering-panel">
          <span class="engineering-panel__label">
            {{ content.sections.engineeringOutcome.engineeringPanel.label }}
          </span>

          <h3>
            {{ content.sections.engineeringOutcome.engineeringPanel.title }}
          </h3>

          <div class="engineering-panel__group">
            <span class="engineering-panel__group-label">
              {{
                content.sections.engineeringOutcome.engineeringPanel
                  .groupLabels[0]
              }}
            </span>

            <div class="engineering-panel__chips">
              <span v-for="item in engineeringStack" :key="item">
                {{ item }}
              </span>
            </div>
          </div>

          <div class="engineering-panel__group">
            <span class="engineering-panel__group-label">
              {{
                content.sections.engineeringOutcome.engineeringPanel
                  .groupLabels[1]
              }}
            </span>

            <div class="engineering-panel__chips">
              <span v-for="item in engineeringCapabilities" :key="item">
                {{ item }}
              </span>
            </div>
          </div>

          <p class="engineering-panel__note">
            {{ content.sections.engineeringOutcome.engineeringPanel.note }}
          </p>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         SERVICE CONNECTION
    ================================================== -->

    <SectionWrapper tone="default" spacing="lg">
      <section class="work-services">
        <header class="section-intro">
          <div>
            <SectionEyebrow class="section-intro__eyebrow">
              {{ content.sections.workServices.eyebrow }}
            </SectionEyebrow>

            <h2 class="section-intro__title">
              {{ content.sections.workServices.title }}

              <span> {{ content.sections.workServices.accent }} </span>
            </h2>
          </div>

          <p class="section-intro__description">
            {{ content.sections.workServices.description }}
          </p>
        </header>

        <div class="service-link-grid">
          <NuxtLink
            v-for="service in services"
            :key="service.slug"
            :to="service.slug"
            class="service-link"
          >
            <div class="service-link__icon">
              <ServiceIcon :icon="service.icon" />
            </div>

            <div class="service-link__content">
              <span class="service-link__layer">
                {{ service.layer }}
              </span>

              <h3>
                {{ service.title }}
              </h3>
            </div>

            <span class="service-link__arrow" aria-hidden="true"> → </span>
          </NuxtLink>
        </div>
      </section>
    </SectionWrapper>

    <!-- ==================================================
         TRUST NOTE
    ================================================== -->

    <SectionWrapper tone="soft" spacing="md">
      <aside class="work-trust">
        <div class="work-trust__mark">
          <span aria-hidden="true"> {{ "✓" }} </span>
        </div>

        <div>
          <SectionEyebrow class="work-trust__eyebrow">
            {{ content.sections.presentation.eyebrow }}
          </SectionEyebrow>

          <p class="work-trust__statement">
            {{ content.sections.presentation.statement }}
          </p>

          <p class="work-trust__description">
            {{ content.sections.presentation.description }}
          </p>
        </div>
      </aside>
    </SectionWrapper>

    <!-- ==================================================
         FINAL CTA
    ================================================== -->

    <SectionWrapper class="work-cta-section" tone="dark" spacing="lg">
      <section class="work-cta">
        <div>
          <SectionEyebrow class="work-cta__eyebrow">
            {{ content.sections.cta.eyebrow }}
          </SectionEyebrow>

          <h2 class="work-cta__title">
            {{ content.sections.cta.title }}

            <span> {{ content.sections.cta.accent }} </span>
          </h2>
        </div>

        <div class="work-cta__content">
          <p>
            {{ content.sections.cta.description }}
          </p>

          <BaseButton to="/contact" variant="primary" size="lg">
            {{ content.sections.cta.contactAction }}
          </BaseButton>

          <div class="work-cta__note">
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

// ==================================================
// PAGE
// ==================================================

.work-page {
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
  max-width: 820px;

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
// HERO
// ==================================================

.work-hero {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 30rem), 1fr));

  gap: clamp(3rem, 7vw, 7rem);

  align-items: center;
}

.work-hero__content {
  max-width: 820px;
}

.work-hero__eyebrow {
  margin-bottom: 1.2rem;
}

.work-hero__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(3rem, 5.8vw, 5.5rem);
  font-weight: 700;

  line-height: 0.98;

  letter-spacing: -0.058em;
}

.work-hero__title span {
  display: block;

  color: $color-brand-red;
}

.work-hero__description {
  max-width: 670px;

  margin-top: 1.5rem;

  color: $color-text-secondary;

  font-size: clamp(0.98rem, 1.3vw, 1.08rem);

  line-height: 1.78;
}

.work-hero__actions {
  display: flex;
  flex-wrap: wrap;

  gap: 0.8rem;

  margin-top: 1.9rem;
}

.work-hero__principle {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 0.8rem;

  max-width: 620px;

  margin-top: 1.8rem;
  padding-top: 1.45rem;

  border-top: 1px solid $color-border;
}

.work-hero__principle-mark {
  position: relative;

  width: 8px;
  height: 8px;

  margin-top: 0.42rem;

  background: $color-brand-red;

  border-radius: 50%;
}

.work-hero__principle-mark::before {
  content: "";

  position: absolute;

  inset: -5px;

  border: 1px solid rgb(227 40 47 / 18%);
  border-radius: 50%;
}

.work-hero__principle p {
  color: $color-text-muted;

  font-size: 0.76rem;
  font-weight: 600;

  line-height: 1.65;
}

// --------------------------------------------------
// Project anatomy
// --------------------------------------------------

.project-anatomy {
  position: relative;

  overflow: hidden;

  padding: clamp(1.5rem, 3vw, 2.25rem);

  background: $color-white;

  border: 1px solid $color-border;
  border-radius: $radius-xl;

  box-shadow: 0 30px 80px rgb(17 19 23 / 7%);
}

.project-anatomy__accent {
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

.project-anatomy__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  padding-bottom: 1.35rem;

  border-bottom: 1px solid $color-border;
}

.project-anatomy__label {
  color: $color-text-muted;

  font-size: 0.58rem;
  font-weight: 750;

  letter-spacing: 0.09em;

  text-transform: uppercase;
}

.project-anatomy__status {
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

.project-anatomy__group {
  margin-top: 1.4rem;
}

.project-anatomy__group-label {
  display: block;

  margin-bottom: 0.7rem;

  color: $color-brand-red;

  font-size: 0.56rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.project-anatomy__items {
  display: flex;
  flex-wrap: wrap;

  gap: 0.45rem;
}

.project-anatomy__items span {
  display: inline-flex;
  align-items: center;

  min-height: 31px;

  padding-inline: 0.72rem;

  color: $color-text-secondary;

  background: $color-background-soft;

  font-size: 0.59rem;
  font-weight: 600;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

.project-anatomy__connector {
  width: fit-content;

  margin: 0.8rem auto 0;

  color: $color-brand-red;

  font-size: 0.72rem;
}

.project-anatomy__outcome {
  margin-top: 1.35rem;

  padding: 1rem 1.05rem;

  background: $color-background-soft;

  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.project-anatomy__outcome span {
  display: block;

  margin-bottom: 0.35rem;

  color: $color-brand-red;

  font-size: 0.55rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.project-anatomy__outcome strong {
  color: $color-black;

  font-family: $font-heading;

  font-size: 0.84rem;
  font-weight: 650;
}

// ==================================================
// PROJECT LIST
// ==================================================

.projects-section {
  scroll-margin-top: 100px;
}

.project-list {
  border-top: 1px solid $color-border;
}

.project-row {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 24rem), 1fr));

  gap: clamp(2rem, 6vw, 6rem);

  padding-block: clamp(2.2rem, 5vw, 3.5rem);

  color: inherit;

  text-decoration: none;

  border-bottom: 1px solid $color-border;

  transition:
    padding-inline $transition-fast,
    background-color $transition-fast;
}

.project-row:hover {
  padding-inline: clamp(0.4rem, 1vw, 0.9rem);

  background: rgb(255 255 255 / 54%);
}

.project-row:focus-visible {
  outline: 3px solid rgb(227 40 47 / 18%);
  outline-offset: 4px;
}

.project-row__identity {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 1.1rem;

  align-items: start;
}

.project-row__mark {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 58px;
  height: 58px;

  overflow: hidden;

  color: $color-black;

  background: $color-white;

  font-family: $font-heading;

  font-size: 0.78rem;
  font-weight: 750;

  border: 1px solid $color-border;
  border-radius: $radius-lg;
}

.project-row__mark img {
  width: 100%;
  height: 100%;

  object-fit: contain;
}

.project-row__category {
  display: block;

  margin-bottom: 0.45rem;

  color: $color-brand-red;

  font-size: 0.57rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.project-row__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.8rem, 3.5vw, 2.7rem);
  font-weight: 700;

  line-height: 1.1;

  letter-spacing: -0.04em;
}

.project-row__status {
  display: inline-flex;
  align-items: center;

  min-height: 27px;

  margin-top: 0.8rem;
  padding-inline: 0.7rem;

  color: $color-text-muted;

  background: $color-white;

  font-size: 0.57rem;
  font-weight: 650;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

.project-row__content {
  min-width: 0;
}

.project-row__description {
  max-width: 650px;

  color: $color-text-secondary;

  font-size: 0.86rem;

  line-height: 1.75;
}

.project-row__capabilities {
  display: flex;
  flex-wrap: wrap;

  gap: 0.45rem;

  margin-top: 1.2rem;
}

.project-row__capabilities span {
  display: inline-flex;
  align-items: center;

  min-height: 29px;

  padding-inline: 0.7rem;

  color: $color-text-muted;

  background: $color-white;

  font-size: 0.59rem;
  font-weight: 600;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

.project-row__action {
  display: inline-flex;
  align-items: center;

  gap: 0.45rem;

  margin-top: 1.35rem;

  color: $color-black;

  font-size: 0.69rem;
  font-weight: 700;
}

.project-row__arrow {
  color: $color-brand-red;

  transition: transform $transition-fast;
}

.project-row:hover .project-row__arrow {
  transform: translateX(4px);
}

// ==================================================
// PROJECT SYSTEMS
// ==================================================

.project-systems {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 29rem), 1fr));

  gap: clamp(3rem, 7vw, 7rem);

  align-items: start;
}

.project-systems__intro {
  max-width: 600px;
}

.project-systems__eyebrow {
  margin-bottom: 1.15rem;
}

.project-systems__title {
  color: $color-white;

  font-family: $font-heading;

  font-size: clamp(2.5rem, 4.6vw, 4.2rem);
  font-weight: 700;

  line-height: 1.02;

  letter-spacing: -0.05em;
}

.project-systems__title span {
  display: block;

  color: $color-brand-red;
}

.project-systems__description {
  margin-top: 1.4rem;

  color: rgb(255 255 255 / 62%);

  font-size: 0.94rem;

  line-height: 1.75;
}

.project-systems__principle {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 0.8rem;

  margin-top: 1.8rem;
  padding-top: 1.4rem;

  border-top: 1px solid rgb(255 255 255 / 10%);
}

.project-systems__principle > span {
  width: 9px;
  height: 9px;

  margin-top: 0.43rem;

  background: $color-brand-red;

  border-radius: 50%;
}

.project-systems__principle p {
  color: rgb(255 255 255 / 48%);

  font-size: 0.75rem;
  font-weight: 600;

  line-height: 1.65;
}

.project-system-grid {
  display: grid;

  gap: 0.8rem;
}

.project-system {
  padding: clamp(1.35rem, 2.5vw, 1.8rem);

  background: rgb(255 255 255 / 4%);

  border: 1px solid rgb(255 255 255 / 9%);
  border-radius: $radius-lg;
}

.project-system__category {
  color: $color-brand-red;

  font-size: 0.55rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.project-system__title {
  margin-top: 0.45rem;

  color: $color-white;

  font-family: $font-heading;

  font-size: 1.35rem;
  font-weight: 700;

  letter-spacing: -0.03em;
}

.project-system__areas {
  display: grid;
  gap: 0.55rem;
  margin-top: 1.2rem;
}

.project-system__area {
  display: grid;

  grid-template-columns: minmax(0, 1fr);

  gap: 0.8rem;

  align-items: center;

  padding: 0.75rem 0.8rem;

  background: rgb(255 255 255 / 4%);

  border: 1px solid rgb(255 255 255 / 7%);
  border-radius: $radius-md;
}

.project-system__area strong {
  color: rgb(255 255 255 / 78%);

  font-size: 0.69rem;
  font-weight: 650;
}

// ==================================================
// PROJECT DIMENSIONS
// ==================================================

.dimension-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));

  gap: 1rem;
}

.dimension-card {
  padding: clamp(1.4rem, 2.5vw, 1.8rem);

  border: 1px solid $color-border;
  border-radius: $radius-lg;
}

.dimension-card__label {
  display: block;

  color: $color-brand-red;

  font-size: 0.56rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.dimension-card__question {
  margin-top: 0.6rem;

  color: $color-black;

  font-family: $font-heading;

  font-size: 1.15rem;
  font-weight: 700;

  line-height: 1.4;

  letter-spacing: -0.025em;
}

.dimension-card__description {
  margin-top: 0.7rem;

  color: $color-text-muted;

  font-size: 0.71rem;

  line-height: 1.65;
}

// ==================================================
// ENGINEERING OUTCOME
// ==================================================

.engineering-outcome {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 28rem), 1fr));

  gap: clamp(3rem, 7vw, 7rem);

  align-items: center;
}

.engineering-outcome__eyebrow {
  margin-bottom: 1.1rem;
}

.engineering-outcome__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(2.4rem, 4.3vw, 4rem);
  font-weight: 700;

  line-height: 1.03;

  letter-spacing: -0.048em;
}

.engineering-outcome__title span {
  display: block;

  color: $color-brand-red;
}

.engineering-outcome__content > p {
  max-width: 600px;

  margin-top: 1.15rem;

  color: $color-text-secondary;

  font-size: 0.9rem;

  line-height: 1.75;
}

.engineering-outcome__content > :last-child {
  margin-top: 1.2rem;
}

.engineering-panel {
  padding: clamp(1.5rem, 3vw, 2rem);

  background: $color-white;

  border: 1px solid $color-border;
  border-radius: $radius-xl;

  box-shadow: 0 24px 60px rgb(17 19 23 / 6%);
}

.engineering-panel__label {
  color: $color-brand-red;

  font-size: 0.56rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.engineering-panel h3 {
  margin-top: 0.65rem;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.5rem, 2.7vw, 2rem);
  font-weight: 700;

  line-height: 1.15;

  letter-spacing: -0.035em;
}

.engineering-panel__group {
  margin-top: 1.4rem;
  padding-top: 1.2rem;

  border-top: 1px solid $color-border;
}

.engineering-panel__group-label {
  display: block;

  margin-bottom: 0.65rem;

  color: $color-text-muted;

  font-size: 0.55rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.engineering-panel__chips {
  display: flex;
  flex-wrap: wrap;

  gap: 0.45rem;
}

.engineering-panel__chips span {
  display: inline-flex;
  align-items: center;

  min-height: 28px;

  padding-inline: 0.68rem;

  color: $color-text-secondary;

  background: $color-background-soft;

  font-size: 0.58rem;
  font-weight: 600;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

.engineering-panel__note {
  margin-top: 1.2rem;

  color: $color-text-muted;

  font-size: 0.63rem;

  line-height: 1.6;
}

// ==================================================
// SERVICE LINKS
// ==================================================

.service-link-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 19rem), 1fr));

  gap: 1rem;
}

.service-link {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr)
    auto;

  gap: 0.9rem;

  align-items: center;

  padding: 1.2rem;

  color: inherit;

  text-decoration: none;

  border: 1px solid $color-border;
  border-radius: $radius-lg;

  transition:
    border-color $transition-fast,
    box-shadow $transition-fast,
    transform $transition-fast;
}

.service-link:hover {
  border-color: $color-border-strong;

  box-shadow: 0 16px 40px rgb(17 19 23 / 5%);

  transform: translateY(-2px);
}

.service-link__icon {
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

.service-link__layer {
  display: block;

  margin-bottom: 0.3rem;

  color: $color-brand-red;

  font-size: 0.54rem;
  font-weight: 750;

  text-transform: uppercase;
}

.service-link h3 {
  color: $color-black;

  font-family: $font-heading;

  font-size: 0.84rem;
  font-weight: 700;

  line-height: 1.35;
}

.service-link__arrow {
  color: $color-brand-red;

  font-size: 0.78rem;

  transition: transform $transition-fast;
}

.service-link:hover .service-link__arrow {
  transform: translateX(3px);
}

// ==================================================
// TRUST NOTE
// ==================================================

.work-trust {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 1rem;

  max-width: 900px;
}

.work-trust__mark {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  height: 42px;

  color: $color-brand-red;

  background: $color-white;

  font-size: 0.75rem;
  font-weight: 750;

  border: 1px solid $color-border;
  border-radius: 50%;
}

.work-trust__eyebrow {
  margin-bottom: 0.6rem;
}

.work-trust__statement {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 650;

  line-height: 1.45;

  letter-spacing: -0.02em;
}

.work-trust__description {
  margin-top: 0.45rem;

  color: $color-text-muted;

  font-size: 0.72rem;

  line-height: 1.65;
}

// ==================================================
// FINAL CTA
// ==================================================

.work-cta-section {
  background: #1b1e23;
}

.work-cta {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(100%, 28rem), 1fr));

  gap: clamp(2.5rem, 7vw, 7rem);

  align-items: end;
}

.work-cta__eyebrow {
  margin-bottom: 1.1rem;
}

.work-cta__title {
  color: $color-white;

  font-family: $font-heading;

  font-size: clamp(2.6rem, 5vw, 4.6rem);
  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.052em;
}

.work-cta__title span {
  display: block;

  color: $color-brand-red;
}

.work-cta__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 540px;
}

.work-cta__content > p {
  color: rgb(255 255 255 / 64%);

  font-size: 0.94rem;

  line-height: 1.75;
}

.work-cta__content > :nth-child(2) {
  margin-top: 1.5rem;
}

.work-cta__note {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  gap: 0.75rem;

  margin-top: 1.5rem;
  padding-top: 1.25rem;

  border-top: 1px solid rgb(255 255 255 / 10%);
}

.work-cta__note > span {
  width: 8px;
  height: 8px;

  margin-top: 0.42rem;

  background: $color-brand-red;

  border-radius: 50%;
}

.work-cta__note p {
  color: rgb(255 255 255 / 44%);

  font-size: 0.69rem;

  line-height: 1.65;
}

// ==================================================
// SMALL-SCREEN REFINEMENTS
// ==================================================

@media (max-width: 575px) {
  .work-hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .work-hero__title {
    font-size: clamp(2.75rem, 13vw, 4rem);
  }

  .project-anatomy,
  .engineering-panel {
    border-radius: $radius-lg;
  }

  .project-row__identity {
    grid-template-columns: 1fr;
  }

  .project-row__mark {
    width: 52px;
    height: 52px;
  }

  .service-link {
    grid-template-columns:
      auto
      minmax(0, 1fr);
  }

  .service-link__arrow {
    display: none;
  }

  .work-trust {
    grid-template-columns: 1fr;
  }

  .work-cta__title {
    font-size: clamp(2.35rem, 12vw, 3.4rem);
  }
}

// ==================================================
// REDUCED MOTION
// ==================================================

@media (prefers-reduced-motion: reduce) {
  .project-row,
  .project-row__arrow,
  .service-link,
  .service-link__arrow {
    transition: none;
  }

  .project-row:hover {
    padding-inline: 0;
  }

  .project-row:hover .project-row__arrow,
  .service-link:hover,
  .service-link:hover .service-link__arrow {
    transform: none;
  }
}
</style>
