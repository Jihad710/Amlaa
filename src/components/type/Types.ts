export interface TProduct {
  _id: string;
  title: string;
  price: number;
  material: string;
  size: string[];
  color: string[];
  productType: string;
  discount: number;
  type: string;
  detailsMaterial: string;
  productStatus: string;
  collectionStatus: string;
  category: string;
  images: string[];
}

export interface TProductDetails {
  _id: string;
  title: string;
  price: number;
  tex: string;
  size: string[];
  detailsMaterial: string;
  color: string[];
  productStatus: string;
  dimensions: {
    height: number;
    width: number;
    handle: number;
  };
  capacity: number;
  images: string[];
}

export interface TOderFormData {
  name: string;
  number: string;
  code: string;
  state: string;
  city: string;
  district: string;
  paymentMethod: string;
  productId: string;
}

export interface TAddProduct {
  _id: string;
  menuItemId: string;
  name: string;
  image: string;
  price: number;
}
