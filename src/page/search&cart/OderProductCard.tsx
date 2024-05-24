import { FiMinus, FiPlus } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const OderProductCard = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="flex flex-col">
        {/* Table Header */}
        <div className="flex flex-row w-full justify-end bg-gray-200 px-4 py-2">
          <p className="w-2/12 text-right">Quantity</p>
          <p className="w-2/12 text-right">Total</p>
        </div>
        <hr className="w-full h-1 bg-black my-2" />
        {/* Table Rows */}
        <div className="flex flex-col">
          {/* Example row */}
          <div className="flex flex-row items-center justify-between border-b border-gray-200 px-4 py-2">
            <div className="flex items-center">
              <img className="w-24 h-auto mr-4" src="image-url" alt="Product" />
              <div>
                <p className="text-lg font-semibold">
                  At Peace — Relax Fit T-shirt
                </p>
                <p>
                  <span className="font-medium">Size:</span>
                  <span className="ml-1">Medium</span>
                </p>
                <p>
                  <span className="font-medium">Style:</span>
                  <span className="ml-1">Unisex Relaxed Fit</span>
                </p>
                <p>
                  <span className="font-medium">Color:</span>
                  <span className="ml-1">Black</span>
                </p>
              </div>
            </div>
            <div className="w-2/12 text-right">
              <div className="flex items-center justify-center gap-4 border-b border-black border-solid border-b-3">
                <FiMinus />
                <p>0</p>
                <FiPlus />
              </div>
            </div>
            <p className="w-2/12 text-right">$10.00</p>
          </div>
        </div>
      </div>
      <hr className="w-full h-1 bg-black my-2" />
      <NavLink to="/oderAddres">
        <button className="mt-10 p-4 px-10 tracking-widest font-semibold text-xl text-white bg-[#3c3633] rounded-full flex justify-center w-fit">
          Check Out
        </button>
      </NavLink>
    </div>
  );
};

export default OderProductCard;
