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

    <!-- Ceník -->
    <section class="bg-zinc-100 pb-12 sm:pb-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-8 sm:mb-12">
            <p class="text-indigo-600 font-semibold tracking-widest uppercase">Ceník</p>
            <h2 class="mt-3 text-3xl lg:text-4xl font-bold text-zinc-900">Naše služby</h2>
          </div>

          <div class="grid gap-4 sm:gap-6 md:grid-cols-3">
            <div class="group bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-zinc-200 hover:border-indigo-200 transform hover:-translate-y-1 flex flex-col">
              <h3 class="text-lg font-bold text-zinc-900">Individuální fyzioterapie</h3>
              <p class="mt-1 text-sm text-zinc-500">45–60 minut</p>
              <div class="mt-6 pt-6 border-t border-zinc-100 flex items-baseline gap-1">
                <span class="text-3xl sm:text-4xl font-extrabold text-indigo-600">1 000</span>
                <span class="text-lg font-semibold text-zinc-600">Kč</span>
              </div>
            </div>

            <div class="group bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-zinc-200 hover:border-indigo-200 transform hover:-translate-y-1 flex flex-col">
              <h3 class="text-lg font-bold text-zinc-900">Individuální fyzioterapie</h3>
              <p class="mt-1 text-sm text-zinc-500">25–30 minut</p>
              <div class="mt-6 pt-6 border-t border-zinc-100 flex items-baseline gap-1">
                <span class="text-3xl sm:text-4xl font-extrabold text-indigo-600">600</span>
                <span class="text-lg font-semibold text-zinc-600">Kč</span>
              </div>
            </div>

            <div class="group bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-indigo-200 hover:border-indigo-400 transform hover:-translate-y-1 flex flex-col relative">
              <span class="absolute -top-3 left-6 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">RTP protokol</span>
              <h3 class="text-lg font-bold text-zinc-900">Funkční trénink / RTP</h3>
              <p class="mt-1 text-sm text-zinc-500">5 jednotek</p>
              <div class="mt-6 pt-6 border-t border-zinc-100 flex items-baseline gap-1">
                <span class="text-3xl sm:text-4xl font-extrabold text-indigo-600">4 500</span>
                <span class="text-lg font-semibold text-zinc-600">Kč</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="bg-zinc-100 pb-12 sm:pb-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto">
          <div class="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl border border-zinc-200 text-center">
            <h3 class="text-2xl font-bold text-zinc-900 mb-2">Napište nebo zavolejte</h3>
            <p class="text-zinc-600 mb-8">Máte dotaz nebo se chcete objednat? Ozvěte se nám – rádi vám odpovíme.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:marek.con77@gmail.com?subject=Dotaz%20z%20webu"
                class="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/25"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Napsat e-mail
              </a>
              <a
                href="tel:+420602479648"
                class="inline-flex items-center justify-center gap-2 bg-white border-2 border-indigo-200 hover:border-indigo-400 text-indigo-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Zavolat +420 602 479 648
              </a>
            </div>
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
</script>
