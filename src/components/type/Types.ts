export interface TProduct {
  status: string;
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
  menuItemId: string;
}
export interface Product {
  discount: string;
  images: any;
  notAvailable: any;
  _id: string;
  menuItemId: string;
  name: string;
  image: string;
  price: string;
  size?: string[];
  detailsMaterial: string;
  color?: string[];
  productStatus: string;
  quantity: number;
  title: string;
}

export interface TProductDetails {
  _id: string;
  title: string;
  price: number;
  tex: string;
  size: string | string[];
  detailsMaterial: string;
  color: string | string[];
  productStatus: string;
  material: string;
  status: string;
  discount: number;
  fit: string;
  dimensions: {
    height: number;
    width: number;
    handle: number;
  };
  capacity: number;
  images: string[];
  menuItemId: string;
  image: string;
  quantity: number;
}

export interface TOderFormData {
  name: string;
  number: string;
  code: string;
  localAddress: string;
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

export interface TCartItem {
  detailsMaterial: string;
  notAvailable: any;
  localStoreId: number;
  menuItemId: string;
  name: string;
  image: string;
  price: number;
  size: string;
  discount: number;
  color: string;
  quantity: number;
}
