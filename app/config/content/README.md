# Frontend content ownership

- Keep stable, reusable service and project metadata in `app/config/services.ts`
  and `app/config/projects.ts`. Insights content comes from its public
  database-backed APIs, with contracts in `shared/types/insights.ts`.
- Store page-specific copy, SEO, editorial lists, and sequence stages in the
  corresponding module here. Use named exports and readonly data (`as const`).
- Store related entity slugs rather than copies of titles, icons, capabilities,
  logos, or status. Resolve those relationships from the registries in Vue.
- Keep Vue responsible for custom presentation, composition, derived data, and
  interactions. Homepage components may import their own section from `home.ts`.
- Array order defines a genuine sequence. Render it with an ordered list and
  `SequenceMarker`, passing `index + 1`; never store display numbers in content.
  Use stable semantic Vue keys. Unordered categories and responsibilities stay
  unnumbered and do not use progression arrows.
- Keep content modules free of Vue runtime APIs, component imports, CSS, and
  display formatting. Small generic UI wording and technical symbols may stay
  in Vue. Preserve custom page layouts rather than introducing a generic renderer.
- Use `~~` aliases for project imports and explicit imports for runtime APIs,
  components, and modules.
