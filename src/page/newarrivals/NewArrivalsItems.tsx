import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
interface Item {
    discount: number;
    title: string;
    images: string;
    name: string;
    price: number;
    status: string;
    _id: string;
    collectionStatus: string;
}

interface Props {
    items: Item[];
}

const NewArrivalsItems: React.FC<Props> = ({ items = [] }) => {
    const navigate = useNavigate();
    const handleClick = (id: any) => {
        navigate(`/product/${id}`);
    };
    return (
        <div className=' pt-5 sm:pt-14 md:pt-24'>
            <div className=''>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        460: {
                            slidesPerView: 2,
                        },
                        540: {
                            slidesPerView: 3,
                        },
                        820: {
                            slidesPerView: 4,
                        },
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    //   scrollbar={{ draggable: true, hide: false }}
                    modules={[Navigation, Autoplay]}
                    className='mySwiper'>
                    {items.map((item) => (
                        <SwiperSlide>
                            <div
                                className='flex cursor-pointer rounded-md justify-center w-full my-1'
                                key={item._id}
                                onClick={() => handleClick(item._id)}>
                                <div>
                                    <div className='h-[300px] w-[300px] mx-auto sm:w-auto xsm:w-[220px] sm:h-[460px] rounded-md overflow-hidden relative'>
                                        <img
                                            className='w-full max-w-[300px] h-full object-contain sm:object-cover object-top'
                                            src={item?.images[0]}
                                            alt=''
                                        />
                                        <p className='absolute top-0 right-0 bg-[#3c3633] text-white p-2 px-4 capitalize pt-1'>
                                            {item.status === "sold-out"
                                                ? "Sold Out"
                                                : "New"}
                                        </p>
                                    </div>
                                    <div className='mt-4 px-3 .barlow-regular'>
                                        <p className='capitalize barlow-regular text-lg'>
                                            {item?.title}
                                        </p>
                                        <p className='barlow-semibold mt-1 text-lg'>
                                            {item.discount > 0 ? (
                                                <p className=' md:font-medium text-xl gap-1 flex items-center opacity-80'>
                                                    {item?.discount &&
                                                        item.price && (
                                                            <>
                                                                <span className='line-through'>
                                                                    {" "}
                                                                    &#x09F3;
                                                                    {item.price}
                                                                </span>
                                                                {" - "}
                                                                <span>
                                                                    {" "}
                                                                    &#x09F3;{" "}
                                                                    {item.price -
                                                                        (item.price *
                                                                            item.discount) /
                                                                            100}
                                                                </span>
                                                                <span className='text-sm rounded p-px bg-red-200 text-red-700'>
                                                                    -
                                                                    {
                                                                        item?.discount
                                                                    }
                                                                    %
                                                                </span>
                                                            </>
                                                        )}
                                                </p>
                                            ) : (
                                                <span>
                                                    {" "}
                                                    &#x09F3; {item.price}
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='w-32 rounded-full mt-3 sm:mt-10 mx-auto text-center'>
                <NavLink to={"/products/all"}>
                    <button className='text-white uppercase font-semibold bg-[#3c3633] w-full py-3 px-4 text-center rounded-full'>
                        View All
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default NewArrivalsItems;
