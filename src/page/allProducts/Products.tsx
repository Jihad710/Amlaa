import { useQuery } from "react-query";
import DynamicBanner from "../../components/ui/DynamicBanner";
import ProductCart from "../products/ProductCart";
import { Range } from "react-input-range";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/ui/Loader";

const Products = () => {
    const { category } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [priceRange, setPriceRange] = useState<Range>({
        min: null,
        max: null,
    });
    const [stockQuantity, setStockQuantity] = useState({
        inStock: 0,
        soldOut: 0,
    });

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `http://localhost:5000/products/${category}/prices-and-stock`
            );
            const data = await response.json();
            if (data) {
                setMinPrice(data.lowestPrice);
                setMaxPrice(data.highestPrice);
                setPriceRange({
                    min: data.lowestPrice,
                    max: data.highestPrice,
                });
                setStockQuantity({
                    inStock: data.inStockCount,
                    soldOut: data.outOfStockCount,
                })
            }
        })();
    }, [category]);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            setData([]);
            const response = await fetch(
                `http://localhost:5000/products/${category}?minPrice=${priceRange.min}&maxPrice=${priceRange.max}`
            );
            const data = await response.json();
            if (data) {
                setData(data);
                setIsLoading(false);
            }
        })();
    }, [priceRange]);

    return (
        <div>
            <DynamicBanner
                title={`${category}`}
                data={data ?? []}
                minPrice={minPrice}
                maxPrice={maxPrice}
                priceRange={priceRange}
                stockQuantity={stockQuantity}
                setPriceRange={setPriceRange}></DynamicBanner>

            {isLoading ? (
                <Loader />
            ) : (
                <ProductCart data={data ?? []}></ProductCart>
            )}
        </div>
    );
};

export default Products;
