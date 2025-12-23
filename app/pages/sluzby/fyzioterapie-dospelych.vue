<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Hero Section -->
    <section class="relative bg-zinc-900 py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-zinc-900/90 to-zinc-900"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-indigo-400 font-semibold tracking-widest uppercase animate-fade-in">Fyzio postupy</p>
        <h1 class="mt-4 text-4xl lg:text-6xl font-extrabold text-white tracking-tight animate-slide-up">
          Ambulantní fyzioterapie
        </h1>
        <div class="mt-6 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        <!-- K 2.1 Kloubní mobilizace: Image 2.jpg left, text right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center group">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
            <img
              src="/images/fyzio-dospelych/1.jpg"
              alt="Kloubní mobilizace"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <article class="animate-fade-in-right">
            <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Kloubní mobilizace</h2>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              Mobilizační techniky jsou fyzioterapeutické postupy k obnovení hybnosti kloubů při funkčních blokádách. Terapie zahrnuje i přípravu terénu (např. uvolnění měkkých tkání, trakci, teplo) a navazuje na přesnou diagnostiku.
            </p>
          </article>
        </div>

        <!-- K 2.2 Manuální techniky: Text left, Image 6.jpg right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center group">
          <article class="order-2 lg:order-1 animate-fade-in-left">
            <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Manuální techniky</h2>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              Nabízíme široké spektrum technik včetně pooperační péče o jizvu, myofasciální terapie k uvolnění různých partií těla a ošetření trigger pointů (spoušťových bodů).
            </p>
          </article>
          <div class="relative overflow-hidden rounded-2xl shadow-2xl order-1 lg:order-2 aspect-[4/3]">
            <img
              src="/images/fyzio-dospelych/2.jpg"
              alt="Manuální techniky"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <!-- K 2.3 Sportovní fyzioterapie a trénink: Carousel left, text right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center group">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
            <!-- Carousel -->
            <div class="relative w-full h-full">
              <transition-group name="carousel-fade">
                <img
                  v-for="(image, index) in sportCarouselImages"
                  v-show="currentSlide === index"
                  :key="image.src"
                  :src="image.src"
                  :alt="image.alt"
                  class="absolute inset-0 w-full h-full object-cover"
                />
              </transition-group>
              
              <!-- Navigation Arrows -->
              <button
                @click="prevSlide"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Předchozí obrázek"
              >
                <svg class="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                @click="nextSlide"
                class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Další obrázek"
              >
                <svg class="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <!-- Dots Indicator -->
              <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                <button
                  v-for="(image, index) in sportCarouselImages"
                  :key="index"
                  @click="currentSlide = index"
                  :class="[
                    'w-2.5 h-2.5 rounded-full transition-all duration-300',
                    currentSlide === index ? 'bg-indigo-600 w-6' : 'bg-white/70 hover:bg-white'
                  ]"
                  :aria-label="`Přejít na obrázek ${index + 1}`"
                />
              </div>
            </div>
          </div>
          <article class="animate-fade-in-right">
            <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Sportovní fyzioterapie a trénink</h2>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              Poskytujeme funkční diagnostiku, individuální nastavení rehabilitačního a rekondičního plánu a také specializovanou sportovní regeneraci.
            </p>
            <ul class="mt-6 space-y-3 text-zinc-600 text-lg">
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span>
                Tahová dynamometrie
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span>
                Elektrostimulace Compex
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span>
                Přístrojová terapie BTL
              </li>
              <li class="flex items-center gap-3">
                <span class="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span>
                Fasciální nože
              </li>
            </ul>
          </article>
        </div>

        <!-- K 2.4 Masáže: Styled card -->
        <div class="group bg-gradient-to-r from-zinc-50 to-indigo-50 rounded-3xl p-10 lg:p-14 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-500">
          <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Masáže</h2>
          <p class="mt-6 text-zinc-600 leading-relaxed text-lg max-w-4xl">
            Sportovní, relaxační, reflexní typy masáží.
          </p>
        </div>

        <!-- K 2.5 Metoda McKenzie: Text left, Image 3.jpg right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center group">
          <article class="order-2 lg:order-1 animate-fade-in-left">
            <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Metoda McKenzie</h2>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              Mechanická diagnostika a terapie (MDT) je vysoce strukturovaný terapeutický přístup zaměřený na diagnostiku a léčbu bolestí páteře a periferních kloubů. Cílem je nejen úleva od bolesti, ale i prevence recidiv pomocí edukace a samostatného cvičení pacienta.
            </p>
          </article>
          <div class="relative overflow-hidden rounded-2xl shadow-2xl order-1 lg:order-2 aspect-[4/3]">
            <img
              src="/images/fyzio-dospelych/3.jpg"
              alt="Metoda McKenzie"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <!-- K 2.6 Spiraldynamik: Styled card -->
        <div class="group bg-gradient-to-r from-indigo-50 to-zinc-50 rounded-3xl p-10 lg:p-14 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-500">
          <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Spiraldynamik®</h2>
          <p class="mt-6 text-zinc-600 leading-relaxed text-lg max-w-4xl">
            Spiraldynamik® je fyzioterapeutický koncept pohybové terapie, který vychází z přirozených spirálních pohybových principů lidského těla. Jeho hlavní myšlenkou je, že zdravý a efektivní pohyb se odehrává ve spirálních strukturách – od chodidel až po hlavu.
          </p>
        </div>

      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative bg-indigo-600 py-20 overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-extrabold text-white">
          Máte zájem o naše služby?
        </h2>
        <p class="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
          Neváhejte nás kontaktovat a společně najdeme řešení vašich potíží.
        </p>
        <div class="mt-8">
          <NuxtLink
            to="/kontakt"
            class="group inline-flex items-center bg-white hover:bg-zinc-50 text-indigo-700 font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Kontaktujte nás
            <svg class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Sport Carousel
const sportCarouselImages = [
  { src: '/images/fyzio-dospelych/7.jpg', alt: 'Přístrojová terapie - ultrazvuk' },
  { src: '/images/fyzio-dospelych/8.jpg', alt: 'Elektroterapie BTL' },
  { src: '/images/fyzio-dospelych/9.jpg', alt: 'Sportovní fyzioterapie a trénink' }
]

const currentSlide = ref(0)
let autoplayInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % sportCarouselImages.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + sportCarouselImages.length) % sportCarouselImages.length
}

const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})

useSeoMeta({
  title: 'Ambulantní fyzioterapie | Fyzioterapie Marek Cón',
  description: 'Kloubní mobilizace, manuální techniky, sportovní fyzioterapie, masáže, McKenzie a Spiraldynamik pro dospělé klienty.',
  ogTitle: 'Ambulantní fyzioterapie | Fyzioterapie Marek Cón',
  ogDescription: 'Komplexní fyzioterapeutické služby pro dospělé. Kloubní mobilizace, manuální techniky, sportovní fyzioterapie a další.',
  ogType: 'website',
  ogLocale: 'cs_CZ',
  ogSiteName: 'Fyzioterapie Marek Cón',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Ambulantní fyzioterapie | Fyzioterapie Marek Cón',
  twitterDescription: 'Komplexní fyzioterapeutické služby pro dospělé. Kloubní mobilizace, manuální techniky, sportovní fyzioterapie a další.'
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out;
}

/* Carousel transitions */
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}

.carousel-fade-enter-to,
.carousel-fade-leave-from {
  opacity: 1;
}
</style>
