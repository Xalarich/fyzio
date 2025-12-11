<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Hero Section -->
    <section class="relative bg-zinc-900 py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-zinc-900/90 to-zinc-900"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-indigo-400 font-semibold tracking-widest uppercase animate-fade-in">Služby</p>
        <h1 class="mt-4 text-4xl lg:text-6xl font-extrabold text-white tracking-tight animate-slide-up">
          Akutní stavy
        </h1>
        <div class="mt-6 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Main content: Image left, text right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center group">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/images/fyzio-dospelych/4.jpg"
              alt="Akutní stavy - terapie"
              class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <article class="animate-fade-in-right">
            <p class="text-zinc-600 leading-relaxed text-lg">
              Na naší fyzioterapii řešíme akutní bolestivé stavy pohybového aparátu.
            </p>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              Mezi nejčastější potíže, se kterými pacienti přicházejí, jsou blokády páteře, žeber, náhlé svalové spazmy, bolesti kloubů, svalů a to jak po úrazech, tak bez zjevné vnější příčiny.
            </p>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              U těchto diagnóz je důležité včasné vyšetření a následné zvolení vhodné terapie a režimových opatření.
            </p>
            
            <!-- Key points -->
            <div class="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
              <h3 class="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Nejčastější potíže</h3>
              <ul class="space-y-3">
                <li class="group/item flex items-center text-zinc-600">
                  <span class="w-3 h-3 bg-indigo-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></span>
                  Blokády páteře a žeber
                </li>
                <li class="group/item flex items-center text-zinc-600">
                  <span class="w-3 h-3 bg-indigo-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></span>
                  Náhlé svalové spazmy
                </li>
                <li class="group/item flex items-center text-zinc-600">
                  <span class="w-3 h-3 bg-indigo-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></span>
                  Bolesti kloubů a svalů
                </li>
                <li class="group/item flex items-center text-zinc-600">
                  <span class="w-3 h-3 bg-indigo-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></span>
                  Poúrazové stavy
                </li>
              </ul>
            </div>
          </article>
        </div>

      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative bg-indigo-600 py-20 overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-extrabold text-white">
          Máte zájem o naše služby?
        </h2>
        <p class="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
          Neváhejte nás kontaktovat a společně najdeme řešení vašich potíží.
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
  title: 'Akutní stavy | Fyzioterapie Marek Cón',
  description: 'Řešíme akutní bolestivé stavy pohybového aparátu - blokády páteře, žeber, svalové spazmy, bolesti kloubů a svalů.',
  ogTitle: 'Akutní stavy | Fyzioterapie Marek Cón',
  ogDescription: 'Řešíme akutní bolestivé stavy pohybového aparátu - blokády páteře, žeber, svalové spazmy, bolesti kloubů a svalů.',
  ogType: 'website',
  ogLocale: 'cs_CZ',
  ogSiteName: 'Fyzioterapie Marek Cón',
  twitterCard: 'summary',
  twitterTitle: 'Akutní stavy | Fyzioterapie Marek Cón',
  twitterDescription: 'Řešíme akutní bolestivé stavy pohybového aparátu - blokády páteře, žeber, svalové spazmy.'
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

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out;
}
</style>
