export const site = {
  name: "Kasadi Móveis",
  city: "Presidente Epitácio, SP",
  phoneDisplay: "(18) 99774-5420",
  whatsapp: "5518997745420",
  instagram: "https://www.instagram.com/kasadimoveis/",
  facebook: "https://www.facebook.com/KasadiMoveis/",
  pinterest: "https://br.pinterest.com/kasadioficial/",
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
