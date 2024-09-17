import { useQuery } from "react-query";
import NewArrivalsItems from "./NewArrivalsItems";

const NewArrivals = () => {
    const { isLoading, data: items } = useQuery(["allProduct"], async () => {
        const response = await fetch(
            "https://black-and-white-server.vercel.app/products/status?status=new"
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='hidden md:block my-14'>
            <div>
                <div className='text-center'>
                    <h1 className='mb-4 text-center font-bold text-3xl text-[#3c3633]'>
                        NEW LAUNCHED
                    </h1>
                </div>
                <div className=''></div>
            </div>
        </div>
    );
};

export default NewArrivals;
