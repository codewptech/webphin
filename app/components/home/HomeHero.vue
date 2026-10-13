<script setup lang="ts">
import BaseButton from "~~/app/components/ui/BaseButton.vue";
import SectionEyebrow from "~~/app/components/ui/SectionEyebrow.vue";
import { services } from "~~/app/config/services";

interface BlueprintLayer {
  number: string;
  title: string;
  description: string;
  examples: readonly string[];
}

const capabilities: readonly string[] = services.map(
  (service) => service.shortTitle,
);

const blueprintLayers: readonly BlueprintLayer[] = [
  {
    number: "01",
    title: "Experience",
    description: "The interfaces and digital touchpoints people actually use.",
    examples: ["Websites", "Portals", "Interfaces"],
  },
  {
    number: "02",
    title: "Application",
    description:
      "The workflows, business logic and software behind the experience.",
    examples: ["Applications", "Workflows", "Integrations"],
  },
  {
    number: "03",
    title: "Systems",
    description:
      "The data, APIs and infrastructure that keep everything connected.",
    examples: ["Backend", "Database", "Infrastructure"],
  },
  {
    number: "04",
    title: "Operations",
    description:
      "The automation, deployment and support required after launch.",
    examples: ["Automation", "Deployment", "Support"],
  },
];
</script>

<template>
  <section class="home-hero">
    <div class="home-hero__background" aria-hidden="true">
      <div class="home-hero__grid" />
      <div class="home-hero__glow home-hero__glow--red" />
      <div class="home-hero__glow home-hero__glow--blue" />
    </div>

    <div class="page-container home-hero__container">
      <div class="home-hero__content">
        <SectionEyebrow class="home-hero__eyebrow">
          Technology built around real requirements
        </SectionEyebrow>

        <h1 class="home-hero__title">
          Build the technology your business

          <span class="home-hero__title-accent"> actually needs. </span>
        </h1>

        <p class="home-hero__description">
          Webphin designs and builds websites, applications, backend systems,
          integrations, infrastructure and automation by starting with the
          requirement — not by forcing every project into the same solution.
        </p>

        <div class="home-hero__actions">
          <BaseButton to="/contact" size="lg">
            Discuss Your Project
          </BaseButton>

          <BaseButton to="/work" variant="secondary" size="lg">
            Explore Our Work
          </BaseButton>
        </div>

        <div class="home-hero__principle">
          <span class="home-hero__principle-line" aria-hidden="true" />

          <p class="home-hero__principle-copy">
            Understand the problem first. Choose the technology second.
          </p>
        </div>
      </div>

      <div class="home-hero__visual">
        <article class="blueprint">
          <div class="blueprint__brand-accent" aria-hidden="true">
            <span
              class="blueprint__brand-accent-part blueprint__brand-accent-part--blue"
            />
            <span
              class="blueprint__brand-accent-part blueprint__brand-accent-part--magenta"
            />
            <span
              class="blueprint__brand-accent-part blueprint__brand-accent-part--red"
            />
            <span
              class="blueprint__brand-accent-part blueprint__brand-accent-part--orange"
            />
          </div>

          <header class="blueprint__header">
            <div class="blueprint__header-copy">
              <span class="blueprint__eyebrow"> Solution blueprint </span>

              <h2 class="blueprint__title">Start with the requirement.</h2>
            </div>

            <span class="blueprint__status">
              <span class="blueprint__status-dot" aria-hidden="true" />

              Requirement first
            </span>
          </header>

          <div class="blueprint__requirement">
            <span class="blueprint__requirement-label">
              Business requirement
            </span>

            <p class="blueprint__requirement-text">
              Understand the goals, users, constraints, existing systems and
              resources before deciding what should be built.
            </p>

            <div class="blueprint__requirement-tags">
              <span>Goals</span>
              <span>Users</span>
              <span>Constraints</span>
              <span>Budget</span>
            </div>
          </div>

          <div class="blueprint__divider">
            <span> Translate the requirement into the right system </span>
          </div>

          <div class="blueprint__layers">
            <article
              v-for="layer in blueprintLayers"
              :key="layer.number"
              class="blueprint-layer"
            >
              <div class="blueprint-layer__number">
                {{ layer.number }}
              </div>

              <div class="blueprint-layer__content">
                <div class="blueprint-layer__copy">
                  <h3 class="blueprint-layer__title">
                    {{ layer.title }}
                  </h3>

                  <p class="blueprint-layer__description">
                    {{ layer.description }}
                  </p>
                </div>

                <div class="blueprint-layer__examples">
                  <span
                    v-for="example in layer.examples"
                    :key="example"
                    class="blueprint-layer__example"
                  >
                    {{ example }}
                  </span>
                </div>
              </div>
            </article>
          </div>

          <footer class="blueprint__outcome">
            <div class="blueprint__outcome-copy">
              <span class="blueprint__outcome-label"> The objective </span>

              <strong class="blueprint__outcome-title">
                The right system — not the biggest system.
              </strong>
            </div>

            <span class="blueprint__outcome-mark" aria-hidden="true"> → </span>
          </footer>
        </article>
      </div>
    </div>

    <div class="page-container home-hero__capabilities-container">
      <div class="home-hero__capabilities">
        <span class="home-hero__capabilities-label"> What we work across </span>

        <div class="home-hero__capabilities-list">
          <span
            v-for="capability in capabilities"
            :key="capability"
            class="home-hero__capability"
          >
            {{ capability }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
@use "~~/app/assets/scss/abstracts/mixins" as *;

.home-hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #f9fafb 0%, $color-white 72%);
}

.home-hero__background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.home-hero__grid {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 75%;
  opacity: 0.32;
  background-image:
    linear-gradient(rgb(17 19 23 / 3%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(17 19 23 / 3%) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(to bottom, rgb(0 0 0 / 70%), transparent);
}

.home-hero__glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(130px);
  opacity: 0.06;
}

.home-hero__glow--red {
  top: -170px;
  right: -110px;
  background: $color-brand-red;
}

.home-hero__glow--blue {
  bottom: 5%;
  left: -260px;
  background: $color-brand-blue;
}

.home-hero__container {
  position: relative;
  z-index: 1;
  display: grid;
  align-items: center;
  gap: 4rem;
  min-height: calc(100vh - 76px);
  padding-top: clamp(5rem, 9vw, 8.5rem);
  padding-bottom: clamp(4rem, 7vw, 6.5rem);

  @include lg {
    grid-template-columns:
      minmax(0, 1.05fr)
      minmax(430px, 0.95fr);
    gap: clamp(4rem, 6vw, 6.5rem);
  }
}

.home-hero__content {
  position: relative;
  max-width: 720px;
}

.home-hero__eyebrow {
  margin-bottom: 1.5rem;
}

.home-hero__title {
  max-width: 800px;
  margin-bottom: 1.75rem;
  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.home-hero__title-accent {
  display: block;
  color: $color-brand-red;
}

.home-hero__description {
  max-width: 680px;
  color: $color-text-secondary;
  font-size: clamp(1.05rem, 1.7vw, 1.22rem);
  line-height: 1.72;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2.25rem;
}

.home-hero__principle {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  max-width: 560px;
  margin-top: 1.75rem;
}

.home-hero__principle-line {
  flex-shrink: 0;
  width: 22px;
  height: 2px;
  margin-top: 0.62rem;
  background: $color-brand-red;
  border-radius: $radius-pill;
}

.home-hero__principle-copy {
  color: $color-text-muted;
  font-size: 0.84rem;
  line-height: 1.65;
}

.home-hero__visual {
  width: 100%;
  max-width: 590px;
  margin-inline: auto;

  @include lg {
    margin-right: 0;
  }
}

.blueprint {
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    145deg,
    rgb(255 255 255 / 99%),
    rgb(249 250 251 / 98%)
  );
  border: 1px solid $color-border-strong;
  border-radius: $radius-xl;
  box-shadow:
    0 32px 90px rgb(17 19 23 / 9%),
    0 5px 18px rgb(17 19 23 / 4%);
}

.blueprint__brand-accent {
  display: grid;
  grid-template-columns:
    1.15fr
    0.85fr
    0.9fr
    1.3fr;
  width: 100%;
  height: 4px;
}

.blueprint__brand-accent-part {
  display: block;
}

.blueprint__brand-accent-part--blue {
  background: $color-brand-blue;
}

.blueprint__brand-accent-part--magenta {
  background: $color-brand-magenta;
}

.blueprint__brand-accent-part--red {
  background: $color-brand-red;
}

.blueprint__brand-accent-part--orange {
  background: $color-brand-orange;
}

.blueprint__header {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.6rem;
  border-bottom: 1px solid $color-border;

  @include sm {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.75rem;
  }
}

.blueprint__header-copy {
  min-width: 0;
}

.blueprint__eyebrow {
  display: block;
  margin-bottom: 0.45rem;
  color: $color-brand-red;
  font-size: 0.65rem;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.blueprint__title {
  color: $color-black;
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  line-height: 1.25;
  letter-spacing: -0.03em;
}

.blueprint__status {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  gap: 0.5rem;
  width: fit-content;
  color: $color-text-muted;
  font-size: 0.68rem;
  font-weight: 650;
  white-space: nowrap;
}

.blueprint__status-dot {
  width: 7px;
  height: 7px;
  background: $color-brand-red;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgb(227 40 47 / 8%);
}

.blueprint__requirement {
  margin: 1.5rem;
  padding: 1.35rem;
  background: linear-gradient(145deg, $color-background-soft, $color-white);
  border: 1px solid $color-border;
  border-radius: $radius-md;
}

.blueprint__requirement-label {
  display: block;
  margin-bottom: 0.55rem;
  color: $color-black;
  font-size: 0.72rem;
  font-weight: 750;
  letter-spacing: 0.035em;
}

.blueprint__requirement-text {
  max-width: 470px;
  color: $color-text-secondary;
  font-size: 0.82rem;
  line-height: 1.65;
}

.blueprint__requirement-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1rem;

  span {
    display: inline-flex;
    align-items: center;
    min-height: 28px;
    padding-inline: 0.7rem;
    color: $color-text-secondary;
    background: $color-white;
    font-size: 0.65rem;
    font-weight: 650;
    border: 1px solid $color-border;
    border-radius: $radius-pill;
  }
}

.blueprint__divider {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-inline: 1.5rem;
  color: $color-text-muted;
  font-size: 0.64rem;
  font-weight: 650;
  letter-spacing: 0.025em;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: $color-border;
  }

  span {
    text-align: center;
  }
}

.blueprint__layers {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.5rem 0;
}

.blueprint-layer {
  display: grid;
  grid-template-columns:
    40px
    minmax(0, 1fr);
  gap: 1rem;
  padding-block: 1rem;
  border-bottom: 1px solid $color-border;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 1.25rem;
    border-bottom: 0;
  }
}

.blueprint-layer__number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  color: $color-text-muted;
  background: $color-background-soft;
  font-size: 0.62rem;
  font-weight: 750;
  border: 1px solid $color-border;
  border-radius: $radius-sm;
}

.blueprint-layer:first-child .blueprint-layer__number {
  color: $color-white;
  background: $color-brand-red;
  border-color: $color-brand-red;
}

.blueprint-layer__content {
  min-width: 0;
}

.blueprint-layer__copy {
  margin-bottom: 0.8rem;
}

.blueprint-layer__title {
  margin-bottom: 0.25rem;
  color: $color-black;
  font-family: $font-heading;
  font-size: 0.95rem;
  line-height: 1.35;
}

.blueprint-layer__description {
  max-width: 430px;
  color: $color-text-muted;
  font-size: 0.73rem;
  line-height: 1.55;
}

.blueprint-layer__examples {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.blueprint-layer__example {
  display: inline-flex;
  align-items: center;
  min-height: 25px;
  padding-inline: 0.62rem;
  color: $color-text-secondary;
  background: transparent;
  font-size: 0.62rem;
  font-weight: 600;
  border: 1px solid $color-border;
  border-radius: $radius-pill;
}

.blueprint__outcome {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin: 0 1.5rem 1.5rem;
  padding: 1rem 1.1rem;
  background: $color-dark-surface;
  border-radius: $radius-md;
}

.blueprint__outcome-copy {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.blueprint__outcome-label {
  color: $color-dark-text-muted;
  font-size: 0.58rem;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.blueprint__outcome-title {
  color: $color-white;
  font-size: 0.82rem;
  line-height: 1.45;
}

.blueprint__outcome-mark {
  flex-shrink: 0;
  color: $color-brand-red;
  font-size: 1.3rem;
}

.home-hero__capabilities-container {
  position: relative;
  z-index: 1;
}

.home-hero__capabilities {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 1.4rem;
  border-top: 1px solid $color-border;

  @include lg {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
}

.home-hero__capabilities-label {
  flex-shrink: 0;
  color: $color-text-muted;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.home-hero__capabilities-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.3rem;
}

.home-hero__capability {
  position: relative;
  color: $color-text-secondary;
  font-size: 0.77rem;
  font-weight: 600;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -0.72rem;
    width: 3px;
    height: 3px;
    background: $color-brand-red;
    border-radius: 50%;
    transform: translateY(-50%);
  }
}

@media (max-width: 575px) {
  .home-hero__container {
    gap: 3rem;
    padding-top: 4.5rem;
  }

  .home-hero__title {
    font-size: clamp(2.75rem, 13vw, 3.8rem);
  }

  .home-hero__actions {
    align-items: stretch;

    :deep(.base-button) {
      width: 100%;
    }
  }

  .blueprint__requirement {
    margin: 1.25rem;
    padding: 1.15rem;
  }

  .blueprint__divider {
    padding-inline: 1.25rem;

    span {
      max-width: 190px;
    }
  }

  .blueprint__layers {
    padding: 1.35rem 1.25rem 0;
  }

  .blueprint-layer {
    grid-template-columns:
      34px
      minmax(0, 1fr);
    gap: 0.8rem;
  }

  .blueprint-layer__number {
    width: 30px;
    height: 30px;
  }

  .blueprint__outcome {
    margin: 0 1.25rem 1.25rem;
  }

  .home-hero__capabilities-list {
    gap: 0.6rem 1.15rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-hero__glow {
    filter: none;
  }
}
</style>
