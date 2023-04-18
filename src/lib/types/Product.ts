export interface Product {
  _id: string;
  code: string;
  slug: string;
  type: string;
  name: string;
  unit: string;
  price: string;
  costPrice: string;
  netWeight: string;
  grossWeight: string;
  minimumStock: string;
  maximumStock: string | null;
  gtin: string;
  gtinPackaging: string;
  shortDescription: string;
  complementaryDescription: string;
  productWidth: string;
  productHeight: string;
  productDepth: string;
  unitMeasure: string;
  inclusionDate: string;
  alterationDate: string;
  imageThumbnail: string | null;
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
  variations: {
  value: string;
  image: { link: string }[];
  sku: string;
  stock: number;
  price: string;
  capacity: string;
  }[];
  image: {
  link: string;
  validity: string;
  storageType: string;
  }[];
  storeProduct: {
  price: {
  price: number;
  promotionalPrice: number;
  };
  category: {
  id: string;
  description: string;
  parentId: string;
  }[];
  };
  parentCode: string;
  currentStock: number;
  deposits: {
  deposit: {
  id: string;
  name: string;
  balance: string;
  };
  }[];
  }

  export type Variant = {
  value: string;
  image: { link: string }[];
  sku: string;
  stock: number;
  price: string;
  capacity: string;
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
