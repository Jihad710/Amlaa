import { useQuery } from "react-query";

import NewArrivalsItems from "./NewArrivalsItems";
const NewArrivals = () => {
    const { data: items } = useQuery(["allProduct"], async () => {
        const response = await fetch(
            "https://amlaa.vercel.app/product/newlaunched"
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    });

    return (
        <div className=' my-14'>
            <div>
                <div className='text-center'>
                    <h1 className='mb-4 text-center font-bold text-3xl text-[#3c3633]'>
                        NEW LAUNCHED
                    </h1>
                </div>
                <NewArrivalsItems items={items}></NewArrivalsItems>
            </div>
        </div>
    );
};

export default NewArrivals;
