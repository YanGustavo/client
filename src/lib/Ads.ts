export interface Advertiser {
  name: string;
  website: string;
  logo: string;
  phone: string;
  email: string;
}

export interface Ad {
  advertiser: Advertiser;
  headline: string;
  description: string;
  url: string;
  image: string;
  price: number;
}

export function getAds(): Ad[] {
  const advertisers: Advertiser[] = [
    {
      name: "Loja A",
      website: "https://www.lojaa.com.br",
      logo: "https://www.lojaa.com.br/logo.png",
      phone: "(11) 1111-1111",
      email: "contato@lojaa.com.br",
    },
    {
      name: "Loja B",
      website: "https://www.lojab.com.br",
      logo: "https://www.lojab.com.br/logo.png",
      phone: "(11) 2222-2222",
      email: "contato@lojab.com.br",
    },
    {
      name: "Loja C",
      website: "https://www.lojac.com.br",
      logo: "https://www.lojac.com.br/logo.png",
      phone: "(11) 3333-3333",
      email: "contato@lojac.com.br",
    },
  ];

  const ads: Ad[] = [];

  for (let i = 0; i < advertisers.length; i++) {
    const advertiser = advertisers[i];
    const ad: Ad = {
      advertiser,
      headline: "Promoção Imperdível",
      description: "Não perca essa oportunidade única!",
      url: advertiser.website,
      image: "https://www.example.com/image.png",
      price: 9.99,
    };
    ads.push(ad);
  }

  return ads;
}
