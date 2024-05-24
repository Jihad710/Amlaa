import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCart";

export interface Product {
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
  images: string;
}

const AllProduct = () => {
  const { isLoading, data } = useQuery<Product[]>("allProduct", async () => {
    const response = await fetch(
      "https://black-and-white-server.vercel.app/collection/allProducts"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...............</div>; // Corrected the return statement
  }

  return (
    <div>
      <DynamicBanner title={"Shop All"}></DynamicBanner>
      <ProductCart datas={data ?? []}></ProductCart>{" "}
      {/* Provide default value */}
    </div>
  );
};

export default AllProduct;
