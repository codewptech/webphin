<script setup lang="ts">
import { NuxtLink } from "#components";

import WebphinBrand from "~~/app/components/branding/WebphinBrand.vue";
import { footerGroups, footerLegalLinks } from "~~/app/config/footer";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="page-container">
      <div class="site-footer__main">
        <div class="site-footer__brand-column">
          <WebphinBrand variant="inverse" />

          <p class="site-footer__description">
            Webphin designs and builds practical digital systems, from websites
            and applications to backend platforms, infrastructure, integrations
            and automation.
          </p>

          <NuxtLink to="/contact" class="site-footer__project-link">
            Discuss Your Project

            <span class="site-footer__project-arrow" aria-hidden="true">
              →
            </span>
          </NuxtLink>
        </div>

        <div class="site-footer__navigation">
          <div
            v-for="group in footerGroups"
            :key="group.title"
            class="site-footer__group"
          >
            <h2 class="site-footer__group-title">
              {{ group.title }}
            </h2>

            <nav
              class="site-footer__group-links"
              :aria-label="`${group.title} footer navigation`"
            >
              <NuxtLink
                v-for="link in group.links"
                :key="link.to"
                :to="link.to"
                class="site-footer__link"
              >
                {{ link.label }}
              </NuxtLink>
            </nav>
          </div>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p class="site-footer__copyright">
          © {{ currentYear }} Webphin. All rights reserved.
        </p>

        <nav class="site-footer__legal" aria-label="Legal navigation">
          <NuxtLink
            v-for="link in footerLegalLinks"
            :key="link.to"
            :to="link.to"
            class="site-footer__legal-link"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "~~/app/assets/scss/abstracts/variables" as *;
@use "~~/app/assets/scss/abstracts/mixins" as *;

.site-footer {
  color: $color-dark-text;
  background: $color-dark-surface;
}

.site-footer__main {
  display: grid;
  gap: 3.5rem;
  padding-top: clamp(4rem, 8vw, 6rem);
  padding-bottom: clamp(3rem, 6vw, 4.5rem);

  @include lg {
    grid-template-columns:
      minmax(280px, 0.9fr)
      minmax(0, 1.6fr);
    gap: 6rem;
  }
}

.site-footer__brand-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 420px;
}

.site-footer__description {
  margin-top: 1.5rem;
  color: $color-dark-text-secondary;
  font-size: 0.95rem;
  line-height: 1.75;
}

.site-footer__project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.75rem;
  color: $color-white;
  font-size: 0.9rem;
  font-weight: 650;
  transition: color $transition-fast;

  &:hover {
    color: $color-brand-red;
  }

  &:hover .site-footer__project-arrow {
    transform: translateX(4px);
  }
}

.site-footer__project-arrow {
  color: $color-brand-red;
  transition: transform $transition-fast;
}

.site-footer__navigation {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.5rem 2rem;

  @include md {
    grid-template-columns:
      minmax(0, 1.5fr)
      minmax(0, 1fr)
      minmax(0, 1fr);
  }
}

.site-footer__group {
  min-width: 0;
}

.site-footer__group-title {
  margin-bottom: 1.1rem;
  color: $color-white;
  font-family: $font-body;
  font-size: 0.78rem;
  font-weight: 750;
  line-height: 1.3;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.site-footer__group-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.site-footer__link {
  width: fit-content;
  color: $color-dark-text-secondary;
  font-size: 0.9rem;
  line-height: 1.55;
  transition: color $transition-fast;

  &:hover {
    color: $color-white;
  }
}

.site-footer__bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 1.5rem;
  border-top: 1px solid $color-dark-border;

  @include md {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.site-footer__copyright {
  color: $color-dark-text-muted;
  font-size: 0.8rem;
}

.site-footer__legal {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
}

.site-footer__legal-link {
  color: $color-dark-text-muted;
  font-size: 0.8rem;
  transition: color $transition-fast;

  &:hover {
    color: $color-white;
  }
}
</style>
