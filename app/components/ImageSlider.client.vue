<template>
  <Swiper
    :modules="swiperModules"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 3500, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    :navigation="true"
    class="w-full h-64 lg:h-80 rounded-2xl shadow-xl overflow-hidden"
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

defineProps({
  images: {
    type: Array,
    required: true
  }
})

const swiperModules = [Autoplay, Navigation, Pagination]
</script>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #4f46e5;
  background: rgba(255, 255, 255, 0.9);
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 16px;
  font-weight: bold;
}

:deep(.swiper-pagination-bullet) {
  background: #4f46e5;
}

:deep(.swiper-pagination-bullet-active) {
  background: #4f46e5;
}
</style>




