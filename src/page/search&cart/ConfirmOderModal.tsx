import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

interface TFormData {
  name: string;
  number: string;
  code: string;
  state: string;
  city: string;
  district: string;
}

const ConfirmOrderModal = () => {
  // Corrected component name
  const [open, setOpen] = useState<boolean>(false); // Typed with boolean

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>(); // Corrected form data type
  const onSubmit = async (data: TFormData) => {
    try {
      console.log(data);
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
    <div className="w-full md:h-full h-screen overflow-y-hidden">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleClickOpen}
      >
        Check Out
      </button>
      {open && (
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mx-auto flex gap-10 py-6 overflow-hidden">
                <div className="w-7/12 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar px-3">
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
                  </div>
                  <button
                    type="submit"
                    className="block w-full mt-3 py-2 px-4 bg-black text-white text-lg font-semibold rounded hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition duration-300"
                  >
                    Payment
                  </button>
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
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmOrderModal;
