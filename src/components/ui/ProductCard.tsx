import React from "react";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
