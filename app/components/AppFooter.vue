<template>
  <footer class="bg-zinc-900 text-zinc-300 w-full">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-6 sm:pb-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
        
        <!-- Brand -->
        <div class="md:col-span-2 lg:col-span-1">
          <NuxtLink to="/" class="inline-block text-2xl font-bold tracking-wider">
            <span class="bg-gradient-to-r from-indigo-400 to-indigo-500 bg-clip-text text-transparent">MAREK&nbsp;CÓN</span>
          </NuxtLink>
          <p class="mt-4 text-sm text-zinc-400 leading-relaxed">
            Pomáháme vám na cestě ke zdravému pohybu a životu bez bolesti.
          </p>
          <ul class="mt-6 space-y-4 text-sm list-none">
            <li>
              <a 
                href="https://www.google.com/maps/place/Bud%C4%9Bjovick%C3%A1+1126%2F9,+140+00+Praha+4-Michle" 
                target="_blank" 
                class="group flex items-start gap-3 hover:text-indigo-400 transition-colors duration-300"
              >
                <svg class="h-5 w-5 mt-0.5 flex-shrink-0 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                <span class="group-hover:underline">Budějovická 1126/9, Praha 4-Michle</span>
              </a>
            </li>
            <li>
              <a href="tel:+420602479648" class="group flex items-center gap-3 hover:text-indigo-400 transition-colors duration-300">
                <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span class="group-hover:underline">+420 602 479 648</span>
              </a>
            </li>
            <li>
              <a href="mailto:marek.con77@gmail.com" class="group flex items-center gap-3 hover:text-indigo-400 transition-colors duration-300">
                <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span class="group-hover:underline">marek.con77@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-sm font-bold tracking-wider text-white uppercase">Služby</h3>
          <ul class="mt-4 space-y-3 list-none">
            <li>
              <NuxtLink to="/sluzby/fyzioterapie-dospelych" class="group flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors duration-300">
                <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform"></span>
                Ambulantní fyzioterapie
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sluzby/prevence-ergonomie" class="group flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors duration-300">
                <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform"></span>
                Fyzioterapie pro firmy
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-bold tracking-wider text-white uppercase">Rychlé odkazy</h3>
          <ul class="mt-4 space-y-3 list-none">
            <li>
              <NuxtLink to="/clanky" class="group flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors duration-300">
                <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform"></span>
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/o-nas" class="group flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors duration-300">
                <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform"></span>
                O nás
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/kontakt" class="group flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors duration-300">
                <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform"></span>
                Kontakt
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Social -->
        <div>
          <h3 class="text-sm font-bold tracking-wider text-white uppercase">Sledujte nás</h3>
          <div class="flex mt-4 gap-3">
            <a 
              href="https://www.instagram.com/marekcon_fyzio/" 
              target="_blank" 
              class="w-10 h-10 bg-zinc-800 hover:bg-indigo-600 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <span class="sr-only">Instagram</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.75-9.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clip-rule="evenodd" /></svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/marek-cón-966a09292/" 
              target="_blank" 
              class="w-10 h-10 bg-zinc-800 hover:bg-indigo-600 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <span class="sr-only">LinkedIn</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
          
          <!-- CTA -->
          <div class="mt-8">
            <NuxtLink 
              to="/kontakt" 
              class="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white font-semibold py-3 px-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Objednat se
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-zinc-800 flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
        <p class="text-sm text-zinc-500">
          &copy; {{ new Date().getFullYear() }} Fyzioterapie Marek Cón. Všechna práva vyhrazena.
        </p>
        <div class="flex items-center gap-6 text-sm">
          <NuxtLink to="/obchodni-podminky" class="text-zinc-400 hover:text-indigo-400 transition-colors duration-300">Obchodní podmínky</NuxtLink>
          <NuxtLink to="/ochrana-udaju" class="text-zinc-400 hover:text-indigo-400 transition-colors duration-300">Ochrana údajů</NuxtLink>
          <NuxtLink to="/zasady-cookies" class="text-zinc-400 hover:text-indigo-400 transition-colors duration-300">Cookies</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
