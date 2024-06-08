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
    <div className="w-full px-5 md:px-0 md:w-9/12 mx-auto">
      {data?.length ? (
        <>
          {/* Table for larger screens */}
          <div className="hidden md:block">
            <table className="w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 "></th>
                  <th className="p-2 "></th>
                  <th className="p-2 ">Quantity</th>
                  <th className="p-2 ">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => (
                  <tr
                    key={value._id}
                    className="border-b border-gray-500 mb-10"
                  >
                    <td className=" h-52 w-[150px] ">
                      <img
                        src={value.image || "placeholder.jpg"}
                        alt={value.name}
                      />
                    </td>
                    <td className=" ps-10">
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
                          <span className="ml-1">
                            {value.size?.[0] || "N/A"}
                          </span>
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
                    <td className=" text-center">
                      $
                      {value.price
                        ? (parseFloat(value.price) * quantities[index]).toFixed(
                            2
                          )
                        : "00"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for mobile screens */}
          <div className="block md:hidden">
            <div className="grid gap-6">
              {data.map((value, index) => (
                <div
                  key={value._id}
                  className="border border-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center"
                >
                  <div className="w-full h-52">
                    <img
                      src={value.image || "placeholder.jpg"}
                      alt={value.name}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                  <div className="w-full p-4 flex flex-col justify-between">
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
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-4">
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
                      <p className="text-xl font-semibold">
                        $
                        {value.price
                          ? (
                              parseFloat(value.price) * quantities[index]
                            ).toFixed(2)
                          : "00"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
