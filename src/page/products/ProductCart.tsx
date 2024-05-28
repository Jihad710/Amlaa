import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleBuyProduct } from "../../hooks/BuyProduct";
import { Product } from "../allProducts/AllProduct";

interface ProductCartProps {
  datas: Product[];
}

const ProductCart: React.FC<ProductCartProps> = ({ datas }) => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % datas.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isHovering, datas.length]);

  const handleProductClick = async (id: string) => {
    try {
      const productData = await handleBuyProduct(id);
      console.log("Product Data:", productData);
      navigate(`/product/${id}`);
    } catch (error) {
      console.error("Error during product purchase and navigation:", error);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {datas?.length > 0 ? (
        datas.map((data) => (
          <div
            key={data._id}
            onClick={() => handleProductClick(data._id)}
            className="cursor-pointer border p-4 hover:shadow-lg"
          >
            <div
              className="bg-white rounded-md overflow-hidden shadow-md transition-shadow ease-out relative hover:shadow-lg"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative">
                <img
                  src={datas[currentImage].images}
                  alt={`Image ${datas[currentImage].title}`}
                  className="w-full h-24 transition-opacity duration-1000 ease-out"
                />
              </div>
            </div>
            <div>
              <p>{data.type}</p>
              <p>${data.price}</p>
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
