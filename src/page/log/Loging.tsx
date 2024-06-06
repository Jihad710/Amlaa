import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center h-screen my-24">
      <div className="md:w-1/3 w-11/12">
        <h1 className="text-4xl text-[#3c3633] mb-4 text-center pb-10 font-bold">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="font-semibold text-[#3c3633]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              className="block w-full p-2 mt-1 mb-2 border-[#3c3633] rounded-md shadow-sm outline-none border-b-2  "
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mt-3 pt-5">
            <div className="flex justify-between">
              <label
                className="font-semibold text-[#3c3633]"
                htmlFor="password"
              >
                Password
              </label>
              <span>Forgot?</span>
            </div>
            <input
              id="password"
              type="password"
              {...register("password", { required: true })}
              className="block w-full p-2 mt-1 mb-2 border-[#3c3633] rounded-md shadow-sm outline-none border-b-2  "
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#3c3633] w-full rounded-full hover:bg-[#292929] duration-300  text-white font-bold p-4 
              font-xl uppercase mt-4 tracking-widest"
            >
              Sing in
            </button>
          </div>
          <p className="pt-10 text-[#3c3633]">
            {" "}
            <NavLink to={"/register"}>Create account</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
