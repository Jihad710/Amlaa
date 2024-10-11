import InputRange, { Range } from "react-input-range";
import "react-input-range/lib/css/index.css";
type DynamicBannerProps = {
    title: string;
    data: object;
    minPrice: number;
    maxPrice: number;
    priceRange: object;
    stockQuantity: object;
    setPriceRange: Function;
};

const DynamicBanner: React.FC<DynamicBannerProps> = ({
    title,
    minPrice,
    maxPrice,
    priceRange,
    stockQuantity,
    setPriceRange
}) => {

    return (
        <div className=' flex justify-center items-center border-t border-black pt-3'>
            <div className='text-center'>
                <h1 className='text-4xl  font-bold capitalize'>{title}</h1>
                <div className='flex gap-20 mt-8'>
                    <div>
                        <p>Availability</p>
                        <div className='flex gap-3'>
                            {/* <input
                                type='checkbox'
                                name='stockin'
                                id='stockin'
                            /> */}
                            <p>In stock ({(stockQuantity as { inStock: number }).inStock})</p>
                        </div>
                        <div className='flex gap-3'>
                            {/* <input
                                type='checkbox'
                                name='stockout'
                                id='stockout'
                            /> */}
                            <p>Out of stock ({(stockQuantity as { soldOut: number }).soldOut})</p>
                        </div>
                    </div>
                    <div>
                        <p>Price </p>
                        <form className='w-[200px]'>
                            <span className=''>&#x09F3; {(priceRange as Range).min}</span>{" "}
                            to <span>&#x09F3; {(priceRange as Range).max}</span>
                            <div className='mt-3'>
                                <InputRange
                                    maxValue={maxPrice}
                                    minValue={minPrice}
                                    formatLabel={() => ""}
                                    value={priceRange as Range}
                                    onChange={(value) => {
                                        if (typeof value === "object") {
                                            setPriceRange(value as Range);
                                        }
                                    }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicBanner;
