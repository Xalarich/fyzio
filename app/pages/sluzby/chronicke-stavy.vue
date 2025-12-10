<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Hero Section -->
    <section class="relative bg-zinc-900 py-28 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-zinc-900/90 to-zinc-900"></div>
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-indigo-400 font-semibold tracking-widest uppercase">Služby</p>
        <h1 class="mt-4 text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
          Chronické stavy
        </h1>
        <div class="mt-6 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Main content: Image left, text right -->
        <div class="grid gap-12 lg:grid-cols-2 items-center group">
          <div class="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/fyzio-dospelych/2.jpg"
              alt="Chronické stavy - terapie"
              class="w-full h-96 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <article>
            <p class="text-zinc-700 leading-relaxed text-lg">
              Zabýváme se diagnostikou a terapií chronických bolestivých stavů pohybového aparátu.
            </p>
            <p class="mt-6 text-zinc-700 leading-relaxed text-lg">
              Chronické stavy se vyznačují bolestí či dyskomfortem trvajícím zpravidla déle než 3 měsíce. V mnoha případech jde i o vracející se potíže, zde je důležité odhalit vyvolávající faktor bolesti.
            </p>
            <p class="mt-6 text-zinc-700 leading-relaxed text-lg">
              Obecnou příčinou často bývá přetěžování pohybové soustavy, nesprávné hybné stereotypy, vadné držení těla, ale i poúrazové stavy.
            </p>
          </article>
        </div>

      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-indigo-600 py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-extrabold text-white">
          Máte zájem o naše služby?
        </h2>
        <p class="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
          Neváhejte nás kontaktovat a společně najdeme řešení vašich potíží.
        </p>
        <div class="mt-8">
          <NuxtLink
            to="/kontakt"
            class="inline-block bg-white hover:bg-zinc-100 text-indigo-700 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Kontaktujte nás
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Chronické stavy',
  description: 'Diagnostika a terapie chronických bolestivých stavů pohybového aparátu. Řešíme bolesti trvající déle než 3 měsíce.'
})
</script>
