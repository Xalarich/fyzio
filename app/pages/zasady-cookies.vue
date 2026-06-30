<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero -->
    <section class="relative bg-zinc-900 py-16 sm:py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-zinc-900/90 to-zinc-900"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Zásady používání cookies
        </h1>
        <div class="mt-6 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Content -->
    <section class="bg-zinc-100 py-12 sm:py-20 flex-1">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-zinc-200 p-6 sm:p-10 space-y-6 text-zinc-600 leading-relaxed">
          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">Co jsou cookies</h2>
            <p>
              Cookies jsou malé textové soubory, které se ukládají ve vašem prohlížeči při
              návštěvě webových stránek. Slouží k zajištění funkčnosti webu a k anonymnímu
              měření návštěvnosti.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">Jaké cookies používáme</h2>
            <ul class="list-disc pl-5 space-y-2">
              <li>
                <strong class="text-zinc-800">Nezbytné cookies</strong> – potřebné pro základní
                provoz webu (např. zapamatování vaší volby ohledně cookies). Tyto cookies jsou
                aktivní vždy.
              </li>
              <li>
                <strong class="text-zinc-800">Mapy / vložený obsah</strong> – načtení vložené
                mapy Mapy.cz na stránce Kontakt. Aktivuje se pouze s vaším souhlasem a může
                ukládat cookies třetí strany.
              </li>
              <li>
                <strong class="text-zinc-800">Statistické cookies (Google Analytics 4)</strong> –
                pomáhají nám anonymně sledovat, jak je web používán, abychom ho mohli vylepšovat.
                Aktivují se pouze s vaším souhlasem.
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">Vaše volba</h2>
            <p class="mb-4">
              Svůj souhlas se statistickými cookies můžete kdykoli změnit (podrobné nastavení
              všech kategorií najdete přes odkaz „Nastavení cookies“ v patičce).
              Aktuální stav statistických cookies: <strong class="text-zinc-800">{{ statusLabel }}</strong>
            </p>
            <div class="flex flex-wrap gap-3">
              <button
                type="button"
                class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors duration-300"
                @click="accept"
              >
                Povolit statistické cookies
              </button>
              <button
                type="button"
                class="px-5 py-2.5 rounded-xl border border-zinc-300 text-zinc-700 font-semibold hover:bg-zinc-100 transition-colors duration-300"
                @click="decline"
              >
                Odmítnout statistické cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Uses the category-based consent (useCookieConsent.ts). The buttons here toggle
// just the "analytics" category; the maps category is left untouched (save() is
// partial). Full per-category control lives in the cookie banner / footer link.
const { decided, has, save, hydrate } = useCookieConsent()

const statusLabel = computed(() => {
  if (!decided.value) return 'zatím nerozhodnuto'
  return has('analytics') ? 'povoleno' : 'odmítnuto'
})

const accept = () => save({ analytics: true })
const decline = () => save({ analytics: false })

onMounted(hydrate)

useSeoMeta({
  title: 'Zásady používání cookies | Fyzioterapie Marek Cón',
  description: 'Informace o tom, jaké soubory cookies tento web používá a jak můžete spravovat svůj souhlas.',
  robots: 'noindex, follow'
})
</script>
