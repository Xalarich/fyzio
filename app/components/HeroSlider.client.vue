<template>
  <div class="relative w-full h-[calc(100vh-5rem)]">
    <Swiper
      :modules="swiperModules"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :fade-effect="{ crossFade: true }"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :navigation="false"
      class="w-full h-full"
    >
      <SwiperSlide>
        <img
          src="/images/home/podkresleni-1.jpg"
          alt="Funkční a kondiční trénink"
          class="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/home/podkresleni-2.jpg"
          alt="Sportovní fyzioterapie a mobilita"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/home/podkresleni-3.jpg"
          alt="Individuální terapie a návrat do pohybu"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </SwiperSlide>
    </Swiper>

    <!-- Fixed content overlay (sits above the slides, does not move with them) -->
    <div
      class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-l from-zinc-950/80 via-zinc-950/45 to-transparent"
    >
      <div class="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div class="ml-auto flex h-full max-w-2xl flex-col items-end justify-center pb-16 text-right">
          <p class="text-sm font-semibold uppercase tracking-widest text-indigo-300">
            Sportovní fyzioterapie · Praha
          </p>
          <h1 class="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl text-shadow">
            Vraťte se do pohybu.
            <span class="block text-indigo-400">Bez omezení.</span>
          </h1>
          <p class="mt-5 max-w-lg text-base text-zinc-200 sm:text-lg">
            Individuální terapie, sportovní fyzio a řízený návrat k výkonu (RTP). Zbavíme vás bolesti a vrátíme vás do plného pohybu.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end sm:gap-4">
            <a
              href="/kontakt"
              class="pointer-events-auto group inline-flex items-center justify-center rounded-lg bg-indigo-600 px-7 py-3.5 text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-indigo-700 hover:shadow-indigo-500/30 sm:text-lg"
            >
              Objednat se
              <span class="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#nase-sluzby"
              class="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-white/10 px-7 py-3.5 text-base font-bold text-white ring-1 ring-inset ring-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:text-lg"
            >
              Naše služby
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'

const swiperModules = [Autoplay, EffectFade, Pagination]
</script>

<style scoped>
:deep(.swiper-pagination) {
  bottom: 1.25rem;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #fff;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background: #818cf8;
}
</style>
