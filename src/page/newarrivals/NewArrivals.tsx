import { useQuery } from "react-query";
import image_1 from "../../assets/arival_1.png";
import image_2 from "../../assets/arival_2.png";
import image_3 from "../../assets/arival_3.png";
import image_4 from "../../assets/arival_4.png";

import NewArrivalsItems from "./NewArrivalsItems";
const NewArrivals = () => {
    const { isLoading, data: items } = useQuery(["allProduct"], async () => {
        const response = await fetch(
            "http://localhost:5000/products"
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    });

    return (
        <div className='hidden md:block my-14'>
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
