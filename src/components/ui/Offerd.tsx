const Offerd = () => {
  const services = [
    {
      image: "",
      title: "Get 10% Off",
      subTitle: "Avail 10% Off on your first purchase. Available at checkout.",
    },
    {
      image: "",
      title: "Free Shipping",
      subTitle: "Free shipping on all orders. Ships within 48 hours.",
    },
    {
      image: "",
      title: "Easy Exchanges & Returns*",
      subTitle:
        "Not satisfied with the product? Return within 14 days of delivery. (Read More)",
    },
  ];
  return (
    <div className="flex gap-10">
      {services.map((items, index) => (
        <div key={index} className="text-center">
          <img src={items.image} alt="" />
          <h1 className="py-3 text-xl font-bold text-[#3c3633]">
            {items.title}
          </h1>
          <p className="">{items.subTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Offerd;
