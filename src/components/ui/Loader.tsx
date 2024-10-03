import Lottie from "lottie-react";
import animation from '../../assets/loader.json'
const Loader = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
                 <Lottie animationData={animation} loop={true} className="w-[250px]"/>
            
        </div>
    );
};

export default Loader;