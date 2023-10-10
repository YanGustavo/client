type ProductData = {
  basicInfo: {
    code: string;
    slug: string;
    store: {
      name: string;
      slug: string;
    };
    type: string;
    name: string;
    unit: string;
    price: number;
    costPrice: number;
    netWeight: number;
    grossWeight: number;
    minimumStock: number;
    maximumStock: number;
    gtin: string;
    gtinPackaging: string;
    shortDescription: string;
    complementaryDescription: string;
    productWidth: number;
    productHeight: number;
    productDepth: number;
    unitMeasure: string;
    inclusionDate: string;
    alterationDate: string;
    imageThumbnail: string;
    supplierName: string;
    brand: string;
    fiscalClassification: string;
    cest: string;
    origin: string;
    productGroupId: string;
    externalLink: string;
    observations: string;
    productGroup: string;
    itemsPerBox: number;
    volumes: number;
    videoUrl: string;
    location: string;
    crossDocking: string;
    warranty: number;
    condition: string;
    freeShipping: string;
    production: string;
    expirationDate: string;
    supplierDescription: string;
  };
  characteristics: {
    // Propriedades específicas das características
  };
  images: {
    // Propriedades específicas das imagens
  };
  stock: {
    // Propriedades específicas de estoque
  };
  taxation: {
    // Propriedades específicas de tributação
  };
  variations: {
    // Propriedades específicas de variações
  };
};

const Products: ProductData[] = [
  {
    basicInfo: {
      code: "IP8PLUS",
      slug: "iphone-8-plus",
      store: {
        name: "Eai Chefinho",
        slug: "eaichefinho"
      },
      type: "Celular",
      name: "iPhone 8 Plus",
      unit: "un",
      price: 1650.99,
      costPrice: 3500.0,
      netWeight: 0.202,
      grossWeight: 0.5,
      minimumStock: 10,
      maximumStock: 50,
      gtin: "190198455947",
      gtinPackaging: "190198455930",
      shortDescription: "iPhone 8 Plus 64GB Tela 5.5\"",
      complementaryDescription: "O Samsung Galaxy S21 é um dos modelos de smartphones da Samsung lançados em 2021...",
      productWidth: 7.81,
      productHeight: 15.84,
      productDepth: 0.73,
      unitMeasure: "cm",
      inclusionDate: "2022-03-28T00:00:00",
      alterationDate: "2022-03-28T00:00:00",
      imageThumbnail: "https://example.com/images/5.png",
      supplierName: "Apple Inc.",
      brand: "Apple",
      fiscalClassification: "85171210",
      cest: "2010400",
      origin: "0",
      productGroupId: "1",
      externalLink: "https://www.apple.com/br/iphone-8/",
      observations: "Produto importado.",
      productGroup: "Eletrônicos",
      itemsPerBox: 10,
      volumes: 1,
      videoUrl: "https://www.youtube.com/watch?v=5XeuuVx_9Ws",
      location: "Prateleira 3",
      crossDocking: "0",
      warranty: 3,
      condition: "Vitrine",
      freeShipping: "0",
      production: "2021-12-01",
      expirationDate: "2024-03-01",
      supplierDescription: "O iPhone 8 Plus é uma evolução do iPhone 7 Plus, que já era excelente..."
    },
    characteristics: {
      // Preencha com as características específicas do produto
    },
    images: {
      // Preencha com os dados das imagens
    },
    stock: {
      // Preencha com os dados de estoque
    },
    taxation: {
      // Preencha com os dados de tributação
    },
    variations: {
      // Preencha com as variações do produto
    }
  }
];
  
export default Products;
