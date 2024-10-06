import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetToCardLocal } from "../../../hooks/useGetToCardLocal";
import { FaAngleDown, FaChevronDown, FaSortDown } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className=''>
            <ul className='flex items-center justify-center border-t border-black'>
                <li className='text-2xl px-7 py-4'>
                    <NavLink to={"/products/all"}>All</NavLink>
                </li>
                <li className='text-2xl px-7 py-4'>
                    <NavLink to={"/products/deals"}>Deals</NavLink>
                </li>
                <li className='text-2xl px-7 py-4 relative group'>
                    <p className={"flex items-center gap-3"}>
                        Topwear{" "}
                        <FaChevronDown className='text-sm mt-2 group-hover:-rotate-180 duration-500' />
                    </p>
                    <ul className='absolute top-14 left-0 z-10 hidden w-[180px] rounded-md shadow-lg border cursor-default bg-white group-hover:block overflow-hidden'>
                        <li className='text-xl'>
                            <Link
                                className='w-full block hover:bg-slate-400 px-3 py-2'
                                to={"/products/tshirt"}>
                                T-shirt
                            </Link>
                        </li>
                        <li className='text-xl'>
                            <Link
                                className='w-full block hover:bg-slate-400 px-3 py-2'
                                to={"/products/polos"}>
                                Polos
                            </Link>
                        </li>
                        <li className='text-xl'>
                            <Link
                                className='w-full block hover:bg-slate-400 px-3 py-2'
                                to={"/products/shirt"}>
                                Shirt
                            </Link>
                        </li>
                        <li className='text-xl'>
                            <Link
                                className='w-full block hover:bg-slate-400 px-3 py-2'
                                to={"/products/jacket"}>
                                Jacket
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className='text-2xl px-7 py-4'>
                    <NavLink to={"/products/headwear"}>Headwear</NavLink>
                </li>

                <li className='text-2xl px-7 py-4'>
                    <NavLink to={"/products/bottomwear"}>Bottomwear</NavLink>
                </li>

                <li className='text-2xl px-7 py-4'>
                    <NavLink to={"/products/accessories"}>Accessories</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
