const items = [
  {
    name: "T-Shirt",
    image:
      "https://desiminimals.com/cdn/shop/files/20240212-_RHN2763.jpg?v=1708334241&width=352",
  },
  {
    name: "Shirt",
    image:
      "https://desiminimals.com/cdn/shop/files/DSC_3852.jpg?v=1698665188&width=352",
  },
  {
    name: "Bottomware",
    image:
      "https://desiminimals.com/cdn/shop/files/20240212-_RHN2895.jpg?v=1708335900&width=352",
  },
  {
    name: "Swaitshirt",
    image:
      "https://desiminimals.com/cdn/shop/files/DSC_5166.jpg?v=1704369101&width=352",
  },
  {
    name: "Headware",
    image:
      "https://desiminimals.com/cdn/shop/files/DSC_3174_37b58d4f-7527-4b46-ada1-fa2c11f57004.jpg?v=1698665391&width=352",
  },
  {
    name: "Accerios",
    image:
      "https://desiminimals.com/cdn/shop/files/20240213-_RHN3116.jpg?v=1708335676&width=352",
  },
  {
    name: "Deals",
    image:
      "https://desiminimals.com/cdn/shop/files/DSC_5327_b077cd25-07fc-405e-8b17-2ec8555587e3.jpg?v=1704454596&width=352",
  },
  {
    name: "New Arrivale ",
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
      <div className="grid grid-cols-4 gap-5">
        {items.map((item, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Category;
