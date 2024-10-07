import image from "../../assets/secondBanner.png";
import MovingText from "./MovingText";

const SecondBanner = () => {
    return (
        <div>
            <div className='w-full h-[110vh] relative'>
                <div className='w-full h-full absolute top-0 left-0'>
                    <img
                        className='w-full h-full object-cover'
                        src={image}
                        alt=''
                    />
                </div>
                <div className='w-1/2 absolute top-14 left-14'>
                    <h2 className='text-white text-6xl font-medium'>
                        FEEL{" "}
                        <span className='text-[#D1EA8C] font-bold'>
                            COMFOTABLE
                        </span>
                    </h2>{" "}
                    <h2 className='text-white text-6xl font-medium mt-3'>
                        IN EVERY{" "}
                        <span className=' font-bold'>STEP</span>
                    </h2>
                    <p className='sarina-regular text-5xl text-white text-right mt-3'>
                        Feeling fareless
                    </p>
                </div>
                <div className='w-1/2 absolute bottom-14 right-14 text-right'>
                    <h2 className='text-white text-4xl font-medium  '>
                        <span className='text-[#D1EA8C] font-bold mr-2 finger-paint-regular'>
                        UNISEX
                        </span>
                        SUMMER FIT
                    </h2>{" "}
                    <h2 className='text-white text-4xl font-medium mt-3'>
                    T-SHIRT
                        <span className='font-bold text-5xl ml-2'>HELLO,</span>
                    </h2>
                    <p className='text-6xl font-bold text-white text-right mt-3'>
                    SUMMER
                    </p>
                </div>
            </div>
            <div className="bg-[#902C32] text-white">
                <MovingText></MovingText>
            </div>
        </div>
    );
};

export default SecondBanner;
