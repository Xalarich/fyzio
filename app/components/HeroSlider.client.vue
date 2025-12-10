<template>
  <Swiper
    :modules="swiperModules"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 3500, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    :navigation="true"
    class="w-full h-[300px] sm:h-[420px] lg:h-[680px]"
  >
    <SwiperSlide>
      <img
        src="/images/Slider/fyzioterapie-pro-kazdeho.jpg"
        alt="Fyzioterapie pro každého"
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="/images/Slider/profesionalni-pristup.jpg"
        alt="Profesionální přístup"
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="/images/Slider/resime-akutni-problemy.jpg"
        alt="Řešíme akutní problémy"
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
</script>


