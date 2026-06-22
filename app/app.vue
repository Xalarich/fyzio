<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Root component. Sets a correct per-route canonical URL (previously a single
// global canonical pointed every page at the homepage) plus default social
// (Open Graph / Twitter) image and URL. Per-page useSeoMeta() calls override
// title/description; these app-level defaults fill the rest.
const route = useRoute()
const { siteUrl } = useRuntimeConfig().public

const canonical = computed(() => `${siteUrl}${route.path}`)

useHead({
  link: [{ rel: 'canonical', href: canonical }],
})

useSeoMeta({
  ogUrl: canonical,
  ogImage: `${siteUrl}/og-image.jpg`,
  twitterImage: `${siteUrl}/og-image.jpg`,
})
</script>
