import { $fetch } from "ofetch";
import { defineNuxtRouteMiddleware, useUser } from "#imports";

export default defineNuxtRouteMiddleware(async () => {
  const user = useUser();

  if (!user.value) {
    return;
  }

  await $fetch("/api/user/sync", {
    method: "POST",
  });
});
