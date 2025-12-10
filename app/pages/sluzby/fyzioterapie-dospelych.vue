<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Hero Section -->
    <section class="relative bg-zinc-900 py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-zinc-900/90 to-zinc-900"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-indigo-400 font-semibold tracking-widest uppercase animate-fade-in">Služby</p>
        <h1 class="mt-4 text-4xl lg:text-6xl font-extrabold text-white tracking-tight animate-slide-up">
          Fyzioterapie dospělých
        </h1>
        <div class="mt-6 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        <!-- Fyzioterapeutické vyšetření: Image 1.jpg left, text right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center group">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
            <img
              src="/images/fyzio-dospelych/1.jpg"
              alt="Fyzioterapeutické vyšetření"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <article class="animate-fade-in-right">
            <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Fyzioterapeutické vyšetření</h2>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              Komplexní vyšetření pohybového aparátu, včetně anamnézy se zaměřením na potíže, se kterými klient přichází. Na základě vstupního vyšetření je stanoven krátkodobý plán fyzioterapie.
            </p>
          </article>
        </div>

        <!-- Mobilizační techniky: Text left, Image 2.jpg right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center group">
          <article class="order-2 lg:order-1 animate-fade-in-left">
            <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Mobilizační techniky a techniky měkkých tkání</h2>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              Mobilizace se týkají všech pohyblivých struktur těla, nejde tedy pouze o kloubní struktury, ale i o měkké tkáně, fascie a vnitřní orgány. Nejčastěji se ale opravdu mobilizují klouby a to hlavně páteře a končetin. Takzvané blokády bývají velmi často spojeny se spoušťovými body (trigger point), ty omezují pohyblivost a současně působí bolest. Správně cílenou terapií dochází k odstranění blokád a odeznění bolesti.
            </p>
          </article>
          <div class="relative overflow-hidden rounded-2xl shadow-2xl order-1 lg:order-2 aspect-[4/3]">
            <img
              src="/images/fyzio-dospelych/2.jpg"
              alt="Mobilizační techniky"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <!-- Spiraldynamik: No image, styled card -->
        <div class="group bg-gradient-to-r from-zinc-50 to-indigo-50 rounded-3xl p-10 lg:p-14 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-500">
          <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Spiraldynamik®</h2>
          <p class="mt-6 text-zinc-600 leading-relaxed text-lg max-w-4xl">
            Koncept Spiraldynamik® vyžaduje důkladnou znalost pohybové kineziologie. Správné spirální nastavení kloubů je základním článkem lidské lokomoce a ekonomického řízení pohybu. Princip konceptu stojí na správném sešroubování trupu, hlavy a končetin. To terapaut provádí nejdříve pasivně a následně se snaží o pacientovo osvojí správného pohybového vzorce. Po úspěšném zvládnutí často dochází k úpravě pohybových potíží.
          </p>
        </div>

        <!-- Metoda McKenzie: Image 3.jpg left, text right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center group">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
            <img
              src="/images/fyzio-dospelych/3.jpg"
              alt="Metoda McKenzie"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <article class="animate-fade-in-right">
            <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Metoda McKenzie®</h2>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              McKenzie® se využívá jako terapeutický a diagnostický koncept. Často je terapie touto metodou úspěšná u pacientů trpících chronickými bolestmi zad déle než 3 měsíce. Koncept je narozdíl od jiných metod snadno aplikovatelný jako autoterapie, můžete ho cvičit ve volných chvílích a proaktivním přístupem přispět pozitivním výsledkům terapie.
            </p>
          </article>
        </div>

        <!-- Senzomotorická stimulace: No image, styled card -->
        <div class="group bg-gradient-to-r from-indigo-50 to-zinc-50 rounded-3xl p-10 lg:p-14 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-500">
          <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Senzomotorická stimulace</h2>
          <p class="mt-6 text-zinc-600 leading-relaxed text-lg max-w-4xl">
            Senzomotorická stimulace je metoda se stimulačním vlivem a osvědčuje se především při terapii nestabilních kolen a kotníků. Dále je vhodnou metodou pro úpravu plochonoží, při propadu příčné a podélné klenby.
          </p>
          <div class="mt-8">
            <h3 class="text-sm font-bold text-indigo-600 uppercase tracking-widest">Hlavní prvky</h3>
            <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li class="group/item flex items-center text-zinc-600 p-3 rounded-xl hover:bg-white transition-colors duration-300">
                <span class="w-3 h-3 bg-indigo-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></span>
                zlepšení koordinace
              </li>
              <li class="group/item flex items-center text-zinc-600 p-3 rounded-xl hover:bg-white transition-colors duration-300">
                <span class="w-3 h-3 bg-indigo-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></span>
                úprava chůze
              </li>
              <li class="group/item flex items-center text-zinc-600 p-3 rounded-xl hover:bg-white transition-colors duration-300">
                <span class="w-3 h-3 bg-indigo-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></span>
                tvorba nových pohybových programů
              </li>
              <li class="group/item flex items-center text-zinc-600 p-3 rounded-xl hover:bg-white transition-colors duration-300">
                <span class="w-3 h-3 bg-indigo-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></span>
                zlepšení držení těla
              </li>
            </ul>
          </div>
        </div>

        <!-- Cvičení dle Ludmily Mojžíšové: No image, styled card -->
        <div class="group bg-gradient-to-r from-zinc-50 to-indigo-50 rounded-3xl p-10 lg:p-14 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-500">
          <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Cvičení dle Ludmily Mojžíšové</h2>
          <p class="mt-6 text-zinc-600 leading-relaxed text-lg max-w-4xl">
            Metoda se zaměřuje na vertebrogenní obtíže a ženskou sterilitu. Bolesti páteře se pokouší odstranit šetrnými mobilizacemi páteře, žeber, kloubů a to v pozicích kdy dochází k uvolnění svalů zkrácených a protažení svalů oslabených. S tím se pojí omezení hybnosti jednotlivých segmentů páteře. Výhodou cvičení je nenáročnost jednotlivých cviků a široká možnost autoterapeutických modifikací. Důležitá je však četnost cvičení. Cviky by měly být prováděny denně.
          </p>
        </div>

        <!-- Kineziotapeing: Text left, Slider right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center">
          <article class="order-2 lg:order-1 animate-fade-in-left">
            <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Kineziotapeing</h2>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              Správnou aplikací tejpu dochází k aktivaci autoregulačních procesů organismu. Regulační změny mají za cíl odstranit patologické změny a obnovit funkčnost tkáně. Aplikací tejpu jsou osloveny kožní receptory, což je dosaženo zvrásněním dekompresí kůže. Dále dochází ke snížení městnání krve a lymfy, podpoře svalů pomocí regulace svalového tonu a v neposlední řádě k optimalizaci kloubní funkce díky stimulaci proprioreceptorů.
            </p>
          </article>
          <div class="order-1 lg:order-2">
            <ClientOnly>
              <ImageSlider :images="kineziotapeingImages" />
            </ClientOnly>
          </div>
        </div>

        <!-- Instruktáž: No image, styled card -->
        <div class="group bg-gradient-to-r from-indigo-50 to-zinc-50 rounded-3xl p-10 lg:p-14 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-500">
          <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Instruktáž správných pohybových stereotypů</h2>
          <p class="mt-6 text-zinc-600 leading-relaxed text-lg max-w-4xl">
            Nápravu správné ergonomie řízení pohybu provádím nejčastěji s lidmi, kteří mají sedavé zaměstnání. Dále u lidí s fyzicky monotónní prací, při které dochází k přetížení pohybové soustavy.
          </p>
        </div>

        <!-- Předoperační a pooperační stavy: Image 6.jpg left, text right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center group">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
            <img
              src="/images/fyzio-dospelych/6.jpg"
              alt="Předoperační a pooperační stavy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <article class="animate-fade-in-right">
            <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Předoperační a pooperační stavy</h2>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              Předoperační péče je příprava pacienta na daný výkon, ať už po fyzické nebo psychické stránce. Celkově přispívá lepšímu zvládání operačního výkonu a hlavně následné rekonvalescenci.
            </p>
            <p class="mt-4 text-zinc-600 leading-relaxed text-lg">
              V pooperační péči stojí v popředí obnovení funkčnosti pohybového systému. Patří sem péče o jizvu, uvolnění měkkých tkání, optimalizace svalového napětí, obnovení kloubních rozsahů pohybu a svalové síly. Dále se uplatňují prvky fyzikální terapie – chlad, teplo, elektroterapie, ultrazvuk. Cílem je návrat pacienta k běžným aktivitám a to v plném rozsahu.
            </p>
          </article>
        </div>

        <!-- Elektroterapie a ultrazvuk: Text left, Slider right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center">
          <article class="order-2 lg:order-1 animate-fade-in-left">
            <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Elektroterapie a ultrazvuk</h2>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              Na našem pracovišti aplikujeme jako součást terapie elektroléčbu a terapeutický ultrazvuk.
            </p>
            <p class="mt-4 text-zinc-600 leading-relaxed text-lg">
              Tyto procedury nejsou hrazeny zvlášť a jsou v ceně terapie.
            </p>
          </article>
          <div class="order-1 lg:order-2">
            <ClientOnly>
              <ImageSlider :images="elektroterapieImages" />
            </ClientOnly>
          </div>
        </div>

        <!-- Relaxační procedury: No image, styled card -->
        <div class="group bg-gradient-to-r from-zinc-50 to-indigo-50 rounded-3xl p-10 lg:p-14 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-indigo-200 transition-all duration-500">
          <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Relaxační procedury</h2>
          <ul class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li class="group/item flex items-center text-zinc-600 text-lg p-3 rounded-xl ">
              <span class="w-3 h-3 bg-indigo-500 rounded-full mr-4 "></span>
              Klasické relaxační masáže celkové nebo částečné
            </li>
            <li class="group/item flex items-center text-zinc-600 text-lg p-3 rounded-xl ">
              <span class="w-3 h-3 bg-indigo-500 rounded-full mr-4 "></span>
              Reflexní masáže
            </li> 
            <li class="group/item flex items-center text-zinc-600 text-lg p-3 rounded-xl ">
              <span class="w-3 h-3 bg-indigo-500 rounded-full mr-4 "></span>
              Baňkování
            </li>
            <li class="group/item flex items-center text-zinc-600 text-lg p-3 rounded-xl ">
              <span class="w-3 h-3 bg-indigo-500 rounded-full mr-4 "></span>
              Horká role
            </li>
          </ul>
        </div>

        <!-- Fyzioterapie sportovců: Image 9.jpg left, text right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center group">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
            <img
              src="/images/fyzio-dospelych/9.jpg"
              alt="Fyzioterapie sportovců"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <article class="animate-fade-in-right">
            <h2 class="text-3xl lg:text-4xl font-bold text-zinc-900 border-l-4 border-indigo-600 pl-4">Fyzioterapie sportovců</h2>
            <p class="mt-6 text-zinc-600 leading-relaxed text-lg">
              Přístup je volen individuálně dle specializace sportovce. Kompenzace jednostranné zátěže, zlepšení výkonu.
            </p>
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
  title: 'Fyzioterapie dospělých | Fyzioterapie Marek Cón',
  description: 'Vyšetření, mobilizační techniky, Spiraldynamik, McKenzie, senzomotorika, kineziotapeing a další procedury pro dospělé klienty.',
  ogTitle: 'Fyzioterapie dospělých | Fyzioterapie Marek Cón',
  ogDescription: 'Komplexní fyzioterapeutické služby pro dospělé. Vyšetření, mobilizační techniky, Spiraldynamik, McKenzie a další.',
  ogType: 'website',
  ogLocale: 'cs_CZ',
  ogSiteName: 'Fyzioterapie Marek Cón',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Fyzioterapie dospělých | Fyzioterapie Marek Cón',
  twitterDescription: 'Komplexní fyzioterapeutické služby pro dospělé. Vyšetření, mobilizační techniky, Spiraldynamik, McKenzie a další.'
})

const kineziotapeingImages = [
  { src: '/images/fyzio-dospelych/4.jpg', alt: 'Kineziotapeing' },
  { src: '/images/fyzio-dospelych/5.jpg', alt: 'Kineziotapeing aplikace' }
]

const elektroterapieImages = [
  { src: '/images/fyzio-dospelych/7.jpg', alt: 'Elektroterapie' },
  { src: '/images/fyzio-dospelych/8.jpg', alt: 'Ultrazvuk' }
]
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
