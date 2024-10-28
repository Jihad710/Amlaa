import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { TCartItem, TProductDetails } from "../../components/type/Types";
import { toast } from "react-hot-toast";
import { useAddToCartLocal } from "../../hooks/useAddToCartLocal";
import { useGetToCardLocal } from "../../hooks/useGetToCardLocal";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { CgEditBlackPoint } from "react-icons/cg";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const ProductDetails: React.FC = () => {
  const { ReFetching } = useGetToCardLocal();
  const [detailsOpen, setDetailsOpen] = useState(false);

  const details = useLoaderData() as TProductDetails;
  const initialImage = details.images?.[0] || "";
  const [mainImage, setMainImage] = useState(initialImage);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const { addToCart, isLoading } = useAddToCartLocal();
  useEffect(() => {
    // Scroll to the top when the component is first rendered
    window.scrollTo(0, 0);
  }, []);
  const handleImageHover = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }

    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    const cartItem: TCartItem = {
      menuItemId: details._id,
      name: details.title,
      image: mainImage,
      price: details.price,
      discount: details.discount,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
      detailsMaterial: "",
      notAvailable: undefined,
      localStoreId: 0,
    };
    ReFetching();
    addToCart(cartItem);
  };

  const calculateDiscountedPrice = () => {
    if (details?.discount && details.price) {
      const discountAmount = (details.price * details.discount) / 100;
      return details.price - discountAmount;
    }
    return null;
  };

  const discountedPrice = calculateDiscountedPrice();

  if (!details) {
    return <div>Loading...</div>;
  }
  console.log(details);
  return (
    <div className="md:w-11/12 w-full p-3 sm:mx-10 md:mx-auto mt-10 text-[#3c3633] md:mb-36">
      <div className=" capitalize">
        <div className="grid md:grid-cols-2 sm:gap-10 w-full">
          <div className="md:flex flex-row-reverse md:gap-5  ">
            <div className="">
              {mainImage && (
                <img
                  src={mainImage}
                  alt={details.title}
                  className="md:w-[457px] w-full h-[500px] object-contain mx-auto"
                />
              )}
            </div>
            <div className="">
              <div className="overflow-y-auto md:h-[500px] flex md:block justify-center gap-1 sm:gap-5 mt-5 sm:w-full  overflow-x-auto mx-auto hide-scrollbar ">
                {details.images?.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt=""
                      className="w-20 mb-5 h-28 cursor-pointer hover:opacity-80 transition-opacity"
                      onMouseOver={() => handleImageHover(img)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <h3 className="font-bold text-xl sm:text-2xl md:text-4xl mb-4 md:text-start">
              {details?.title}
            </h3>
            <div className="mb-8 md:text-start">
              <span className="block text-2xl font-bold opacity-90">
                {details.discount > 0 ? (
                  <p className="mb-5 md:font-medium text-xl gap-1 flex items-center opacity-80">
                    {details?.discount && details.price && (
                      <>
                        <span className="line-through">
                          {" "}
                          &#x09F3;{details.price}
                        </span>
                        {" - "}
                        <span> &#x09F3; {discountedPrice}</span>
                        <span className="text-sm rounded p-px bg-red-200 text-red-700">
                          -{details?.discount}%
                        </span>
                      </>
                    )}
                  </p>
                ) : (
                  <span> &#x09F3; {details.price}</span>
                )}
                <small className="block font-light text-sm">
                  Tax included.
                </small>
              </span>
            </div>

            <p className="mb-5 md:font-bold text-xl opacity-80">
              Fit: {details.fit}
            </p>
            <div className="mb-5 capitalize">
              <p className="md:font-bold text-xl opacity-80 pb-2">Color:</p>
              <div className="flex flex-wrap gap-2">
                {(typeof details.color === "string"
                  ? details.color.split(",")
                  : details.color
                ).map((color, index) => (
                  <button
                    key={index}
                    className={`border capitalize border-[#3c3633] px-6 py-3  rounded ${
                      selectedColor === color ? "bg-gray-400" : ""
                    }`}
                    onClick={() => handleColorClick(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-5 capitalize">
              <p className="md:font-bold text-xl opacity-80 py-2">Size:</p>
              <div className="flex flex-wrap gap-2">
                {details.size &&
                  (typeof details.size === "string"
                    ? details.size.split(",")
                    : details.size
                  ).map((size, index) => (
                    <button
                      key={index}
                      className={`border uppercase border-[#3c3633] px-6 py-3  rounded ${
                        selectedSize === size ? "bg-gray-400" : ""
                      }`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
              </div>
            </div>
            {details.dimensions && (
              <div className="text-xl mb-5">
                <p className="font-bold">Dimensions -</p>
                <ul>
                  <li>
                    Height -{" "}
                    <span className="font-bold opacity-80">
                      {details.dimensions.height} inches
                    </span>
                  </li>
                  <li>
                    Width -{" "}
                    <span className="font-bold opacity-80">
                      {details.dimensions.width} inches
                    </span>
                  </li>
                  <li>
                    Handle -{" "}
                    <span className="font-bold opacity-80">
                      {details.dimensions.handle} inches
                    </span>
                  </li>
                </ul>
              </div>
            )}
            {details.capacity && (
              <p className="font-xl mb-5">
                Capacity -{" "}
                <span className="font-bold">{details.capacity}L</span>
              </p>
            )}
            {details.status == "in-stock" && (
              <p className="flex items-center gap-2 text-lg  font-medium my-2">
                {" "}
                <CgEditBlackPoint className="text-green-500" />
                <span>In stock, ready to ship</span>
              </p>
            )}
            <p className="flex items-center gap-2 text-lg font-medium my-2">
              {" "}
              <MdOutlineLocalShipping className="" />
              <span>Free shipping on all orders.</span>
            </p>
            <p className="flex items-center gap-2 text-lg  font-medium my-2">
              {" "}
              <IoCheckmarkDoneCircleOutline className="" />
              <span>Cash on delivery available.</span>
            </p>
            <div>
              <button
                onClick={handleAddToCart}
                className="w-full text-xl mt-5 font-bold border-2 border-[#3c3633] px-4 py-2 md:mr-2 rounded-xl disabled:cursor-not-allowed disabled:opacity-40"
                disabled={isLoading || details.status == "sold-out"}
              >
                {isLoading
                  ? "Adding to Cart..."
                  : details.status == "sold-out"
                  ? "Sold out"
                  : "Add to Cart"}
              </button>
            </div>
            {details.description && (
              <div>
                <p
                  className="flex items-center mb-5 cursor-pointer justify-between border-b-2 mt-5 py-2 border-black text-lg "
                  onClick={() => setDetailsOpen(!detailsOpen)}
                >
                  <span className="text-xl font-semibold">Product Details</span>
                  <span>{detailsOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
                </p>
                <div
                  className={`${
                    detailsOpen
                      ? "opacity-100 max-h-96 transition-all duration-300 ease-in-out overflow-y-auto"
                      : "opacity-0 max-h-0 transition-all duration-300 ease-in-out overflow-hidden"
                  }`}
                >
                  {details.description}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
