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
  setPriceRange,
}) => {
  return (
    <div className="flex justify-center items-center border-t border-black pt-3">
      <div className="w-full">
        <h1 className="text-4xl font-bold capitalize text-center">{title}</h1>
        <div className="flex flex-row gap-10 mt-8 justify-center items-start">
          {/* Availability Section */}
          <div className="text-left">
            <p className="font-semibold">Availability</p>
            <div className="flex gap-3 ">
              <p>In stock ({(stockQuantity as { inStock: number }).inStock})</p>
            </div>
            <div className="flex gap-3">
              <p>
                Out of stock ({(stockQuantity as { soldOut: number }).soldOut})
              </p>
            </div>
          </div>

          {/* Price Section */}
          <div className="text-left">
            <p className="font-semibold">Price</p>
            <form className="w-[130px]">
              <span>&#x09F3; {(priceRange as Range).min}</span> to{" "}
              <span>&#x09F3; {(priceRange as Range).max}</span>
              <div className="mt-3">
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
