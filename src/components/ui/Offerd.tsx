const Offerd = () => {
  const services = [
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSeaOr7aygLco-5L32X-UaT6dxnMb4IVdm8inNPLm5TsxaLk5j2",
      title: "Get 10% Off",
      subTitle: "Avail 10% Off on your first purchase. Available at checkout.",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSXf03WFSW1Kol10-u4VWU_FCIEYd7WITPg8FZSNcVuUrIbI1qR",
      title: "Free Shipping",
      subTitle: "Free shipping on all orders. Ships within 48 hours.",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQF8LcRLw31w1KWQ3rkj84JL7Qy4hRt4cs-nCC1qmdBi4gAcup5",
      title: "Easy Exchanges & Returns*",
      subTitle:
        "Not satisfied with the product? Return within 14 days of delivery. (Read More)",
    },
  ];
  return (
    <div className="flex gap-10 mt-40">
      {services.map((items, index) => (
        <div key={index} className="text-center ">
          <img className="mx-auto h-20 w-20" src={items.image} alt="" />
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
