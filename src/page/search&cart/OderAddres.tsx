import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const OrderAddress = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-full max-w-screen-md mx-auto py-10 px-5">
      <div className="flex justify-between pb-5 items-center">
        <div className="flex gap-3 items-center">
          <FaBangladeshiTakaSign className="text-xl" />
          <input
            type="radio"
            id="cash"
            value="cash"
            checked={selectedOption === "cash"}
            onChange={handleOptionChange}
          />
          <label htmlFor="cash">Cash On Delivery</label>
        </div>
        <div>
          <input
            type="radio"
            id="sscl"
            value="sscl"
            checked={selectedOption === "sscl"}
            onChange={handleOptionChange}
          />
          <label htmlFor="sscl">Other</label>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Business-logo Desi Minimals
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <IoLocationOutline className="text-xl" />
              <p className="text-lg font-medium">Delivery Address</p>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full border rounded-md p-3 placeholder-gray-500"
                placeholder="Full Name"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}

              {/* Add other input fields similarly */}
            </div>
          </div>
          {/* Add Order Summary section */}
        </div>

        <button className="block w-full max-w-xs mx-auto mt-10 py-4 px-6 bg-black text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition duration-300">
          <NavLink to={"/payment-system"}>Payment</NavLink>
        </button>
      </form>
    </div>
  );
};

export default OrderAddress;
