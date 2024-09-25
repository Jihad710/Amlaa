import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation,Autoplay } from "swiper/modules";
import { Link, NavLink } from "react-router-dom";

// type Instructor = {
//     _id: string;
//     name: string;
//     email: string;
//     image: string;
// };
interface Item {
    title: string;
    images: string;
    name: string;
    price: number;
    status: string;
    _id: string;
    collectionStatus: string;
}

const BestDealsCarosulCard = ({ data }: { data: Item[] }) => {
    return (
        <div className=' pt-24'>
            <div className=''>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    //   scrollbar={{ draggable: true, hide: false }}
                    modules={[Navigation, Autoplay]}
                    className='mySwiper'>
                    {data.map((item) => (
                        <SwiperSlide>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='w-32 rounded-full mt-10 mx-auto text-center'>
                <NavLink to={"/allProduct"}>
                    <button className='text-white uppercase font-semibold bg-[#3c3633] w-full py-3 px-4 text-center rounded-full'>
                        View All
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default BestDealsCarosulCard;
