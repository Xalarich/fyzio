<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="relative bg-zinc-900 py-16 sm:py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-zinc-900/90 to-zinc-900"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-indigo-400 font-semibold tracking-widest uppercase">Spojte se s námi</p>
        <h1 class="mt-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
          Kontakt
        </h1>
        <p class="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">
          Jsme tu pro vás. Neváhejte nás kontaktovat s jakýmkoli dotazem.
        </p>
        <div class="mt-6 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Contact Cards -->
    <section class="bg-zinc-100 py-12 sm:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-4 sm:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <div class="group bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-zinc-200 hover:border-indigo-200 transform hover:-translate-y-2">
            <div class="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
              <svg class="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mb-3">Adresa ordinace</h3>
            <p class="text-zinc-600 text-lg">
              Budějovická 1126/9,<br />
              Praha 4-Michle
            </p>
            <a 
              href="https://www.google.com/maps/place/Bud%C4%9Bjovick%C3%A1+1126%2F9,+140+00+Praha+4-Michle" 
              target="_blank"
              class="inline-flex items-center mt-4 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
            >
              Zobrazit na mapě
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
          <div class="group bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-zinc-200 hover:border-indigo-200 transform hover:-translate-y-2">
            <div class="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
              <svg class="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mb-3">Kontaktujte nás</h3>
            <div class="space-y-3">
              <a href="tel:+420602479648" class="flex items-center gap-3 text-lg text-zinc-600 hover:text-indigo-600 transition-colors group/link">
                <span class="font-semibold text-indigo-600">+420 602 479 648</span>
              </a>
              <a href="mailto:marek.con77@gmail.com" class="flex items-center gap-3 text-lg text-zinc-600 hover:text-indigo-600 transition-colors group/link">
                <span class="font-semibold text-indigo-600">marek.con77@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="bg-zinc-100 pb-12 sm:pb-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto">
          <div class="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl border border-zinc-200">
            <h3 class="text-2xl font-bold text-zinc-900 mb-2">Napište nám</h3>
            <p class="text-zinc-600 mb-8">Rádi vám odpovíme na vaše dotazy.</p>
            <form class="space-y-4 sm:space-y-6" @submit.prevent="submit">
              <div>
                <label class="block text-sm font-semibold text-zinc-700 mb-2">Celé jméno *</label>
                <input 
                  v-model="form.name" 
                  required 
                  type="text" 
                  class="block w-full rounded-xl border border-zinc-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 hover:border-zinc-400" 
                  placeholder="Jan Novák"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-zinc-700 mb-2">E-mail *</label>
                <input 
                  v-model="form.email" 
                  required 
                  type="email" 
                  class="block w-full rounded-xl border border-zinc-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 hover:border-zinc-400" 
                  placeholder="jan@email.cz"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-zinc-700 mb-2">Telefonní číslo *</label>
                <input 
                  v-model="form.phone" 
                  required 
                  type="tel" 
                  class="block w-full rounded-xl border border-zinc-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 hover:border-zinc-400" 
                  placeholder="+420 123 456 789"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-zinc-700 mb-2">Vaše zpráva *</label>
                <textarea 
                  v-model="form.message" 
                  required 
                  rows="6" 
                  class="block w-full rounded-xl border border-zinc-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 hover:border-zinc-400 resize-none"
                  placeholder="Popište vaše potíže nebo dotaz..."
                ></textarea>
              </div>
              <div>
                <button 
                  :disabled="loading" 
                  type="submit" 
                  class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
                >
                  <svg v-if="loading" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ loading ? 'Odesílám...' : 'Odeslat zprávu' }}
                </button>
              </div>
              <transition
                enter-active-class="transition ease-out duration-300"
                enter-from-class="opacity-0 transform -translate-y-2"
                enter-to-class="opacity-100 transform translate-y-0"
                leave-active-class="transition ease-in duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div v-if="success" class="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <p class="text-green-700 font-medium">Děkujeme, zpráva byla úspěšně odeslána!</p>
                </div>
              </transition>
              <transition
                enter-active-class="transition ease-out duration-300"
                enter-from-class="opacity-0 transform -translate-y-2"
                enter-to-class="opacity-100 transform translate-y-0"
                leave-active-class="transition ease-in duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div v-if="error" class="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <svg class="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <p class="text-red-700 font-medium">Omlouváme se, nepodařilo se odeslat zprávu. Zkuste to prosím později.</p>
                </div>
              </transition>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="w-full">
      <iframe 
        class="w-full h-[350px] sm:h-[500px] grayscale hover:grayscale-0 transition-all duration-700" 
        src="https://frame.mapy.cz/s/mobunosopa" 
        frameborder="0"
      ></iframe>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

useSeoMeta({
  title: 'Kontakt | Fyzioterapie Marek Cón',
  description: 'Kontaktujte nás pro více informací o našich službách. Budějovická 1126/9, Praha 4-Michle. Tel: +420 602 479 648.',
  ogTitle: 'Kontakt | Fyzioterapie Marek Cón',
  ogDescription: 'Kontaktujte nás pro více informací o našich službách. Budějovická 1126/9, Praha 4-Michle.',
  ogType: 'website',
  ogLocale: 'cs_CZ',
  ogSiteName: 'Fyzioterapie Marek Cón',
  twitterCard: 'summary',
  twitterTitle: 'Kontakt | Fyzioterapie Marek Cón',
  twitterDescription: 'Kontaktujte nás pro více informací o našich službách. Budějovická 1126/9, Praha 4-Michle.'
})

const form = reactive({ name: '', email: '', phone: '', message: '' })
const loading = ref(false)
const success = ref(false)
const error = ref(false)

async function submit() {
  success.value = false
  error.value = false
  loading.value = true
  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form },
    })
    if (res && res.ok) {
      success.value = true
      form.name = ''
      form.email = ''
      form.phone = ''
      form.message = ''
    } else {
      error.value = true
    }
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>
