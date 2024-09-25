import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

import { Keyboard, Scrollbar, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

interface items {
    title: string;
    images: string;
    name: string;
    price: number;
    status: string;
    _id: string;
}

const AccecsarisCard = ({ data }: { data: items[] }) => {
    return (
        <div className=' pt-24'>
            <div className='grid grid-cols-4 gap-4'>
                {data.map((item) => (
                    <Link
                        className='flex rounded-md justify-center w-full my-1'
                        key={item._id}
                        to={`/product/${item._id}`}>
                        <div>
                            <div className='h-[460px] rounded-md overflow-hidden relative'>
                                <img
                                    className='w-full h-full object-cover object-top'
                                    src={item?.images[0]}
                                    alt=''
                                />
                            </div>
                            <div className='mt-4 px-3 .barlow-regular'>
                                <p className='capitalize barlow-regular text-lg'>
                                    {item?.title}
                                </p>
                                <p className='barlow-semibold mt-1 text-lg'>
                                    ${item?.price}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className='w-32 rounded-full mt-10 mx-auto text-center'>
                <Link to={"/allProduct"}>
                    <button className='text-white uppercase font-semibold bg-[#3c3633] w-full py-3 px-4 text-center rounded-full'>
                        View All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AccecsarisCard;
