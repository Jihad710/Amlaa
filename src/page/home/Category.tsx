import { NavLink } from "react-router-dom";

const items = [
    {
        name: "T-Shirt",
        route: "/products/tshirt",
        image: "https://desiminimals.com/cdn/shop/files/20240212-_RHN2763.jpg?v=1708334241&width=352",
    },
    {
        name: "Shirt",
        route: "/products/shirt",

        image: "https://desiminimals.com/cdn/shop/files/DSC_3852.jpg?v=1698665188&width=352",
    },
    {
        name: "Bottomware",
        route: "/products/bottomwear",
        image: "https://desiminimals.com/cdn/shop/files/20240212-_RHN2895.jpg?v=1708335900&width=352",
    },
    {
        name: "Jacket",
        route: "/products/jacket",

        image: "https://desiminimals.com/cdn/shop/files/DSC_5166.jpg?v=1704369101&width=352",
    },
    {
        name: "Headware",
        route: "/products/headwear",
        image: "https://desiminimals.com/cdn/shop/files/DSC_3174_37b58d4f-7527-4b46-ada1-fa2c11f57004.jpg?v=1698665391&width=352",
    },
    {
        name: "Accessories",
        route: "/products/accessories",
        image: "https://desiminimals.com/cdn/shop/files/20240213-_RHN3116.jpg?v=1708335676&width=352",
    },
    {
        name: "Deals",
        route: "/collection/deals",
        image: "https://desiminimals.com/cdn/shop/files/DSC_5327_b077cd25-07fc-405e-8b17-2ec8555587e3.jpg?v=1704454596&width=352",
    },
    {
        name: "Polos",
        route: "/collection/polos",
        image: "https://desiminimals.com/cdn/shop/files/20240213-_RHN3102.jpg?v=1708335367&width=352",
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
                            className='relative flex justify-center items-center'
                            key={index}>
                            <img
                                className='rounded-3xl w-[255px] h-[271px]'
                                src={item.image}
                                alt=''
                            />
                            <p className='absolute top-1/1 mx-3 bottom-1/1 left-0 right-0 text-white text-2xl  p-2   text-center'>
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
