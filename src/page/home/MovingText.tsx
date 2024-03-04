import Marquee from "react-fast-marquee";
const MovingText = () => {
  const text = [
    {
      title: "Shipping in Bangladesh ",
    },
    {
      title: "Shipping in Bangladesh ",
    },
    {
      title: "Shipping in Bangladesh ",
    },
    {
      title: "Shipping in Bangladesh ",
    },
    {
      title: "Shipping in Bangladesh ",
    },
  ];
  return (
    <div>
      <Marquee className=" bg-[#3c3633] text-2xl py-2 text-white">
        {text.map((item, index) => (
          <p key={index} className="mx-10">
            {" "}
            {item.title}{" "}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default MovingText;
