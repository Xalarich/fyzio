<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col"
    >
    <Header />
    <ContentRenderer
      v-if="page"
      :value="page"
      class="container mx-auto px-4 sm:px-6 xl:px-24 py-4 sm:py-6 lg:py-24"
    />
    <Footer />
  </div>
</template>

<style>
</style>