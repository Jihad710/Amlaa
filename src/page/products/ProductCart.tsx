import React from "react";
import { useNavigate } from "react-router-dom";
import { handleBuyProduct } from "../../hooks/BuyProduct";
import { Product } from "../../types/Product";

interface ProductCartProps {
  datas: Product[];
}

const ProductCart: React.FC<ProductCartProps> = ({ datas }) => {
  const navigate = useNavigate();

  const handleProductClick = async (id: string) => {
    console.log("Product ID:", id);
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
            <div>
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-auto"
              />
            </div>
            <div>
              <p>{data.name}</p>
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
