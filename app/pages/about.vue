<template>
    <div class="min-h-screen flex flex-col">
      <Header />
      <main>
  
        <section class="bg-zinc-50">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div class="order-2 lg:order-1">
                <h2 class="text-3xl font-bold text-zinc-900 tracking-tight">{{ $t('about.senior.name') }}</h2>
                <p class="mt-4 text-base text-zinc-600">
                  {{ $t('about.senior.bio') }}
                </p>
                <p class="mt-4 text-base text-zinc-600">
                  {{ $t('about.senior.experience') }}
                </p>
                <p class="mt-4 text-base text-zinc-600">
                  {{ $t('about.senior.practice') }}
                </p>
  
                <h3 class="mt-8 text-xl font-bold text-zinc-900">{{ $t('about.skills.title') }}</h3>
                <ul class="mt-4 space-y-2 text-zinc-600 list-disc list-inside">
                  <li>{{ $t('about.senior.skill1') }}</li>
                  <li>{{ $t('about.senior.skill2') }}</li>
                  <li>{{ $t('about.senior.skill3') }}</li>
                  <li>{{ $t('about.senior.skill4') }}</li>
                  <li>{{ $t('about.senior.skill5') }}</li>
                </ul>
                <div class="mt-10">
                  <a
                    href="https://www.google.com/search?sa=X&sca_esv=ae106bdfab73cdc9&rlz=1C1ONGR_enCZ1153CZ1153&hl=cs-CZ&biw=1920&bih=919&tbm=lcl&q=MC+Fyzio+Recenze&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2MDc1tjA3tjAzMTcytzS1NLA03cDI-IpRwNdZwa2yKjNfISg1OTWvKnURK4YQADyiXE9AAAAA&rldimm=8753873864727959095&ved=2ahUKEwjGjKa75IyPAxXZhv0HHfprBkoQ9fQKegQIMxAF#lkt=LocalPoiReviews"
                    target="_blank"
                    class="bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white hover:shadow-lg font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    {{ $t('about.ourReviews') }}
                  </a>
                </div>
              </div>
              <div class="order-1 lg:order-2">
                <img
                  src="/images/about/marekConSenior.jpg"
                  :alt="$t('about.senior.name')"
                  class="rounded-lg shadow-xl w-full h-auto object-cover"
                >
              </div>
            </div>
          </div>
        </section>
  
        <section class="bg-white">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div class="order-2 lg:order-2">
                <h2 class="text-3xl font-bold text-zinc-900 tracking-tight">{{ $t('about.junior.name') }}</h2>
                <p class="mt-4 text-base text-zinc-600">
                  {{ $t('about.junior.bio') }}
                </p>
  
                <h3 class="mt-8 text-xl font-bold text-zinc-900">{{ $t('about.skills.title') }}</h3>
                <ul class="mt-4 space-y-2 text-zinc-600 list-disc list-inside">
                  <li>{{ $t('about.junior.skill1') }}</li>
                  <li>{{ $t('about.junior.skill2') }}</li>
                  <li>{{ $t('about.junior.skill3') }}</li>
                  <li>{{ $t('about.junior.skill4') }}</li>
                  <li>{{ $t('about.junior.skill5') }}</li>
                </ul>
                <h3 class="mt-8 text-xl font-bold text-zinc-900">{{ $t('about.junior.practiceTitle') }}</h3>
                <p class="mt-4 text-base text-zinc-600">
                  {{ $t('about.junior.practice') }}
                </p>
                <div class="mt-6 flex flex-row gap-4 w-full overflow-x-auto">
                  <img src="/images/about/FKJablonec.png" alt="FK Jablonec" class="max-h-28 lg:max-h-36 rounded">
                  <img src="/images/about/ParaIceHockey.jpg" alt="Paralympics ice hockey" class="max-h-28 lg:max-h-36 rounded">
                  <img src="/images/about/ParaIceHockeyCard.png" alt="Paralympics ice hockey card" class="max-h-28 lg:max-h-36 rounded">
                  <img src="/images/about/UEFA.jpg" alt="Marek Cón UEFA" class="max-h-28 lg:max-h-36 rounded">
                </div>
              </div>
              <div class="order-1 lg:order-1">
                <img
                  src="/images/about/marekConJunior.png"
                  :alt="$t('about.junior.name')"
                  class="rounded-lg shadow-xl w-full h-auto object-cover"
                >
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
      title: t('about.title'),
      description: t('about.description')
    })

  </script>