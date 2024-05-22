import React from "react";
import { Link, NavLink } from "react-router-dom";

interface Item {
  title: string;
  image: string;
  name: string;
  price: number;
  _id: string;
  collectionStatus: string;
}

interface Props {
  items: Item[];
}

const NewArrivalsItems: React.FC<Props> = ({ items = [] }) => {
  return (
    <div className="w-11/12 mx-auto py-24">
      <div className="grid grid-cols-4 gap-5">
        {items.map((item) => (
          <Link key={item._id} to={`/product/${item._id}`}>
            <div className="">
              <div className="w-[255px] h-[271px] relative ">
                <img className=" w-full h-full" src={item?.image} alt="" />
                <p className="absolute top-0 right-0 bg-[#3c3633] text-white p-2 px-4 capitalize pt-1">
                  {item?.collectionStatus}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl p-2 text-center">{item?.title}</p>
                <p>${item?.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-32 rounded-full mt-10 mx-auto text-center">
        <NavLink to={"/allProduct"}>
          <button className="text-white uppercase font-semibold bg-[#3c3633] w-full py-3 px-4 text-center rounded-full">
            View All
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NewArrivalsItems;
