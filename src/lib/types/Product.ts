export interface ProductCart extends Omit<Product, "variations" | "image"> {
  variations: {
    value: string;
    image: { link: string }[];
    sku: string;
    stock: number;
    price: string;
    capacity: string;
  };
  image: {
    link: string;
    validity: string;
    storageType: string;
  }[];
}
export interface Product {
  _id: string;
  code: string;
  slug: string;
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
  variations: Variation[];
  image: ProductImage[];
  storeProduct: StoreProduct;
  parentCode: string;
  currentStock: number;
  deposits: Deposit[];
}

interface Variation {
  value: string;
  images: { link: string }[]; // Alterado de 'image' para 'images'
  sku: string;
  stock: number;
  price: string;
  capacity: string;
}

interface ProductImage {
  link: string;
  validity: string;
  storageType: string;
}

interface StoreProduct {
  price: {
    price: number;
    promotionalPrice: number;
  };
  category: string;
}

interface Category {
  id: string;
  description: string;
  parentId: string;
}

interface Deposit {
  deposit: {
    id: string;
    name: string;
    balance: string;
  };
}
  export interface Cart {
    sku: string;
    name: string;    
    image: { link: string }[];
    price: string;
    stock: number;
    value: string;
    capacity: string;
  }

  
  export interface Return {
  products: {
  product: Product;
  }[];
  }
  
  export interface ApiResponse {
  response: Return;
  }
