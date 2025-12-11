<template>
  <div class="slider-container">
    <Swiper
      :modules="swiperModules"
      :slides-per-view="1"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="w-full h-full"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

defineProps({
  images: {
    type: Array,
    required: true
  }
})

const swiperModules = [Navigation, Pagination]
</script>

<style scoped>
.slider-container {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  overflow: hidden;
  position: relative;
}

.slider-container :deep(.swiper) {
  width: 100%;
  height: 100%;
}

.slider-container :deep(.swiper-slide) {
  width: 100% !important;
  height: 100%;
}

.slider-container :deep(.swiper-slide img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #4f46e5;

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
