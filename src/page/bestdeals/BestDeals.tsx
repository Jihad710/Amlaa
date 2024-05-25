import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCart";

interface Product {
  id: string;
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

const BestDeals = () => {
  const { isLoading, data } = useQuery<Product[]>("allProduct", async () => {
    const response = await fetch(
      "https://black-and-white-server.vercel.app/products/category?category=deal"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DynamicBanner title="Deals"></DynamicBanner>
      <ProductCart datas={data}></ProductCart>
    </div>
  );
};

export default BestDeals;
