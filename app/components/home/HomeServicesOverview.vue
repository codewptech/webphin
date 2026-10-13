<script setup lang="ts">
import { NuxtLink } from '#components';

import BaseButton from '~~/app/components/ui/BaseButton.vue';
import SectionEyebrow from '~~/app/components/ui/SectionEyebrow.vue';
import SectionWrapper from '~~/app/components/ui/SectionWrapper.vue';

import { services, type ServiceItem } from '~~/app/config/services';

const getServiceAriaLabel = (service: ServiceItem): string => {
  return `Explore ${service.title}`;
};
</script>

<template>
  <SectionWrapper tone="default" spacing="lg">
    <section class="services-overview">
      <aside class="services-overview__intro">
        <SectionEyebrow class="services-overview__eyebrow">
          What we do
        </SectionEyebrow>

        <h2 class="services-overview__title">
          Technology across the
          <span class="services-overview__title-accent">
            whole digital system.
          </span>
        </h2>

        <p class="services-overview__description">
          A project may begin with a website, an application, a backend problem,
          an infrastructure decision or a repetitive process that should be
          automated. Webphin works across those layers so the solution can be
          designed around the requirement rather than around one predefined
          service.
        </p>

        <div class="services-overview__action">
          <BaseButton to="/services" variant="text">
            Explore all services
          </BaseButton>
        </div>

        <div class="services-overview__principle">
          <span
            class="services-overview__principle-marker"
            aria-hidden="true"
          />

          <p>
            We recommend the parts a project needs — not every service simply
            because we can provide it.
          </p>
        </div>
      </aside>

      <div class="services-overview__list">
        <NuxtLink
          v-for="service in services"
          :key="service.slug"
          :to="service.slug"
          class="service-row"
          :aria-label="getServiceAriaLabel(service)"
        >
          <div class="service-row__body">
            <h3 class="service-row__title">
              {{ service.title }}
            </h3>

            <p class="service-row__description">
              {{ service.description }}
            </p>

            <div class="service-row__capabilities">
              <span
                v-for="capability in service.capabilities"
                :key="capability"
                class="service-row__capability"
              >
                {{ capability }}
              </span>
            </div>

            <div class="service-row__footer">
              <span class="service-row__explore">
                Explore service

                <span class="service-row__explore-arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </SectionWrapper>
</template>

<style scoped lang="scss">
@use '~~/app/assets/scss/abstracts/variables' as *;
@use '~~/app/assets/scss/abstracts/mixins' as *;

// --------------------------------------------------
// Main layout
// --------------------------------------------------

.services-overview {
  display: grid;

  gap: 4rem;

  @include lg {
    grid-template-columns:
      minmax(280px, 0.74fr)
      minmax(0, 1.26fr);

    gap: clamp(4rem, 8vw, 8rem);
  }
}

// --------------------------------------------------
// Intro
// --------------------------------------------------

.services-overview__intro {
  align-self: start;

  max-width: 470px;

  @include lg {
    position: sticky;

    top: 116px;
  }
}

.services-overview__eyebrow {
  margin-bottom: 1.25rem;
}

.services-overview__title {
  margin-bottom: 1.5rem;

  font-size: clamp(2.35rem, 4vw, 3.7rem);

  font-weight: 700;

  line-height: 1.04;

  letter-spacing: -0.045em;
}

.services-overview__title-accent {
  display: block;

  color: $color-brand-red;
}

.services-overview__description {
  color: $color-text-secondary;

  font-size: clamp(1rem, 1.4vw, 1.08rem);

  line-height: 1.75;
}

.services-overview__action {
  margin-top: 1.75rem;
}

.services-overview__principle {
  display: grid;

  grid-template-columns:
    4px
    minmax(0, 1fr);

  gap: 0.9rem;

  max-width: 400px;

  margin-top: 2.5rem;

  padding-top: 1.5rem;

  border-top: 1px solid $color-border;
}

.services-overview__principle-marker {
  width: 4px;
  min-height: 42px;

  background: linear-gradient(180deg, $color-brand-red, $color-brand-orange);

  border-radius: $radius-pill;
}

.services-overview__principle p {
  color: $color-text-muted;

  font-size: 0.78rem;

  line-height: 1.65;
}

// --------------------------------------------------
// Service list
// --------------------------------------------------

.services-overview__list {
  border-top: 1px solid $color-border-strong;
}

.service-row {
  position: relative;

  display: block;

  padding: clamp(2rem, 4vw, 2.8rem) 0;

  color: inherit;

  border-bottom: 1px solid $color-border;

  transition:
    background-color $transition-base,
    padding $transition-base;

  &::before {
    content: '';

    position: absolute;

    top: 1.4rem;
    bottom: 1.4rem;
    left: 0;

    width: 3px;

    background: $color-brand-red;

    border-radius: $radius-pill;

    opacity: 0;

    transform: scaleY(0.5);

    transition:
      opacity $transition-fast,
      transform $transition-base;
  }

  &:hover,
  &:focus-visible {
    background: $color-background-soft;

    @include sm {
      padding-right: 1.5rem;
      padding-left: 1.5rem;
    }
  }

  &:hover::before,
  &:focus-visible::before {
    opacity: 1;

    transform: scaleY(1);
  }
}

// --------------------------------------------------
// Service body
// --------------------------------------------------

.service-row__body {
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  min-width: 0;
}

.service-row__title {
  max-width: 760px;

  color: $color-black;

  font-family: $font-heading;

  font-size: clamp(1.55rem, 2.6vw, 2.25rem);

  font-weight: 680;

  line-height: 1.2;

  letter-spacing: -0.032em;

  transition: color $transition-fast;
}

.service-row:hover .service-row__title,
.service-row:focus-visible .service-row__title {
  color: $color-brand-red;
}

.service-row__description {
  max-width: 700px;

  margin-top: 0.95rem;

  color: $color-text-secondary;

  font-size: clamp(0.9rem, 1.2vw, 0.98rem);

  line-height: 1.72;
}

// --------------------------------------------------
// Capability chips
// --------------------------------------------------

.service-row__capabilities {
  display: flex;
  flex-wrap: wrap;

  gap: 0.45rem 0.55rem;

  margin-top: 1.25rem;
}

.service-row__capability {
  display: inline-flex;
  align-items: center;

  min-height: 28px;

  padding-inline: 0.72rem;

  color: $color-text-muted;

  background: transparent;

  font-size: 0.63rem;
  font-weight: 600;

  border: 1px solid $color-border;
  border-radius: $radius-pill;

  transition:
    color $transition-fast,
    background-color $transition-fast,
    border-color $transition-fast;
}

.service-row:hover .service-row__capability,
.service-row:focus-visible .service-row__capability {
  color: $color-text-secondary;

  background: $color-white;

  border-color: $color-border-strong;
}

// --------------------------------------------------
// Explore treatment
// --------------------------------------------------

.service-row__footer {
  display: flex;
  justify-content: flex-end;

  width: 100%;

  margin-top: 1.4rem;
}

.service-row__explore {
  display: inline-flex;
  align-items: center;

  gap: 0.45rem;

  color: $color-text-muted;

  font-size: 0.72rem;
  font-weight: 650;

  transition: color $transition-fast;
}

.service-row__explore-arrow {
  color: $color-brand-red;

  font-size: 0.9rem;

  transition: transform $transition-fast;
}

.service-row:hover .service-row__explore,
.service-row:focus-visible .service-row__explore {
  color: $color-black;
}

.service-row:hover .service-row__explore-arrow,
.service-row:focus-visible .service-row__explore-arrow {
  transform: translateX(4px);
}

// --------------------------------------------------
// Small screens
// --------------------------------------------------

@media (max-width: 575px) {
  .services-overview {
    gap: 3rem;
  }

  .services-overview__title {
    font-size: clamp(2.2rem, 11vw, 3rem);
  }

  .service-row {
    padding-block: 1.9rem;
  }

  .service-row__title {
    font-size: clamp(1.45rem, 7vw, 1.8rem);
  }

  .service-row__description {
    font-size: 0.86rem;
  }

  .service-row__capabilities {
    margin-top: 1rem;
  }

  .service-row__footer {
    justify-content: flex-start;

    margin-top: 1.2rem;
  }
}

// --------------------------------------------------
// Reduced motion
// --------------------------------------------------

@media (prefers-reduced-motion: reduce) {
  .service-row,
  .service-row::before,
  .service-row__title,
  .service-row__capability,
  .service-row__explore,
  .service-row__explore-arrow {
    transition: none;
  }

  .service-row:hover,
  .service-row:focus-visible {
    padding-right: 0;
    padding-left: 0;
  }

  .service-row:hover .service-row__explore-arrow,
  .service-row:focus-visible .service-row__explore-arrow {
    transform: none;
  }
}
</style>
