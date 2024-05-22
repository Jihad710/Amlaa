import React from "react";
import { useNavigate } from "react-router-dom";
import { handleBuyProduct } from "../../hooks/BuyProduct";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  title: string;
}

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
      navigate(`product/${id}`);
    } catch (error) {
      console.error("Error during product purchase and navigation:", error);
    }
  };
  return (
    <div className="grid grid-cols-4">
      {datas && datas.length > 0 ? (
        datas.map((data) => (
          <div onClick={() => handleProductClick(data._id)}>
            <div>
              <img src={data.image} alt={data.title} />
            </div>
            <div>
              <p>{data.name}</p>
              <p>{data.price}</p>
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
