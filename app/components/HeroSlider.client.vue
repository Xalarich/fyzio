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

    <!-- Fixed content overlay (sits above the slides, does not move with them).
         Lives in HeroOverlay.vue so the <ClientOnly> fallback in index.vue can
         render byte-identical markup — see the comment in that component. -->
    <HeroOverlay />
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
