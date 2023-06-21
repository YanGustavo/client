import { Product } from 'lib/types/Product';

const Products: Product[] = [
  {
    _id: '1',
    code: 'IP8PLUS',
    slug: 'iphone-8-plus',
    type: 'Celular',
    name: 'iPhone 8 Plus',
    unit: 'un',
    price: 4999.99,
    costPrice: 3500.0,
    netWeight: 0.202,
    grossWeight: 0.5,
    minimumStock: 10,
    maximumStock: 50,
    gtin: '190198455947',
    gtinPackaging: '190198455930',
    shortDescription: 'iPhone 8 Plus 64GB Tela 5.5"',
    complementaryDescription:
      'O Samsung Galaxy S21 é um dos modelos de smartphones da Samsung lançados em 2021. Ele possui uma tela Dynamic AMOLED 2X de 6.2 polegadas com resolução de 2400 x 1080 pixels. O Samsung Galaxy S21 vem com o processador Exynos 2100 ou Snapdragon 888, dependendo do mercado, que proporciona desempenho rápido e eficiente. Ele conta ainda com uma câmera tripla de 12 megapixels, com aberturas f/1.8, f/2.2 e f/1.9, além de gravação de vídeo em 8K. O Samsung Galaxy S21 também é resistente à água e poeira, com certificação IP68.',
    productWidth: 7.81,
    productHeight: 15.84,
    productDepth: 0.73,
    unitMeasure: 'cm',
    inclusionDate: '2022-03-28T00:00:00',
    alterationDate: '2022-03-28T00:00:00',
    imageThumbnail: 'https://example.com/images/5.png',
    supplierName: 'Apple Inc.',
    brand: 'Apple',
    fiscalClassification: '85171210',
    cest: '2010400',
    origin: '0',
    productGroupId: '1',
    externalLink: 'https://www.apple.com/br/iphone-8/',
    observations: 'Produto importado.',
    productGroup: 'Eletrônicos',
    itemsPerBox: 10,
    volumes: 1,
    videoUrl: 'https://www.youtube.com/watch?v=5XeuuVx_9Ws',
    location: 'Prateleira 3',
    crossDocking: '0',
    warranty: 3,
    condition: 'Vitrine',
    freeShipping: '0',
    production: '2021-12-01',
    expirationDate: '2024-03-01',
    supplierDescription:
      'O iPhone 8 Plus é uma evolução do iPhone 7 Plus, que já era excelente. Com design renovado, a nova versão conta com o vidro traseiro, que possibilita o carregamento sem fio, e um processador ainda mais rápido, o A11 Bionic. Além disso, a câmera dupla de 12MP agora possui estabilização óptica em ambas as lentes e um novo modo Retrato com iluminação de palco. Tudo isso em uma tela Retina HD de 5.5" com tecnologia True Tone e HDR.',
    variations: [
      {
        value: 'Prata',
        images: [
          { link: 'https://example.com with cutoff of 2021-09-30, the limit set by the model.' },
          { link: '/images/8.png' },
          { link: '/images/9.png' },
          { link: '/images/10.png' }
        ],
        sku: 'IP8PLUS-PRATA',
        stock: 7,
        price: '950',
        capacity: '64GB'
      },
      {
        value: 'Cinza-espacial',
        images: [
          { link: '/images/11.png' },
          { link: '/images/12.png' },
          { link: '/images/13.png' },
          { link: '/images/14.png' }
        ],
        sku: 'IP8PLUS-CINZA',
        stock: 9,
        price: '890',
        capacity: '64GB'
      },
      {
        value: 'Dourado',
        images: [
          { link: '/images/7.png' },
          { link: '/images/8.png' },
          { link: '/images/9.png' },
          { link: '/images/10.png' }
        ],
        sku: 'IP8PLUS-DOURADO',
        stock: 5,
        price: '2050',
        capacity: '64GB'
      },
      {
        value: 'Prata',
        images: [
          { link: '/images/11.png' },
          { link: '/images/12.png' },
          { link: '/images/13.png' },
          { link: '/images/14.png' }
        ],
        sku: 'IP8PLUS-PRATA-128',
        stock: 3,
        price: '2200',
        capacity: '128GB'
      },
      {
        value: 'Cinza-espacial',
        images: [
          { link: '/images/7.png' },
          { link: '/images/8.png' },
          { link: '/images/9.png' },
          { link: '/images/10.png' }
        ],
        sku: 'IP8PLUS-CINZA-128',
        stock: 2,
        price: '2300',
        capacity: '128GB'
      },
      {
        value: 'Dourado',
        images: [
          { link: '/images/11.png' },
          { link: '/images/12.png' },
          { link: '/images/13.png' },
          { link: '/images/14.png' }
        ],
        sku: 'IP8PLUS-DOURADO-128',
        stock: 4,
        price: '2400',
        capacity: '128GB'
      },
      {
        value: 'Prata',
        images: [
          { link: '/images/7.png' },
          { link: '/images/8.png' },
          { link: '/images/9.png' },
          { link: '/images/10.png' }
        ],
        sku: 'IP8PLUS-PRATA-256',
        stock: 8,
        price: '2500',
        capacity: '256GB'
      },
      {
        value: 'Cinza-espacial',
        images: [
          { link: '/images/11.png' },
          { link: '/images/12.png' },
          { link: '/images/13.png' },
          { link: '/images/14.png' }
        ],
        sku: 'IP8PLUS-CINZA-256',
        stock: 11,
        price: '969',
        capacity: '256GB'
      }
    ],
    image: [
      {
        link: '/images/1.png',
        validity: '2024-03-01',
        storageType: 'cloud'
      },
      {
        link: '/images/2.png',
        validity: '2024-03-01',
        storageType: 'cloud'
      },
      {
        link: '/images/3.png',
        validity: '2024-03-01',
        storageType: 'cloud'
      },
      {
        link: '/images/4.png',
        validity: '2024-03-01',
        storageType: 'cloud'
      }
    ],
    storeProduct: {
      price: {
        price: 4999.99,
        promotionalPrice: 4899.99
      },
      category: '1',
    },
    parentCode: '',
    currentStock: 65,
    deposits: [
      {
        deposit: {
          id: '01',
          name: 'Depósito 01',
          balance: '35'
        }
      },
      {
        deposit: {
          id: '02',
          name: 'Depósito 02',
          balance: '30'
        }
      }
    ]
  }
];
function findProductBySlug(products: Product[], slug: string): Product[] {
  const product = products.find((product) => product.slug === slug);
  return product ? [product] : [];
}
function findProductBySku(products: Product[], sku: string) {
  const product = products.find((product) =>
    product.variations.some((variation) => variation.sku === sku)
  );
  if (product) {
    const variation = product.variations.find(
      (variation) => variation.sku === sku
    );
    return [product.name, variation];
  }
  return [undefined, undefined];
}

export type { Product };
export { Products, findProductBySlug, findProductBySku };
