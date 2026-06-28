<template>
  <transition
    enter-active-class="transition ease-out duration-500"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-if="consent === null"
      class="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4"
      role="dialog"
      aria-live="polite"
      aria-label="Souhlas s cookies"
    >
      <div class="container mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl border border-zinc-200 p-5 sm:p-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="text-sm text-zinc-600 leading-relaxed">
            <h2 class="text-base font-bold text-zinc-900 mb-1">Používáme cookies</h2>
            <p>
              K analýze návštěvnosti používáme soubory cookies. Statistické cookies (Google
              Analytics) zapneme jen s vaším souhlasem.
              <NuxtLink to="/zasady-cookies" class="text-indigo-600 font-semibold hover:underline">
                Více informací
              </NuxtLink>
            </p>
          </div>
          <div class="flex flex-shrink-0 gap-3">
            <button
              type="button"
              class="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-zinc-300 text-zinc-700 font-semibold hover:bg-zinc-100 transition-colors duration-300"
              @click="decline"
            >
              Odmítnout
            </button>
            <button
              type="button"
              class="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors duration-300"
              @click="accept"
            >
              Přijmout vše
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const { consent, accept, decline } = useCookieConsent()
</script>
