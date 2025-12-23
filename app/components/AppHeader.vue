<template>
  <header class="w-full bg-white/95 backdrop-blur-md text-zinc-800 shadow-sm border-b border-zinc-200 sticky top-0 z-50 transition-all duration-300">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="group flex items-center gap-2 text-2xl font-bold tracking-wider">
            <span class="bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:to-indigo-800 transition-all duration-300">MAREK&nbsp;CÓN</span>
          </NuxtLink>
        </div>

        <nav class="hidden md:flex items-center space-x-8">
          <div class="relative group">
            <button
              class="flex items-center gap-1.5 text-base font-medium text-zinc-700 hover:text-indigo-600 transition-colors duration-300 ease-in-out focus:outline-none py-2"
            >
              <span>Služby</span>
              <svg
                class="w-4 h-4 text-zinc-400 group-hover:text-indigo-600 transition-all duration-300 group-hover:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            
            <div
              class="absolute top-full -left-4 mt-2 w-64 bg-white border border-zinc-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 overflow-hidden"
            >
              <div class="p-2">
                <NuxtLink to="/sluzby/fyzioterapie-dospelych" class="group/item flex items-center gap-3 px-4 py-3 text-sm text-zinc-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full group-hover/item:scale-125 transition-transform"></span>
                  Ambulantní fyzioterapie
                </NuxtLink>
                <NuxtLink to="/sluzby/prevence-ergonomie" class="group/item flex items-center gap-3 px-4 py-3 text-sm text-zinc-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full group-hover/item:scale-125 transition-transform"></span>
                  Fyzioterapie pro firmy
                </NuxtLink>
              </div>
            </div>
          </div>  

          <NuxtLink to="/blogs" class="text-base font-medium text-zinc-700 hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all after:duration-300">Blog</NuxtLink>
          <NuxtLink to="/about" class="text-base font-medium text-zinc-700 hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all after:duration-300">O nás</NuxtLink>
          <NuxtLink to="/kontakt" class="group bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white font-bold py-2.5 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2">
            Kontaktujte nás
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </NuxtLink>
        </nav>

        <div class="md:hidden flex items-center">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="inline-flex items-center justify-center p-2 rounded-lg text-zinc-600 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none transition-colors duration-200">
            <span class="sr-only">Otevřít hlavní menu</span>
            <svg v-show="!isMobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-show="isMobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-show="isMobileMenuOpen" class="md:hidden bg-white border-t border-zinc-200 shadow-xl">
        <div class="px-4 pt-4 pb-6 space-y-2">
          <div class="pb-2 mb-2 border-b border-zinc-100">
            <h3 class="text-xs font-bold text-zinc-400 uppercase tracking-wider px-3 mb-2">Služby</h3>
            <NuxtLink to="/sluzby/fyzioterapie-dospelych" @click="isMobileMenuOpen = false" class="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">Ambulantní fyzioterapie</NuxtLink>
            <NuxtLink to="/sluzby/prevence-ergonomie" @click="isMobileMenuOpen = false" class="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">Fyzioterapie pro firmy</NuxtLink>
          </div>
          <NuxtLink to="/blogs" @click="isMobileMenuOpen = false" class="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">Blog</NuxtLink>
          <NuxtLink to="/about" @click="isMobileMenuOpen = false" class="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">O nás</NuxtLink>
          <NuxtLink to="/kontakt" @click="isMobileMenuOpen = false" class="block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-4 rounded-xl transition-colors">Kontaktujte nás</NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>
