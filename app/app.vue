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

// Apache (endora.cz) appends a trailing slash to directory URLs: a request for
// /o-nas 301s to /o-nas/. Canonicals therefore have to carry the slash too,
// otherwise every canonical points at a URL that immediately redirects — which
// Search Console reports as "Page with redirect". Internal links and
// public/sitemap.xml use the same trailing-slash form for the same reason.
const canonical = computed(() => {
  const path = route.path.endsWith('/') ? route.path : `${route.path}/`
  return `${siteUrl}${path}`
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
})

useSeoMeta({
  ogUrl: canonical,
  ogImage: `${siteUrl}/og-image.jpg`,
  twitterImage: `${siteUrl}/og-image.jpg`,
})
</script>
