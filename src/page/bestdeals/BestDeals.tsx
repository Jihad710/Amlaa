import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCard";
import { TProduct } from "../../components/type/Types";
import BestDealsCarousel from "./BestDealsCarousel";

const BestDeals = () => {
    const { isLoading, data } = useQuery<TProduct[]>("allProduct", async () => {
        const response = await fetch(`http://localhost:5000/products/deals`);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Check if data is defined before rendering ProductCart
    if (!data) {
        return <div>No data available</div>;
    }
    console.log(data);
    return (
        <div>
            <DynamicBanner title='Deals'></DynamicBanner>
            <ProductCart data={data ?? []}></ProductCart>
        </div>
    );
};

export default BestDeals;
