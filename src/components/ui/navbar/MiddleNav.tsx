import { FaRegUser } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
const MiddleNav = () => {
    return (
        <div className='flex items-center my-4'>
            <div className='w-full flex justify-center'>
                <Link to='/'>
                    {" "}
                    <img src={logo} />
                </Link>
            </div>
            <div className='bg-[#ccc] p-3 px-4'>
                <ul className='flex items-center gap-3 text-xl justify-evenly'>
                    <li>
                        <FaRegUser />
                    </li>
                    <li className='text-2xl'>
                        <IoIosSearch />
                    </li>
                    <li>
                        <Link to={"/cart"}>
                            <FiShoppingCart />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MiddleNav;
