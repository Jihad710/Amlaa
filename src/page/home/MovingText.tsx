import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const MovingText = () => {
  const [text, setText] = useState([{text: "Top bar text"}]);
  useEffect(() => {
      fetch("http://localhost:5000/second-banner-moving-text")
          .then((response) => response.json())
          .then((data) => {
              setText(data);
          });
  }, []);
  const repeatedData = Array(3).fill(text);
  return (
    <div>
      <Marquee pauseOnHover={true} className="  text-2xl py-2 text-[#4f4a47]">
        {repeatedData.map((item, index) => (
          <p key={index} className="mx-10">
            {" "}
            {item.text}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default MovingText;
