export default defineNuxtRouteMiddleware(async () => {
  console.log('[sync-user] middleware executed');

  const user = useUser();

  console.log('[sync-user] user:', user.value);

  if (!user.value) {
    return;
  }

  await $fetch('/api/user/sync', {
    method: 'POST',
  });
});
