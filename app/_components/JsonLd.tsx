import { site } from "../_lib/site";

const data = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "@id": `${site.url}/#kasadi`,
  name: site.name,
  url: site.url,
  image: `${site.url}/opengraph-image`,
  logo: `${site.url}/apple-icon.png`,
  description: site.description,
  telephone: site.phoneE164,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Presidente Epitácio",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Presidente Epitácio" },
    { "@type": "City", name: "Presidente Venceslau" },
    { "@type": "City", name: "Presidente Prudente" },
  ],
  sameAs: [site.instagram, site.facebook, site.pinterest],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Móveis sob medida",
      description: "Projeto, fabricação e instalação de móveis em metalon e MDF para residências e comércio.",
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: site.phoneE164,
    url: `https://wa.me/${site.whatsapp}`,
    availableLanguage: "pt-BR",
  },
};

export const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);
