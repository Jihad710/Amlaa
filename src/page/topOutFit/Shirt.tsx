import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCard";

const Shirt = () => {
    const { isLoading, data } = useQuery("allProduct", async () => {
        const response = await fetch(
            "https://black-and-white-server.vercel.app/products/category?category=shirt"
        );
        console.log(response);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(data, "......shirt page");

    return (
        <div>
            <DynamicBanner title='Shirt'></DynamicBanner>
            <ProductCart data={data}></ProductCart>
        </div>
    );
};

export default Shirt;
