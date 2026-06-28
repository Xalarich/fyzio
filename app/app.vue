<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Site-wide SEO defaults. Per-page useSeoMeta() calls override these where they set the same key.
const route = useRoute()
const siteUrl = useRuntimeConfig().public.siteUrl

// Absolute canonical for the current route (no trailing slash, homepage stays bare).
const canonical = computed(() => {
  const path = route.path === '/' ? '' : route.path.replace(/\/$/, '')
  return `${siteUrl}${path}`
})

const ogImage = `${siteUrl}/images/slider/profesionalni-pristup.jpg`

useHead({
  link: [{ rel: 'canonical', href: canonical }]
})

useSeoMeta({
  ogUrl: canonical,
  ogImage,
  twitterImage: ogImage
})
</script>
