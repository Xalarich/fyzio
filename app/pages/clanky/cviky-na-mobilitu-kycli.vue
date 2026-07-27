<template>
  <div class="min-h-screen flex flex-col bg-zinc-50">
    <!-- Hero Section -->
    <section class="relative bg-zinc-900 py-20 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-zinc-900/90 to-zinc-900"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-block bg-indigo-500/20 text-indigo-300 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
          Pohybový aparát
        </span>
        <h1 class="text-3xl lg:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto animate-slide-up">
          Mobilita kyčlí a bolesti zad – 3 cviky pro zlepšení zdraví
        </h1>
        <div class="mt-8 flex items-center justify-center gap-6 text-zinc-300">
          <span class="flex items-center gap-2">
            <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            Marek Cón
          </span>
          <span class="text-zinc-500">•</span>
          <span class="flex items-center gap-2">
            <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            27. září 2021
          </span>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto -mt-12 lg:-mt-20 relative z-20">
        
        <article class="bg-white rounded-t-2xl shadow-2xl p-8 sm:p-12 prose prose-lg lg:prose-xl max-w-none text-zinc-600">
          <div class="flex flex-col md:flex-row gap-8 justify-start items-start">
            <div class="md:min-w-[50%] flex flex-col justify-start items-start gap-4">
              <p class="text-xl text-zinc-700 font-medium leading-relaxed">Kyčelní kloub je mnohem méně pohyblivý, než třeba kloub ramenní. Je to dáno nižší potřebou manipulace s dolní končetinou, přesto je jejich mobilita velmi důležitá. Omezený pohyb kyčelních kloubů nemá často daleko od bolestí bederní páteře.</p>
              <p class="leading-relaxed">Funkčně spolu tyto dvě oblasti souvisí a snížená hybnost kyčelních kloubů má za následek kompenzační hypermobilitu bederní páteře při každodenních aktivitách, což způsobuje v populaci tak časté bolesti zad.</p>
            </div>
            <div class="group overflow-hidden rounded-2xl shadow-xl md:max-w-[50%]">
              <img src="/images/blogs/panev.jpg" alt="Anatomická struktura kyčelního kloubu" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
            </div>
          </div>
          
          <hr class="my-12 border-zinc-200">

          <h2 class="text-3xl font-bold text-zinc-900 mb-6 mt-12">Anatomická struktura kyčelního kloubu</h2>
          <p class="md:min-w-[55%] leading-relaxed">Anatomická struktura kyčelního kloubu je dosti variabilní a předurčuje jakým směrem bude hybnosti zvýšená či snížená.</p>

          <div class="group bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-xl hover:shadow-lg transition-all duration-300">
            <div class="flex flex-col lg:flex-row justify-start items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-blue-800 mt-0 mb-2">
                  ZVÝŠENÁ ANTEVERZE kosti stehenní
                </h3>
                <p class="text-blue-700 m-0">Lidé s tímto typem mají držení ve vnitřní rotaci a bude jim dělat problém hluboký dřep.</p>
              </div>
            </div>
          </div>

          <div class="group bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-xl hover:shadow-lg transition-all duration-300">
            <div class="flex flex-col lg:flex-row justify-start items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-orange-800 mt-0 mb-2">
                  ZVÝŠENÁ RETROVERZE kosti stehenní
                </h3>
                <p class="text-orange-700 m-0">Při tomto typu převažuje zevní rotace a dotyčný nezvládne sed mezi patami.</p>
              </div>
            </div>
          </div>

          <hr class="my-12 border-zinc-200">

          <div class="max-w-[95vw] md:max-w-[80vw] flex justify-center mx-auto mt-8 px-4 lg:px-10">
            <div class="w-[800px] flex flex-row gap-4 lg:justify-between overflow-x-auto pb-4">
              <video 
                src="/videos/blogs/internal-rotation.mp4" 
                controls 
                autoplay 
                loop 
                muted
                class="max-h-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"/>
              <video 
                src="/videos/blogs/internal-rotation2.mp4" 
                controls 
                autoplay 
                loop 
                muted
                class="max-h-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"/>
              <video 
                src="/videos/blogs/standing-rotation.mp4" 
                controls 
                autoplay 
                loop 
                muted
                class="max-h-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"/>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-zinc-900 mb-6 mt-12">Proč je mobilita kyčlí důležitá?</h2>
          <p class="leading-relaxed">Dostatečná mobilita kyčelních kloubů je klíčová pro:</p>
          <ul class="space-y-3 marker:text-indigo-500">
            <li><strong class="text-zinc-800">Prevenci bolestí zad</strong> – snižuje kompenzační pohyby v bederní páteři</li>
            <li><strong class="text-zinc-800">Zlepšení držení těla</strong> – správné postavení pánve a páteře</li>
            <li><strong class="text-zinc-800">Funkční pohyby</strong> – dřep, chůze, běh, sedání a vstávání</li>
            <li><strong class="text-zinc-800">Sportovní výkon</strong> – lepší rozsah pohybu a síla</li>
            <li><strong class="text-zinc-800">Každodenní aktivity</strong> – snadnější pohyb v běžném životě</li>
          </ul>
        </article>
      </div>
    </div>

    <!-- CTA Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative py-16 px-8 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-3xl text-center overflow-hidden shadow-2xl">
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          <div class="relative">
            <h2 class="text-3xl lg:text-4xl font-extrabold text-white">
              Chcete se naučit správné techniky cvičení?
            </h2>
            <p class="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
              Objednejte se na konzultaci a naučte se cviky, které jsou vhodné právě pro vás. Individuální přístup zaručuje nejlepší výsledky.
            </p>
            <div class="mt-8">
              <NuxtLink to="/kontakt/" class="group inline-flex items-center bg-white hover:bg-zinc-50 text-indigo-700 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
                Chci se objednat
                <svg class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Mobilita kyčlí a bolesti zad – 3 cviky | Marek Cón',
  description: 'Omezená pohyblivost kyčelních kloubů často souvisí s bolestmi bederní páteře. Naučte se 3 účinné cviky na zlepšení mobility kyčlí.',
  ogTitle: 'Mobilita kyčlí a bolesti zad – 3 cviky pro zlepšení zdraví',
  ogDescription: 'Omezený pohyb kyčelních kloubů často souvisí s bolestmi bederní páteře. Naučte se 3 účinné cviky pro zlepšení mobility.',
  ogType: 'article',
  ogLocale: 'cs_CZ',
  ogSiteName: 'Fyzioterapie Marek Cón',
  ogImage: '/images/blogs/panev.jpg',
  articleAuthor: 'Marek Cón',
  articlePublishedTime: '2021-09-27',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Mobilita kyčlí a bolesti zad – 3 cviky',
  twitterDescription: 'Omezený pohyb kyčelních kloubů často souvisí s bolestmi bederní páteře. Naučte se 3 účinné cviky.'
})
</script>

<style scoped>
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}
</style>
