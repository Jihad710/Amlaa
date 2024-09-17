import Marquee from "react-fast-marquee";

const TopBar = () => {
    const text = [
        {
            title: "AVAIL 15% OFF ON ALL ORDERS ABOVE ₹3500, USE CODE - PY15 ",
        },
        {
            title: "AVAIL 15% OFF ON ALL ORDERS ABOVE ₹3500, USE CODE - PY15 ",
        },
        {
            title: "AVAIL 15% OFF ON ALL ORDERS ABOVE ₹3500, USE CODE - PY15 ",
        }
    ];
    return (
        <div>
            <div className='text-center bg-[#3c3633] text-white py-3 font-light'>
                <Marquee pauseOnHover={true} speed={40} >
                    {text.map((item, index) => (
                        <p className='mx-20' key={index}>{item.title} </p>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TopBar;
