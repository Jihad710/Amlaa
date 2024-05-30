import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAddToCart } from "../../hooks/useAddToCart";

interface ProductDetails {
  _id: string;
  title: string;
  price: number;
  tex: string;
  size: string[];
  detailsMaterial: string;
  color: string[];
  productStatus: string;
  dimensions: {
    height: number;
    width: number;
    handle: number;
  };
  capacity: number;
  images: string[];
}

const ProductDetails: React.FC = () => {
  const details = useLoaderData() as ProductDetails;
  const initialImage = details.images?.[0] || "";
  const [mainImage, setMainImage] = useState(initialImage);
  const { mutate: addToCart, isLoading } = useAddToCart();
  const navigate = useNavigate();

  const user = { email: "user@example.com" };

  const handleImageHover = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  const handleAddToCart = () => {
    const cartItem = {
      menuItemId: details._id,
      name: details.title,
      image: mainImage,
      price: details.price,
      email: user.email,
    };

    addToCart(cartItem, {
      onSuccess: () => {
        navigate("/cart");
      },
    });
  };

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:w-11/12 w-full mx-auto mt-10 text-[#3c3633] mb-36">
      <div className="container">
        <div className="md:flex gap-10 items-center">
          <div className="md:flex gap-5 border md:w-5/12">
            <div className="md:flex hidden">
              <div className="overflow-y-auto h-[490px] hide-scrollbar">
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

            <div className="">
              {mainImage && (
                <img
                  src={mainImage}
                  alt={details.title}
                  className="md:w-[350px] w-full h-[490px] mx-auto"
                />
              )}
            </div>
          </div>
          <div className="md:w-6/12 w-10/12 mx-auto">
            <h3 className="font-bold text-4xl mb-4 text-center md:text-start">
              {details.title}
            </h3>
            <div className="mb-8 text-center md:text-start">
              <span className="block text-2xl font-bold opacity-90">
                ₹ {details.price}
              </span>
              <span className="font-semibold">{details.tex}</span>
            </div>
            <p className="mb-5 md:font-bold text-xl opacity-80">
              {details.detailsMaterial}
            </p>
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
            <div>
              <button
                onClick={handleAddToCart}
                className="w-full text-xl font-bold border-2 border-[#3c3633] px-4 py-2 mr-2 rounded-xl"
                disabled={isLoading}
              >
                {isLoading ? "Adding to Cart..." : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
