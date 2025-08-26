<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main>
      <section class="bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
            <div class="text-center lg:text-left">
              <h1 class="text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight">
                {{ $t('index.welcome') }}
                <span class="block text-indigo-600 mt-2">{{ $t('index.welcome-subtitle') }}</span>
              </h1>
              <p class="mt-6 text-lg text-zinc-600 max-w-xl mx-auto lg:mx-0">
                {{ $t('index.description') }}
              </p>
              <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/kontakt" class="bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  {{ $t('index.order-consultation') }}
                </a>
                <a href="#nase-sluzby" class="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
                  {{ $t('index.our-services') }}
                </a>
              </div>
            </div>
            
            <div class="hidden lg:block">
              <div class="bg-zinc-200 w-full h-96 rounded-lg shadow-xl flex items-center justify-center">
                <span class="text-zinc-500">Profesionální fotografie</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section id="nase-sluzby" class="bg-zinc-50 py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-base font-semibold text-indigo-600 tracking-wider uppercase">{{ $t('index.our-services-subtitle') }}</h2>
            <p class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight sm:text-4xl">
              {{ $t('index.our-services-title') }}
            </p>
          </div>
          <div class="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div class="flex-shrink-0">
                <svg class="h-10 w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h3 class="mt-4 text-xl font-bold text-zinc-900">{{ $t('index.our-services-item-1') }}</h3>
              <p class="mt-2 text-base text-zinc-600">{{ $t('index.our-services-item-1-description') }}</p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div class="flex-shrink-0">
                  <svg class="h-10 w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
              <h3 class="mt-4 text-xl font-bold text-zinc-900">{{ $t('index.our-services-item-2') }}</h3>
              <p class="mt-2 text-base text-zinc-600">{{ $t('index.our-services-item-2-description') }}</p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div class="flex-shrink-0">
                <svg class="h-10 w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-1.414v.001M9 12h.01M15 12h.01M12 9v.01M12 15v.01" /></svg>
              </div>
              <h3 class="mt-4 text-xl font-bold text-zinc-900">{{ $t('index.our-services-item-3') }}</h3>
              <p class="mt-2 text-base text-zinc-600">{{ $t('index.our-services-item-3-description') }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <section class="bg-white py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div class="order-last lg:order-first">
                <div class="bg-zinc-200 w-full h-96 rounded-lg shadow-xl flex items-center justify-center">
                  <span class="text-zinc-500">Fotografie naší moderní kliniky</span>
                </div>
              </div>
              <div class="max-w-xl">
                <h2 class="text-base font-semibold text-indigo-600 tracking-wider uppercase">{{ $t('index.our-philosophy-title') }}</h2>
                <p class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight sm:text-4xl">{{ $t('index.our-philosophy-subtitle') }}</p>
                <dl class="mt-8 space-y-6">
                  <div>
                    <dt class="font-bold text-zinc-900 text-lg">{{ $t('index.our-philosophy-item-1') }}</dt>
                    <dd class="mt-1 text-zinc-600">{{ $t('index.our-philosophy-item-1-description') }}</dd>
                  </div>
                  <div>
                    <dt class="font-bold text-zinc-900 text-lg">{{ $t('index.our-philosophy-item-2') }}</dt>
                    <dd class="mt-1 text-zinc-600">{{ $t('index.our-philosophy-item-2-description') }}</dd>
                  </div>
                  <div>
                    <dt class="font-bold text-zinc-900 text-lg">{{ $t('index.our-philosophy-item-3') }}</dt>
                    <dd class="mt-1 text-zinc-600">{{ $t('index.our-philosophy-item-3-description') }}</dd>
                  </div>
                </dl>
              </div>
          </div>
        </div>
      </section>
  
      <section class="bg-zinc-800 py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              {{ $t('index.our-clients-title') }}
            </h2>
          </div>
          <div class="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <blockquote class="bg-zinc-900 p-8 rounded-lg">
              <p class="text-zinc-300">"{{ $t('index.our-clients-item-1-quote') }}"</p>
              <footer class="mt-4 font-bold text-white">- {{ $t('index.our-clients-item-1-author') }}, <span class="text-indigo-400">{{ $t('index.our-clients-item-1-author-specialization') }}</span></footer>
            </blockquote>
              <blockquote class="bg-zinc-900 p-8 rounded-lg">
              <p class="text-zinc-300">"{{ $t('index.our-clients-item-2-quote') }}"</p>
              <footer class="mt-4 font-bold text-white">- {{ $t('index.our-clients-item-2-author') }}, <span class="text-indigo-400">{{ $t('index.our-clients-item-2-author-specialization') }}</span></footer>
            </blockquote>
              <blockquote class="bg-zinc-900 p-8 rounded-lg"> 
              <p class="text-zinc-300">"{{ $t('index.our-clients-item-3-quote') }}"</p>
              <footer class="mt-4 font-bold text-white">- {{ $t('index.our-clients-item-3-author') }}, <span class="text-indigo-400">{{ $t('index.our-clients-item-3-author-specialization') }}</span></footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section class="bg-white py-20">
        <div class="container mx-auto px-8 py-12 bg-indigo-600 rounded-lg text-center">
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
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('index.title'),
  description: t('index.description-seo')
})

</script>