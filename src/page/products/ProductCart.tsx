import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleBuyProduct } from "../../hooks/BuyProduct";
import { TProduct } from "../../components/type/Types";

interface ProductCartProps {
  datas: TProduct[];
}

const ProductCart: React.FC<ProductCartProps> = ({ datas }) => {
  const navigate = useNavigate();
  const [hoverStates, setHoverStates] = useState<boolean[]>(
    new Array(datas.length).fill(false)
  );
  const [imageIndexes, setImageIndexes] = useState<number[]>(
    new Array(datas.length).fill(0)
  );

  useEffect(() => {
    const intervals = datas.map((_, index) => {
      if (hoverStates[index]) {
        return setInterval(() => {
          setImageIndexes((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            newIndexes[index] =
              (newIndexes[index] + 1) % datas[index].images.length;
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
  }, [hoverStates, datas]);

  const handleProductClick = async (id: string) => {
    try {
      const productData = await handleBuyProduct(id);
      console.log("Product Data:", productData);
      navigate(`/product/${id}`);
    } catch (error) {
      console.error("Error during product purchase and navigation:", error);
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
    <div className="grid w-11/12  mx-auto grid-cols-1 md:grid-cols-4 md:gap-10 text-[#3c3633]">
      {datas?.length > 0 ? (
        datas.map((data, index) => (
          <div
            key={data._id}
            onClick={() => handleProductClick(data._id)}
            className="cursor-pointer border md:mb-0 mb-12 "
          >
            <div
              className="overflow-hidden shadow-md transition-shadow ease-out relative  hover:shadow-lg "
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="relative">
                <img
                  src={data.images[imageIndexes[index]]}
                  alt={`Image ${data.title}`}
                  className="w-full mx-auto md:w-[256px] h-[372px] transition-opacity duration-100 ease-out"
                />
              </div>
            </div>
            <div>
              <p className="text-[22px] py-1 text-center font-semibold">
                {data.title}
              </p>
              <p className="text-center font-medium text-xl tracking-wide">
                ${data.price}
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
