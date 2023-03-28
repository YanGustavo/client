const MenuItems = [
  {
    id: 1,
    itemId: "iphone",
    name: "iPhone",
    imgSrc:
      "/img/iphone.png",
  },
  {
    id: 2,
    itemId: "xiaomi",
    name: "Xiaomi",
    imgSrc:
      "/img/xiaomi.png",
  },
  {
    id: 3,
    itemId: "ipad",
    name: "iPad",
    imgSrc:
      "/img/ipad.png",
  },
  {
    id: 4,
    itemId: "macbook",
    name: "Macbook",
    imgSrc:"/img/macbook.png",
  },
  {
    id: 5,
    itemId: "ipod",
    name: "iPod",
    imgSrc:
      "/img/ipod.png",
  },
  {
    id: 6,
    itemId: "appleWatch",
    name: "Apple Watch",
    imgSrc:
      "/img/apple-watch.png",
  },
];

const Items = [
  {
    id: 1,
    itemId: "iphone",
    imgSrc:
      "/images/7.png",
    name: "iPhone 8",
    ratings: 5,
    price: "7.5",
  },
  {
    id: 2,
    itemId: "iphone",
    imgSrc:
      "/images/8.png",
    name: "iPhone 8 Plus",
    ratings: 5,
    price: "12",
  },
  {
    id: 3,
    itemId: "iphone",
    imgSrc:
      "/images/9.png",
    name: "iPhone Xr",
    ratings: 5,
    price: "12",
  },
  {
    id: 4,
    itemId: "iphone",
    imgSrc:
      "/images/10.png",
    name: "iPhone 11",
    ratings: 5,
    price: "12",
  },
  {
    id: 5,
    itemId: "iphone",
    imgSrc:
      "/images/11.png",
    name: "iPhone 12",
    ratings: 5,
    price: "12",
  },
  {
    id: 6,
    itemId: "iphone",
    imgSrc:
      "/images/13.png",
    name: "iPhone 13",
    ratings: 5,
    price: "12",
  },
];
const image1 = "/images/1.png";
const  image2 = "/images/2.png";
const image3 = "/images/3.png";
const image4 = "/images/4.png";

const Products = [
  {
    _id:'63d6ae4fabe21a29359d3a52',
    name: "iPhone 8 Plus",
    brand: "Apple",
    description:
    `
    <div>
      <h1>Descrição</h1>
      <p>O iPhone XR é um dos modelos de smartphones da Apple lançados em 2018.</p>
      <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr__dazdnq0bwz2i_large.svg" alt="iPhone XR" width="500"/>
      <p>Ele possui uma tela Liquid Retina de 6.1 polegadas com resolução de 1792 x 828 pixels.</p>
      <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr_display__c204cj3q8e6y_large.svg" alt="Tela do iPhone XR" width="500"/>
      <p>O iPhone XR vem com o processador A12 Bionic, que proporciona desempenho rápido e eficiente.</p>
      <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr_performance__ey2vwyylfom6_large.svg" alt="Processador do iPhone XR" width="500"/>
      <p>Ele conta ainda com uma câmera de 12 megapixels com abertura f/1.8 e estabilização óptica de imagem, além de gravação de vídeo em 4K.</p>
      <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr_camera__dc5lmnop1kwy_large.svg" alt="Câmera do iPhone XR" width="500"/>
      <p>O iPhone XR também é resistente à água e poeira, com certificação IP67.</p>
      <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr_waterresistance__cau6dnj9d4wy_large.svg" alt="Resistência à água e poeira do iPhone XR" width="500"/>
    </div>
    `,
    price: 1850.00,
    discountPercentage: 5,
    images: [image1, image2, image3, image4],
    countInStock: 27,
    rating: 4.5,
  },
];
const Product = [
  {
    _id: '63d6ae4fabe21a29359d3a52',
    name: "Produto 1",
    description: `
    <div>
      <h1>Descrição</h1>
      <p>O iPhone XR é um dos modelos de smartphones da Apple lançados em 2018.</p>
      <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr__dazdnq0bwz2i_large.svg" alt="iPhone XR" width="500"/>
      <p>Ele possui uma tela Liquid Retina de 6.1 polegadas com resolução de 1792 x 828 pixels.</p>
      <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr_display__c204cj3q8e6y_large.svg" alt="Tela do iPhone XR" width="500"/>
      <p>O iPhone XR vem com o processador A12 Bionic, que proporciona desempenho rápido e eficiente.</p>
      <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr_performance__ey2vwyylfom6_large.svg" alt="Processador do iPhone XR" width="500"/>
      <p>Ele conta ainda com uma câmera de 12 megapixels com abertura f/1.8 e estabilização óptica de imagem, além de gravação de vídeo em 4K.</p>
      <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr_camera__dc5lmnop1kwy_large.svg" alt="Câmera do iPhone XR" width="500"/>
      <p>O iPhone XR também é resistente à água e poeira, com certificação IP67.</p>
      <img src="https://www.apple.com/v/iphone/home/ao/images/chapternav/iphonexr_waterresistance__cau6dnj9d4wy_large.svg" alt="Resistência à água e poeira do iPhone XR" width="500"/>
    </div>
    `,
    price: 19.99,
    imageUrl: "images/1.png",
    isFavorite: true,
  },
  {
    id: 2,
    name: "Produto 2",
    description: "Descrição do produto 2",
    price: 29.99,
    imageUrl: "https://via.placeholder.com/150",
    isFavorite: true,
  },
  {
    id: 3,
    name: "Produto 3",
    description: "Descrição do produto 3",
    price: 9.99,
    imageUrl: "https://via.placeholder.com/150",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Produto 4",
    description: "Descrição do produto 4",
    price: 39.99,
    imageUrl: "https://via.placeholder.com/150",
    isFavorite: false,
  },
];


export { MenuItems, Items, Products, Product, };
