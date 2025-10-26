<template>
    <!-- insert contacts here -->
    <section class="bg-zinc-200 py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-base font-semibold text-indigo-600 tracking-wider uppercase">Kontakt</h2>
                <p class="mt-2 text-3xl font-extrabold text-zinc-900 tracking-tight sm:text-4xl">
                    Jsme tu pro vás
                </p>
            </div>
            <div class="mt-12 w-full flex flex-col gap-8 md:flex-row justify-center items-center">
                <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-100">
                    <h3 class="text-xl font-bold text-zinc-900">Adresa ordinace</h3>
                    <p class="mt-2 text-zinc-600">
                        Budějovická 1126/9,<br />
                        Praha 4-Michle
                    </p>
                </div>
                <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-100">
                    <h3 class="text-xl font-bold text-zinc-900">Kontaktujte nás</h3>
                    <p class="mt-2">
                        <a href="tel:+420602479648" class="text-indigo-600 font-semibold hover:underline">+420 602 479 648</a><br />
                        <a href="mailto:marekcon@seznam.cz" class="text-indigo-600 font-semibold hover:underline">marekcon@seznam.cz</a>
                    </p>
                </div>
            </div>
        </div>

    </section>
    <section class="bg-zinc-200 py-20 flex justify-center items-center pt-3 pb-40">
        <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 min-w-200">
            <h3 class="text-xl font-bold text-zinc-900">Napište nám</h3>
            <form class="mt-4 space-y-4" @submit.prevent="submit">
                <div>
                    <label class="block text-sm font-medium text-zinc-700">Celé jméno*</label>
                    <input v-model="form.name" required type="text" class="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-zinc-700">E-mail*</label>
                    <input v-model="form.email" required type="email" class="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-zinc-700">Telefonní číslo*</label>
                    <input v-model="form.phone" required type="tel" class="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-zinc-700">Vaše zpráva*</label>
                    <textarea v-model="form.message" required rows="8" class="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                </div>
                <div class="flex justify-end items-center">
                    <button :disabled="loading" type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl shadow-indigo-600 disabled:opacity-60 text-white font-semibold py-2 rounded-md transition-colors max-w-40">
                        {{ loading ? 'Odesílám…' : 'Odeslat zprávu' }}
                    </button>
                </div>
                <p v-if="success" class="text-green-600 text-sm">Děkujeme, zpráva byla úspěšně odeslána.</p>
                <p v-if="error" class="text-red-600 text-sm">Omlouváme se, nepodařilo se odeslat zprávu. Zkuste to prosím později.</p>
            </form>
        </div>
    </section>
    <div>
        <iframe style="border:none;width: 100%;height: auto;min-height: 500px;" src="https://frame.mapy.cz/s/mobunosopa" frameborder="0"></iframe>
    </div>
</template>
<script setup>
import { useSeoMeta } from 'nuxt/app'
import { reactive, ref } from 'vue'
useSeoMeta({
  title: 'Kontakt',
  description: 'Kontaktujte nás pro více informací o našich službách.'
})

const form = reactive({ name: '', email: '', phone: '', message: '' })
const loading = ref(false)
const success = ref(false)
const error = ref(false)

async function submit() {
  success.value = false
  error.value = false
  loading.value = true
  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form },
    })
    if (res && res.ok) {
      success.value = true
      form.name = ''
      form.email = ''
      form.phone = ''
      form.message = ''
    } else {
      error.value = true
    }
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>