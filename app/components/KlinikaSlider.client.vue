<template>
  <Swiper
    :modules="swiperModules"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    :navigation="true"
    class="w-full h-96"
  >
    <SwiperSlide v-for="(image, index) in images" :key="index">
      <img
        :src="image.src"
        :alt="image.alt"
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const swiperModules = [Autoplay, Navigation, Pagination]

const images = [
  { src: '/images/home/podkresleni-1.jpg', alt: 'Cvičení a fyzioterapie' },
  { src: '/images/home/podkresleni-2.jpg', alt: 'Sportovní fyzioterapie' },
  { src: '/images/home/podkresleni-3.jpg', alt: 'Individuální terapie' }
]
</script>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #fff;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px;
  font-weight: bold;
}

:deep(.swiper-pagination-bullet) {
  background: #fff;
  opacity: 0.6;
}

:deep(.swiper-pagination-bullet-active) {
  background: #fff;
  opacity: 1;
}
</style>
