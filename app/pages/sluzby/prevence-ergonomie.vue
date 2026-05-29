<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Hero Section -->
    <section class="relative bg-zinc-900 py-28 overflow-hidden">
      <img src="/images/prevence-ergonomie/hero.jpg" alt="Fyzioterapie a cvičení" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-zinc-900/90 to-zinc-900/95"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-indigo-400 font-semibold tracking-widest uppercase animate-fade-in">Prevence a ergonomie</p>
        <h1 class="mt-4 text-4xl lg:text-6xl font-extrabold text-white tracking-tight animate-slide-up">
          Fyzioterapie pro firmy
        </h1>
        <div class="mt-6 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 animate-fade-in">
            Zdravější zaměstnanci, vyšší produktivita
          </h2>
          <p class="mt-8 text-xl text-zinc-600 leading-relaxed">
            Dlouhodobě se věnujeme pracovnímu zdraví a prevenci. Nabízíme fyzioterapii přímo na pracovišti, pořádáme praktické workshopy i přednášky, které propojují zdraví těla i duše. Spolupracujeme s renomovanými firmami a pomáháme jejich zaměstnancům k lepší kondici, menší nemocnosti a větší spokojenosti.
          </p>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="py-20 bg-zinc-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <p class="text-indigo-600 font-semibold tracking-widest uppercase">Co nabízíme</p>
          <h2 class="mt-4 text-3xl lg:text-4xl font-bold text-zinc-900">Naše programy</h2>
        </div>

        <div class="space-y-24">

          <!-- Program 1: Fyzioterapie na pracovišti -->
          <div class="grid gap-12 lg:grid-cols-2 items-center group">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
              <img src="/images/prevence-ergonomie/mobilizace.jpg" alt="Fyzioterapie na pracovišti – individuální terapie" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <article class="animate-fade-in-right">
              <h3 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Fyzioterapie na pracovišti</h3>
              <ul class="mt-6 space-y-4">
                <li class="flex items-start gap-3 text-zinc-600 text-lg">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  Profesionální fyzioterapeut přímo ve vaší firmě.
                </li>
                <li class="flex items-start gap-3 text-zinc-600 text-lg">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  Stačí vyčlenit malý prostor – potřebné vybavení zajistíme my.
                </li>
                <li class="flex items-start gap-3 text-zinc-600 text-lg">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  Zaměstnanci mají možnost docházet v domluvených časech na individuální terapii.
                </li>
              </ul>
              <div class="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <h4 class="font-bold text-indigo-700 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Proč to funguje?
                </h4>
                <p class="mt-2 text-zinc-600">
                  Pravidelná péče pomáhá předcházet bolestem zad, krční páteře i dalším obtížím spojeným s kancelářskou prací. Zaměstnanci se cítí lépe, méně chybí a jsou produktivnější.
                </p>
              </div>
            </article>
          </div>

          <!-- Program 2: Workshop pracovní ergonomie -->
          <div class="grid gap-12 lg:grid-cols-2 items-center group">
            <article class="order-2 lg:order-1 animate-fade-in-left">
              <h3 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Workshop pracovní ergonomie</h3>
              <ul class="mt-6 space-y-4">
                <li class="flex items-start gap-3 text-zinc-600 text-lg">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  Praktické ukázky nastavení pracovního místa.
                </li>
                <li class="flex items-start gap-3 text-zinc-600 text-lg">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  Jednoduché cviky a pozice k uvolnění svalů a prevenci zranění.
                </li>
                <li class="flex items-start gap-3 text-zinc-600 text-lg">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  Možnost pravidelných krátkých cvičebních jednotek pro celý tým.
                </li>
              </ul>
              <div class="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <h4 class="font-bold text-indigo-700 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Proč to funguje?
                </h4>
                <p class="mt-2 text-zinc-600">
                  Účastníci odcházejí s konkrétními tipy, které mohou ihned využít. Správná ergonomie a krátká cvičení zlepšují soustředění, snižují únavu a přinášejí dlouhodobé benefity pro zdraví.
                </p>
              </div>
            </article>
            <div class="relative overflow-hidden rounded-2xl shadow-2xl order-1 lg:order-2 aspect-[4/3]">
              <img src="/images/prevence-ergonomie/sportovni-fyzio.jpg" alt="Workshop pracovní ergonomie – praktická cvičení" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          <!-- Program 3: Přednáška Tělo a duše -->
          <div class="grid gap-12 lg:grid-cols-2 items-center group">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
              <img src="/images/prevence-ergonomie/manualni-techniky.jpg" alt="Přednáška Tělo a duše – manuální techniky" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <article class="animate-fade-in-right">
              <h3 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Přednáška „Tělo a duše"</h3>
              <ul class="mt-6 space-y-4">
                <li class="flex items-start gap-3 text-zinc-600 text-lg">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  Teoretické východisko o ergonomii sedu a dopadech dlouhodobého sezení.
                </li>
                <li class="flex items-start gap-3 text-zinc-600 text-lg">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  Vztah mezi fyzickým zdravím a psychickou pohodou.
                </li>
                <li class="flex items-start gap-3 text-zinc-600 text-lg">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  Konkrétní tipy, jak předcházet přetížení a jak efektivně kompenzovat.
                </li>
              </ul>
              <div class="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                <h4 class="font-bold text-indigo-700 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Proč to funguje?
                </h4>
                <p class="mt-2 text-zinc-600">
                  Přednáška zvyšuje povědomí zaměstnanců o vlastním zdraví a motivuje je k drobným, ale účinným změnám v každodenním životě.
                </p>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>

    <!-- Why Cooperate Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <p class="text-indigo-600 font-semibold tracking-widest uppercase">Výhody spolupráce</p>
          <h2 class="mt-4 text-3xl lg:text-4xl font-bold text-zinc-900">Proč spolupracovat s námi?</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="group p-8 bg-gradient-to-br from-zinc-50 to-indigo-50 rounded-2xl border border-zinc-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300">
            <div class="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mb-3">Zkušený tým</h3>
            <p class="text-zinc-600 leading-relaxed">Zkušený tým fyzioterapeutů se znalostí pracovního prostředí.</p>
          </div>

          <div class="group p-8 bg-gradient-to-br from-zinc-50 to-emerald-50 rounded-2xl border border-zinc-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
            <div class="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mb-3">Flexibilní přístup</h3>
            <p class="text-zinc-600 leading-relaxed">Přizpůsobíme se velikosti a potřebám vaší firmy.</p>
          </div>

          <div class="group p-8 bg-gradient-to-br from-zinc-50 to-amber-50 rounded-2xl border border-zinc-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300">
            <div class="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mb-3">Okamžitý i dlouhodobý užitek</h3>
            <p class="text-zinc-600 leading-relaxed">Zaměstnanci získají okamžitý užitek i dlouhodobou prevenci.</p>
          </div>

          <div class="group p-8 bg-gradient-to-br from-zinc-50 to-rose-50 rounded-2xl border border-zinc-200 hover:border-rose-300 hover:shadow-xl transition-all duration-300">
            <div class="w-14 h-14 bg-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 mb-3">Investice do budoucnosti</h3>
            <p class="text-zinc-600 leading-relaxed">Vy jako zaměstnavatel investujete do zdraví lidí, loajality i výkonu.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Companies Section -->
    <section class="py-20 bg-zinc-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <p class="text-indigo-600 font-semibold tracking-widest uppercase">Reference</p>
          <h2 class="mt-4 text-3xl lg:text-4xl font-bold text-zinc-900">Firmy se kterými spolupracujeme</h2>
        </div>

        <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          <div class="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 hover:border-indigo-200">
            <img src="/images/companies/trw.png" alt="TRW" class="h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
          </div>
          <div class="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 hover:border-indigo-200">
            <img src="/images/companies/aon.svg" alt="AON" class="h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
          </div>
          <div class="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 hover:border-indigo-200">
            <img src="/images/companies/devro.webp" alt="Devro" class="h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
          </div>
          <div class="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 hover:border-indigo-200">
            <img src="/images/companies/actavis.png" alt="Actavis" class="h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
          </div>
          <div class="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 hover:border-indigo-200">
            <img src="/images/companies/mark-wrigley.png" alt="Mark Wrigley" class="h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>

    <!-- Seminars Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <p class="text-indigo-600 font-semibold tracking-widest uppercase">Workshopy a přednášky</p>
          <h2 class="mt-4 text-3xl lg:text-4xl font-bold text-zinc-900">Ergonomické semináře</h2>
        </div>

        <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          <div class="group p-6 bg-zinc-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 hover:border-indigo-200">
            <img src="/images/seminare-firmy/IBM.png" alt="IBM" class="h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
          </div>
          <div class="group p-6 bg-zinc-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 hover:border-indigo-200">
            <img src="/images/seminare-firmy/moneta.png" alt="Moneta" class="h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
          </div>
          <div class="group p-6 bg-zinc-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 hover:border-indigo-200">
            <img src="/images/seminare-firmy/daf.png" alt="DAF" class="h-12 lg:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative bg-indigo-600 py-20 overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-extrabold text-white">
          Zajímá vás spolupráce pro vaši firmu?
        </h2>
        <p class="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
          Rádi vám připravíme nabídku na míru. Kontaktujte nás a společně najdeme řešení pro zdraví vašich zaměstnanců.
        </p>
        <div class="mt-8">
          <NuxtLink
            to="/kontakt"
            class="group inline-flex items-center bg-white hover:bg-zinc-50 text-indigo-700 font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Kontaktujte nás
            <svg class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Prevence a ergonomie | Fyzioterapie Marek Cón',
  description: 'Fyzioterapie na pracovišti, workshopy ergonomie a přednášky pro firmy. Zdravější zaměstnanci, vyšší produktivita.',
  ogTitle: 'Prevence a ergonomie | Fyzioterapie Marek Cón',
  ogDescription: 'Nabízíme fyzioterapii přímo na pracovišti, praktické workshopy a přednášky pro zdraví vašich zaměstnanců.',
  ogType: 'website',
  ogLocale: 'cs_CZ',
  ogSiteName: 'Fyzioterapie Marek Cón',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Prevence a ergonomie | Fyzioterapie Marek Cón',
  twitterDescription: 'Nabízíme fyzioterapii přímo na pracovišti, praktické workshopy a přednášky pro zdraví vašich zaměstnanců.'
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out;
}
</style>

