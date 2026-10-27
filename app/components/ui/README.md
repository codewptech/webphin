# Async data states

Use Nuxt's SSR-aware `useFetch` / `useAsyncData` state and real `refresh` action.
`DataStateMessage.vue` presents domain-supplied copy with canonical typography,
`BaseButton`, and accessible status/error announcements; it does not fetch data.

Evaluate usable data first. Keep real content visible while a background request
is pending. With no usable data, render contextual loading text only while the
request is pending, and render a contextual error with a real Retry action when
it fails. Never render an empty message for a failed or pending request.

After a successful response, preserve primary section headings and show a short
contextual empty message for empty primary collections. Omit empty optional or
secondary sections completely. A public entity's 404 stays Nuxt's generic 404,
with no retryable error message or private publication information.

Use `kind="pending"` / `kind="empty"` for polite status messages, and `kind="error"`
for one meaningful error announcement. Provide `retryable` and handle `@retry`
with the actual request's `refresh()` when appropriate. Do not move focus when
state changes. Do not add skeletons, placeholder records, decorative loaders,
empty-state cards, or a separate visual language.

This rule applies to current and future data-driven domains, including Resources;
static pages and authentication infrastructure do not need publishing-state UI.
