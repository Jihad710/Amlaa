import React, { useState } from "react";
import banner from "../../assets/banner.jpg";
import InputRange from "react-input-range";
type DynamicBannerProps = {
    title: string;
};

const DynamicBanner: React.FC<DynamicBannerProps> = ({ title }) => {
    const [priceRange, setPriceRange] = useState({ min: 2, max: 10 });
    return (
        <div className=' flex justify-center items-center border-t border-black pt-3'>
            <div className='text-center'>
                <h1 className='text-4xl  font-bold capitalize'>{title}</h1>
                <div className='flex gap-20 mt-8'>
                    <div>
                        <p>Availability</p>
                        <div className='flex gap-3'>
                            <input
                                type='checkbox'
                                name='stockin'
                                id='stockin'
                            />
                            <p>In stock (63)</p>
                        </div>
                        <div className='flex gap-3'>
                            <input
                                type='checkbox'
                                name='stockout'
                                id='stockout'
                            />
                            <p>Out of stock (83)</p>
                        </div>
                    </div>
                    <div>
                        <p>Price </p>
                        <p>
                            <span>₹ 0.00</span> <span>₹ 5,000.00</span>
                            <InputRange
                                value={priceRange}
                                onChange={value => setPriceRange(value)}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicBanner;
