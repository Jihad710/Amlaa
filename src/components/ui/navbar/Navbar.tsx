import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetToCardLocal } from "../../../hooks/useGetToCardLocal";
import { FaAngleDown, FaChevronDown, FaSortDown } from "react-icons/fa";

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

    return (
        <div className=''>
            <ul className='flex items-center justify-center border-t border-black'>
                <li className='text-2xl px-7 py-4'>
                    <NavLink to={"/products"}>All</NavLink>
                </li>
                <li className='text-2xl px-7 py-4'>
                    <NavLink to={"/collection/best-deal"}>Deals</NavLink>
                </li>
                <li className='text-2xl px-7 py-4'>
                    <NavLink to={"/collection/best-deal"}>Deals</NavLink>
                </li>
                <li className='text-2xl px-7 py-4 relative group'>
                    <NavLink className={"flex items-center gap-3"} to={"/"}>
                        Topwear{" "}
                        <FaChevronDown className='text-sm mt-2 group-hover:-rotate-180 duration-500' />
                    </NavLink>
                    <ul className='absolute top-14 left-0 z-10 hidden w-[180px] rounded-md shadow-lg border cursor-default bg-white group-hover:block overflow-hidden'>
                        <li className='text-xl'>
                            <Link
                                className='w-full block hover:bg-slate-400 px-3 py-2'
                                to={"/collection/best-deal"}>
                                T-shirt
                            </Link>
                        </li>
                        <li className='text-xl'>
                            <Link
                                className='w-full block hover:bg-slate-400 px-3 py-2'
                                to={"/collection/best-deal"}>
                                Polo
                            </Link>
                        </li>
                        <li className='text-xl'>
                            <Link
                                className='w-full block hover:bg-slate-400 px-3 py-2'
                                to={"/collection/best-deal"}>
                                shirt
                            </Link>
                        </li>
                        <li className='text-xl'>
                            <Link
                                className='w-full block hover:bg-slate-400 px-3 py-2'
                                to={"/collection/best-deal"}>
                                Jacket
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='text-2xl px-7 py-4'>
                    <NavLink to={"/collection/bottomwar"}>Bottomwear</NavLink>
                </li>
                <li className='text-2xl px-7 py-4 relative group'>
                    <NavLink className={"flex items-center gap-3"} to={"/"}>
                        Accesaris{" "}
                        <FaChevronDown className='text-sm mt-2 group-hover:-rotate-180 duration-500' />
                    </NavLink>
                    <ul className='absolute top-14 left-0 z-10 hidden w-[180px] rounded-md shadow-lg border cursor-default bg-white group-hover:block overflow-hidden'>
                        <li className='text-xl'>
                            <Link
                                className='w-full block hover:bg-slate-400 px-3 py-2'
                                to={"/collection/best-deal"}>
                                Headwear
                            </Link>
                        </li>
                        <li className='text-xl'>
                            <Link
                                className='w-full block hover:bg-slate-400 px-3 py-2'
                                to={"/collection/best-deal"}>
                                Bags/Wallets
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
