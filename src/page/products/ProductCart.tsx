import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleBuyProduct } from "../../hooks/BuyProduct";
import { TProduct } from "../../components/type/Types";

interface ProductCartProps {
    data: TProduct[];
}

const ProductCart: React.FC<ProductCartProps> = ({ data: data }) => {
    const navigate = useNavigate();
    const [hoverStates, setHoverStates] = useState<boolean[]>(
        new Array(data.length).fill(false)
    );
    const [imageIndexes, setImageIndexes] = useState<number[]>(
        new Array(data.length).fill(0)
    );

    useEffect(() => {
        const intervals = data.map((_, index) => {
            if (hoverStates[index]) {
                return setInterval(() => {
                    setImageIndexes((prevIndexes) => {
                        const newIndexes = [...prevIndexes];
                        newIndexes[index] =
                            (newIndexes[index] + 1) % data[index].images.length;
                        return newIndexes;
                    });
                }, 3000);
            }
            return null;
        });

        return () => {
            intervals.forEach((interval) => {
                if (interval) clearInterval(interval);
            });
        };
    }, [hoverStates, data]);

    const handleProductClick = async (id: string) => {
        try {
            const productData = await handleBuyProduct(id);
            console.log("Product Data:", productData);
            navigate(`/product/${id}`);
        } catch (error) {
            console.error(
                "Error during product purchase and navigation:",
                error
            );
        }
    };

    const handleMouseEnter = (index: number) => {
        setHoverStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = true;
            return newStates;
        });
    };

    const handleMouseLeave = (index: number) => {
        setHoverStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = false;
            return newStates;
        });
        setImageIndexes((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            newIndexes[index] = 0;
            return newIndexes;
        });
    };

    return (
        <div className='grid w-11/12 mt-14 mx-auto grid-cols-1 md:grid-cols-4 md:gap-10 text-[#3c3633]'>
            {data?.length > 0 ? (
                data.map((data, index) => (
                    <div
                        key={index}
                        onClick={() => handleProductClick(data._id)}
                        className='cursor-pointer border md:mb-0 mb-12 '>
                        <div
                            className='overflow-hidden shadow-md transition-shadow ease-out relative  hover:shadow-lg '
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}>
                            <div className='relative'>
                                <img
                                    src={data.images[imageIndexes[index]]}
                                    alt={`Image ${data.title}`}
                                    className='w-full mx-auto md:w-[256px] h-[372px] transition-opacity duration-100 ease-out'
                                />
                            </div>
                        </div>
                        <div>
                            <p className='text-[22px] py-1 text-center font-semibold'>
                                {data.title}
                            </p>
                            <p className='text-center font-medium text-xl tracking-wide'>
                            
                                {data.discount > 0 ? (
                                    <p className='mb-5 md:font-medium text-xl gap-1 flex items-center opacity-80'>
                                        {data?.discount && data.price && (
                                            <>
                                                <span className='line-through'>
                                                    {" "}
                                                    &#x09F3;{data.price}
                                                </span>
                                                {" - "}
                                                <span>
                                                    {" "}
                                                    &#x09F3; {data.price - ((data.price * data.discount) / 100)}
                                                </span>
                                                <span className='text-sm rounded p-px bg-red-200 text-red-700'>
                                                    -{data?.discount}%
                                                </span>
                                            </>
                                        )}
                                    </p>
                                ) : (
                                    <span> &#x09F3; {data.price}</span>
                                )}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default ProductCart;
