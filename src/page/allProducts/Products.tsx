import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCart";
import { TProduct } from "../../components/type/Types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
  const {category} = useParams()
  // const { isLoading, data } = useQuery<TProduct[]>("allProduct", async () => {
  //   const response = await fetch(
  //     `http://localhost:5000/products/${category}`
  //   );
  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }
  //   return response.json();
  // });
  // // if (isLoading) {
  // //   return <div>Loading...............</div>;
  // // }
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      (async () => {
          setIsLoading(true);
          setData([])
          const response = await fetch(
              `http://localhost:5000/products/${category}`
          );
          const data = await response.json();
          if (data) {
              setData(data);
              setIsLoading(false);
          }
      })();
  }, [category]);
  console.log(isLoading);
  if (isLoading) {
       return <div className='h-[80vh]'>loading...............</div>;
  }
  return (
    <div>
      <DynamicBanner title={`${category}`}></DynamicBanner>
      <ProductCart data={data ?? []}></ProductCart>
    </div>
  );
};

export default Products;
