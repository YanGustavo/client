const image1 = "/images/1.png";
const image2 = "/images/2.png";
const image3 = "/images/3.png";
const image4 = "/images/4.png";

interface Product {
  _id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  discountPercentage: number;
  images: string[];
  countInStock: number;
  rating: number;
  slug: string;
}

const Products: Product[] = [
  {
    _id: '63d6ae4fabe21a29359d3a52',
    name: "iPhone 8 Plus",
    slug: "iphone-8-plus",
    brand: "Apple",
    description:
    `
    <div>
  <h1>Descrição</h1>
  <p>O Samsung Galaxy S21 é um dos modelos de smartphones da Samsung lançados em 2021.</p>
  <img src="https://images.unsplash.com/photo-1611065551055-c238ef6b68d3" alt="Samsung Galaxy S21" width="500"/>
  <p>Ele possui uma tela Dynamic AMOLED 2X de 6.2 polegadas com resolução de 2400 x 1080 pixels.</p>
  <img src="https://images.unsplash.com/photo-1608288948678-19b43089c7e2" alt="Tela do Samsung Galaxy S21" width="500"/>
  <p>O Samsung Galaxy S21 vem com o processador Exynos 2100 ou Snapdragon 888, dependendo do mercado, que proporciona desempenho rápido e eficiente.</p>
  <img src="https://images.unsplash.com/photo-1611065550946-9f287ef4d4f4" alt="Processador do Samsung Galaxy S21" width="500"/>
  <p>Ele conta ainda com uma câmera tripla de 12 megapixels, com aberturas f/1.8, f/2.2 e f/1.9, além de gravação de vídeo em 8K.</p>
  <img src="https://images.unsplash.com/photo-1611065550629-56c15688c537" alt="Câmera do Samsung Galaxy S21" width="500"/>
  <p>O Samsung Galaxy S21 também é resistente à água e poeira, com certificação IP68.</p>
  <img src="https://images.unsplash.com/photo-1610865193146-cf7997926d71" alt="Resistência à água e poeira do Samsung Galaxy S21" width="500"/>
</div>
    `,    
    images: [image1, image2, image3, image4],
    price: 1850.00,
    discountPercentage: 5,
    countInStock: 27,
    rating: 4.5,
  },
  {
    _id: '63d6ae4fabe21a29359d3a521',
    name: "new Plus2",
    slug: "iphone-8-plus2",
    brand: "Apple",
    description:
    `
    <div>
  <h1>Descrição2</h1>
  <p>O Samsung Galaxy S21 é um dos modelos de smartphones da Samsung lançados em 2021.</p>
  <img src="https://images.unsplash.com/photo-1611065551055-c238ef6b68d3" alt="Samsung Galaxy S21" width="500"/>
  <p>Ele possui uma tela Dynamic AMOLED 2X de 6.2 polegadas com resolução de 2400 x 1080 pixels.</p>
  <img src="https://images.unsplash.com/photo-1608288948678-19b43089c7e2" alt="Tela do Samsung Galaxy S21" width="500"/>
  <p>O Samsung Galaxy S21 vem com o processador Exynos 2100 ou Snapdragon 888, dependendo do mercado, que proporciona desempenho rápido e eficiente.</p>
  <img src="https://images.unsplash.com/photo-1611065550946-9f287ef4d4f4" alt="Processador do Samsung Galaxy S21" width="500"/>
  <p>Ele conta ainda com uma câmera tripla de 12 megapixels, com aberturas f/1.8, f/2.2 e f/1.9, além de gravação de vídeo em 8K.</p>
  <img src="https://images.unsplash.com/photo-1611065550629-56c15688c537" alt="Câmera do Samsung Galaxy S21" width="500"/>
  <p>O Samsung Galaxy S21 também é resistente à água e poeira, com certificação IP68.</p>
  <img src="https://images.unsplash.com/photo-1610865193146-cf7997926d71" alt="Resistência à água e poeira do Samsung Galaxy S21" width="500"/>
</div>
    `,    
    images: [image1, image2, image3, image4],
    price: 50.00,
    discountPercentage: 5,
    countInStock: 27,
    rating: 1.5,
  },
];

function findProductBySlug(products: Product[], slug: string): Product[] {
  const foundProduct = products.find(product => product.slug === slug);
  return foundProduct ? [foundProduct] : [];
}
export type { Product };
export { Products, findProductBySlug };