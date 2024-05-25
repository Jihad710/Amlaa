import { NavLink } from "react-router-dom";

const items = [
  {
    name: "T-Shirt",
    route: "/collection/t-shirt",
    image:
      "https://desiminimals.com/cdn/shop/files/20240212-_RHN2763.jpg?v=1708334241&width=352",
  },
  {
    name: "Shirt",
    route: "/collection/shirt",

    image:
      "https://desiminimals.com/cdn/shop/files/DSC_3852.jpg?v=1698665188&width=352",
  },
  {
    name: "Bottomware",
    route: "/collection/bottomwar",
    image:
      "https://desiminimals.com/cdn/shop/files/20240212-_RHN2895.jpg?v=1708335900&width=352",
  },
  {
    name: "Swaitshirt",
    route: "/collection/jackets",

    image:
      "https://desiminimals.com/cdn/shop/files/DSC_5166.jpg?v=1704369101&width=352",
  },
  {
    name: "Headware",
    route: "/collection/head-wear",
    image:
      "https://desiminimals.com/cdn/shop/files/DSC_3174_37b58d4f-7527-4b46-ada1-fa2c11f57004.jpg?v=1698665391&width=352",
  },
  {
    name: "Accerios",
    route: "/collection/bags-and-wallets",
    image:
      "https://desiminimals.com/cdn/shop/files/20240213-_RHN3116.jpg?v=1708335676&width=352",
  },
  {
    name: "Deals",
    route: "/collection/best-deal",
    image:
      "https://desiminimals.com/cdn/shop/files/DSC_5327_b077cd25-07fc-405e-8b17-2ec8555587e3.jpg?v=1704454596&width=352",
  },
  {
    name: "Polos",
    route: "/collection/polo",
    image:
      "https://desiminimals.com/cdn/shop/files/20240213-_RHN3102.jpg?v=1708335367&width=352",
  },
];
const Category = () => {
  return (
    <div className="w-11/12 mx-auto py-24">
      <h1 className="mb-14 text-center font-bold text-3xl text-[#3c3633]">
        SHOP BY CATEGORY
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {items.map((item, index) => (
          <NavLink key={index} to={item?.route}>
            <div
              className="relative flex justify-center items-center"
              key={index}
            >
              <img
                className="rounded-3xl w-[255px] h-[271px]"
                src={item.image}
                alt=""
              />
              <p className="absolute top-1/1 mx-3 bottom-1/1 left-0 right-0 text-white text-2xl  p-2   text-center">
                {item.name}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
