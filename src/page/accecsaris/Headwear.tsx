import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCard";

const Headwear = () => {
    const {
        isLoading,

        data,
    } = useQuery("allProduct", async () => {
        const response = await fetch(
            `https://amlaa.vercel.app/products/headwear`
        );
        console.log(response);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    });

    if (isLoading) {
        <div>loding...............</div>;
    }
    return (
        <div>
            <DynamicBanner title='Headwear'></DynamicBanner>
            <ProductCart data={data ?? []}></ProductCart>
        </div>
    );
};

export default Headwear;
