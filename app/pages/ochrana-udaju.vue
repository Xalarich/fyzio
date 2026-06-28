<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero -->
    <section class="relative bg-zinc-900 py-16 sm:py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-zinc-900/90 to-zinc-900"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Ochrana osobních údajů
        </h1>
        <div class="mt-6 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Content -->
    <section class="bg-zinc-100 py-12 sm:py-20 flex-1">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-zinc-200 p-6 sm:p-10 space-y-6 text-zinc-600 leading-relaxed">
          <p class="text-sm text-zinc-500">
            Tyto zásady popisují, jak nakládáme s osobními údaji v souladu s nařízením (EU)
            2016/679 (GDPR).
          </p>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">1. Správce osobních údajů</h2>
            <p>
              Marek Cón, Budějovická 1126/9, 140 00 Praha 4-Michle<br />
              IČO: [DOPLNIT IČO]<br />
              E-mail: <a href="mailto:marek.con77@gmail.com" class="text-indigo-600 hover:underline">marek.con77@gmail.com</a><br />
              Telefon: <a href="tel:+420602479648" class="text-indigo-600 hover:underline">+420 602 479 648</a>
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">2. Jaké údaje zpracováváme</h2>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong class="text-zinc-800">Identifikační a kontaktní údaje</strong> – jméno, příjmení, telefon, e-mail (při objednání a komunikaci).</li>
              <li><strong class="text-zinc-800">Údaje o zdravotním stavu</strong> – v rozsahu nezbytném pro poskytnutí fyzioterapeutické péče (zvláštní kategorie údajů dle čl. 9 GDPR).</li>
              <li><strong class="text-zinc-800">Údaje z návštěvy webu</strong> – statistické cookies, pouze s vaším souhlasem (viz <NuxtLink to="/zasady-cookies" class="text-indigo-600 hover:underline">Zásady cookies</NuxtLink>).</li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">3. Účel a právní základ zpracování</h2>
            <ul class="list-disc pl-5 space-y-2">
              <li>Poskytování fyzioterapeutických služeb a vedení dokumentace – plnění smlouvy a poskytování zdravotní péče.</li>
              <li>Vyřízení objednání a vzájemná komunikace – plnění smlouvy, resp. oprávněný zájem.</li>
              <li>Plnění zákonných povinností (např. účetní a daňové předpisy).</li>
              <li>Statistika návštěvnosti webu – na základě vašeho souhlasu.</li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">4. Doba uchování</h2>
            <p>
              Osobní údaje uchováváme po dobu nezbytně nutnou k naplnění uvedených účelů a po dobu
              stanovenou právními předpisy (zejména v oblasti zdravotní dokumentace a účetnictví).
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">5. Předání údajů třetím stranám</h2>
            <p>
              Vaše údaje nepředáváme nikomu, kdo by k nim neměl mít přístup. Mohou být zpřístupněny
              pouze zpracovatelům, kteří nám pomáhají se zajištěním provozu (např. poskytovatel
              webhostingu nebo nástroje pro analýzu návštěvnosti), vždy v souladu s GDPR.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">6. Vaše práva</h2>
            <p class="mb-2">V souvislosti se zpracováním osobních údajů máte právo:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li>na přístup k údajům a jejich opravu,</li>
              <li>na výmaz („právo být zapomenut") a omezení zpracování,</li>
              <li>vznést námitku proti zpracování a odvolat udělený souhlas,</li>
              <li>na přenositelnost údajů,</li>
              <li>podat stížnost u Úřadu pro ochranu osobních údajů (<a href="https://www.uoou.cz" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">uoou.cz</a>).</li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">7. Kontakt</h2>
            <p>
              Pro uplatnění svých práv nebo s jakýmkoli dotazem nás kontaktujte na
              <a href="mailto:marek.con77@gmail.com" class="text-indigo-600 hover:underline">marek.con77@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Ochrana osobních údajů | Fyzioterapie Marek Cón',
  description: 'Zásady zpracování a ochrany osobních údajů (GDPR) ve fyzioterapeutické praxi Marek Cón.'
})
</script>
