import { NavLink } from "react-router-dom";
import tshirt from "../../assets/categories/t-shirt.png";
import accessories from "../../assets/categories/accessories.png";
import bottomwear from "../../assets/categories/bottom-wear.png";
import deals from "../../assets/categories/deals.png";
import oversizeshirt from "../../assets/categories/oversize-t-shirt.png";
import polos from "../../assets/categories/polos.png";
import premiumsolids from "../../assets/categories/premium-solids.png";
import regularfit from "../../assets/categories/regular-fit.png";
const items = [
    {
        name: "T-Shirt",
        route: "/products/tshirt",
        image: tshirt,
    },
    {
        name: "OVERSIZED T-SHIRT",
        route: "/products/oversize-t-shirt",
        image: oversizeshirt,
    },
    {
        name: "Polos",
        route: "/products/polos",
        image: polos,
    },
    {
        name: "PREMIUM SOLIDS",
        route: "/products/premium-solids",
        image: premiumsolids,
    },
    {
        name: "Bottomware",
        route: "/products/bottomwear",
        image: bottomwear,
    },
    {
        name: "Deals",
        route: "/products/deals",
        image: deals,
    },
    {
        name: "Accessories",
        route: "/products/accessories",
        image: accessories,
    },
    {
        name: "Regular Fit",
        route: "/products/regular-fit",
        image: regularfit,
    },
];
const Category = () => {
    return (
        <section className='w-11/12 mx-auto pt-24'>
            <h1 className=' text-center font-bold text-3xl text-[#3c3633]'>
                CATEGORY
            </h1>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-5 mt-14'>
                {items.map((item, index) => (
                    <NavLink key={index} to={item?.route}>
                        <div
                            className='relative h-[350px] rounded-3xl overflow-hidden flex justify-center items-center'
                            key={index}>
                            <div className='absolute inset-0 bg-gradient-to-b from-white/0 to-black/50'></div>
                            <img
                                className='rounded-3xl w-full h-full'
                                src={item.image}
                                alt=''
                            />
                            <p className='absolute bottom-4 left-5 text-white text-xl  p-2 uppercase'>
                                {item.name}
                            </p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </section>
    );
};

export default Category;
