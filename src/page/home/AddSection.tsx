import { NavLink } from "react-router-dom";
import addImage from "../../../public/addImages.jpeg";
import MovingText from "./MovingText";

const AddSection = () => {
  return (
    <div>
      <div className="w-full h-screen relative">
        <div className="w-full h-full absolute top-0 left-0">
          <img className="w-full h-full object-cover" src={addImage} alt="" />
        </div>
        <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className=" p-8 rounded-lg text-center">
            <h1 className="text-white w-full text-7xl font-bold mb-4">
              SCULPT CROP TOPS
            </h1>
            <NavLink to={"/allProduct"}>
              <button className="text-white uppercase font-semibold bg-[#3c3633] mt-3 py-3 px-7 rounded-full">
                Explore
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        <MovingText></MovingText>
      </div>
    </div>
  );
};

export default AddSection;
