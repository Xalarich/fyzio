<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    
    <main class="flex-1">
      <!-- Hero Section -->
      <section class="bg-zinc-50 py-16">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
              {{ $t('blog.title') }}
            </h1>
            <p class="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
              {{ $t('blog.description') }}
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
                <h2 class="text-xl font-bold text-zinc-900 mb-3 line-clamp-2">
                  {{ blog.title }}
                </h2>
                
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
                    {{ blog.readTime }} {{ $t('blog.read-time') }}
                  </span>
                </div>
                
                <!-- Read More Button -->
                <NuxtLink 
                  :to="`/blogs/${blog.id}`"
                  class="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-300"
                >
                  {{ $t('blog.read-more') }}
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
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import csData from '../../../i18n/locales/cs.json'
import enData from '../../../i18n/locales/en.json'

// 1. Z i18n si stále vezmeme `locale` pro zjištění jazyka
//    a `t` pro běžné texty (nadpisy, tlačítka atd.).
const { locale, t } = useI18n()

// 2. Naimportujeme si PŘÍMO celé JSON soubory jako datové objekty.

// 3. Vytvoříme computed property, která jednoduše vybere správná data
//    a sáhne si do nich pro seznam blogů.
const blogs = computed(() => {
  // Podle aktuálního jazyka vybereme správný naimportovaný soubor
  const activeData = locale.value === 'cs' ? csData : enData;
  
  // Z dat si vezmeme náš seznam blogů
  const blogData = activeData.blog.blogList;

  // Pojistka, kdyby seznam v souboru chyběl
  return Array.isArray(blogData) ? blogData : [];
})

// Funkce pro formátování data zůstává stejná
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale.value, {
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