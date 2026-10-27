<script setup lang="ts">
import { useSeoMeta } from "#imports";

import BaseButton from "~~/app/components/ui/BaseButton.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import SectionHeading from "~~/app/components/ui/SectionHeading.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";
import SequenceMarker from "~~/app/components/ui/SequenceMarker.vue";
import { pricingContent } from "~~/app/config/content/pricing";

const content = pricingContent;

useSeoMeta({
  title: content.seo.title,
  description: content.seo.description,
});
</script>

<template>
  <div class="pricing-page">
    <SectionWrapper spacing="lg" tone="default">
      <div class="pricing-hero">
        <div class="pricing-hero__content">
          <SectionEyebrow class="pricing-hero__eyebrow">
            {{ content.hero.eyebrow }}
          </SectionEyebrow>

          <h1 class="pricing-hero__title">
            {{ content.hero.title }}
            <span class="pricing-hero__accent">
              {{ content.hero.accent }}
            </span>
          </h1>

          <p class="pricing-hero__description">
            {{ content.hero.description }}
          </p>

          <div class="pricing-hero__actions">
            <BaseButton :to="content.hero.primaryAction.to" size="lg">
              {{ content.hero.primaryAction.label }}
            </BaseButton>

            <BaseButton
              :to="content.hero.secondaryAction.to"
              size="lg"
              variant="text"
            >
              {{ content.hero.secondaryAction.label }}
            </BaseButton>
          </div>

          <p class="pricing-hero__policy">
            {{ content.hero.policy }}
          </p>
        </div>

        <aside class="pricing-hero__context">
          <span class="pricing-hero__context-label">
            {{ content.hero.context.label }}
          </span>

          <h2 class="pricing-hero__context-title">
            {{ content.hero.context.title }}
          </h2>

          <ul class="pricing-hero__questions">
            <li
              v-for="question in content.hero.context.questions"
              :key="question"
              class="pricing-hero__question"
            >
              {{ question }}
            </li>
          </ul>
        </aside>
      </div>
    </SectionWrapper>

    <SectionWrapper spacing="lg" tone="soft">
      <div class="pricing-comparison">
        <SectionHeading
          :eyebrow="content.comparison.eyebrow"
          :title="content.comparison.title"
          :description="content.comparison.description"
        />

        <div class="pricing-comparison__grid">
          <article
            v-for="example in content.comparison.examples"
            :key="example.key"
            class="comparison-card"
          >
            <span class="comparison-card__label">
              {{ example.label }}
            </span>

            <h3 class="comparison-card__title">
              {{ example.title }}
            </h3>

            <p class="comparison-card__description">
              {{ example.description }}
            </p>

            <ul class="comparison-card__list">
              <li v-for="item in example.considerations" :key="item">
                {{ item }}
              </li>
            </ul>
          </article>
        </div>

        <p class="pricing-comparison__principle">
          {{ content.comparison.principle }}
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper spacing="lg" tone="default">
      <div class="pricing-factors">
        <SectionHeading
          :eyebrow="content.factors.eyebrow"
          :title="content.factors.title"
          :description="content.factors.description"
        />

        <div class="pricing-factors__list">
          <article
            v-for="factor in content.factors.items"
            :key="factor.label"
            class="pricing-factor"
          >
            <div class="pricing-factor__identity">
              <span class="pricing-factor__label">
                {{ factor.label }}
              </span>

              <h3 class="pricing-factor__title">
                {{ factor.title }}
              </h3>
            </div>

            <p class="pricing-factor__description">
              {{ factor.description }}
            </p>
          </article>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper tone="dark" spacing="lg">
      <div id="proposal-process" class="proposal-process">
        <SectionHeading
          :eyebrow="content.proposalProcess.eyebrow"
          :title="content.proposalProcess.title"
          :description="content.proposalProcess.description"
        />

        <ol class="proposal-process__steps">
          <li
            v-for="(step, index) in content.proposalProcess.steps"
            :key="step.label"
            class="proposal-process__step"
          >
            <SequenceMarker
              class="proposal-process__marker"
              :step="index + 1"
              :label="step.label"
              variant="inverse"
            />

            <p class="proposal-process__description">
              {{ step.description }}
            </p>
          </li>
        </ol>

        <p class="proposal-process__note">
          {{ content.proposalProcess.note }}
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper spacing="lg" tone="default">
      <div class="pricing-engagement">
        <SectionHeading
          :eyebrow="content.engagement.eyebrow"
          :title="content.engagement.title"
          :description="content.engagement.description"
        />

        <div class="pricing-engagement__grid">
          <article
            v-for="model in content.engagement.models"
            :key="model.title"
            class="engagement-card"
          >
            <h3 class="engagement-card__title">
              {{ model.title }}
            </h3>

            <p class="engagement-card__description">
              {{ model.description }}
            </p>

            <p class="engagement-card__fit">
              {{ model.fit }}
            </p>
          </article>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper spacing="lg" tone="soft">
      <div class="pricing-context">
        <SectionHeading
          :eyebrow="content.estimateContext.eyebrow"
          :title="content.estimateContext.title"
          :description="content.estimateContext.description"
        />

        <div class="pricing-context__grid">
          <article class="pricing-context__principle">
            <span class="pricing-context__principle-label">
              The principle
            </span>

            <h3 class="pricing-context__principle-title">
              {{ content.estimateContext.principle.title }}
            </h3>

            <p class="pricing-context__principle-description">
              {{ content.estimateContext.principle.description }}
            </p>
          </article>

          <article
            v-for="note in content.estimateContext.budgetNotes"
            :key="note.title"
            class="pricing-context__note"
          >
            <h3 class="pricing-context__note-title">
              {{ note.title }}
            </h3>

            <p class="pricing-context__note-description">
              {{ note.description }}
            </p>
          </article>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper spacing="lg" tone="default">
      <div class="proposal-clarity">
        <SectionHeading
          :eyebrow="content.proposalClarity.eyebrow"
          :title="content.proposalClarity.title"
          :description="content.proposalClarity.description"
        />

        <div class="proposal-clarity__grid">
          <article
            v-for="item in content.proposalClarity.items"
            :key="item.title"
            class="proposal-detail"
          >
            <h3 class="proposal-detail__title">
              {{ item.title }}
            </h3>

            <p class="proposal-detail__description">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper spacing="lg" tone="soft">
      <div class="cost-over-time">
        <SectionHeading
          :eyebrow="content.costOverTime.eyebrow"
          :title="content.costOverTime.title"
          :description="content.costOverTime.description"
        />

        <div class="cost-over-time__grid">
          <article
            v-for="group in content.costOverTime.groups"
            :key="group.label"
            class="cost-card"
          >
            <span class="cost-card__label">
              {{ group.label }}
            </span>

            <h3 class="cost-card__title">
              {{ group.title }}
            </h3>

            <p class="cost-card__description">
              {{ group.description }}
            </p>

            <ul class="cost-card__list">
              <li v-for="item in group.items" :key="item">
                {{ item }}
              </li>
            </ul>
          </article>
        </div>

        <div class="estimate-change">
          <div class="estimate-change__copy">
            <h3 class="estimate-change__title">
              {{ content.costOverTime.changeTitle }}
            </h3>

            <p class="estimate-change__description">
              {{ content.costOverTime.changeDescription }}
            </p>
          </div>

          <ul class="estimate-change__triggers">
            <li
              v-for="trigger in content.costOverTime.changeTriggers"
              :key="trigger"
              class="estimate-change__trigger"
            >
              {{ trigger }}
            </li>
          </ul>
        </div>

        <p class="cost-over-time__note">
          {{ content.costOverTime.note }}
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper spacing="lg" tone="default">
      <div class="pricing-principles">
        <SectionHeading
          :eyebrow="content.principles.eyebrow"
          :title="content.principles.title"
          :description="content.principles.description"
        />

        <div class="pricing-principles__list">
          <article
            v-for="principle in content.principles.items"
            :key="principle.title"
            class="pricing-principle"
          >
            <h3 class="pricing-principle__title">
              {{ principle.title }}
            </h3>

            <p class="pricing-principle__description">
              {{ principle.description }}
            </p>
          </article>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper spacing="lg" tone="soft">
      <div class="pricing-faq">
        <SectionHeading
          :eyebrow="content.faq.eyebrow"
          :title="content.faq.title"
          :description="content.faq.description"
        />

        <div class="pricing-faq__list">
          <details
            v-for="item in content.faq.items"
            :key="item.question"
            class="pricing-faq__item"
          >
            <summary class="pricing-faq__question">
              {{ item.question }}
            </summary>

            <p class="pricing-faq__answer">
              {{ item.answer }}
            </p>
          </details>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper class="pricing-cta-section" spacing="lg" tone="default">
      <div class="pricing-cta">
        <div class="pricing-cta__content">
          <SectionEyebrow class="pricing-cta__eyebrow">
            {{ content.cta.eyebrow }}
          </SectionEyebrow>

          <h2 class="pricing-cta__title">
            {{ content.cta.title }}
            <span class="pricing-cta__accent">
              {{ content.cta.accent }}
            </span>
          </h2>

          <p class="pricing-cta__description">
            {{ content.cta.description }}
          </p>
        </div>

        <div class="pricing-cta__actions">
          <BaseButton :to="content.cta.primaryAction.to" size="lg">
            {{ content.cta.primaryAction.label }}
          </BaseButton>

          <BaseButton
            :to="content.cta.secondaryAction.to"
            size="lg"
            variant="secondary"
          >
            {{ content.cta.secondaryAction.label }}
          </BaseButton>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;

.pricing-page {
  overflow: clip;
}

.pricing-hero,
.pricing-comparison,
.pricing-factors,
.proposal-process,
.pricing-engagement,
.pricing-context,
.proposal-clarity,
.cost-over-time,
.pricing-principles,
.pricing-faq {
  display: flex;
  flex-direction: column;
  gap: clamp(2.75rem, 6vw, 5rem);
}

/* --------------------------------------------------
   Hero
-------------------------------------------------- */

.pricing-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
  gap: clamp(2.5rem, 7vw, 7rem);
}

.pricing-hero__content {
  max-width: 760px;
}

.pricing-hero__eyebrow {
  margin-bottom: 1.25rem;
}

.pricing-hero__title {
  max-width: 760px;
  font-size: clamp(3rem, 7vw, 5.6rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.pricing-hero__accent {
  display: block;
  color: $color-brand-red;
}

.pricing-hero__description {
  max-width: 690px;
  margin-top: 1.75rem;
  color: $color-text-secondary;
  font-size: clamp(1.05rem, 1.8vw, 1.2rem);
  line-height: 1.75;
}

.pricing-hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.25rem;
  margin-top: 2rem;
}

.pricing-hero__policy {
  display: inline-flex;
  width: fit-content;
  margin-top: 1.75rem;
  padding-top: 1rem;
  color: $color-text-muted;
  font-size: 0.82rem;
  font-weight: 650;
  line-height: 1.5;
  border-top: 1px solid $color-border;
}

.pricing-hero__context {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  padding: clamp(1.75rem, 4vw, 3rem);
  color: $color-white;
  background: $color-dark-surface;
  border-radius: $radius-xl;
}

.pricing-hero__context-label {
  margin-bottom: 0.9rem;
  color: $color-brand-red;
  font-size: 0.72rem;
  font-weight: 750;
  line-height: 1.3;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.pricing-hero__context-title {
  max-width: 500px;
  color: $color-white;
  font-size: clamp(1.75rem, 3.2vw, 2.7rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.pricing-hero__questions {
  display: flex;
  flex-direction: column;
  margin: clamp(1.75rem, 4vw, 2.75rem) 0 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid $color-dark-border;
}

.pricing-hero__question {
  position: relative;
  padding: 1.15rem 0 1.15rem 1.15rem;
  color: $color-dark-text-secondary;
  font-size: 0.94rem;
  line-height: 1.6;
  border-bottom: 1px solid $color-dark-border;

  &::before {
    position: absolute;
    top: 1.65rem;
    left: 0;
    width: 5px;
    height: 5px;
    content: "";
    background: $color-brand-red;
    border-radius: 50%;
  }
}

/* --------------------------------------------------
   Why pricing varies
-------------------------------------------------- */

.pricing-comparison__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.comparison-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: clamp(1.6rem, 3vw, 2.25rem);
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-lg;
  box-shadow: $shadow-sm;
}

.comparison-card__label,
.cost-card__label {
  display: inline-block;
  width: fit-content;
  margin-bottom: 1rem;
  color: $color-brand-red;
  font-size: 0.72rem;
  font-weight: 750;
  line-height: 1.3;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.comparison-card__title {
  max-width: 500px;
  font-size: clamp(1.3rem, 2.2vw, 1.75rem);
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.comparison-card__description {
  margin-top: 1rem;
  color: $color-text-secondary;
  line-height: 1.7;
}

.comparison-card__list,
.cost-card__list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 1.5rem 0 0;
  padding: 1.35rem 0 0;
  list-style: none;
  border-top: 1px solid $color-border;
}

.comparison-card__list li,
.cost-card__list li {
  position: relative;
  padding-left: 1rem;
  color: $color-text-secondary;
  font-size: 0.9rem;
  line-height: 1.55;

  &::before {
    position: absolute;
    top: 0.65em;
    left: 0;
    width: 4px;
    height: 4px;
    content: "";
    background: $color-brand-red;
    border-radius: 50%;
  }
}

.pricing-comparison__principle {
  max-width: 880px;
  padding: 1.4rem 0 0 1.5rem;
  color: $color-text;
  font-size: clamp(1.05rem, 1.7vw, 1.2rem);
  font-weight: 650;
  line-height: 1.65;
  border-left: 3px solid $color-brand-red;
}

/* --------------------------------------------------
   Pricing factors
-------------------------------------------------- */

.pricing-factors__list {
  border-top: 1px solid $color-border;
}

.pricing-factor {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem clamp(2rem, 6vw, 6rem);
  padding-block: clamp(1.5rem, 3vw, 2.2rem);
  border-bottom: 1px solid $color-border;
}

.pricing-factor__identity {
  flex: 1 1 18rem;
  max-width: 460px;
}

.pricing-factor__label {
  display: block;
  margin-bottom: 0.55rem;
  color: $color-brand-red;
  font-size: 0.7rem;
  font-weight: 750;
  line-height: 1.3;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.pricing-factor__title {
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.pricing-factor__description {
  flex: 2 1 30rem;
  max-width: 680px;
  color: $color-text-secondary;
  line-height: 1.75;
}

/* --------------------------------------------------
   Proposal process
-------------------------------------------------- */

.proposal-process {
  scroll-margin-top: 6rem;
}

.proposal-process__steps {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid $color-dark-border;
}

.proposal-process__step {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem clamp(2rem, 6vw, 6rem);
  padding-block: clamp(1.4rem, 3vw, 2rem);
  border-bottom: 1px solid $color-dark-border;
}

.proposal-process__marker {
  flex: 0 1 17rem;
}

.proposal-process__description {
  flex: 1 1 28rem;
  max-width: 720px;
  color: $color-dark-text-secondary;
  line-height: 1.7;
}

.proposal-process__note {
  max-width: 800px;
  padding-left: 1.4rem;
  color: $color-dark-text-secondary;
  font-size: 0.94rem;
  line-height: 1.7;
  border-left: 2px solid $color-brand-red;
}

/* --------------------------------------------------
   Engagement structures
-------------------------------------------------- */

.pricing-engagement__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.engagement-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: clamp(1.5rem, 3vw, 2rem);
  border: 1px solid $color-border;
  border-radius: $radius-lg;
}

.engagement-card__title {
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.engagement-card__description {
  margin-top: 0.9rem;
  color: $color-text-secondary;
  line-height: 1.7;
}

.engagement-card__fit {
  margin-top: auto;
  padding-top: 1.3rem;
  color: $color-text;
  font-size: 0.86rem;
  font-weight: 650;
  line-height: 1.6;
  border-top: 1px solid $color-border;
}

/* --------------------------------------------------
   Estimate context
-------------------------------------------------- */

.pricing-context__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.pricing-context__principle,
.pricing-context__note {
  min-height: 100%;
  padding: clamp(1.6rem, 3vw, 2.25rem);
  border-radius: $radius-lg;
}

.pricing-context__principle {
  color: $color-white;
  background: $color-dark-surface;
}

.pricing-context__principle-label {
  display: block;
  margin-bottom: 1rem;
  color: $color-brand-red;
  font-size: 0.7rem;
  font-weight: 750;
  line-height: 1.3;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.pricing-context__principle-title,
.pricing-context__note-title {
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  line-height: 1.25;
  letter-spacing: -0.025em;
}

.pricing-context__principle-title {
  color: $color-white;
}

.pricing-context__principle-description {
  margin-top: 1rem;
  color: $color-dark-text-secondary;
  line-height: 1.7;
}

.pricing-context__note {
  background: $color-white;
  border: 1px solid $color-border;
}

.pricing-context__note-description {
  margin-top: 1rem;
  color: $color-text-secondary;
  line-height: 1.7;
}

/* --------------------------------------------------
   Proposal clarity
-------------------------------------------------- */

.proposal-clarity__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.proposal-detail {
  padding: 1.35rem 1.45rem;
  border-left: 2px solid $color-brand-red;
  background: $color-background-soft;
}

.proposal-detail__title {
  font-size: 1.05rem;
  line-height: 1.35;
}

.proposal-detail__description {
  margin-top: 0.6rem;
  color: $color-text-secondary;
  font-size: 0.9rem;
  line-height: 1.65;
}

/* --------------------------------------------------
   Cost over time
-------------------------------------------------- */

.cost-over-time__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.cost-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: clamp(1.5rem, 3vw, 2rem);
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-lg;
}

.cost-card__title {
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  line-height: 1.25;
}

.cost-card__description {
  margin-top: 0.9rem;
  color: $color-text-secondary;
  line-height: 1.7;
}

.estimate-change {
  display: flex;
  flex-wrap: wrap;
  gap: 1.75rem clamp(2rem, 6vw, 6rem);
  padding-top: clamp(2rem, 4vw, 3rem);
  border-top: 1px solid $color-border;
}

.estimate-change__copy {
  flex: 1 1 22rem;
  max-width: 560px;
}

.estimate-change__title {
  font-size: clamp(1.35rem, 2.5vw, 1.9rem);
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.estimate-change__description {
  margin-top: 0.9rem;
  color: $color-text-secondary;
  line-height: 1.7;
}

.estimate-change__triggers {
  flex: 1.5 1 28rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.estimate-change__trigger {
  padding: 0.7rem 0.9rem;
  color: $color-text-secondary;
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.4;
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

.cost-over-time__note {
  max-width: 880px;
  padding-left: 1.4rem;
  color: $color-text-secondary;
  font-size: 0.92rem;
  line-height: 1.7;
  border-left: 2px solid $color-brand-red;
}

/* --------------------------------------------------
   Pricing principles
-------------------------------------------------- */

.pricing-principles__list {
  border-top: 1px solid $color-border;
}

.pricing-principle {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem clamp(2rem, 6vw, 6rem);
  padding-block: clamp(1.35rem, 2.8vw, 1.9rem);
  border-bottom: 1px solid $color-border;
}

.pricing-principle__title {
  flex: 1 1 18rem;
  max-width: 420px;
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  line-height: 1.35;
}

.pricing-principle__description {
  flex: 2 1 30rem;
  max-width: 680px;
  color: $color-text-secondary;
  line-height: 1.7;
}

/* --------------------------------------------------
   FAQ
-------------------------------------------------- */

.pricing-faq__list {
  border-top: 1px solid $color-border;
}

.pricing-faq__item {
  border-bottom: 1px solid $color-border;
}

.pricing-faq__question {
  position: relative;
  padding: 1.45rem 3rem 1.45rem 0;
  color: $color-text;
  font-size: clamp(1rem, 1.7vw, 1.15rem);
  font-weight: 700;
  line-height: 1.45;
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    position: absolute;
    top: 50%;
    right: 0;
    color: $color-brand-red;
    font-size: 1.3rem;
    font-weight: 500;
    content: "+";
    transform: translateY(-50%);
  }
}

.pricing-faq__item[open] .pricing-faq__question::after {
  content: "−";
}

.pricing-faq__answer {
  max-width: 820px;
  padding: 0 3rem 1.5rem 0;
  color: $color-text-secondary;
  line-height: 1.75;
}

/* --------------------------------------------------
   Final CTA
-------------------------------------------------- */

.pricing-cta-section {
  /*
   * Deliberately different from the near-black footer.
   * This is the established Webphin charcoal CTA surface.
   */
  background: #1b1e23;
}

.pricing-cta {
  display: grid;
  grid-template-columns:
    minmax(0, 1.55fr)
    minmax(250px, 0.6fr);
  align-items: stretch;
  gap: clamp(2.75rem, 6vw, 6rem);
}

.pricing-cta__content {
  align-self: center;
  max-width: 760px;
}

.pricing-cta__eyebrow {
  margin-bottom: 1.2rem;
}

.pricing-cta__title {
  max-width: 720px;
  color: $color-white;
  font-size: clamp(2.6rem, 5.2vw, 4.65rem);
  line-height: 1;
  letter-spacing: -0.05em;
}

.pricing-cta__accent {
  display: block;
  color: $color-brand-red;
}

.pricing-cta__description {
  max-width: 670px;
  margin-top: 1.5rem;
  color: $color-dark-text-secondary;
  font-size: clamp(1rem, 1.6vw, 1.12rem);
  line-height: 1.75;
}

.pricing-cta__actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 0.9rem;
  min-width: 0;
  padding-left: clamp(2rem, 4vw, 4rem);
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}

.pricing-cta__actions > * {
  width: 100%;
  justify-content: center;
}

@media (max-width: 48rem) {
  .pricing-cta {
    grid-template-columns: minmax(0, 1fr);
    gap: clamp(2rem, 8vw, 3rem);
  }

  .pricing-cta__actions {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-top: 2rem;
    padding-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    border-left: 0;
  }

  .pricing-cta__actions > * {
    width: auto;
  }
}
</style>
