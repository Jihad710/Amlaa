import { IoLocationOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

// interface FormData {
//   name: string;
//   number: string;
//   code: string;
//   state: string;
//   city: string;
//   houseNumber: string;
//   area: string;
//   district: string;
// }

const OderAddres = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation((data) => {
    return fetch("https://black-and-white-server.vercel.app/api/order-address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });

  const onSubmit = async () => {
    try {
      const response = await mutation.mutateAsync();
      if (response.status) {
        return navigate("/payment-system");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-2/3 mx-auto py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Business-logo Desi Minimals
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto flex gap-10">
          <div className="w-7/12">
            <div className="flex items-center gap-4">
              <IoLocationOutline className="text-xl" />
              <p className="text-lg font-medium">Delivery Address</p>
            </div>
            <div className="space-y-6 mt-6">
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full border rounded-md p-4 placeholder-gray-500"
                placeholder="Full Name"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}

              <input
                type="text"
                {...register("number", { required: true })}
                className="w-full border rounded-md p-4 placeholder-gray-500"
                placeholder="Phone Number"
              />
              {errors.number && (
                <p className="text-red-500">Phone number is required</p>
              )}

              <input
                type="text"
                {...register("code", { required: true })}
                className="w-full border rounded-md p-4 placeholder-gray-500"
                placeholder="Post Code"
              />
              {errors.code && (
                <p className="text-red-500">Post code is required</p>
              )}

              <div className="flex space-x-4">
                <input
                  type="text"
                  {...register("state", { required: true })}
                  className="flex-1 border rounded-md p-4 placeholder-gray-500"
                  placeholder="State"
                />
                {errors.state && (
                  <p className="text-red-500">State is required</p>
                )}

                <input
                  type="text"
                  {...register("city", { required: true })}
                  className="flex-1 border rounded-md p-4 placeholder-gray-500"
                  placeholder="City"
                />
                {errors.city && (
                  <p className="text-red-500">City is required</p>
                )}
              </div>

              <input
                type="text"
                {...register("houseNumber", { required: true })}
                className="w-full border rounded-md p-4 placeholder-gray-500"
                placeholder="House Number, Apartment"
              />
              {errors.houseNumber && (
                <p className="text-red-500">House number is required</p>
              )}

              <input
                type="text"
                {...register("area", { required: true })}
                className="w-full border rounded-md p-4 placeholder-gray-500"
                placeholder="Area"
              />
              {errors.area && <p className="text-red-500">Area is required</p>}

              <input
                type="text"
                {...register("district", { required: true })}
                className="w-full border rounded-md p-4 placeholder-gray-500"
                placeholder="District"
              />
              {errors.district && (
                <p className="text-red-500">District is required</p>
              )}
            </div>
          </div>
          <div className="w-5/12">
            <h1 className="text-2xl font-bold mb-4 text-center">
              Order Summary
            </h1>
            <div className="border rounded-lg p-6">
              <img src="" alt="" className="w-full rounded-md mb-4" />
              <p className="text-lg font-semibold mb-2">Title</p>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg">Price (incl. taxes)</p>
                <p className="text-lg font-semibold">$500</p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="block w-full max-w-xs mx-auto mt-10 py-4 px-6 bg-black text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition duration-300"
        >
          Payment
        </button>
      </form>
    </div>
  );
};

export default OderAddres;
