<template>
    <div class="min-h-screen flex flex-col">
      <Header />
      <!-- blogs listed -->
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  const { t } = useI18n()
  
  useSeoMeta({
    title: t('blog.title'),
    description: t('blog.description')
  })
  
  </script>