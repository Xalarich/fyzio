<template>
  <div>
    <!-- Thumbnail grid -->
    <div class="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
      <button
        v-for="(img, i) in images"
        :key="i"
        type="button"
        @click="open(i)"
        class="group relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-zinc-100 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      >
        <img
          :src="img.src"
          :alt="img.alt"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span class="absolute inset-0 flex items-center justify-center bg-zinc-900/0 group-hover:bg-zinc-900/25 transition-colors duration-300">
          <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
        </span>
      </button>
    </div>

    <!-- Lightbox overlay -->
    <Teleport to="body">
      <Transition name="lb-fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 backdrop-blur-sm p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          @click.self="close"
        >
          <!-- Close -->
          <button
            type="button"
            @click="close"
            aria-label="Zavřít galerii"
            class="absolute top-4 right-4 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <!-- Prev -->
          <button
            v-if="images.length > 1"
            type="button"
            @click.stop="prev"
            aria-label="Předchozí obrázek"
            class="absolute left-2 sm:left-6 z-10 flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <!-- Image -->
          <figure
            class="flex flex-col items-center select-none"
            @touchstart.passive="onTouchStart"
            @touchend.passive="onTouchEnd"
          >
            <img
              :src="current.src"
              :alt="current.alt"
              class="max-w-[88vw] max-h-[78vh] object-contain rounded-xl shadow-2xl bg-white"
            />
            <figcaption v-if="current.alt" class="mt-4 text-sm text-zinc-300 text-center">{{ current.alt }}</figcaption>
          </figure>

          <!-- Next -->
          <button
            v-if="images.length > 1"
            type="button"
            @click.stop="next"
            aria-label="Další obrázek"
            class="absolute right-2 sm:right-6 z-10 flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>

          <!-- Counter -->
          <div v-if="images.length > 1" class="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-medium text-white/80 bg-white/10 rounded-full px-4 py-1.5">
            {{ index + 1 }} / {{ images.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const isOpen = ref(false)
const index = ref(0)
const current = computed(() => props.images[index.value])

const open = (i) => {
  index.value = i
  isOpen.value = true
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
}

const close = () => {
  isOpen.value = false
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
}

const next = () => {
  index.value = (index.value + 1) % props.images.length
}

const prev = () => {
  index.value = (index.value - 1 + props.images.length) % props.images.length
}

const onKeydown = (e) => {
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') next()
  else if (e.key === 'ArrowLeft') prev()
}

// Touch swipe (mobile)
let touchStartX = 0
const onTouchStart = (e) => { touchStartX = e.changedTouches[0].screenX }
const onTouchEnd = (e) => {
  const delta = e.changedTouches[0].screenX - touchStartX
  if (Math.abs(delta) > 50) {
    if (delta < 0) next()
    else prev()
  }
}

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.lb-fade-enter-active,
.lb-fade-leave-active {
  transition: opacity 0.25s ease;
}
.lb-fade-enter-from,
.lb-fade-leave-to {
  opacity: 0;
}
</style>
