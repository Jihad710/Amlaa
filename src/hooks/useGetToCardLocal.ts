import { useEffect, useState } from "react";
import { Product } from "../components/type/Types";

export const useGetToCardLocal = () => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setReFetch] = useState(false);
    const ReFetching = () => {
        setReFetch(!refetch);
    };
    console.log(refetch);
    useEffect(() => {
        const value = localStorage.getItem("product");
        if (value !== null) {
            const parsedData: Product[] = JSON.parse(value);
            // console.log(parsedData);
            setData(parsedData);
        } else {
            setData([]);
        }
        setLoading(false);
    }, [refetch]);

    return { data, loading, ReFetching, refetch };
};
