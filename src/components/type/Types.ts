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
