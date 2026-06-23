<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-6"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-6"
  >
    <div
      v-if="visible"
      class="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4 pointer-events-none"
      role="dialog"
      aria-modal="false"
      aria-label="Nastavení cookies"
    >
      <div class="pointer-events-auto mx-auto max-w-3xl rounded-2xl bg-zinc-900 text-zinc-300 shadow-2xl ring-1 ring-white/10 p-5 sm:p-6">

        <!-- Compact banner -->
        <template v-if="!showSettings">
          <h2 class="text-base font-bold text-white">Používáme cookies</h2>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">
            Tento web používá technicky nezbytné cookies pro svůj provoz a volitelně cookies
            vloženého obsahu (mapa Mapy.cz). Více v
            <NuxtLink to="/ochrana-udaju" class="text-indigo-400 underline hover:text-indigo-300">zásadách ochrany osobních údajů</NuxtLink>.
          </p>
          <div class="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-3">
            <button type="button" @click="openSettingsPanel" class="order-3 sm:order-1 text-sm font-semibold text-zinc-300 hover:text-white underline-offset-4 hover:underline px-2 py-2.5">
              Nastavení
            </button>
            <button type="button" @click="rejectAll" class="order-2 inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors">
              Odmítnout
            </button>
            <button type="button" @click="acceptAll" class="order-1 sm:order-3 inline-flex items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors">
              Přijmout vše
            </button>
          </div>
        </template>

        <!-- Settings panel -->
        <template v-else>
          <div class="flex items-start justify-between gap-4">
            <h2 class="text-base font-bold text-white">Nastavení cookies</h2>
            <button type="button" @click="closeSettings" aria-label="Zavřít" class="text-zinc-400 hover:text-white -mt-1">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div class="mt-4 space-y-3">
            <!-- Necessary (always on) -->
            <div class="flex items-start justify-between gap-4 rounded-xl bg-white/5 p-4">
              <div>
                <p class="text-sm font-semibold text-white">Nezbytné</p>
                <p class="mt-1 text-xs text-zinc-400">Potřebné pro provoz webu (ukládají jen vaši volbu cookies). Nelze vypnout.</p>
              </div>
              <span class="mt-0.5 inline-flex shrink-0 items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-semibold text-indigo-300">Vždy aktivní</span>
            </div>

            <!-- Maps (optional) -->
            <label class="flex items-start justify-between gap-4 rounded-xl bg-white/5 p-4 cursor-pointer">
              <div>
                <p class="text-sm font-semibold text-white">Mapy / vložený obsah</p>
                <p class="mt-1 text-xs text-zinc-400">Načtení vložené mapy Mapy.cz na stránce Kontakt. Může ukládat cookies třetí strany.</p>
              </div>
              <span class="relative mt-0.5 inline-flex shrink-0">
                <input v-model="mapsChoice" type="checkbox" class="peer sr-only" />
                <span class="h-6 w-11 rounded-full bg-zinc-600 peer-checked:bg-indigo-600 transition-colors"></span>
                <span class="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-5"></span>
              </span>
            </label>
          </div>

          <div class="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-3">
            <button type="button" @click="rejectAll" class="order-3 sm:order-1 text-sm font-semibold text-zinc-300 hover:text-white underline-offset-4 hover:underline px-2 py-2.5">
              Odmítnout vše
            </button>
            <button type="button" @click="acceptAll" class="order-2 inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors">
              Přijmout vše
            </button>
            <button type="button" @click="saveChoice" class="order-1 sm:order-3 inline-flex items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors">
              Uložit volbu
            </button>
          </div>
        </template>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const { consent, decided, showSettings, hydrate, acceptAll, rejectAll, save } = useCookieConsent()

const visible = computed(() => !decided.value || showSettings.value)

// Local toggle state for the settings panel, synced from saved consent.
const mapsChoice = ref(consent.value.maps)

const openSettingsPanel = () => {
  mapsChoice.value = consent.value.maps
  showSettings.value = true
}
const closeSettings = () => { showSettings.value = false }
const saveChoice = () => save({ maps: mapsChoice.value })

// Keep the toggle in sync whenever the panel is (re)opened (e.g. from the footer link).
watch(showSettings, (open) => {
  if (open) mapsChoice.value = consent.value.maps
})

onMounted(() => {
  hydrate()
  mapsChoice.value = consent.value.maps
})
</script>
