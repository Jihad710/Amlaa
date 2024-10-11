import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import FormDialog from "../../FormDialog";

const MobileNavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleNavToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='lg:hidden'>
            <nav
                className={`bg-[#3c3633] w-10/12 fixed left-1/2 transform -translate-x-1/2 bottom-8 z-20 py-3 px-4 flex flex-col items-center rounded-2xl backdrop-blur-lg transition-all duration-300 ${
                    expanded ? "h-auto" : "h-[40px]"
                }`}>
                {expanded && (
                    <div className='flex w-full flex-col items-center gap-2 mb-2'>
                        <NavLink
                            to='/products/all'
                            className='py-2 px-4 rounded text-white'>
                            ALL
                        </NavLink>
                        <NavLink
                            to='/products/deals'
                            className='py-2 px-4 rounded text-white'>
                            Deals
                        </NavLink>
                        <NavLink to='' className='py-2 px-4 rounded text-white'>
                            T-shirt
                        </NavLink>
                        <NavLink
                            to='/collection/bottomwar'
                            className='py-2 px-4 rounded text-white'>
                            Headwear
                        </NavLink>
                        <NavLink
                            to='/collection/bottomwar'
                            className='py-2 px-4 rounded text-white'>
                            Bottomwear
                        </NavLink>
                        <NavLink
                            to='/collection/bottomwar'
                            className='py-2 px-4 rounded text-white'>
                            Accessories
                        </NavLink>
                        <NavLink
                            to='/login'
                            className='py-2 px-4 rounded text-white'>
                            login
                        </NavLink>
                        <FormDialog />
                    </div>
                )}
                <div
                    className={`flex items-center justify-center w-full ${
                        expanded ? "border-t pt-2" : ""
                    }`}>
                    <button
                        className=' px-4 rounded text-white'
                        onClick={handleNavToggle}>
                        {expanded ? <IoMdClose /> : <GiHamburgerMenu />}
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default MobileNavBar;
