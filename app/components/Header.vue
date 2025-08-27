<template>
  <header class="bg-white text-zinc-800 shadow-md border-b border-zinc-200 sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex-shrink-0 group">
          <a href="/" class="text-2xl font-bold tracking-wider text-zinc-800 group-hover:text-indigo-600 transition-colors duration-300 ease-in-out text-shadow-sm group-hover:text-shadow-lg">
            MAREK<span class="text-indigo-600 group-hover:text-zinc-800 transition-colors duration-300 ease-in-out text-shadow-sm group-hover:text-shadow-lg">CÓN</span>
          </a>
        </div>

        <nav class="hidden md:flex items-center space-x-10">
          <div class="relative group">
            <button
              class="flex items-center space-x-2 text-base font-medium text-zinc-700 hover:text-indigo-600 transition-colors duration-300 ease-in-out focus:outline-none rounded-md"
            >
              <span>{{ $t('navigation.services.title') }}</span>
              <svg
                class="w-5 h-5 text-zinc-500 group-hover:text-indigo-600 transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            
            <div
              class="absolute top-full -left-4 mt-3 w-64 bg-white border border-zinc-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2"
            >
              <div class="p-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a href="/fyzioterapie/individualni" class="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-indigo-600 rounded-md transition-colors duration-200">{{ $t('navigation.services.individual-therapy') }}</a>
                <a href="/fyzioterapie/skupinova" class="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-indigo-600 rounded-md transition-colors duration-200">{{ $t('navigation.services.group-exercises') }}</a>
                <a href="/fyzioterapie/masaze" class="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-indigo-600 rounded-md transition-colors duration-200">{{ $t('navigation.services.sports-massages') }}</a>
                <a href="/fyzioterapie/prevence" class="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-indigo-600 rounded-md transition-colors duration-200">{{ $t('navigation.services.prevention') }}</a>
                <a href="/fyzioterapie/online" class="block px-4 py-3 text-sm text-zinc-700 bg-zinc-100 hover:bg-zinc-200 hover:text-indigo-600 rounded-md transition-colors duration-200 mt-2">{{ $t('navigation.services.online-consultations') }}</a>
              </div>
            </div>
          </div>

          <a href="/blogs" class="text-base font-medium text-zinc-700 hover:text-indigo-600 transition-colors duration-300 ease-in-out">{{ $t('navigation.blog') }}</a>
          <a href="/about" class="text-base font-medium text-zinc-700 hover:text-indigo-600 transition-colors duration-300 ease-in-out">{{ $t('navigation.about') }}</a>
          <a href="/kontakt" class="bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white font-bold py-2 px-5 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">{{ $t('navigation.contact') }}</a>
        </nav>

        <div class="md:hidden flex items-center">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 hover:text-indigo-600 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">{{ $t('navigation.open-menu') }}</span>
            <svg v-show="!isMobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-show="isMobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-show="isMobileMenuOpen" class="md:hidden bg-white border-t border-zinc-200" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div class="px-3 pt-2 pb-1">
            <h3 class="text-sm font-semibold text-zinc-500 uppercase tracking-wider">{{ $t('navigation.services.title') }}</h3>
            <a href="/fyzioterapie/individualni" class="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-indigo-600 hover:bg-zinc-100">{{ $t('navigation.services.individual-therapy') }}</a>
            <a href="/fyzioterapie/skupinova" class="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-indigo-600 hover:bg-zinc-100">{{ $t('navigation.services.group-exercises') }}</a>
            <a href="/fyzioterapie/masaze" class="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-indigo-600 hover:bg-zinc-100">{{ $t('navigation.services.sports-massages') }}</a>
            <a href="/fyzioterapie/prevence" class="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-indigo-600 hover:bg-zinc-100">{{ $t('navigation.services.prevention') }}</a>
             <a href="/fyzioterapie/online" class="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-indigo-600 hover:bg-zinc-100">{{ $t('navigation.services.online-consultations') }}</a>
          </div>
          
          <a href="/blogs" class="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-indigo-600 hover:bg-zinc-100">{{ $t('navigation.blog') }}</a>
          <a href="/about" class="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-indigo-600 hover:bg-zinc-100">{{ $t('navigation.about') }}</a>
          <a href="/kontakt" class="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-indigo-600 hover:bg-zinc-100">{{ $t('navigation.contact') }}</a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>

<style scoped>
</style>