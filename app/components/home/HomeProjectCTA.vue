<script setup lang="ts">
import BaseButton from '~~/app/components/ui/BaseButton.vue';
import SectionEyebrow from '~~/app/components/ui/SectionEyebrow.vue';
import SectionWrapper from '~~/app/components/ui/SectionWrapper.vue';
</script>

<template>
  <SectionWrapper class="project-cta-section" tone="dark" spacing="lg">
    <section class="project-cta">
      <div class="project-cta__content">
        <SectionEyebrow class="project-cta__eyebrow">
          Start a conversation
        </SectionEyebrow>

        <h2 class="project-cta__title">
          Have a project in mind?

          <span class="project-cta__title-accent">
            Start with the requirement.
          </span>
        </h2>

        <p class="project-cta__description">
          Tell us what you are trying to build, improve or solve. We can discuss
          the requirement, constraints and practical options before deciding
          what the right solution should look like.
        </p>

        <div class="project-cta__actions">
          <BaseButton to="/contact" variant="primary" size="lg">
            Discuss Your Project
          </BaseButton>
        </div>

        <div class="project-cta__reassurance">
          <span class="project-cta__reassurance-mark" aria-hidden="true" />

          <p>
            No package selection required. You do not need to have the technical
            solution figured out before starting the conversation.
          </p>
        </div>
      </div>

      <div class="project-cta__visual" aria-hidden="true">
        <div class="project-cta__visual-grid" />

        <div class="project-cta__visual-content">
          <span class="project-cta__visual-label"> Requirement first </span>

          <div class="project-cta__visual-flow">
            <span class="project-cta__visual-step"> Problem </span>

            <span class="project-cta__visual-arrow"> → </span>

            <span class="project-cta__visual-step"> Requirement </span>

            <span class="project-cta__visual-arrow"> → </span>

            <span class="project-cta__visual-step"> Practical solution </span>
          </div>

          <p class="project-cta__visual-statement">
            The conversation can begin before the technology has been decided.
          </p>
        </div>

        <span class="project-cta__visual-letter"> W </span>
      </div>
    </section>
  </SectionWrapper>
</template>

<style scoped lang="scss">
@use '~~/app/assets/scss/abstracts/variables' as *;

// --------------------------------------------------
// Section surface
// --------------------------------------------------

.project-cta-section {
  background: #1b1e23;
}

// --------------------------------------------------
// Section layout
// --------------------------------------------------

.project-cta {
  position: relative;

  display: grid;

  gap: clamp(3rem, 7vw, 6rem);

  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 0.9fr)
      minmax(420px, 1.1fr);
  }
}

// --------------------------------------------------
// Content
// --------------------------------------------------

.project-cta__content {
  position: relative;

  z-index: 2;

  max-width: 700px;
}

.project-cta__eyebrow {
  margin-bottom: 1.2rem;
}

.project-cta__title {
  color: $color-white;

  font-family: $font-heading;

  font-size: clamp(2.7rem, 5vw, 4.7rem);
  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.052em;
}

.project-cta__title-accent {
  display: block;

  color: $color-brand-red;
}

.project-cta__description {
  max-width: 610px;

  margin-top: 1.5rem;

  color: rgb(255 255 255 / 68%);

  font-size: clamp(0.98rem, 1.25vw, 1.08rem);

  line-height: 1.78;
}

// --------------------------------------------------
// CTA
// --------------------------------------------------

.project-cta__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 0.8rem;

  margin-top: 1.8rem;
}

// --------------------------------------------------
// Reassurance
// --------------------------------------------------

.project-cta__reassurance {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  align-items: start;

  gap: 0.85rem;

  max-width: 580px;

  margin-top: 1.8rem;
  padding-top: 1.5rem;

  border-top: 1px solid rgb(255 255 255 / 10%);
}

.project-cta__reassurance-mark {
  position: relative;

  width: 9px;
  height: 9px;

  margin-top: 0.45rem;

  background: $color-brand-red;

  border-radius: 50%;

  &::before {
    content: '';

    position: absolute;

    inset: -5px;

    border: 1px solid rgb(227 40 47 / 28%);
    border-radius: 50%;
  }
}

.project-cta__reassurance p {
  color: rgb(255 255 255 / 50%);

  font-size: 0.76rem;

  line-height: 1.7;
}

// --------------------------------------------------
// Visual
// --------------------------------------------------

.project-cta__visual {
  position: relative;

  min-height: 390px;

  overflow: hidden;

  background: linear-gradient(
    145deg,
    rgb(255 255 255 / 6%) 0%,
    rgb(255 255 255 / 2%) 100%
  );

  border: 1px solid rgb(255 255 255 / 9%);
  border-radius: $radius-xl;
}

.project-cta__visual::before {
  content: '';

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

.project-cta__visual-grid {
  position: absolute;

  inset: 0;

  opacity: 0.3;

  background-image:
    linear-gradient(rgb(255 255 255 / 5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 5%) 1px, transparent 1px);

  background-size: 42px 42px;

  mask-image: linear-gradient(145deg, #000 0%, transparent 88%);
}

.project-cta__visual-content {
  position: relative;

  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 390px;

  padding: clamp(1.7rem, 4vw, 2.8rem);
}

.project-cta__visual-label {
  margin-bottom: 1.5rem;

  color: rgb(255 255 255 / 42%);

  font-size: 0.62rem;
  font-weight: 750;

  letter-spacing: 0.1em;

  text-transform: uppercase;
}

// --------------------------------------------------
// Visual flow
// --------------------------------------------------

.project-cta__visual-flow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 0.7rem;
}

.project-cta__visual-step {
  display: inline-flex;
  align-items: center;

  min-height: 36px;

  padding-inline: 0.9rem;

  color: rgb(255 255 255 / 82%);

  background: rgb(255 255 255 / 5%);

  font-size: 0.7rem;
  font-weight: 650;

  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: $radius-pill;

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.project-cta__visual-arrow {
  color: $color-brand-red;

  font-size: 1rem;
}

.project-cta__visual-statement {
  max-width: 450px;

  margin-top: 2rem;

  color: rgb(255 255 255 / 66%);

  font-family: $font-heading;

  font-size: clamp(1.2rem, 2.2vw, 1.65rem);
  font-weight: 600;

  line-height: 1.45;

  letter-spacing: -0.025em;
}

.project-cta__visual-letter {
  position: absolute;

  right: -0.04em;
  bottom: -0.18em;

  z-index: 1;

  color: rgb(255 255 255 / 2.4%);

  font-family: $font-heading;

  font-size: clamp(14rem, 28vw, 24rem);
  font-weight: 800;

  line-height: 0.8;

  pointer-events: none;
}

// --------------------------------------------------
// Mobile
// --------------------------------------------------

@media (max-width: 767px) {
  .project-cta__visual {
    min-height: 320px;
  }

  .project-cta__visual-content {
    min-height: 320px;
  }
}

@media (max-width: 575px) {
  .project-cta {
    gap: 2.75rem;
  }

  .project-cta__title {
    font-size: clamp(2.4rem, 12vw, 3.4rem);
  }

  .project-cta__visual {
    min-height: 290px;

    border-radius: $radius-lg;
  }

  .project-cta__visual-content {
    min-height: 290px;

    padding: 1.4rem;
  }

  .project-cta__visual-flow {
    align-items: flex-start;

    flex-direction: column;
  }

  .project-cta__visual-arrow {
    margin-left: 0.8rem;

    transform: rotate(90deg);
  }

  .project-cta__visual-statement {
    margin-top: 1.5rem;
  }
}

// --------------------------------------------------
// Reduced motion
// --------------------------------------------------

@media (prefers-reduced-motion: reduce) {
  .project-cta *,
  .project-cta *::before,
  .project-cta *::after {
    scroll-behavior: auto;
  }
}
</style>
