import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCard";

const Accessories = () => {
    const {
        isLoading,

        data,
    } = useQuery("allProduct", async () => {
        const response = await fetch(
            `https://amlaa.vercel.app/products/accessories`
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    });
    console.log(data);
    if (isLoading) {
        <div>loading...............</div>;
    }
    return (
        <div>
            <DynamicBanner title='Accessories'></DynamicBanner>
            <ProductCart data={data ?? []}></ProductCart>
        </div>
    );
};

export default Accessories;
