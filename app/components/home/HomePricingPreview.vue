<script setup lang="ts">
import { homeContent } from "~~/app/config/content/home";
import SequenceMarker from "~~/app/components/ui/SequenceMarker.vue";
import BaseButton from "~~/app/components/ui/BaseButton.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import SectionWrapper from "~~/app/components/ui/SectionWrapper.vue";

const content = homeContent.pricingPreview;
const { pricingFactors, proposalSteps } = content;
</script>

<template>
  <SectionWrapper tone="soft" spacing="lg">
    <section class="pricing-preview">
      <header class="pricing-preview__header">
        <div class="pricing-preview__heading">
          <SectionEyebrow class="pricing-preview__eyebrow">
            {{ content.eyebrow }}
          </SectionEyebrow>

          <h2 class="pricing-preview__title">
            {{ content.title }}

            <span class="pricing-preview__title-accent">
              {{ content.accent }}
            </span>
          </h2>
        </div>

        <div class="pricing-preview__introduction">
          <p>
            {{ content.introduction[0] }}
          </p>

          <p>
            {{ content.introduction[1] }}
          </p>

          <BaseButton to="/pricing" variant="text">
            {{ content.pricingAction }}
          </BaseButton>
        </div>
      </header>

      <div class="pricing-preview__content">
        <div class="pricing-factors">
          <div class="pricing-factors__header">
            <p class="pricing-preview__section-eyebrow">
              {{ content.factorsIntro.eyebrow }}
            </p>

            <h3 class="pricing-preview__section-title">
              {{ content.factorsIntro.title }}
            </h3>

            <p class="pricing-factors__description">
              {{ content.factorsIntro.description }}
            </p>
          </div>

          <div class="pricing-factors__list">
            <article
              v-for="factor in pricingFactors"
              :key="factor.title"
              class="pricing-factor"
            >
              <div class="pricing-factor__content">
                <h4 class="pricing-factor__title">
                  {{ factor.title }}
                </h4>

                <p class="pricing-factor__description">
                  {{ factor.description }}
                </p>
              </div>
            </article>
          </div>
        </div>

        <div class="proposal-process">
          <div class="proposal-process__header">
            <p class="pricing-preview__section-eyebrow">
              {{ content.proposalIntro.eyebrow }}
            </p>

            <h3 class="pricing-preview__section-title">
              {{ content.proposalIntro.title }}
            </h3>

            <p class="proposal-process__description">
              {{ content.proposalIntro.description }}
            </p>
          </div>

          <ol class="proposal-process__steps" role="list">
            <li
              v-for="(step, index) in proposalSteps"
              :key="step.title"
              class="proposal-step"
            >
              <div class="proposal-step__rail">
                <SequenceMarker :step="index + 1" />

                <span class="proposal-step__line" aria-hidden="true" />
              </div>

              <div class="proposal-step__content">
                <h4 class="proposal-step__title">
                  {{ step.title }}
                </h4>

                <p class="proposal-step__description">
                  {{ step.description }}
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div class="pricing-preview__principle">
        <div class="pricing-preview__principle-content">
          <span class="pricing-preview__principle-mark" aria-hidden="true" />

          <div>
            <p class="pricing-preview__principle-label">
              {{ content.principleContent.principleLabel }}
            </p>

            <p class="pricing-preview__principle-text">
              {{ content.principleContent.principleText }}
            </p>
          </div>
        </div>

        <div class="pricing-preview__actions">
          <BaseButton to="/pricing" variant="secondary">
            {{ content.principle.pricingAction }}
          </BaseButton>

          <BaseButton to="/contact" variant="primary">
            {{ content.principle.contactAction }}
          </BaseButton>
        </div>
      </div>
    </section>
  </SectionWrapper>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
@use "~~/app/assets/scss/abstracts/mixins" as *;

// --------------------------------------------------
// Section
// --------------------------------------------------

.pricing-preview {
  display: flex;
  flex-direction: column;

  gap: clamp(3rem, 6vw, 5rem);
}

// --------------------------------------------------
// Header
// --------------------------------------------------

.pricing-preview__header {
  display: grid;

  gap: 1.75rem;

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(320px, 0.58fr);

    align-items: end;

    gap: clamp(4rem, 8vw, 8rem);
  }
}

.pricing-preview__heading {
  max-width: 820px;
}

.pricing-preview__eyebrow {
  margin-bottom: 1.2rem;
}

.pricing-preview__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(2.5rem, 4.5vw, 4.2rem);
  font-weight: 700;

  line-height: 1.02;

  letter-spacing: -0.048em;
}

.pricing-preview__title-accent {
  display: block;

  color: $color-brand-red;
}

.pricing-preview__introduction {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.8rem;

  max-width: 540px;
}

.pricing-preview__introduction p {
  color: $color-text-secondary;

  font-size: clamp(0.96rem, 1.25vw, 1.05rem);

  line-height: 1.72;
}

.pricing-preview__introduction > :last-child {
  margin-top: 0.45rem;
}

// --------------------------------------------------
// Main content
// --------------------------------------------------

.pricing-preview__content {
  display: grid;

  gap: clamp(3rem, 7vw, 7rem);

  padding-top: clamp(2rem, 4vw, 3.5rem);

  border-top: 1px solid $color-border;

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 1.08fr)
      minmax(380px, 0.92fr);
  }
}

// --------------------------------------------------
// Shared subsection typography
// --------------------------------------------------

.pricing-preview__section-eyebrow {
  margin-bottom: 0.55rem;

  color: $color-brand-red;

  font-size: 0.61rem;
  font-weight: 750;

  line-height: 1;

  letter-spacing: 0.095em;

  text-transform: uppercase;
}

.pricing-preview__section-title {
  max-width: 540px;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.55rem, 2.7vw, 2.15rem);
  font-weight: 700;

  line-height: 1.12;

  letter-spacing: -0.035em;
}

// --------------------------------------------------
// Pricing factors
// --------------------------------------------------

.pricing-factors__header {
  max-width: 620px;

  margin-bottom: 1.8rem;
}

.pricing-factors__description {
  max-width: 570px;

  margin-top: 0.9rem;

  color: $color-text-secondary;

  font-size: 0.86rem;

  line-height: 1.7;
}

.pricing-factors__list {
  border-top: 1px solid $color-border;
}

.pricing-factor {
  display: grid;

  grid-template-columns: minmax(0, 1fr);

  gap: 1rem;

  padding-block: 1.35rem;

  border-bottom: 1px solid $color-border;
}

.pricing-factor__content {
  display: grid;

  gap: 0.45rem;

  @media (min-width: 768px) {
    grid-template-columns:
      minmax(125px, 0.34fr)
      minmax(0, 0.66fr);

    gap: 1.5rem;
  }
}

.pricing-factor__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: 1rem;
  font-weight: 700;

  line-height: 1.35;

  letter-spacing: -0.018em;
}

.pricing-factor__description {
  max-width: 500px;

  color: $color-text-muted;

  font-size: 0.75rem;

  line-height: 1.65;
}

// --------------------------------------------------
// Proposal process
// --------------------------------------------------

.proposal-process {
  min-width: 0;
}

.proposal-process__header {
  max-width: 520px;

  margin-bottom: 1.8rem;
}

.proposal-process__description {
  max-width: 500px;

  margin-top: 0.9rem;

  color: $color-text-secondary;

  font-size: 0.86rem;

  line-height: 1.7;
}

.proposal-process__steps {
  margin: 0;
  padding: 0;

  list-style: none;
}

.proposal-step {
  @include sequence-row("> .proposal-step__content > .proposal-step__title");
}

.proposal-step__rail {
  align-self: stretch;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.proposal-step__line {
  display: block;

  width: 1px;

  flex: 1;

  min-height: $sequence-marker-size;

  background: $color-border;
}

.proposal-step:last-child .proposal-step__line {
  visibility: hidden;
}

.proposal-step__content {
  padding-bottom: 1.35rem;
}

.proposal-step:last-child .proposal-step__content {
  padding-bottom: 0;
}

.proposal-step__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: 0.92rem;
  font-weight: 700;

  line-height: 1.4;

  letter-spacing: -0.018em;
}

.proposal-step__description {
  max-width: 430px;

  margin-top: 0.4rem;

  color: $color-text-muted;

  font-size: 0.72rem;

  line-height: 1.62;
}

// --------------------------------------------------
// Transparency principle
// --------------------------------------------------

.pricing-preview__principle {
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  padding: clamp(1.5rem, 3vw, 2.25rem) 0 0;

  border-top: 1px solid $color-border;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 2rem;
  }
}

.pricing-preview__principle-content {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  align-items: start;

  gap: 0.9rem;

  max-width: 650px;
}

.pricing-preview__principle-mark {
  position: relative;

  width: 10px;
  height: 10px;

  margin-top: 0.44rem;

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

.pricing-preview__principle-label {
  margin-bottom: 0.4rem;

  color: $color-text-muted;

  font-size: 0.58rem;
  font-weight: 750;

  letter-spacing: 0.09em;

  text-transform: uppercase;
}

.pricing-preview__principle-text {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.05rem, 1.8vw, 1.3rem);
  font-weight: 650;

  line-height: 1.45;

  letter-spacing: -0.02em;
}

// --------------------------------------------------
// Actions
// --------------------------------------------------

.pricing-preview__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 0.75rem;

  flex: 0 0 auto;
}

// --------------------------------------------------
// Mobile
// --------------------------------------------------

@media (max-width: 575px) {
  .pricing-preview {
    gap: 3rem;
  }

  .pricing-preview__title {
    font-size: clamp(2.25rem, 11vw, 3.15rem);
  }

  .pricing-preview__content {
    gap: 3rem;
  }

  .pricing-factor {
    grid-template-columns: minmax(0, 1fr);

    gap: 0.8rem;
  }

  .pricing-preview__actions {
    width: 100%;
  }
}

// --------------------------------------------------
// Reduced motion
// --------------------------------------------------

@media (prefers-reduced-motion: reduce) {
  .pricing-preview *,
  .pricing-preview *::before,
  .pricing-preview *::after {
    scroll-behavior: auto;
  }
}
</style>
