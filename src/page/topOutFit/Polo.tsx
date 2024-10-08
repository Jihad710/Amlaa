import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCard";
import { useEffect, useState } from "react";

const Polo = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await fetch(
                `https://amlaa.vercel.app/products/polos`
            );
            const data = await response.json();
            if (data) {
                setData(data);
                setIsLoading(false);
            }
        })();
    }, []);
    console.log(isLoading);
    if (isLoading) {
        return <div className='h-[80vh]'>loading...............</div>;
    }

    return (
        <div>
            <DynamicBanner title='Polos'></DynamicBanner>
            <ProductCart data={data || []}></ProductCart>
        </div>
    );
};

export default Polo;
