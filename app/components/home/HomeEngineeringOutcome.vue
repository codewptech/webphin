<script setup lang="ts">
import BaseButton from '~~/app/components/ui/BaseButton.vue';
import SectionEyebrow from '~~/app/components/ui/SectionEyebrow.vue';
import SectionWrapper from '~~/app/components/ui/SectionWrapper.vue';

const architectureLayers = [
  {
    label: 'Application',
    technologies: ['Nuxt'],
  },
  {
    label: 'Data',
    technologies: ['Neon PostgreSQL'],
  },
  {
    label: 'Storage',
    technologies: ['Cloudflare R2'],
  },
  {
    label: 'Runtime',
    technologies: ['VPS', 'Docker', 'Nginx'],
  },
] as const;

const operationalCapabilities = [
  'Analytics',
  'Monitoring',
  'Database-backed forms',
  'Object storage',
  'Deployment workflow',
] as const;
</script>

<template>
  <SectionWrapper tone="soft" spacing="lg">
    <section class="engineering-outcome">
      <div class="engineering-outcome__content">
        <SectionEyebrow class="engineering-outcome__eyebrow">
          A practical engineering outcome
        </SectionEyebrow>

        <h2 class="engineering-outcome__title">
          Lower recurring cost.

          <span class="engineering-outcome__title-accent">
            More capability where it matters.
          </span>
        </h2>

        <p class="engineering-outcome__description">
          For one website project, Webphin reworked the infrastructure around
          the actual requirements instead of continuing with unnecessary
          recurring services.
        </p>

        <p class="engineering-outcome__description">
          The result was a leaner operating setup while retaining the
          application, database, storage, monitoring, analytics and deployment
          capabilities the project required.
        </p>

        <div class="engineering-outcome__principle">
          <span
            class="engineering-outcome__principle-mark"
            aria-hidden="true"
          />

          <p>
            Good infrastructure is not about using more technology. It is about
            choosing the right technology for the job and operating it
            efficiently.
          </p>
        </div>

        <BaseButton to="/services/infrastructure-deployment" variant="text">
          Explore Infrastructure & Deployment
        </BaseButton>
      </div>

      <div class="outcome-panel">
        <div class="outcome-panel__header">
          <div class="outcome-panel__header-copy">
            <p class="outcome-panel__eyebrow">One project outcome</p>

            <h3 class="outcome-panel__title">
              Leaner infrastructure.
              <span> Strong operational capability. </span>
            </h3>

            <p class="outcome-panel__description">
              The architecture was reorganized around what the project actually
              needed to run reliably, remain maintainable and avoid unnecessary
              recurring overhead.
            </p>
          </div>

          <span class="outcome-panel__badge">
            Requirement-led architecture
          </span>
        </div>

        <div class="outcome-panel__summary">
          <div class="outcome-summary">
            <span class="outcome-summary__mark" aria-hidden="true"> 01 </span>

            <div>
              <strong class="outcome-summary__title">
                Reduce unnecessary overhead
              </strong>

              <p class="outcome-summary__text">
                Remove recurring services and infrastructure that are not
                justified by the requirement.
              </p>
            </div>
          </div>

          <div class="outcome-summary">
            <span class="outcome-summary__mark" aria-hidden="true"> 02 </span>

            <div>
              <strong class="outcome-summary__title">
                Keep useful capability
              </strong>

              <p class="outcome-summary__text">
                Preserve the systems and operational features that genuinely
                support the website.
              </p>
            </div>
          </div>

          <div class="outcome-summary">
            <span class="outcome-summary__mark" aria-hidden="true"> 03 </span>

            <div>
              <strong class="outcome-summary__title">
                Build for ongoing operation
              </strong>

              <p class="outcome-summary__text">
                Consider deployment, storage, monitoring and maintenance as part
                of the architecture.
              </p>
            </div>
          </div>
        </div>

        <div class="outcome-panel__architecture">
          <div class="outcome-panel__section-header">
            <div>
              <p class="outcome-panel__section-eyebrow">
                Modern delivery stack
              </p>

              <h4 class="outcome-panel__section-title">
                A practical architecture, layer by layer.
              </h4>
            </div>
          </div>

          <div class="architecture-grid">
            <div
              v-for="layer in architectureLayers"
              :key="layer.label"
              class="architecture-layer"
            >
              <span class="architecture-layer__label">
                {{ layer.label }}
              </span>

              <div class="architecture-layer__technologies">
                <span
                  v-for="technology in layer.technologies"
                  :key="technology"
                  class="architecture-layer__technology"
                >
                  {{ technology }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="outcome-panel__capabilities">
          <div class="outcome-panel__section-header">
            <div>
              <p class="outcome-panel__section-eyebrow">
                Operational capabilities
              </p>

              <h4 class="outcome-panel__section-title">
                The leaner setup still supports the work happening around the
                website.
              </h4>
            </div>
          </div>

          <ul class="capability-grid">
            <li
              v-for="capability in operationalCapabilities"
              :key="capability"
              class="capability-item"
            >
              <span class="capability-item__mark" aria-hidden="true"> + </span>

              <span class="capability-item__label">
                {{ capability }}
              </span>
            </li>
          </ul>
        </div>

        <p class="outcome-panel__note">
          Infrastructure requirements, operating costs and potential savings
          vary by project, workload, traffic and architecture.
        </p>
      </div>
    </section>
  </SectionWrapper>
</template>

<style scoped lang="scss">
@use '~~/app/assets/scss/abstracts/variables' as *;

// --------------------------------------------------
// Section
// --------------------------------------------------

.engineering-outcome {
  display: grid;

  gap: clamp(3rem, 7vw, 6.5rem);

  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns:
      minmax(0, 0.82fr)
      minmax(500px, 1.18fr);
  }
}

// --------------------------------------------------
// Left-side editorial content
// --------------------------------------------------

.engineering-outcome__content {
  max-width: 610px;
}

.engineering-outcome__eyebrow {
  margin-bottom: 1.2rem;
}

.engineering-outcome__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(2.45rem, 4.6vw, 4.15rem);
  font-weight: 700;

  line-height: 1.03;

  letter-spacing: -0.05em;
}

.engineering-outcome__title-accent {
  display: block;

  color: $color-brand-red;
}

.engineering-outcome__description {
  max-width: 575px;

  margin-top: 1.4rem;

  color: $color-text-secondary;

  font-size: clamp(0.96rem, 1.25vw, 1.05rem);

  line-height: 1.76;
}

.engineering-outcome__description + .engineering-outcome__description {
  margin-top: 0.85rem;
}

// --------------------------------------------------
// Principle
// --------------------------------------------------

.engineering-outcome__principle {
  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr);

  align-items: start;

  gap: 0.9rem;

  max-width: 550px;

  margin-top: 1.85rem;
  margin-bottom: 1.7rem;

  padding-top: 1.5rem;

  border-top: 1px solid $color-border;
}

.engineering-outcome__principle-mark {
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

    border: 1px solid rgb(227 40 47 / 18%);
    border-radius: 50%;
  }
}

.engineering-outcome__principle p {
  color: $color-text-secondary;

  font-size: 0.86rem;
  font-weight: 600;

  line-height: 1.67;
}

// --------------------------------------------------
// Outcome panel
// --------------------------------------------------

.outcome-panel {
  position: relative;

  overflow: hidden;

  padding: clamp(1.5rem, 3vw, 2.4rem);

  background: $color-white;

  border: 1px solid $color-border;
  border-radius: $radius-xl;

  box-shadow: 0 30px 80px rgb(17 19 23 / 7%);

  &::before {
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
}

// --------------------------------------------------
// Panel header
// --------------------------------------------------

.outcome-panel__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 1.5rem;

  padding-bottom: 1.8rem;

  border-bottom: 1px solid $color-border;
}

.outcome-panel__header-copy {
  max-width: 550px;
}

.outcome-panel__eyebrow {
  margin-bottom: 0.55rem;

  color: $color-brand-red;

  font-size: 0.62rem;
  font-weight: 750;

  line-height: 1;

  letter-spacing: 0.1em;

  text-transform: uppercase;
}

.outcome-panel__title {
  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.65rem, 3vw, 2.35rem);
  font-weight: 700;

  line-height: 1.08;

  letter-spacing: -0.04em;
}

.outcome-panel__title span {
  display: block;

  color: $color-brand-red;
}

.outcome-panel__description {
  max-width: 520px;

  margin-top: 1rem;

  color: $color-text-secondary;

  font-size: 0.86rem;

  line-height: 1.7;
}

.outcome-panel__badge {
  display: inline-flex;
  align-items: center;

  flex: 0 0 auto;

  min-height: 32px;

  padding-inline: 0.8rem;

  color: $color-text-muted;

  background: $color-background-soft;

  font-size: 0.61rem;
  font-weight: 650;

  line-height: 1;

  white-space: nowrap;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

// --------------------------------------------------
// Outcome summary
// --------------------------------------------------

.outcome-panel__summary {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 0;

  padding-block: 1.8rem;

  border-bottom: 1px solid $color-border;
}

.outcome-summary {
  display: flex;
  flex-direction: column;

  gap: 0.85rem;

  min-width: 0;

  padding-inline: 1.25rem;

  border-right: 1px solid $color-border;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;

    border-right: 0;
  }
}

.outcome-summary__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;

  color: $color-brand-red;

  background: rgb(227 40 47 / 6%);

  font-size: 0.58rem;
  font-weight: 750;

  letter-spacing: 0.04em;

  border: 1px solid rgb(227 40 47 / 10%);
  border-radius: 50%;
}

.outcome-summary__title {
  display: block;

  color: $color-black;

  font-size: 0.77rem;
  font-weight: 700;

  line-height: 1.4;
}

.outcome-summary__text {
  margin-top: 0.4rem;

  color: $color-text-muted;

  font-size: 0.68rem;

  line-height: 1.6;
}

// --------------------------------------------------
// Shared subsection heading
// --------------------------------------------------

.outcome-panel__section-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 1rem;

  margin-bottom: 1.15rem;
}

.outcome-panel__section-eyebrow {
  margin-bottom: 0.45rem;

  color: $color-text-muted;

  font-size: 0.6rem;
  font-weight: 750;

  line-height: 1;

  letter-spacing: 0.09em;

  text-transform: uppercase;
}

.outcome-panel__section-title {
  max-width: 480px;

  color: $color-black;

  font-family: $font-heading;

  font-size: 0.95rem;
  font-weight: 650;

  line-height: 1.45;

  letter-spacing: -0.018em;
}

// --------------------------------------------------
// Architecture
// --------------------------------------------------

.outcome-panel__architecture {
  padding-block: 1.7rem;

  border-bottom: 1px solid $color-border;
}

.architecture-grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 0.65rem;
}

.architecture-layer {
  min-width: 0;

  padding: 1rem;

  background: $color-background-soft;

  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.architecture-layer__label {
  display: block;

  margin-bottom: 0.7rem;

  color: $color-text-muted;

  font-size: 0.58rem;
  font-weight: 750;

  line-height: 1;

  letter-spacing: 0.085em;

  text-transform: uppercase;
}

.architecture-layer__technologies {
  display: flex;
  flex-wrap: wrap;

  gap: 0.4rem;
}

.architecture-layer__technology {
  display: inline-flex;
  align-items: center;

  min-height: 29px;

  padding-inline: 0.72rem;

  color: $color-black;

  background: $color-white;

  font-size: 0.66rem;
  font-weight: 650;

  line-height: 1;

  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

// --------------------------------------------------
// Operational capabilities
// --------------------------------------------------

.outcome-panel__capabilities {
  padding-top: 1.7rem;
}

.capability-grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 0.65rem;

  margin: 0;
  padding: 0;

  list-style: none;
}

.capability-item {
  display: flex;
  align-items: center;

  gap: 0.6rem;

  min-width: 0;

  padding: 0.8rem 0.9rem;

  background: $color-white;

  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.capability-item__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;

  width: 22px;
  height: 22px;

  color: $color-brand-red;

  background: rgb(227 40 47 / 7%);

  font-size: 0.8rem;
  font-weight: 750;

  border-radius: 50%;
}

.capability-item__label {
  min-width: 0;

  color: $color-text-secondary;

  font-size: 0.7rem;
  font-weight: 650;

  line-height: 1.35;
}

// --------------------------------------------------
// Transparency note
// --------------------------------------------------

.outcome-panel__note {
  margin-top: 1.5rem;
  padding-top: 1.3rem;

  color: $color-text-muted;

  font-size: 0.66rem;

  line-height: 1.65;

  border-top: 1px solid $color-border;
}

// --------------------------------------------------
// Tablet
// --------------------------------------------------

@media (max-width: 900px) {
  .outcome-panel__header {
    flex-direction: column;
  }

  .outcome-panel__badge {
    white-space: normal;
  }
}

// --------------------------------------------------
// Mobile
// --------------------------------------------------

@media (max-width: 767px) {
  .outcome-panel__summary {
    grid-template-columns: 1fr;

    gap: 1rem;
  }

  .outcome-summary {
    flex-direction: row;
    align-items: flex-start;

    gap: 0.9rem;

    padding: 0 0 1rem;

    border-right: 0;
    border-bottom: 1px solid $color-border;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-bottom: 0;

      border-bottom: 0;
    }
  }

  .architecture-grid,
  .capability-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 575px) {
  .engineering-outcome {
    gap: 2.75rem;
  }

  .engineering-outcome__title {
    font-size: clamp(2.25rem, 11vw, 3.15rem);
  }

  .outcome-panel {
    padding: 1.35rem;

    border-radius: $radius-lg;
  }

  .outcome-panel__title {
    font-size: 1.7rem;
  }

  .outcome-panel__summary {
    padding-block: 1.5rem;
  }

  .outcome-panel__architecture {
    padding-block: 1.5rem;
  }

  .outcome-panel__capabilities {
    padding-top: 1.5rem;
  }
}

// --------------------------------------------------
// Reduced motion
// --------------------------------------------------

@media (prefers-reduced-motion: reduce) {
  .engineering-outcome *,
  .outcome-panel * {
    scroll-behavior: auto;
  }
}
</style>
