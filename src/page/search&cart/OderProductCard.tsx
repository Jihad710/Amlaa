import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import ResponsiveDialog from "./ConfirmOderModal";

interface Product {
  _id: string;
  menuItemId: string;
  name: string;
  image: string;
  price: string;
  tex: string;
  size?: string[];
  detailsMaterial: string;
  color?: string[];
  productStatus: string;
}

interface OderProductCardProps {
  data: Product[];
}

const OderProductCard = ({ data }: OderProductCardProps) => {
  const [quantities, setQuantities] = useState<number[]>(
    new Array(data.length).fill(1)
  );

  const handleQuantityChange = (index: number, delta: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((q, i) => (i === index ? Math.max(q + delta, 0) : q))
    );
  };

  return (
    <div className="w-11/12 md:w-9/12 mx-auto">
      {data?.length ? (
        <>
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left"></th>
                <th className="p-2 text-center"></th>
                <th className="p-2 text-center">Quantity</th>
                <th className="p-2 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, index) => (
                <tr key={value._id} className="border-b border-gray-200">
                  <td className="p-2 h-52 w-[150]">
                    <img
                      src={value.image || "placeholder.jpg"}
                      alt={value.name}
                    />
                  </td>
                  <td className="p-2 text-center">
                    <div>
                      <p className="text-lg font-semibold">{value.name}</p>
                      <p>
                        <span className="font-medium">Style:</span>
                        <span className="ml-1">{value.detailsMaterial}</span>
                      </p>
                      <p>
                        <span className="font-medium">Color:</span>
                        <span className="ml-1">
                          {value.color?.[0] || "N/A"}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium">Size:</span>
                        <span className="ml-1">{value.size?.[0] || "N/A"}</span>
                      </p>
                    </div>
                  </td>
                  <td className="p-2 text-center">
                    <div className="flex justify-center items-center gap-4">
                      <FiMinus
                        onClick={() => handleQuantityChange(index, -1)}
                        className="cursor-pointer"
                      />
                      <p>{quantities[index]}</p>
                      <FiPlus
                        onClick={() => handleQuantityChange(index, 1)}
                        className="cursor-pointer"
                      />
                    </div>
                  </td>
                  <td className="p-2 text-center">
                    $
                    {value.price
                      ? (parseFloat(value.price) * quantities[index]).toFixed(2)
                      : "00"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className="w-full h-1 bg-black my-2" />
          <div>
            <ResponsiveDialog />
          </div>
        </>
      ) : (
        <p className="text-center pt-7 text-xl">
          Your cart is currently empty.
        </p>
      )}
    </div>
  );
};

export default OderProductCard;
