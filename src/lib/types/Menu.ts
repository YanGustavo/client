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
  parentCode?: string; // Make parentCode property optional
  currentStock: number;
  deposits: Deposit[];
}

export interface Variation {
  key: string;
  value: string;
  options: VariationOption[];
}

export interface VariationOption {
  value: string;
  images: VariationImage[];
  sku: string;
  stock: number;
  price: string;
}

export interface VariationImage {
  link: string;
}


export interface ProductImage {
  link: string;
  validity: string;
  storageType: string;
}

export interface StoreProduct {
  price: StorePrice;
  category: string; // Change the type to string (reference to category ID)
}

export interface StorePrice {
  price: number;
  promotionalPrice: number;
}

export interface Deposit {
  _id: string;
  // Define other properties of Deposit schema as per your requirements
}

export interface ProductCart {
  sku: string;
  name: string;
  image: { link: string; validity?: string; storageType?: string }[];
  price: number;
  stock: number;
  quantity: number;
}
// lib/types/Menu.ts

export interface Menu {
  // Defina a estrutura da interface Menu aqui
  _id: string;
  name: string;
  // Outras propriedades...
}
