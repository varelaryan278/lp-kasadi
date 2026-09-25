export const site = {
  name: "Kasadi Móveis",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kasadimoveis.com.br",
  title: "Kasadi Móveis | Móveis sob medida em Presidente Epitácio",
  description:
    "Projetos personalizados em metalon e MDF para casa e comércio. Fabricação própria, entrega e instalação em Presidente Epitácio e região. Peça seu orçamento pelo WhatsApp.",
  city: "Presidente Epitácio, SP",
  phoneDisplay: "(18) 99774-5420",
  phoneE164: "+5518997745420",
  whatsapp: "5518997745420",
  instagram: "https://www.instagram.com/kasadimoveis/",
  facebook: "https://www.facebook.com/KasadiMoveis/",
  pinterest: "https://br.pinterest.com/kasadioficial/",
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
