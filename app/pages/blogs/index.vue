<template>
  <div class="min-h-screen flex flex-col">
    
    <!-- Hero Section -->
    <section class="relative bg-zinc-900 py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-zinc-900/90 to-zinc-900"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-indigo-400 font-semibold tracking-widest uppercase">Články</p>
        <h1 class="mt-4 text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
          Blog
        </h1>
        <p class="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">
          Blogy Marka Cóna o bolesti zad, kloubů i svalů. Specializujeme se na individuální přístup a dlouhodobé výsledky.
        </p>
        <div class="mt-6 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Blog List Section -->
    <section class="bg-zinc-50 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <article 
            v-for="blog in blogs"
            :key="blog.id"
            class="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-zinc-200 hover:border-indigo-200 transform hover:-translate-y-2"
          >
            <!-- Blog Image -->
            <NuxtLink :to="`/blogs/${blog.id}`" class="block overflow-hidden">
              <div class="relative h-64 overflow-hidden bg-zinc-100">
                <img 
                  :src="blog.image" 
                  :alt="blog.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </NuxtLink>
            
            <!-- Blog Content -->
            <div class="p-8">
              <!-- Category Badge -->
              <div class="mb-4">
                <span class="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  {{ blog.category }}
                </span>
              </div>
              
              <!-- Blog Title -->
              <NuxtLink :to="`/blogs/${blog.id}`">
                <h2 class="text-xl lg:text-2xl font-bold text-zinc-900 mb-4 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {{ blog.title }}
                </h2>
              </NuxtLink>
              
              <!-- Blog Description -->
              <p class="text-zinc-600 mb-6 line-clamp-3 leading-relaxed">
                {{ blog.description }}
              </p>
              
              <!-- Meta Information -->
              <div class="flex items-center justify-between text-sm text-zinc-500 mb-6 pb-6 border-b border-zinc-100">
                <time class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {{ blog.createdAt }}
                </time>
                <span class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {{ blog.readTime }} min čtení
                </span>
              </div>
              
              <!-- Read More Button -->
              <NuxtLink 
                :to="`/blogs/${blog.id}`"
                class="group/btn inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Číst více
                <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </NuxtLink>
            </div>
          </article>
        </div>
        
        <!-- Empty State -->
        <div v-if="blogs.length === 0" class="text-center py-20">
          <div class="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="h-10 w-10 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-zinc-900">Žádné články</h3>
          <p class="mt-2 text-zinc-500">Vraťte se později pro nový obsah.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

useSeoMeta({
  title: 'Blog | Fyzioterapie Marek Cón',
  description: 'Odborné články o fyzioterapii, rehabilitaci a zdraví pohybového aparátu. Tipy na cvičení, prevenci bolesti a léčbu.',
  ogTitle: 'Blog | Fyzioterapie Marek Cón',
  ogDescription: 'Odborné články o fyzioterapii, rehabilitaci a zdraví pohybového aparátu. Tipy na cvičení, prevenci bolesti a léčbu.',
  ogType: 'website',
  ogLocale: 'cs_CZ',
  ogSiteName: 'Fyzioterapie Marek Cón',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Blog | Fyzioterapie Marek Cón',
  twitterDescription: 'Odborné články o fyzioterapii, rehabilitaci a zdraví pohybového aparátu.'
})

// Definujeme blog data přímo zde
const blogData = [
  {
    id: "hip-mobility-exercises",
    title: "Mobilita kyčlí a bolesti zad – 3 cviky pro zlepšení zdraví",
    description: "Kyčelní kloub je mnohem méně pohyblivý než ramenní, přesto je jejich mobilita velmi důležitá. Omezený pohyb kyčelních kloubů často souvisí s bolestmi bederní páteře. Naučte se 3 účinné cviky.",
    image: "/images/blogs/panev.jpg",
    createdAt: "27. 9. 2021",
    readTime: 7,
    category: "Pohybový aparát"
  },
  {
    id: "patellofemoral-pain",
    title: "Bolest kolene – syndrom Patellofemorální bolesti",
    description: "Syndrom patellofemorální bolesti (PFPS) můžete znát jako běžecké koleno, chondromalacie pately, retropatelární bolestivý syndrom. Mluvíme o bolesti na přední straně kolene, která postihuje přibližně 25 % populace.",
    image: "/images/blogs/knee.jpg",
    createdAt: "20. 3. 2023",
    readTime: 10,
    category: "Pohybový aparát"
  },
  {
    id: "neck-pain",
    title: "Bolest krční páteře - akutní x chronická",
    description: "Nejčastěji uváděným typem bolesti je nespecifická nebo mechanická bolest krční páteře. Běžné projevy mohou zahrnovat bolest svalů, svalové křeče, bolest hlavy a další.",
    image: "/images/blogs/krcni-pater.jpg",
    createdAt: "30. 3. 2023",
    readTime: 8,
    category: "Pohybový aparát"
  },
  {
    id: "running-knee",
    title: "Běžecké koleno - syndrom iliotibiálního traktu (ITBS)",
    description: "Abnormální pohybové vzorce či vysoká intenzita tréninku mohou vyvolat bolest na zevní straně kolene, často označovanou jako iliotibiální syndrom (ITBS). Jedná se o přetížení vazivového pruhu, který je důležitým stabilizátorem kolenního a kyčelního kloubu.",
    image: "/images/blogs/gluteus.jpg",
    createdAt: "10. 1. 2024",
    readTime: 12,
    category: "Sportovní medicína"
  }
]

const blogs = computed(() => {
  return Array.isArray(blogData) ? blogData : [];
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
