<template>
  <div class="min-h-screen flex flex-col">
    
      <!-- Hero Section -->
      <section class="bg-zinc-50 py-16">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
              Fyzioterapie Marek Cón Blog
            </h1>
            <p class="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
              Blogy Marka Cóna o bolesti zad, kloubů i svalů. Specializujeme se na individuální přístup a dlouhodobé výsledky.
            </p>
          </div>
        </div>
      </section>

      <!-- Blog List Section -->
      <section class="bg-white py-16">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article 
              v-for="blog in blogs"
              :key="blog.id"
              class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-zinc-200"
            >
              <!-- Blog Image -->
              <div class="aspect-w-16 aspect-h-9">
                <img 
                  :src="blog.image" 
                  :alt="blog.title"
                  class="w-full h-48 object-cover"
                />
              </div>
              
              <!-- Blog Content -->
              <div class="p-6">
                <!-- Category Badge -->
                <div class="mb-3">
                  <span class="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {{ blog.category }}
                  </span>
                </div>
                
                <!-- Blog Title -->
                <NuxtLink 
                :to="`/blogs/${blog.id}`"
              >
                <h2 class="text-xl font-bold text-zinc-900 mb-3 line-clamp-2">
                  {{ blog.title }}
                </h2>
                </NuxtLink>
                
                <!-- Blog Description -->
                <p class="text-zinc-600 text-sm mb-4 line-clamp-3">
                  {{ blog.description }}
                </p>
                
                <!-- Meta Information -->
                <div class="flex items-center justify-between text-sm text-zinc-500 mb-4">
                  <time class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {{ blog.createdAt }}
                  </time>
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {{ blog.readTime }} min čtení
                  </span>
                </div>
                
                <!-- Read More Button -->
                <NuxtLink 
                  :to="`/blogs/${blog.id}`"
                  class="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-300"
                >
                  Číst více
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </NuxtLink>
              </div>
            </article>
          </div>
          
          <!-- Empty State -->
          <div v-if="blogs.length === 0" class="text-center py-12">
            <svg class="mx-auto h-12 w-12 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <h3 class="mt-2 text-sm font-medium text-zinc-900">No blogs available</h3>
            <p class="mt-1 text-sm text-zinc-500">Check back later for new content.</p>
          </div>
        </div>
      </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Definujeme blog data přímo zde
const blogData = [
  {
    id: "hip-mobility-exercises",
    title: "Mobilita kyčlí a bolesti zad – 3 cviky pro zlepšení zdraví",
    description: "Kyčelní kloub je mnohem méně pohyblivý než ramenní, přesto je jejich mobilita velmi důležitá. Omezený pohyb kyčelních kloubů často souvisí s bolestmi bederní páteře. Naučte se 3 účinné cviky.",
    image: "/images/blogs/panev.jpg",
    createdAt: "2021-09-27",
    readTime: 7,
    category: "Pohybový aparát"
  },
  {
    id: "patellofemoral-pain",
    title: "Bolest kolene – syndrom Patellofemorální bolesti",
    description: "Syndrom patellofemorální bolesti (PFPS) můžete znát jako běžecké koleno, chondromalacie pately, retropatelární bolestivý syndrom. Mluvíme o bolesti na přední straně kolene, která postihuje přibližně 25 % populace.",
    image: "/images/blogs/skeleton-legs.png",
    createdAt: "2023-03-20",
    readTime: 10,
    category: "Pohybový aparát"
  },
  {
    id: "neck-pain",
    title: "Bolest krční páteře - akutní x chronická",
    description: "Nejčastěji uváděným typem bolesti je nespecifická nebo mechanická bolest krční páteře. Běžné projevy mohou zahrnovat bolest svalů, svalové křeče, bolest hlavy a další.",
    image: "/images/blogs/krcni-pater.jpg",
    createdAt: "2023-03-30",
    readTime: 8,
    category: "Pohybový aparát"
  },
  {
    id: "running-knee",
    title: "Běžecké koleno - syndrom iliotibiálního traktu (ITBS)",
    description: "Abnormální pohybové vzorce či vysoká intenzita tréninku mohou vyvolat bolest na zevní straně kolene, často označovanou jako iliotibiální syndrom (ITBS). Jedná se o přetížení vazivového pruhu, který je důležitým stabilizátorem kolenního a kyčelního kloubu.",
    image: "/images/blogs/gluteus.jpg",
    createdAt: "2024-01-10",
    readTime: 12,
    category: "Sportovní medicína"
  }
]

const blogs = computed(() => {
  return Array.isArray(blogData) ? blogData : [];
})

// Funkce pro formátování data
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('cs-CZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

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