<template>
  <div class="min-h-screen flex flex-col bg-white">
    <AppHeader />
    <main class="flex-1 flex items-center justify-center px-4 py-24">
      <div class="text-center max-w-lg">
        <p class="text-7xl sm:text-8xl font-extrabold text-indigo-600">{{ error?.statusCode || 404 }}</p>
        <h1 class="mt-6 text-2xl sm:text-3xl font-bold text-zinc-900">
          {{ error?.statusCode === 404 ? 'Stránka nenalezena' : 'Něco se pokazilo' }}
        </h1>
        <p class="mt-4 text-zinc-600">
          {{ error?.statusCode === 404
            ? 'Omlouváme se, ale tato stránka neexistuje nebo byla přesunuta.'
            : 'Omlouváme se, došlo k neočekávané chybě. Zkuste to prosím znovu.' }}
        </p>
        <button
          @click="handleError"
          class="mt-8 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Zpět na úvodní stránku
        </button>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
defineProps({ error: Object })

const handleError = () => clearError({ redirect: '/' })

useSeoMeta({
  title: 'Stránka nenalezena | Fyzioterapie Marek Cón',
  robots: 'noindex',
})
</script>
