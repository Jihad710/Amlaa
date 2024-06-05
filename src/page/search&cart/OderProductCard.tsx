import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import ResponsiveDialog from "./ConfirmOderModal";

interface Product {
  _id: string;
  title: string;
  price: number;
  tex: string;
  size?: string[];
  detailsMaterial: string;
  color?: string[];
  productStatus: string;
}

interface OderProductCardProps {
  data: Product;
}

const OderProductCard = ({ data }: OderProductCardProps) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="w-11/12 md:w-9/12 mx-auto">
      <table className="w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left"></th>
            <th className="p-2 text-center"></th>
            <th className="p-2 text-center">Quantity</th>
            <th className="p-2 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="p-2">
              <img src="" alt="" />
            </td>
            <td className="p-2 text-center">
              <div>
                <p className="text-lg font-semibold">{data.title}</p>
                <p>
                  <span className="font-medium">Style:</span>
                  <span className="ml-1">{data.detailsMaterial}</span>
                </p>
                <p>
                  <span className="font-medium">Color:</span>
                  <span className="ml-1">{data.color?.[0] || "N/A"}</span>
                </p>
                <p>
                  <span className="font-medium">Size:</span>
                  <span className="ml-1">{data.size?.[0] || "N/A"}</span>
                </p>
              </div>
            </td>
            <td className="p-2 text-center">
              <div className="flex justify-center items-center gap-4">
                <FiMinus
                  onClick={() =>
                    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0))
                  }
                  className="cursor-pointer"
                />
                <p>{quantity}</p>
                <FiPlus
                  onClick={() =>
                    setQuantity((prevQuantity) => prevQuantity + 1)
                  }
                  className="cursor-pointer"
                />
              </div>
            </td>
            <td className="p-2 text-right">
              ${data.price ? (data?.price * quantity).toFixed(2) : "00"}
            </td>
          </tr>
        </tbody>
      </table>
      <hr className="w-full h-1 bg-black my-2" />
      <div>
        <ResponsiveDialog />
      </div>
    </div>
  );
};

export default OderProductCard;
