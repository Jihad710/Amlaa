import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const MovingText = () => {
    const [text, setText] = useState([{ text: "Top bar text" }]);
    useEffect(() => {
        fetch("https://amlaa.vercel.app/second-banner-moving-text")
            .then((response) => response.json())
            .then((data) => {
                setText(data);
            });
    }, []);
    const repeatedData = Array(3).fill(text);
    return (
        <div>
            <Marquee pauseOnHover={true} className='  text-2xl py-2'>
                {repeatedData.map((item, index) => (
                    <p key={index} className='mx-10'>
                        {" "}
                        {item.text}
                    </p>
                ))}
            </Marquee>
        </div>
    );
};

export default MovingText;
