import React, { useEffect, useState } from "react";
import { TCartItem, TProductDetails } from "../../components/type/Types";
import toast from "react-hot-toast";
import { useAddToCartLocal } from "../../hooks/useAddToCartLocal";
import { useNavigate } from "react-router-dom";

const HighlightsProducts: React.FC = () => {
  const [details, setDetails] = useState<TProductDetails>();
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(true);
  const initialImage = details?.images?.[0] || "";
  const [mainImage, setMainImage] = useState(initialImage);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const { addToCart, isLoading } = useAddToCartLocal();
  const navigate = useNavigate();

  const handleImageHover = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  const handleImageClick = () => {
    if (details?._id) {
      navigate(`/product/${details._id}`);
    }
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

    if (!details) {
      return;
    }

    const cartItem: TCartItem = {
      localStoreId: 0,
      menuItemId: details?._id,
      name: details?.title,
      image: mainImage,
      price: details?.price,
      discount: details?.discount,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
      detailsMaterial: "",
      notAvailable: undefined,
    };

    addToCart(cartItem);
  };

  const calculateDiscountedPrice = () => {
    if (details?.discount && details?.price) {
      const discountAmount = (details?.price * details?.discount) / 100;
      return details?.price - discountAmount;
    }
    return null;
  };

  const discountedPrice = calculateDiscountedPrice();

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(
          `https://amlaa.vercel.app/highlight-product-link`
        );

        const result = await response.json();
        if (result) {
          setLoading(false);
          setLink(result.link);
        }
        console.log(result);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (!link) {
          return;
        }
        const linkId = link.split("/").pop();
        const response = await fetch(
          `https://amlaa.vercel.app/product/${linkId}`
        );

        const result = await response.json();
        if (result.status) {
          setDetails(result);
          setMainImage(result?.images[0]);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [link]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:w-11/12 w-full mx-auto mt-5 md:mt-10 text-[#3c3633] mb-8 md:mb-36 px-4 md:px-0">
      <div className="container capitalize">
        <div className="md:flex md:gap-10 items-center">
          <div className="md:flex md:gap-5 md:w-1/2">
            <div className="hidden md:flex">
              <div className="overflow-y-auto h-[400px] md:h-[500px] hide-scrollbar">
                {details &&
                  details?.images?.map((img, index) => (
                    <div key={index}>
                      <img
                        src={img}
                        alt=""
                        className="w-16 md:w-20 mb-3 md:mb-5 h-20 md:h-28 cursor-pointer hover:opacity-80 transition-opacity"
                        onMouseOver={() => handleImageHover(img)}
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="w-full md:w-auto">
              {mainImage && (
                <img
                  src={mainImage || details?.images[0]}
                  alt={details?.title}
                  className="w-full h-full md:w-[457px] md:h-[500px] object-cover object-top mx-auto cursor-pointer"
                  onClick={handleImageClick}
                />
              )}
            </div>
          </div>
          <div className="md:w-6/12 w-full mt-5 md:mt-0 md:ps-10">
            <h3 className="font-bold text-2xl md:text-4xl mb-3 md:mb-4 text-center md:text-start">
              {details?.title}
            </h3>
            <div className="mb-5 md:mb-8 text-center md:text-start">
              <span className="block text-xl md:text-2xl font-bold opacity-90">
                {details?.discount && details?.discount > 0 ? (
                  <p className="mb-3 md:mb-5 text-lg md:text-xl gap-1 flex justify-center md:justify-start items-center opacity-80">
                    {details?.discount && details?.price && (
                      <>
                        <span className="line-through">
                          {" "}
                          &#x09F3;{details?.price}
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
                  <span> &#x09F3; {details?.price}</span>
                )}
                <small className="block font-light text-xs md:text-sm">
                  Tax included.
                </small>
              </span>
            </div>

            <p className="mb-4 md:mb-5 font-medium text-lg md:text-xl opacity-80 text-center md:text-start">
              Fit: {details?.fit}
            </p>
            <div className="mb-4 md:mb-5 text-center md:text-start">
              <p className="font-medium text-lg md:text-xl opacity-80 pb-1 md:pb-2">
                Color:
              </p>
              <div className="flex justify-center md:justify-start gap-2">
                {(typeof details?.color === "string"
                  ? details?.color.split(",")
                  : details?.color
                )?.map((color, index) => (
                  <button
                    key={index}
                    className={`border border-[#3c3633] px-4 py-2 md:px-6 md:py-3 rounded ${
                      selectedColor === color ? "bg-gray-400" : ""
                    }`}
                    onClick={() => handleColorClick(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4 md:mb-5 text-center md:text-start">
              <p className="font-medium text-lg md:text-xl opacity-80 py-1 md:py-2">
                Size:
              </p>
              <div className="flex justify-center md:justify-start flex-wrap gap-2">
                {details?.size &&
                  (typeof details?.size === "string"
                    ? details?.size.split(",")
                    : details?.size
                  )?.map((size, index) => (
                    <button
                      key={index}
                      className={`border border-[#3c3633] px-4 py-2 md:px-6 md:py-3 rounded ${
                        selectedSize === size ? "bg-gray-400" : ""
                      }`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
              </div>
            </div>
            {details?.dimensions && (
              <div className="text-lg md:text-xl mb-4 md:mb-5 text-center md:text-start">
                <p className="font-bold">Dimensions -</p>
                <ul>
                  <li>
                    Height -{" "}
                    <span className="font-medium opacity-80">
                      {details?.dimensions.height} inches
                    </span>
                  </li>
                  <li>
                    Width -{" "}
                    <span className="font-medium opacity-80">
                      {details?.dimensions.width} inches
                    </span>
                  </li>
                  <li>
                    Handle -{" "}
                    <span className="font-medium opacity-80">
                      {details?.dimensions.handle} inches
                    </span>
                  </li>
                </ul>
              </div>
            )}
            <div className="text-center md:text-start">
              <button
                onClick={handleAddToCart}
                className="w-full md:w-auto text-lg md:text-xl mt-4 md:mt-0 font-bold border-2 border-[#3c3633] px-4 py-2 rounded-xl disabled:cursor-not-allowed disabled:opacity-40"
                disabled={isLoading || details?.status === "sold-out"}
              >
                {isLoading
                  ? "Adding to Cart..."
                  : details?.status === "sold-out"
                  ? "Sold out"
                  : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightsProducts;
