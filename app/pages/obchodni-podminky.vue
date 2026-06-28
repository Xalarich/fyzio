<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero -->
    <section class="relative bg-zinc-900 py-16 sm:py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-zinc-900/90 to-zinc-900"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Obchodní podmínky
        </h1>
        <div class="mt-6 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Content -->
    <section class="bg-zinc-100 py-12 sm:py-20 flex-1">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-zinc-200 p-6 sm:p-10 space-y-6 text-zinc-600 leading-relaxed">
          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">1. Poskytovatel</h2>
            <p>
              Marek Cón, Budějovická 1126/9, 140 00 Praha 4-Michle<br />
              IČO: [DOPLNIT IČO]<br />
              E-mail: <a href="mailto:marek.con77@gmail.com" class="text-indigo-600 hover:underline">marek.con77@gmail.com</a><br />
              Telefon: <a href="tel:+420602479648" class="text-indigo-600 hover:underline">+420 602 479 648</a>
            </p>
            <p class="mt-2">
              Tyto podmínky upravují poskytování fyzioterapeutických služeb a vztah mezi
              poskytovatelem a klientem.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">2. Objednání</h2>
            <p>
              Termín lze sjednat telefonicky na <a href="tel:+420602479648" class="text-indigo-600 hover:underline">+420 602 479 648</a>
              nebo e-mailem na <a href="mailto:marek.con77@gmail.com" class="text-indigo-600 hover:underline">marek.con77@gmail.com</a>.
              Objednání je závazné po vzájemném potvrzení termínu.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">3. Ceny a platba</h2>
            <p>
              Aktuální ceník služeb je uveden na stránce
              <NuxtLink to="/kontakt" class="text-indigo-600 hover:underline">Kontakt</NuxtLink>.
              Cena za poskytnutou službu je splatná po jejím poskytnutí, není-li dohodnuto jinak.
              Způsob úhrady: [DOPLNIT – hotově / převodem / kartou].
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">4. Storno podmínky</h2>
            <p>
              Sjednaný termín je možné bezplatně zrušit nejpozději [DOPLNIT – např. 24 hodin]
              před jeho začátkem. Při pozdějším zrušení nebo nedostavení se bez omluvy může být
              účtován storno poplatek ve výši [DOPLNIT – např. 100 % ceny ošetření].
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">5. Průběh ošetření</h2>
            <p>
              Klient je povinen poskytnout pravdivé informace o svém zdravotním stavu, které jsou
              nezbytné pro bezpečné a účinné poskytnutí péče. Poskytovatel může ošetření odmítnout
              nebo přerušit, pokud by jeho provedení bylo v rozporu s odbornými či zdravotními důvody.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">6. Ochrana osobních údajů</h2>
            <p>
              Zpracování osobních údajů se řídí samostatným dokumentem
              <NuxtLink to="/ochrana-udaju" class="text-indigo-600 hover:underline">Ochrana osobních údajů</NuxtLink>.
            </p>
          </div>

          <div>
            <h2 class="text-xl font-bold text-zinc-900 mb-2">7. Závěrečná ustanovení</h2>
            <p>
              Tyto podmínky nabývají účinnosti dnem zveřejnění. Poskytovatel si vyhrazuje právo
              je v přiměřeném rozsahu měnit; aktuální znění je vždy dostupné na těchto stránkách.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Obchodní podmínky | Fyzioterapie Marek Cón',
  description: 'Obchodní podmínky poskytování fyzioterapeutických služeb – objednání, ceny, storno podmínky.'
})
</script>
