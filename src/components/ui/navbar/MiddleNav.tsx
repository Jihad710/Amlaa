import { FaRegUser } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
const MiddleNav = () => {
    return (
        <div className="flex items-center my-4">
            <div className='w-full flex justify-center'>
                <img src={logo} />
            </div>
            <div className="bg-[#ccc] p-3 px-4">
                <ul className="flex items-center gap-3 text-xl justify-evenly">
                    <li><FaRegUser /></li>
                    <li className="text-2xl"><IoIosSearch /></li>
                    <li><FiShoppingCart /></li>
                </ul>
            </div>
        </div>
    );
};

export default MiddleNav;
