import React, { useEffect, useState } from "react"; // Assuming MenuItem type is defined in types.ts
import { FiMinus, FiPlus } from "react-icons/fi";
import { Product, TProduct } from "../../components/type/Types";
import pleceholderImage from "../../assets/pleceholder.png";
interface SingleProductCardProps {
    value: Product;
    cartItems: { menuItemId: string; quantity: number }[];
    buyAvailProducts: { menuItemId: string; quantity: number }[];
    setBuyAvailProducts: Function;
    handleQuantityIncrement: (menuItemId: string) => void;
    handleQuantityDecrement: (menuItemId: string) => void;
}

const SingleProductCard: React.FC<SingleProductCardProps> = ({
    value,
    cartItems,
    buyAvailProducts,
    setBuyAvailProducts,
    handleQuantityIncrement,
    handleQuantityDecrement,
}) => {
    const [isSoldOut, setIsSoldOut] = useState(false);
    const [notAvailable, setNotAvailable] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                if (!value.menuItemId) {
                    return;
                }
                const response = await fetch(
                    `http://localhost:5000/product/${value.menuItemId}`
                );

                const result = await response.json();

                // console.log(result);
                if (result.status) {
                    setNotAvailable(false);

                    if (result.status == "sold-out") {
                        setIsSoldOut(true);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [value]);
    // console.log(value);

    const cartItem = cartItems.find(
        (item) => item.menuItemId == value.menuItemId
    ) || { quantity: 0 };
    useEffect(() => {
        const isExist = buyAvailProducts.find(
            (product) => product.menuItemId === value.menuItemId
        );

        if (!notAvailable) {
            if (!isSoldOut) {
                if (isExist) {
                    const restProducts = buyAvailProducts.filter(
                        (item) => item.menuItemId != value.menuItemId
                    );
                    setBuyAvailProducts([...restProducts, { ...cartItem }]);
                } else {
                    setBuyAvailProducts([...buyAvailProducts, { ...cartItem }]);
                }
            }
        }
    }, [cartItems, isSoldOut, notAvailable]);
    return (
        <tr className='border-b border-gray-500 mb-10'>
            <td className=' h-52 w-[150px] relative overflow-hidden rounded'>
                <img src={value?.image || pleceholderImage} alt={value?.name} />
                {(isSoldOut || notAvailable) && (
                    <div className='absolute flex items-center justify-center top-0 left-0 bg-slate-600 bg-opacity-60 text-black font-bold w-full h-full text-center'>
                        {isSoldOut
                            ? "Sold Out"
                            : notAvailable
                            ? "Product Not Available"
                            : null}
                    </div>
                )}
            </td>
            <td className=' ps-10'>
                <div>
                    <p className='text-lg font-semibold'>{value?.name}</p>
                    <p>
                        <span className='font-medium'>Style:</span>
                        <span className='ml-1'>{value?.detailsMaterial}</span>
                    </p>
                    <p>
                        <span className='font-medium'>Color:</span>
                        <span className='ml-1'>{value?.color || "N/A"}</span>
                    </p>
                    <p>
                        <span className='font-medium'>Size:</span>
                        <span className='ml-1'>{value?.size || "N/A"}</span>
                    </p>
                </div>
            </td>
            <td className='p-2 text-center'>
                <div className='flex justify-center items-center gap-4'>
                    <FiMinus
                        onClick={() =>
                            handleQuantityDecrement(value.menuItemId)
                        }
                        className='cursor-pointer'
                    />
                    <p>{cartItem.quantity}</p>
                    <FiPlus
                        onClick={() =>
                            handleQuantityIncrement(value.menuItemId)
                        }
                        className='cursor-pointer'
                    />
                </div>
            </td>
            <td className=' text-center'>
                &#x09F3;
                {value.price ? (
                    <span
                        className={`${
                            (notAvailable || isSoldOut) && "line-through"
                        }`}>
                        {(parseFloat(value.price) * cartItem.quantity).toFixed(
                            2
                        )}
                    </span>
                ) : (
                    "00"
                )}
            </td>
        </tr>
    );
};

export default SingleProductCard;
