import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/dm_full_1_shopify_black_ss24.avif";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import FormDialog from "../../FormDialog";
import { FaAngleDown } from "react-icons/fa6";
import { useGetToCardLocal } from "../../../hooks/useGetToCardLocal";

const Navbar = () => {
    const { data } = useGetToCardLocal();
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const totalQuantity = data.reduce(
            (sum, item) => sum + item.quantity,
            0
        );
        setQuantity(totalQuantity);
    }, [data]);

    const [topwarDropdownOpen, setTopwarDropdownOpen] = useState(false);
    const [accesarisDropdownOpen, setAccesarisDropdownOpen] = useState(false);

    const handleTopwarMouseEnter = () => {
        setTopwarDropdownOpen(true);
        setAccesarisDropdownOpen(false);
    };

    const handleTopwarMouseLeave = () => {
        setTopwarDropdownOpen(false);
    };

    const handleAccesarisMouseEnter = () => {
        setAccesarisDropdownOpen(true);
        setTopwarDropdownOpen(false);
    };

    const handleAccesarisMouseLeave = () => {
        setAccesarisDropdownOpen(false);
    };

    return (
        <div className=''>
            <ul className='flex items-center justify-center gap-8 py-4 border-t border-black'>
                <li className='text-2xl'>
                    <NavLink to={"/"}>All</NavLink>
                </li>
                <li className='text-2xl'>
                    <NavLink to={"/"}>Deals</NavLink>
                </li>
                <li className='text-2xl'>
                    <NavLink to={"/"}>Topwear</NavLink>
                </li>
                <li className='text-2xl'>
                    <NavLink to={"/"}>Bottomwear</NavLink>
                </li>
                <li className='text-2xl'>
                    <NavLink to={"/"}>Accessories</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
