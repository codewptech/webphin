<script setup lang="ts">
import { homeContent } from "~~/app/config/content/home";
import { services } from "~~/app/config/services";
import BaseButton from "~~/app/components/ui/BaseButton.vue";

const content = homeContent.hero;
const { blueprintLayers } = content;

const capabilities = services.map((service) => ({
  label: service.shortTitle,
  icon: service.icon,
}));
</script>

<template>
  <section class="home-hero">
    <div class="page-container">
      <div class="home-hero__main">
        <div class="home-hero__content">
          <p class="home-hero__eyebrow">
            {{ content.eyebrow }}
          </p>

          <h1 class="home-hero__title">
            {{ content.title }}

            <span class="home-hero__title-accent"> {{ content.accent }} </span>
          </h1>

          <p class="home-hero__description">
            {{ content.description }}
          </p>

          <div class="home-hero__actions">
            <BaseButton to="/contact" variant="primary" size="lg">
              {{ content.contactAction }}
            </BaseButton>

            <BaseButton to="/work" variant="secondary" size="lg">
              {{ content.workAction }}
            </BaseButton>
          </div>

          <div class="home-hero__principle">
            <span class="home-hero__principle-mark" aria-hidden="true" />

            <p>{{ content.principle.description }}</p>
          </div>
        </div>

        <div class="solution-blueprint">
          <div class="solution-blueprint__accent" />

          <div class="solution-blueprint__header">
            <span class="solution-blueprint__label">
              {{ content.blueprint.label }}
            </span>

            <span class="solution-blueprint__status">
              {{ content.blueprint.status }}
            </span>
          </div>

          <div class="solution-blueprint__requirement">
            <span class="solution-blueprint__section-label">
              {{ content.blueprint.requirementLabel }}
            </span>

            <h2 class="solution-blueprint__requirement-title">
              {{ content.blueprint.requirementTitle }}
            </h2>

            <div class="solution-blueprint__requirement-points">
              <span>{{ content.blueprint.requirementPoints[0] }}</span>
              <span>{{ content.blueprint.requirementPoints[1] }}</span>
              <span>{{ content.blueprint.requirementPoints[2] }}</span>
              <span>{{ content.blueprint.requirementPoints[3] }}</span>
            </div>
          </div>

          <div class="solution-blueprint__divider">
            <span />

            <span class="solution-blueprint__divider-mark" aria-hidden="true">
              ↓
            </span>

            <span />
          </div>

          <div class="solution-blueprint__layers">
            <div
              v-for="layer in blueprintLayers"
              :key="layer.label"
              class="solution-blueprint__layer"
            >
              <span class="solution-blueprint__layer-label">
                {{ layer.label }}
              </span>

              <span class="solution-blueprint__layer-detail">
                {{ layer.detail }}
              </span>
            </div>
          </div>

          <div class="solution-blueprint__outcome">
            <span class="solution-blueprint__outcome-label">
              {{ content.blueprint.outcome.outcomeLabel }}
            </span>

            <strong> {{ content.blueprint.outcome.statement }} </strong>
          </div>
        </div>
      </div>

      <div class="home-hero__capabilities">
        <p class="home-hero__capabilities-label">
          {{ content.capabilitiesLabel }}
        </p>

        <div class="home-hero__capability-list">
          <div
            v-for="capability in capabilities"
            :key="capability.label"
            class="hero-capability"
          >
            <span class="hero-capability__icon" aria-hidden="true">
              <!-- Websites -->
              <svg
                v-if="capability.icon === 'website'"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />

                <path d="M3 8.5H21" />
                <path d="M6.5 6.25H6.51" />
                <path d="M9 6.25H9.01" />
              </svg>

              <!-- Applications -->
              <svg
                v-else-if="capability.icon === 'application'"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect x="3" y="3" width="7" height="7" rx="1.5" />

                <rect x="14" y="3" width="7" height="7" rx="1.5" />

                <rect x="3" y="14" width="7" height="7" rx="1.5" />

                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>

              <!-- Backend & Data -->
              <svg
                v-else-if="capability.icon === 'data'"
                viewBox="0 0 24 24"
                fill="none"
              >
                <ellipse cx="12" cy="5.5" rx="7" ry="3" />

                <path
                  d="
                    M5 5.5V12
                    C5 13.7 8.1 15 12 15
                    C15.9 15 19 13.7 19 12
                    V5.5
                  "
                />

                <path
                  d="
                    M5 12V18.5
                    C5 20.2 8.1 21.5 12 21.5
                    C15.9 21.5 19 20.2 19 18.5
                    V12
                  "
                />
              </svg>

              <!-- Infrastructure -->
              <svg
                v-else-if="capability.icon === 'infrastructure'"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect x="4" y="3" width="16" height="7" rx="2" />

                <rect x="4" y="14" width="16" height="7" rx="2" />

                <path d="M7.5 6.5H7.51" />
                <path d="M7.5 17.5H7.51" />
                <path d="M11 6.5H17" />
                <path d="M11 17.5H17" />
              </svg>

              <!-- Automation & AI -->
              <svg
                v-else-if="capability.icon === 'automation'"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="3" />

                <circle cx="5" cy="6" r="2" />

                <circle cx="19" cy="6" r="2" />

                <circle cx="5" cy="18" r="2" />

                <circle cx="19" cy="18" r="2" />

                <path d="M7 7.5L9.5 9.7" />
                <path d="M17 7.5L14.5 9.7" />
                <path d="M7 16.5L9.5 14.3" />
                <path d="M17 16.5L14.5 14.3" />
              </svg>

              <!-- Maintenance & Support -->
              <svg v-else viewBox="0 0 24 24" fill="none">
                <path
                  d="
                    M12 3
                    L19 6
                    V11
                    C19 15.5 16.2 19.2 12 21
                    C7.8 19.2 5 15.5 5 11
                    V6
                    L12 3Z
                  "
                />

                <path d="M9 12L11 14L15.5 9.5" />
              </svg>
            </span>

            <span class="hero-capability__label">
              {{ capability.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;

// --------------------------------------------------
// Hero
// --------------------------------------------------

.home-hero {
  position: relative;

  overflow: hidden;

  padding: clamp(5rem, 9vw, 8rem) 0 clamp(2rem, 4vw, 3rem);

  background:
    radial-gradient(circle at 88% 16%, rgb(20 103 153 / 7%), transparent 28%),
    radial-gradient(circle at 72% 48%, rgb(227 40 47 / 4%), transparent 25%),
    $color-white;
}

// --------------------------------------------------
// Main hero layout
// --------------------------------------------------

.home-hero__main {
  display: grid;

  gap: clamp(3rem, 7vw, 6.5rem);

  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 1.02fr)
      minmax(430px, 0.98fr);
  }
}

// --------------------------------------------------
// Hero content
// --------------------------------------------------

.home-hero__content {
  max-width: 760px;
}

.home-hero__eyebrow {
  margin-bottom: 1.15rem;

  color: $color-brand-red;

  font-size: 0.68rem;
  font-weight: 750;

  line-height: 1;

  letter-spacing: 0.095em;

  text-transform: uppercase;
}

.home-hero__title {
  max-width: 760px;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(3rem, 6vw, 5.7rem);
  font-weight: 700;

  line-height: 0.96;

  letter-spacing: -0.058em;
}

.home-hero__title-accent {
  display: block;

  color: $color-brand-red;
}

.home-hero__description {
  max-width: 650px;

  margin-top: 1.6rem;

  color: $color-text-secondary;

  font-size: clamp(1rem, 1.4vw, 1.12rem);

  line-height: 1.78;
}

// --------------------------------------------------
// Hero actions
// --------------------------------------------------

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 0.8rem;

  margin-top: 1.9rem;
}

// --------------------------------------------------
// Hero principle
// --------------------------------------------------

.home-hero__principle {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  align-items: start;

  gap: 0.8rem;

  max-width: 560px;

  margin-top: 1.8rem;
  padding-top: 1.45rem;

  border-top: 1px solid $color-border;
}

.home-hero__principle-mark {
  position: relative;

  width: 8px;
  height: 8px;

  margin-top: 0.4rem;

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

.home-hero__principle p {
  color: $color-text-muted;

  font-size: 0.77rem;
  font-weight: 600;

  line-height: 1.6;
}

// --------------------------------------------------
// Solution blueprint
// --------------------------------------------------

.solution-blueprint {
  position: relative;

  overflow: hidden;

  padding: clamp(1.5rem, 3vw, 2.25rem);

  background: $color-white;

  border: 1px solid $color-border;
  border-radius: $radius-xl;

  box-shadow: 0 30px 80px rgb(17 19 23 / 7%);
}

.solution-blueprint__accent {
  position: absolute;

  top: 0;
  right: 0;
  left: 0;

  height: 3px;

  background: linear-gradient(
    90deg,
    $color-brand-red 0%,
    $color-brand-red 32%,
    $color-brand-orange 32%,
    $color-brand-orange 50%,
    $color-brand-blue 50%,
    $color-brand-blue 72%,
    $color-brand-magenta 72%,
    $color-brand-magenta 88%,
    $color-brand-yellow 88%,
    $color-brand-yellow 100%
  );
}

.solution-blueprint__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  padding-bottom: 1.4rem;

  border-bottom: 1px solid $color-border;
}

.solution-blueprint__label {
  color: $color-black;

  font-family: $font-heading;

  font-size: 0.94rem;
  font-weight: 700;

  letter-spacing: -0.02em;
}

.solution-blueprint__status {
  display: inline-flex;
  align-items: center;

  min-height: 28px;

  padding-inline: 0.7rem;

  color: $color-text-muted;

  background: $color-background-soft;

  font-size: 0.58rem;
  font-weight: 650;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

// --------------------------------------------------
// Requirement
// --------------------------------------------------

.solution-blueprint__requirement {
  padding-block: 1.55rem;
}

.solution-blueprint__section-label {
  display: block;

  margin-bottom: 0.6rem;

  color: $color-brand-red;

  font-size: 0.59rem;
  font-weight: 750;

  letter-spacing: 0.09em;

  text-transform: uppercase;
}

.solution-blueprint__requirement-title {
  max-width: 430px;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.35rem, 2.5vw, 1.8rem);
  font-weight: 700;

  line-height: 1.25;

  letter-spacing: -0.035em;
}

.solution-blueprint__requirement-points {
  display: flex;
  flex-wrap: wrap;

  gap: 0.45rem;

  margin-top: 1.15rem;
}

.solution-blueprint__requirement-points span {
  display: inline-flex;
  align-items: center;

  min-height: 28px;

  padding-inline: 0.7rem;

  color: $color-text-muted;

  background: $color-background-soft;

  font-size: 0.6rem;
  font-weight: 600;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

// --------------------------------------------------
// Blueprint divider
// --------------------------------------------------

.solution-blueprint__divider {
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto
    minmax(0, 1fr);

  align-items: center;

  gap: 0.8rem;
}

.solution-blueprint__divider > span:not(.solution-blueprint__divider-mark) {
  height: 1px;

  background: $color-border;
}

.solution-blueprint__divider-mark {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;

  color: $color-brand-red;

  background: $color-white;

  font-size: 0.78rem;

  border: 1px solid $color-border;
  border-radius: 50%;
}

// --------------------------------------------------
// Blueprint layers
// --------------------------------------------------

.solution-blueprint__layers {
  display: flex;
  flex-direction: column;

  padding-block: 1.35rem;
}

.solution-blueprint__layer {
  display: grid;

  grid-template-columns:
    minmax(95px, 0.34fr)
    minmax(0, 0.66fr);

  gap: 1rem;

  padding-block: 0.85rem;

  border-bottom: 1px solid $color-border;

  &:last-child {
    border-bottom: 0;
  }
}

.solution-blueprint__layer-label {
  color: $color-black;

  font-size: 0.69rem;
  font-weight: 700;
}

.solution-blueprint__layer-detail {
  color: $color-text-muted;

  font-size: 0.67rem;

  line-height: 1.5;
}

// --------------------------------------------------
// Blueprint outcome
// --------------------------------------------------

.solution-blueprint__outcome {
  padding: 1.1rem 1.15rem;

  background: $color-background-soft;

  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.solution-blueprint__outcome-label {
  display: block;

  margin-bottom: 0.38rem;

  color: $color-brand-red;

  font-size: 0.56rem;
  font-weight: 750;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.solution-blueprint__outcome strong {
  color: $color-black;

  font-family: $font-heading;

  font-size: 0.85rem;
  font-weight: 650;

  line-height: 1.45;
}

// --------------------------------------------------
// What we work across
// --------------------------------------------------

.home-hero__capabilities {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: clamp(1.5rem, 3vw, 2.5rem) clamp(2rem, 5vw, 5rem);

  margin-top: clamp(3.5rem, 7vw, 6rem);
  padding-block: clamp(1.5rem, 3vw, 1.9rem);

  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
}

.home-hero__capabilities-label {
  flex: 0 1 180px;

  color: $color-text-muted;

  font-size: 0.66rem;
  font-weight: 750;

  letter-spacing: 0.085em;

  text-transform: uppercase;
}

// --------------------------------------------------
// Fluid capability list
// --------------------------------------------------

.home-hero__capability-list {
  display: flex;
  flex: 1 1 760px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: clamp(0.9rem, 2vw, 1.4rem) clamp(1.25rem, 2.2vw, 2.25rem);

  min-width: 0;
}

// --------------------------------------------------
// Capability item
// --------------------------------------------------

.hero-capability {
  display: inline-flex;
  align-items: center;

  gap: 0.7rem;

  flex: 0 0 auto;

  min-width: 0;

  cursor: default;
}

.hero-capability__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;

  width: clamp(34px, 2.5vw, 38px);
  height: clamp(34px, 2.5vw, 38px);

  color: $color-text-secondary;

  background: $color-background-soft;

  border: 1px solid $color-border;
  border-radius: $radius-sm;

  transition:
    color $transition-fast,
    background-color $transition-fast,
    border-color $transition-fast,
    transform $transition-fast;
}

.hero-capability__icon svg {
  width: 18px;
  height: 18px;

  overflow: visible;

  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hero-capability__label {
  min-width: 0;

  color: $color-text-secondary;

  font-size: clamp(0.7rem, 0.8vw, 0.77rem);
  font-weight: 650;

  line-height: 1.35;

  white-space: nowrap;

  transition: color $transition-fast;
}

.hero-capability:hover .hero-capability__icon {
  color: $color-brand-red;

  background: rgb(227 40 47 / 4%);

  border-color: rgb(227 40 47 / 18%);

  transform: translateY(-1px);
}

.hero-capability:hover .hero-capability__label {
  color: $color-black;
}

// --------------------------------------------------
// Small-screen refinements
// --------------------------------------------------

@media (max-width: 767px) {
  .home-hero {
    padding-top: 4.5rem;
  }

  .home-hero__title {
    font-size: clamp(2.9rem, 13vw, 4.3rem);
  }

  .solution-blueprint {
    border-radius: $radius-lg;
  }
}

@media (max-width: 575px) {
  .home-hero__actions {
    align-items: stretch;

    flex-direction: column;
  }

  .solution-blueprint__layer {
    grid-template-columns: 1fr;

    gap: 0.35rem;
  }

  .home-hero__capabilities-label {
    flex-basis: 100%;
  }

  .home-hero__capability-list {
    justify-content: flex-start;
  }

  .hero-capability__label {
    white-space: normal;
  }
}

// --------------------------------------------------
// Reduced motion
// --------------------------------------------------

@media (prefers-reduced-motion: reduce) {
  .hero-capability__icon,
  .hero-capability__label {
    transition: none;
  }

  .hero-capability:hover .hero-capability__icon {
    transform: none;
  }
}
</style>
