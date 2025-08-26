<template>
  <div class="min-h-screen flex flex-col bg-zinc-50">
    <Header />
    <main>
      <section class="bg-zinc-800 text-white text-center py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl lg:text-5xl font-extrabold tracking-tight">
            {{ $t('blog.krcniPater.mainTitle') }}
          </h1>
          <p class="mt-4 text-lg text-indigo-300">
            {{ $t('blog.category.musculoskeletal') }} </p>
        </div>
      </section>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto -mt-16">
          <img
            src="/images/blogs/krcni-pater.jpg"
            :alt="$t('blog.krcniPater.mainTitle')"
            class="rounded-xl shadow-2xl w-full object-cover aspect-video"
          >
          
          <article class="bg-white rounded-t-lg shadow-xl p-8 sm:p-12 mt-8 prose prose-lg lg:prose-xl max-w-none text-zinc-600">
            <p class="lead text-xl text-zinc-700">
              {{ $t('blog.krcniPater.intro.p1') }}
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 not-prose my-8">
              <div class="flex items-start my-2">
                <svg class="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{{ $t('blog.krcniPater.intro.symptoms.item1') }}</span>
              </div>
              <div class="flex items-start my-2">
                <svg class="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{{ $t('blog.krcniPater.intro.symptoms.item2') }}</span>
              </div>
              <div class="flex items-start my-2">
                <svg class="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{{ $t('blog.krcniPater.intro.symptoms.item3') }}</span>
              </div>
              <div class="flex items-start my-2">
                <svg class="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{{ $t('blog.krcniPater.intro.symptoms.item4') }}</span>
              </div>
              <div class="flex items-start my-2">
                <svg class="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{{ $t('blog.krcniPater.intro.symptoms.item5') }}</span>
              </div>
              <div class="flex items-start my-2">
                <svg class="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{{ $t('blog.krcniPater.intro.symptoms.item6') }}</span>
              </div>
            </div>

            <hr>

            <h2>{{ $t('blog.krcniPater.acute.title') }}</h2>
            <p>{{ $t('blog.krcniPater.acute.p1') }}</p>
            <p>{{ $t('blog.krcniPater.acute.p2') }}</p>

            <hr>

            <h2>{{ $t('blog.krcniPater.chronic.title') }}</h2>
            <p>{{ $t('blog.krcniPater.chronic.p1') }}</p>
            
            <h3>1. {{ $t('blog.krcniPater.chronic.dysbalance.title') }}</h3>
            <p>{{ $t('blog.krcniPater.chronic.dysbalance.p1') }}</p>
            
            <h3>2. {{ $t('blog.krcniPater.chronic.degeneration.title') }}</h3>
            <p>{{ $t('blog.krcniPater.chronic.degeneration.p1') }}</p>
            
            <h3>3. {{ $t('blog.krcniPater.chronic.radiculopathy.title') }}</h3>
            <p>{{ $t('blog.krcniPater.chronic.radiculopathy.p1') }}</p>
            <ul>
              <li>{{ $t('blog.krcniPater.chronic.radiculopathy.symptoms.item1') }}</li>
              <li>{{ $t('blog.krcniPater.chronic.radiculopathy.symptoms.item2') }}</li>
              <li>{{ $t('blog.krcniPater.chronic.radiculopathy.symptoms.item3') }}</li>
            </ul>
            <p><strong>{{ $t('blog.krcniPater.chronic.radiculopathy.p2_strong') }}</strong> {{ $t('blog.krcniPater.chronic.radiculopathy.p2') }}</p>
          </article>
        </div>
      </div>

      <section class="py-20">
        <div class="container mx-auto px-8">
            <div class="py-12 bg-indigo-600 rounded-lg text-center">
                <h2 class="text-3xl font-extrabold text-white">
                    {{ $t('index.our-clients-item-4-quote') }}
                </h2>
                <p class="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
                    {{ $t('index.our-clients-item-4-description') }}
                </p>
                <div class="mt-8">
                    <a href="/kontakt" class="bg-white hover:bg-zinc-100 text-indigo-700 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 inline-block">
                        {{ $t('index.our-clients-item-4-button') }}
                    </a>
                </div>
            </div>
        </div>
      </section>

    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('blog.krcniPater.mainTitle'),
  description: t('blog.krcniPater.intro.p1')
})
</script>

<style>
/* Přizpůsobení stylů pro Tailwind Typography plugin pro lepší vizuál */
.prose h2 {
  @apply text-3xl font-bold text-zinc-900 mb-4 mt-12;
}
.prose h3 {
  @apply text-2xl font-bold text-zinc-800 mb-4 mt-8;
}
.prose hr {
  @apply my-10 border-zinc-200;
}
.prose ul > li::before {
  @apply bg-indigo-500;
}
.prose strong {
    @apply text-zinc-800;
}
</style>