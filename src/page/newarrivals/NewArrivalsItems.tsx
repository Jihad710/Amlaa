import { NavLink } from "react-router-dom";

const items = [
  {
    name: "Cream — Long Sleeve Resort Shirt",
    image:
      "https://desiminimals.com/cdn/shop/files/20240212-_RHN2763.jpg?v=1708334241&width=352",
    price: "1590.00",
  },
  {
    name: "Grey — Relaxed Chinos",
    image:
      "https://desiminimals.com/cdn/shop/files/DSC_3852.jpg?v=1698665188&width=352",
    price: "1590.00",
  },
  {
    name: "Fern — Long Sleeve Resort Shirt",
    image:
      "https://desiminimals.com/cdn/shop/files/20240212-_RHN2895.jpg?v=1708335900&width=352",
    price: "1590.00",
  },
  {
    name: "Dark Grey — Corduroy Straight Fit Trousers",
    image:
      "https://desiminimals.com/cdn/shop/files/DSC_5166.jpg?v=1704369101&width=352",
    price: "1590.00",
  },
  {
    name: "Brown — Twill Cap",
    image:
      "https://desiminimals.com/cdn/shop/files/DSC_3174_37b58d4f-7527-4b46-ada1-fa2c11f57004.jpg?v=1698665391&width=352",
    price: "1590.00",
  },
  {
    name: "Navy Blue — Corduroy Straight Fit Trousers",
    image:
      "https://desiminimals.com/cdn/shop/files/20240213-_RHN3116.jpg?v=1708335676&width=352",
    price: "1590.00",
  },
  {
    name: "Moss — Heavy Duty Tote Bag",
    image:
      "https://desiminimals.com/cdn/shop/files/DSC_5327_b077cd25-07fc-405e-8b17-2ec8555587e3.jpg?v=1704454596&width=352",
    price: "1590.00",
  },
  {
    name: "Butter — Short Sleeve Resort Shirt",
    image:
      "https://desiminimals.com/cdn/shop/files/20240213-_RHN3102.jpg?v=1708335367&width=352",
    price: "1590.00",
  },
];
const NewArrivalsItems = () => {
  return (
    <div className="w-11/12 mx-auto py-24">
      <div className="grid grid-cols-4 gap-5">
        {items.map((item, index) => (
          <div className="" key={index}>
            <div>
              <img className=" w-[255px] h-[271px]" src={item?.image} alt="" />
            </div>
            <div className="text-center">
              <p className="text-xl p-2 text-center">{item?.name}</p>
              <p>${item?.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-32 rounded-full mt-10 mx-auto text-center">
        <NavLink to={"/allProduct"}>
          <button className="text-white uppercase font-semibold bg-[#3c3633] w-full py-3 px-4 text-center rounded-full">
            Viwe All
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NewArrivalsItems;
