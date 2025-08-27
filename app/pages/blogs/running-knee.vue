<template>
    <div class="min-h-screen flex flex-col bg-zinc-50">
      <Header />
      <main>
        <section class="bg-gradient-to-br from-zinc-800 to-indigo-800 text-white text-center py-40">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {{ $t('blog.blogs.bezeckeKoleno.mainTitle') }}
            </h1>
            <p class="mt-4 text-lg text-white">
              {{ $t('blog.blogs.category.musculoskeletal') }}
            </p>
          </div>
        </section>
  
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto -mt-16">
            <video
              src="/videos/blogs/single-leg-step-down.mp4"
              controls
              autoplay
              loop
              class="rounded-xl shadow-2xl w-full object-cover aspect-video min-h-[1100px]"
            />
            <article class="bg-white rounded-t-lg shadow-xl p-8 sm:p-12 mt-8 prose prose-lg lg:prose-xl max-w-none text-zinc-600">
                <div class="flex flex-row gap-8">
                    <div class="flex flex-col justify-start items-center">
                        <p>{{ $t('blog.blogs.bezeckeKoleno.intro.p1') }}
                        {{ $t('blog.blogs.bezeckeKoleno.intro.p2') }}</p>
                    </div>
                    <img src="/images/blogs/gluteus.jpg" :alt="$t('blog.blogs.bezeckeKoleno.intro.p1')" class="w-1/2 rounded-xl shadow-2xl"/>
                </div>
  
              <hr>
  
              <h2>{{ $t('blog.blogs.bezeckeKoleno.causesAndRisks.title') }}</h2>
              <h3>{{ $t('blog.blogs.bezeckeKoleno.causesAndRisks.running.title') }}</h3>
              <p>{{ $t('blog.blogs.bezeckeKoleno.causesAndRisks.running.p1') }}</p>
              <p>{{ $t('blog.blogs.bezeckeKoleno.causesAndRisks.running.p2') }}</p>
              
              <h3>{{ $t('blog.blogs.bezeckeKoleno.causesAndRisks.cycling.title') }}</h3>
              <p>{{ $t('blog.blogs.bezeckeKoleno.causesAndRisks.cycling.p1') }}</p>

              <img src="/images/blogs/skeleton-legs.png" :alt="$t('blog.blogs.bezeckeKoleno.causesAndRisks.running.title')" class="rounded-xl shadow-2xl mt-4"/>
  
              <hr>
  
              <h2>{{ $t('blog.blogs.bezeckeKoleno.symptomsAndManagement.title') }}</h2>
              <p>{{ $t('blog.blogs.bezeckeKoleno.symptomsAndManagement.p1') }}</p>
              <p>{{ $t('blog.blogs.bezeckeKoleno.symptomsAndManagement.p2') }}</p>
              
              <h3>{{ $t('blog.blogs.bezeckeKoleno.symptomsAndManagement.triggers.title') }}</h3>
              <ul>
                <li>{{ $t('blog.blogs.bezeckeKoleno.symptomsAndManagement.triggers.item1') }}</li>
                <li>{{ $t('blog.blogs.bezeckeKoleno.symptomsAndManagement.triggers.item2') }}</li>
                <li>{{ $t('blog.blogs.bezeckeKoleno.symptomsAndManagement.triggers.item3') }}</li>
                <li>{{ $t('blog.blogs.bezeckeKoleno.symptomsAndManagement.triggers.item4') }}</li>
              </ul>
              <p>{{ $t('blog.blogs.bezeckeKoleno.symptomsAndManagement.p3') }}</p>
  
              <hr>
  
              <h2>{{ $t('blog.blogs.bezeckeKoleno.rehabilitation.title') }}</h2>
              <h3>{{ $t('blog.blogs.bezeckeKoleno.rehabilitation.acutePhase.title') }}</h3>
              <p>{{ $t('blog.blogs.bezeckeKoleno.rehabilitation.acutePhase.p1') }}</p>
              <ul>
                <li>{{ $t('blog.blogs.bezeckeKoleno.rehabilitation.acutePhase.steps.item1') }}</li>
                <li>{{ $t('blog.blogs.bezeckeKoleno.rehabilitation.acutePhase.steps.item2') }}</li>
                <li>{{ $t('blog.blogs.bezeckeKoleno.rehabilitation.acutePhase.steps.item3') }}</li>
                <li>{{ $t('blog.blogs.bezeckeKoleno.rehabilitation.acutePhase.steps.item4') }}</li>
              </ul>
  
              <h3>{{ $t('blog.blogs.bezeckeKoleno.rehabilitation.recoveryPhase.title') }}</h3>
              <p>{{ $t('blog.blogs.bezeckeKoleno.rehabilitation.recoveryPhase.p1') }}</p>
              <p>{{ $t('blog.blogs.bezeckeKoleno.rehabilitation.recoveryPhase.p2') }}</p>
            </article>
          </div>
        </div>

        <div class="max-w-4xl mx-auto -mt-16">
            <div class="flex flex-row gap-4 overflow-x-scroll">
            
                <video 
                    src="/videos/blogs/foam-rolling-the-tfl.mp4" 
                    controls 
                    autoplay 
                    loop 
                    class="w-full object-cover aspect-4/3 max-h-100"/>
                <video 
                    src="/videos/blogs/side-plank-hip-abduction.mp4" 
                    controls 
                    autoplay 
                    loop 
                    class="w-full object-cover aspect-4/3 max-h-100"/>
                <video 
                    src="/videos/blogs/single-leg-rdl.mp4" 
                    controls 
                    autoplay 
                    loop 
                    class="w-full object-cover aspect-4/3 max-h-100"/>
            </div>
        </div>
        <section class="py-20">
          <div class="container mx-auto px-8">
              <div class="py-12 bg-indigo-600 rounded-lg text-center shadow-2xl">
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
    title: t('blog.blogs.bezeckeKoleno.mainTitle'),
    description: t('blog.blogs.bezeckeKoleno.description')
  })
  </script>
  
  <style>
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