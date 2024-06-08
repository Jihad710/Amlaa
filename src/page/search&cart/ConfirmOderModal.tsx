import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import {
  TAddProduct,
  TOderFormData,
  TProductDetails,
} from "../../components/type/Types";
import { useGetToCard } from "../../hooks/useGetToCart";

const ConfirmOrderModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data: addProduct } = useGetToCard();
  console.log(addProduct);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TOderFormData>();
  const getId = addProduct.map((data: TAddProduct) => data.menuItemId);

  const onSubmit = async (data: TOderFormData) => {
    data.productId = getId;
    try {
      const response = await fetch("http://localhost:5000/api/confirmOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Order submitted successfully:", responseData);
      setOpen(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full md:h-full h-screen overflow-y-scroll">
      {addProduct?.length ? (
        <div className="flex justify-center items-center ">
          <button
            className=" text-white py-2 font-semibold w-56 px-14 rounded-md text-xl my-3 bg-[#3c3633]"
            onClick={handleClickOpen}
          >
            Check Out
          </button>
        </div>
      ) : (
        ""
      )}

      {open && (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white w-full md:w-10/12 max-h-screen overflow-hidden">
              <div className="bg-blue-500 text-white flex justify-between">
                <h1 className="text-2xl font-bold p-4">Desi Minimals</h1>
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:bg-red-700 transition duration-300"
                >
                  Disagree
                </button>
              </div>

              <div className="mx-auto border border-red-600 flex py-6 overflow-hidden">
                <div className="w-7/12 max-h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar px-3">
                  <div className="flex items-center gap-2 mb-4">
                    <IoLocationOutline className="text-xl" />
                    <p className="text-lg font-medium">Delivery Address</p>
                  </div>
                  <div className="space-y-6 p-1 ">
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      className="w-full border rounded-md p-2 placeholder-gray-500"
                      placeholder="Full Name"
                    />
                    {errors.name && (
                      <p className="text-red-500">Name is required</p>
                    )}

                    <input
                      type="text"
                      {...register("number", { required: true })}
                      className="w-full border rounded-md p-2 placeholder-gray-500"
                      placeholder="Phone Number"
                    />
                    {errors.number && (
                      <p className="text-red-500">Phone number is required</p>
                    )}

                    <input
                      type="text"
                      {...register("code", { required: true })}
                      className="w-full border rounded-md p-2 placeholder-gray-500"
                      placeholder="Post Code"
                    />
                    {errors.code && (
                      <p className="text-red-500">Post code is required</p>
                    )}

                    <div className="flex space-x-4">
                      <input
                        type="text"
                        {...register("state", { required: true })}
                        className="flex-1 border rounded-md p-2 placeholder-gray-500"
                        placeholder="State"
                      />
                      {errors.state && (
                        <p className="text-red-500">State is required</p>
                      )}

                      <input
                        type="text"
                        {...register("city", { required: true })}
                        className="flex-1 border rounded-md p-2 placeholder-gray-500"
                        placeholder="City"
                      />
                      {errors.city && (
                        <p className="text-red-500">City is required</p>
                      )}
                    </div>

                    <input
                      type="text"
                      {...register("district", { required: true })}
                      className="w-full border rounded-md p-2 placeholder-gray-500"
                      placeholder="District"
                    />
                    {errors.district && (
                      <p className="text-red-500">District is required</p>
                    )}

                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="cash_on_delivery"
                          {...register("paymentMethod", { required: true })}
                          className="mr-2"
                        />
                        Cash on Delivery
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="ssl_payment"
                          {...register("paymentMethod", { required: true })}
                          className="mr-2"
                        />
                        SSL Payment System
                      </label>
                    </div>
                    {errors.paymentMethod && (
                      <p className="text-red-500">
                        Please select a payment method
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-5/12 px-2">
                  <h1 className="text-xl font-medium mb-5 text-center">
                    Order Summary
                  </h1>
                  <div className="border rounded p-1">
                    {addProduct.map((product: TProductDetails) => (
                      <div
                        key={product.menuItemId}
                        className="flex justify-between items-center mb-4"
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-12 h-12 rounded-md"
                        />
                        <div>
                          <p className="text-lg font-semibold">
                            {product.title}
                          </p>
                          <p className="text-lg font-semibold">
                            <span className="font-bold">Qty: </span>
                            {product.quantity}
                          </p>
                        </div>
                        <p className="text-lg font-semibold">
                          ${product.price}
                        </p>
                      </div>
                    ))}
                    <hr className="mb-4 mt-1" />
                    <div className="flex justify-between">
                      <p className="text-lg">Total Price (incl. taxes)</p>
                      <p className="text-lg font-semibold">
                        $
                        {addProduct.reduce(
                          (total: number, product: TProductDetails) =>
                            total +
                            (product?.price || 0) * (product?.quantity || 1),
                          0
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-3 w-1/2">
                <button
                  type="submit"
                  className="block py-2 px-4 bg-black text-white text-lg font-semibold rounded hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition duration-300"
                >
                  Payment
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ConfirmOrderModal;
