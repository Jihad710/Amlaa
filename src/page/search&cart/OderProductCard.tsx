import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import ResponsiveDialog from "./ConfirmOderModal";

interface Product {
  _id: string;
  title: string;
  price: number;
  tex: string;
  size?: string[]; // made optional
  detailsMaterial: string;
  color?: string[]; // made optional
  productStatus: string;
}

interface OderProductCardProps {
  data: Product;
}

const OderProductCard = ({ data }: OderProductCardProps) => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-9/12 mx-auto">
      <div className="flex flex-col">
        {/* Table Header */}
        <div className="flex flex-row w-full justify-end bg-gray-200 px-4 py-2">
          <p className="w-2/12 text-right">Quantity</p>
          <p className="w-2/12 text-right">Total</p>
        </div>
        <hr className="w-full h-1 bg-black my-2" />
        {/* Table Rows */}
        <div className="flex flex-col">
          {/* Product Row */}
          <div className="flex flex-row items-center justify-between border-b border-gray-200 px-4 py-2">
            <div className="flex items-center">
              {/* Here you can use dynamic data from props */}
              {/* For example: */}
              {/* <img className="w-24 h-auto mr-4" src={data.imageUrl} alt="Product" /> */}
              <div>
                <p className="text-lg font-semibold">{data.title}</p>
                <p>
                  <span className="font-medium">Size:</span>
                  <span className="ml-1">{data.size?.[0] || "N/A"}</span>
                </p>
                <p>
                  <span className="font-medium">Style:</span>
                  <span className="ml-1">{data.detailsMaterial}</span>
                </p>
                <p>
                  <span className="font-medium">Color:</span>
                  <span className="ml-1">{data.color?.[0] || "N/A"}</span>
                </p>
              </div>
            </div>
            <div className="w-2/12 text-right">
              <div className="flex items-center justify-center gap-4 border-b border-black border-solid border-b-3">
                <FiMinus
                  onClick={() =>
                    setCount((prevCount) => Math.max(prevCount - 1, 0))
                  }
                />
                <p>{count}</p>
                <FiPlus
                  onClick={() => setCount((prevCount) => prevCount + 1)}
                />
              </div>
            </div>
            <p className="w-2/12 text-right">
              ${(data.price * count).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <hr className="w-full h-1 bg-black my-2" />

      <div>
        <ResponsiveDialog></ResponsiveDialog>
      </div>
    </div>
  );
};

export default OderProductCard;
