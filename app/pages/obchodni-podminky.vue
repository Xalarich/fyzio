<template>
  <!--
    Identifikace doplněna z ARES (Bc. Marek Cón, IČO 47281821, OSVČ).
    Storno lhůta (24 h), storno poplatek (100 %) a způsob platby (hotově/kartou)
    jsou obvyklé hodnoty — uprav podle reálné praxe. Nejde o právní poradenství.
  -->
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Hero -->
    <section class="relative bg-zinc-900 py-20 sm:py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-zinc-900/90 to-zinc-900"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-indigo-400 font-semibold tracking-widest uppercase">Podmínky</p>
        <h1 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Obchodní podmínky
        </h1>
        <div class="mt-6 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-12 sm:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-zinc-600 leading-relaxed space-y-6">
          <p class="text-sm text-zinc-500">Poslední aktualizace: 22. 6. 2026</p>

          <h2 class="text-2xl font-bold text-zinc-900 pt-4">1. Úvodní ustanovení</h2>
          <p>
            Tyto obchodní podmínky upravují poskytování fyzioterapeutických služeb
            poskytovatelem <strong>Bc. Marek Cón</strong>, IČO: <strong>47281821</strong>,
            se sídlem Prusíkova 2402/8, Stodůlky, 155 00 Praha 5, s ordinací na adrese
            Budějovická 1126/9, Praha 4-Michle (dále jen „poskytovatel"),
            a vztahy mezi poskytovatelem a klientem.
          </p>

          <h2 class="text-2xl font-bold text-zinc-900 pt-4">2. Objednání a rezervace termínu</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Termín lze sjednat telefonicky na čísle +420&nbsp;602&nbsp;479&nbsp;648 nebo e-mailem na marek.con77@gmail.com.</li>
            <li>Rezervace je závazná po jejím potvrzení poskytovatelem.</li>
            <li>Klient je povinen dostavit se na sjednaný termín včas.</li>
          </ul>

          <h2 class="text-2xl font-bold text-zinc-900 pt-4">3. Ceny a platební podmínky</h2>
          <p>
            Aktuální ceny služeb jsou uvedeny v ceníku na stránce
            <NuxtLink to="/kontakt" class="text-indigo-600 hover:text-indigo-700">Kontakt</NuxtLink>.
            Platba probíhá v hotovosti nebo platební kartou po poskytnutí služby,
            není-li dohodnuto jinak.
          </p>

          <h2 class="text-2xl font-bold text-zinc-900 pt-4">4. Storno podmínky</h2>
          <p>
            Sjednaný termín je možné bezplatně zrušit nejpozději 24 hodin před jeho začátkem.
            Při pozdějším zrušení nebo nedostavení se může poskytovatel účtovat
            až 100 % ceny rezervovaného termínu.
          </p>

          <h2 class="text-2xl font-bold text-zinc-900 pt-4">5. Práva a povinnosti klienta</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Klient pravdivě informuje poskytovatele o svém zdravotním stavu v rozsahu nezbytném pro bezpečné poskytnutí péče.</li>
            <li>Klient dodržuje pokyny poskytovatele v průběhu terapie.</li>
          </ul>

          <h2 class="text-2xl font-bold text-zinc-900 pt-4">6. Reklamace</h2>
          <p>
            Případné výhrady ke kvalitě poskytnutých služeb může klient uplatnit bez zbytečného
            odkladu na e-mailu
            <a href="mailto:marek.con77@gmail.com" class="text-indigo-600 hover:text-indigo-700">marek.con77@gmail.com</a>.
          </p>

          <h2 class="text-2xl font-bold text-zinc-900 pt-4">7. Ochrana osobních údajů</h2>
          <p>
            Zpracování osobních údajů se řídí samostatným dokumentem
            <NuxtLink to="/ochrana-udaju" class="text-indigo-600 hover:text-indigo-700">Ochrana osobních údajů</NuxtLink>.
          </p>

          <h2 class="text-2xl font-bold text-zinc-900 pt-4">8. Závěrečná ustanovení</h2>
          <p>
            Tyto obchodní podmínky nabývají účinnosti dnem jejich zveřejnění. Poskytovatel si
            vyhrazuje právo je v přiměřeném rozsahu měnit.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Obchodní podmínky | Fyzioterapie Marek Cón',
  description: 'Obchodní podmínky poskytování fyzioterapeutických služeb praxe Marek Cón.',
  ogTitle: 'Obchodní podmínky | Fyzioterapie Marek Cón',
  ogDescription: 'Obchodní podmínky poskytování fyzioterapeutických služeb.',
  ogType: 'website',
  ogLocale: 'cs_CZ',
  ogSiteName: 'Fyzioterapie Marek Cón',
})
</script>
