import { useQuery } from "react-query";
import image_1 from "../../assets/arival_1.png";
import image_2 from "../../assets/arival_2.png";
import image_3 from "../../assets/arival_3.png";
import image_4 from "../../assets/arival_4.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import NewArrivalsItems from "./NewArrivalsItems";
const NewArrivals = () => {
    const { isLoading, data: items } = useQuery(["allProduct"], async () => {
        const response = await fetch(
            "https://black-and-white-server.vercel.app/products/status?status=new"
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='hidden md:block my-14'>
            <div>
                <div className='text-center'>
                    <h1 className='mb-4 text-center font-bold text-3xl text-[#3c3633]'>
                        NEW LAUNCHED
                    </h1>
                </div>
                {/* <div className=''>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className='mySwiper'>
                        <SwiperSlide>
                            <div className=''>
                                <img src='' alt='' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div> */}
                <NewArrivalsItems items={items}></NewArrivalsItems>
            </div>
        </div>
    );
};

export default NewArrivals;
