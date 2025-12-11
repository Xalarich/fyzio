<template>
  <div class="min-h-screen flex flex-col">
    <section class="p-0">
      <ClientOnly>
        <HeroSlider />
      </ClientOnly>
    </section>

    <section class="bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10">
          <div class="text-center lg:text-left animate-fade-in">
            <h1 class="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight">
              Vraťte se do pohybu.
              <span class="block text-indigo-600 mt-2">Bez omezení.</span>
            </h1>
            <p class="mt-6 text-lg text-zinc-600 max-w-xl mx-auto lg:mx-0">
              Jsme rodina zkušených fyzioterapeutů, kteří vám pomocí moderních technik a individuálního přístupu pomohou zbavit se bolesti a dosáhnout vašich cílů. Specializujeme se na individuální přístup a dlouhodobé výsledky.
            </p>
            <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/kontakt" class="group bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25">
                Objednat se na konzultaci
                <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a href="#nase-sluzby" class="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 hover:shadow-lg">
                Naše služby
              </a>
            </div>
          </div>
          
          <div class="hidden lg:block animate-slide-in-right">
            <div class="relative group overflow-hidden rounded-2xl shadow-2xl w-fit">
              <video 
                      src="/videos/blogs/internal-rotation.mp4" 
                      controls 
                      autoplay 
                      loop 
                      class="max-h-200 rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="nase-sluzby" class="bg-zinc-50 py-12 sm:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center animate-fade-in">
          <h2 class="text-base font-semibold text-indigo-600 tracking-wider uppercase">Co nabízíme</h2>
          <p class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight sm:text-4xl">
            Komplexní péče o vaše tělo
          </p>
        </div>
        <div class="mt-8 sm:mt-12 grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink to="/sluzby/fyzioterapie-dospelych" class="group bg-white p-5 sm:p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-indigo-100 transform hover:-translate-y-2 block">
            <div class="flex-shrink-0 w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
              <svg class="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <h3 class="mt-6 text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors duration-300">Fyzioterapie pro dospělé</h3>
            <p class="mt-3 text-base text-zinc-600">Komplexní vyšetření pohybového aparátu, včetně anamnézy se zaměřením na potíže, se kterými klient přichází.</p>
          </NuxtLink>
          <NuxtLink to="/sluzby/chronicke-stavy" class="group bg-white p-5 sm:p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-indigo-100 transform hover:-translate-y-2 block">
            <div class="flex-shrink-0 w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
              <svg class="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 class="mt-6 text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors duration-300">Chronické stavy</h3>
            <p class="mt-3 text-base text-zinc-600">Zabýváme se diagnostikou a terapií chronických bolestivých stavů pohybového aparátu.</p>
          </NuxtLink>
          <NuxtLink to="/sluzby/akutni-stavy" class="group bg-white p-5 sm:p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-indigo-100 transform hover:-translate-y-2 block">
            <div class="flex-shrink-0 w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
              <svg class="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 class="mt-6 text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors duration-300">Akutní stavy</h3>
            <p class="mt-3 text-base text-zinc-600">Na naší fyzioterapii řešíme akutní bolestivé stavy pohybového aparátu.</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-white py-12 sm:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div class="order-last lg:order-first">
            <div class="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img src="/images/fyzio-dospelych/1.jpg" alt="Naše moderní klinika" class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-900/30 to-transparent"></div>
            </div>
          </div>
          <div class="max-w-xl">
            <h2 class="text-base font-semibold text-indigo-600 tracking-wider uppercase">Naše filozofie</h2>
            <p class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight sm:text-4xl">Péče, které můžete věřit</p>
            <dl class="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              <div class="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-indigo-50">
                <div class="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <dt class="font-bold text-zinc-900 text-lg group-hover:text-indigo-600 transition-colors">Moderní vybavení a techniky</dt>
                  <dd class="mt-1 text-zinc-600">Využíváme nejnovější diagnostické a terapeutické přístroje pro vaši rychlou úlevu.</dd>
                </div>
              </div>
              <div class="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-indigo-50">
                <div class="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <dt class="font-bold text-zinc-900 text-lg group-hover:text-indigo-600 transition-colors">Zkušení a certifikovaní terapeuti</dt>
                  <dd class="mt-1 text-zinc-600">Náš tým se neustále vzdělává, abychom vám mohli nabídnout tu nejlepší péči.</dd>
                </div>
              </div>
              <div class="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-indigo-50">
                <div class="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <dt class="font-bold text-zinc-900 text-lg group-hover:text-indigo-600 transition-colors">Důraz na dlouhodobé výsledky</dt>
                  <dd class="mt-1 text-zinc-600">Neléčíme jen symptomy, ale hledáme příčinu vašich potíží a učíme vás, jak jim předcházet.</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-zinc-800 py-12 sm:py-20 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Co o nás říkají naši klienti
          </h2>
          <div class="mt-2 w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>
        <div class="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          <blockquote class="group bg-zinc-900 p-5 sm:p-8 rounded-2xl border border-zinc-700 hover:border-indigo-500 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 transform hover:-translate-y-1">
            <div class="flex items-center gap-1 mb-4">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
            <p class="text-zinc-300 italic">"K panu Markovi jsem přišel pro bolest krční páteře a hlavy. Nyní jsem už zhruba dva roky jeho klientem a troufám si říci, že mi za tu dobu hodně pomohl."</p>
            <footer class="mt-6 flex items-center gap-3">
              <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">Z</div>
              <span class="font-bold text-white">Zdeněk</span>
            </footer>
          </blockquote>
          <blockquote class="group bg-zinc-900 p-5 sm:p-8 rounded-2xl border border-zinc-700 hover:border-indigo-500 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 transform hover:-translate-y-1">
            <div class="flex items-center gap-1 mb-4">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
            <p class="text-zinc-300 italic">"Pan Cón je velmi milý a ochotný, při jakémkoliv problému se pokouší vyjít vstříc s termínem vyšetření a vždy se snažít přijít na důvod vašich obtíží. Vždy mi pomohl, jeho péči můžu všem vřele doporučit."</p>
            <footer class="mt-6 flex items-center gap-3">
              <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">R</div>
              <span class="font-bold text-white">Renata</span>
            </footer>
          </blockquote>
          <blockquote class="group bg-zinc-900 p-5 sm:p-8 rounded-2xl border border-zinc-700 hover:border-indigo-500 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 transform hover:-translate-y-1">
            <div class="flex items-center gap-1 mb-4">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
            <p class="text-zinc-300 italic">"K Markovi Cónovi chodím již léta. Má velmi profesionální a lidský přístup. Trpím chronickými bolestmi v bedrech způsobených sedavým zaměstnáním. Návštěvy u něj mi velmi pomáhají."</p>
            <footer class="mt-6 flex items-center gap-3">
              <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">M</div>
              <span class="font-bold text-white">Monika</span>
            </footer>
          </blockquote>
          <blockquote class="group bg-zinc-900 p-5 sm:p-8 rounded-2xl border border-zinc-700 hover:border-indigo-500 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 transform hover:-translate-y-1">
            <div class="flex items-center gap-1 mb-4">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
            <p class="text-zinc-300 italic">"Po úrazu ramene jsem obešla spoustu zařízení. Myslím že p. Cón je odborník a léčba, která mi zde byla poskytnuta, je založena na zkušenostech a profesionálním přístupu."</p>
            <footer class="mt-6 flex items-center gap-3">
              <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">K</div>
              <span class="font-bold text-white">Kateřina</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <section class="bg-white py-12 sm:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative py-10 px-5 sm:py-16 sm:px-8 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl sm:rounded-3xl text-center overflow-hidden shadow-2xl">
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          <div class="relative">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Jste připraveni udělat první krok ke zdraví?
            </h2>
            <p class="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
              Neodkládejte úlevu od bolesti. Objednejte se na vstupní konzultaci a společně najdeme řešení vašich potíží.
            </p>
            <div class="mt-8">
              <a href="/kontakt" class="group inline-flex items-center bg-white hover:bg-zinc-50 text-indigo-700 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
                Chci se objednat
                <svg class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Fyzioterapie Marek Cón | Rehabilitace Praha',
  description: 'Moderní fyzioterapie v centru Prahy. Pomůžeme vám zbavit se bolesti zad, kloubů i svalů. Specializujeme se na individuální přístup a dlouhodobé výsledky.',
  ogTitle: 'Fyzioterapie Marek Cón | Rehabilitace Praha',
  ogDescription: 'Moderní fyzioterapie v centru Prahy. Pomůžeme vám zbavit se bolesti zad, kloubů i svalů. Specializujeme se na individuální přístup a dlouhodobé výsledky.',
  ogType: 'website',
  ogLocale: 'cs_CZ',
  ogSiteName: 'Fyzioterapie Marek Cón',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Fyzioterapie Marek Cón | Rehabilitace Praha',
  twitterDescription: 'Moderní fyzioterapie v centru Prahy. Pomůžeme vám zbavit se bolesti zad, kloubů i svalů.'
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out 0.2s both;
}
</style>
