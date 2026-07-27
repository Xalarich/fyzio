/**
 * Schema.org JSON-LD for the practice, injected via useHead().
 *
 * Call it from the pages where a search engine expects the business entity —
 * the homepage and the contact page — not site-wide, so article pages stay
 * free to carry their own Article markup later.
 *
 * Everything here is taken from what the site already states publicly
 * (footer / kontakt.vue / the legal pages). Two fields Google likes are
 * deliberately ABSENT because nothing in the repo establishes them and
 * inventing them for a healthcare practice would be worse than omitting them:
 *   - openingHoursSpecification (no hours published anywhere on the site)
 *   - geo (exact lat/lng of the ordinace)
 * Add both once confirmed with the practice — they measurably help local SEO.
 */
export function useBusinessSchema() {
  const { siteUrl } = useRuntimeConfig().public

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Physiotherapy',
    '@id': `${siteUrl}/#ordinace`,
    name: 'Fyzioterapie Marek Cón',
    description:
      'Sportovní fyzioterapie a RTP (return to play) protokol v Praze. Individuální terapie, manuální techniky a řízený návrat k výkonu.',
    url: `${siteUrl}/`,
    image: `${siteUrl}/og-image.jpg`,
    telephone: '+420602479648',
    email: 'marek.con77@gmail.com',
    medicalSpecialty: 'Physiotherapy',
    // Ordinace (where patients actually come), which is NOT the same as the
    // registered sídlo listed on the legal pages — see CLAUDE.md.
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Budějovická 1126/9',
      addressLocality: 'Praha 4-Michle',
      postalCode: '140 00',
      addressCountry: 'CZ',
    },
    areaServed: {
      '@type': 'City',
      name: 'Praha',
    },
    founder: {
      '@type': 'Person',
      name: 'Bc. Marek Cón',
      jobTitle: 'Fyzioterapeut',
    },
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'IČO',
      value: '47281821',
    },
    currenciesAccepted: 'CZK',
    paymentAccepted: 'Hotově, Kartou',
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema),
      },
    ],
  })
}
