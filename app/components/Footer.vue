<template>
  <footer class="bg-zinc-900 text-zinc-300">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div class="md:col-span-2 lg:col-span-1">
          <a href="/" class="text-2xl font-bold tracking-wider text-white">
            FYZIO<span class="text-indigo-500">PRO</span>
          </a>
          <p class="mt-4 text-sm">
              {{ $t('footer.description') }}
          </p>
          <ul class="mt-6 space-y-4 text-sm">
            <li class="flex items-start">
              <svg class="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <a href="https://www.google.com/maps/place/Bud%C4%9Bjovick%C3%A1+1126%2F9,+140+00+Praha+4-Michle/@50.0471859,14.4461257,18.54z/data=!4m6!3m5!1s0x470b938b58a7d9c7:0xa80b3fe040fa6831!8m2!3d50.0472753!4d14.4459872!16s%2Fg%2F11cshp9q77?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="hover:text-indigo-400 transition-colors cursor-pointer">Budějovická 1126/9, Praha 4-Michle</a>
            </li>
            <li class="flex items-center">
              <svg class="h-5 w-5 mr-3 flex-shrink-0 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+420602479648" class="hover:text-indigo-400 transition-colors">+420 602 479 648</a>
            </li>
            <li class="flex items-center">
               <svg class="h-5 w-5 mr-3 flex-shrink-0 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:marekcon@seznam.cz" class="hover:text-indigo-400 transition-colors">marekcon@seznam.cz</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold tracking-wider text-white uppercase">{{ $t('navigation.services.title') }}</h3>
          <ul class="mt-4 space-y-3">
            <li><a href="/fyzioterapie/individualni" class="text-sm hover:text-indigo-400 transition-colors">{{ $t('navigation.services.individual-therapy') }}</a></li>
            <li><a href="/fyzioterapie/skupinova" class="text-sm hover:text-indigo-400 transition-colors">{{ $t('navigation.services.group-exercises') }}</a></li>
            <li><a href="/fyzioterapie/masaze" class="text-sm hover:text-indigo-400 transition-colors">{{ $t('navigation.services.sports-massages') }}</a></li>
            <li><a href="/fyzioterapie/prevence" class="text-sm hover:text-indigo-400 transition-colors">{{ $t('navigation.services.prevention') }}</a></li>
            <li><a href="/fyzioterapie/online" class="text-sm hover:text-indigo-400 transition-colors">{{ $t('navigation.services.online-consultations') }}</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold tracking-wider text-white uppercase">{{ $t('footer.quick-links') }}</h3>
          <ul class="mt-4 space-y-3">
            <li><a href="/blog" class="text-sm hover:text-indigo-400 transition-colors">{{ $t('navigation.blog') }}</a></li>
            <li><a href="/about" class="text-sm hover:text-indigo-400 transition-colors">{{ $t('navigation.about') }}</a></li>
            <li><a href="/kontakt" class="text-sm hover:text-indigo-400 transition-colors">{{ $t('navigation.contact') }}</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold tracking-wider text-white uppercase">{{ $t('footer.follow-us') }}</h3>
          <div class="flex mt-4 space-x-4">
            <a href="#" class="text-zinc-400 hover:text-indigo-400 transition-colors">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
            </a>
             <a href="#" class="text-zinc-400 hover:text-indigo-400 transition-colors">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.75-9.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clip-rule="evenodd" /></svg>
            </a>
             <a href="#" class="text-zinc-400 hover:text-indigo-400 transition-colors">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-zinc-800 flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
        <p class="text-sm text-zinc-500">
          &copy; {{ new Date().getFullYear() }} FyzioPro. {{ $t('footer.all-rights-reserved') }}
        </p>
        <div class="flex space-x-6 text-sm">
          <a href="/obchodni-podminky" class="text-zinc-400 hover:text-white transition-colors">{{ $t('footer.terms-and-conditions') }}</a>
          <a href="/ochrana-udaju" class="text-zinc-400 hover:text-white transition-colors">{{ $t('footer.privacy-policy') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
