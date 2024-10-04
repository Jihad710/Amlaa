import { useEffect, useState } from "react";
import { Product } from "../components/type/Types";

export const useGetToCardLocal = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const value = localStorage.getItem("product");
      if (value !== null) {
        const parsedData: Product[] = JSON.parse(value);
        // console.log(parsedData);
        setData(parsedData);
      } else {
        setData([]);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
};
