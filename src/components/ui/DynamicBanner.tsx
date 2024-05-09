import React from "react";

type DynamicBannerProps = {
  title: string;
};

const DynamicBanner: React.FC<DynamicBannerProps> = ({ title }) => {
  return (
    <div className="hightBanner flex justify-center items-center ">
      <div className="text-center">
        <h1 className="text-4xl  font-bold">{title}</h1>
        <div className="flex gap-20 mt-14">
          <div>
            <p>Availability</p>
            <div className="flex gap-3">
              <input type="checkbox" name="stockin" id="stockin" />
              <p>In stock (63)</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" name="stockout" id="stockout" />
              <p>Out of stock (83)</p>
            </div>
          </div>
          <div>
            <p>Price </p>
            <p>
              <span>₹ 0.00</span> <span>₹ 5,000.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicBanner;
