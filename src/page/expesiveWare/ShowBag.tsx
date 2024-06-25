import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../public/DSC_2182.webp";
import img2 from "../../../public/DSC_2184_8e8dfb2e-74ac-4819-a159-d280ae7321a3.jpg";
import img3 from "../../../public/DSC_2189_d339ae62-2a2e-40f6-b1ed-88db6d7af1ec.webp";
import img4 from "../../../public/DSC_2386.webp";
import img5 from "../../../public/DSC_2182.webp";
import img6 from "../../../public/DSC_2387.webp";
import img7 from "../../../public/DSC_2391_a786ee40-4e75-4890-81eb-9b6359a26ab7.jpg";
import { useAddToCart } from "../../hooks/useAddToCart";
const details = {
  _id: "crater-tote-bag",
  title: "Crater — Heavy Duty Tote Bag",
  price: 999,
  description:
    "Large and thick tote in canvas, made in 100% cotton with embossed branding on the front. Long handles at the top. Unlined with a magnet closure.",
  dimensions: {
    height: "15 inches",
    width: "21 inches",
    handle: "29 inches",
  },
  capacity: "15L",
  images: [img1, img2, img3, img4, img5, img6, img7],
};

const ShowBag: React.FC = () => {
  const [mainImage, setMainImage] = useState(details.images[0]);
  const { mutate: addToCart, isLoading } = useAddToCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const cartItem = {
      menuItemId: details._id,
      name: details.title,
      image: mainImage,
      price: details.price,
    };

    addToCart(cartItem, {
      onSuccess: () => {
        navigate("/cart");
      },
    });
  };

  const handleImageHover = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  return (
    <div className="md:w-11/12 w-full mx-auto mt-10 text-[#3c3633] mb-36">
      <div className="container">
        <div className="md:flex gap-10 items-center">
          <div className="md:flex gap-5 border md:w-5/12">
            <div className="md:flex hidden">
              <div className="overflow-y-auto h-[490px] hide-scrollbar">
                {details.images.slice(1).map((img, index) => (
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
              <img
                src={mainImage}
                alt=""
                className="md:w-[350px] w-full h-[490px] mx-auto"
              />
            </div>
          </div>
          <div className="md:w-6/12 w-10/12 mx-auto">
            <h3 className="font-bold text-4xl mb-4 text-center md:text-start">
              {details.title}
            </h3>
            <div className="mb-8 text-center md:text-start">
              <span className="block text-2xl font-bold opacity-90">
                ₹ {details.price}.00
              </span>
              <span className="font-semibold">Tax included.</span>
            </div>
            <p className="mb-5 md:font-bold text-xl opacity-80">
              {details.description}
            </p>
            <div className="text-xl mb-5">
              <p className="font-bold">Dimensions -</p>
              <ul>
                <li>
                  Height -{" "}
                  <span className="font-bold opacity-80">
                    {details.dimensions.height}
                  </span>
                </li>
                <li>
                  Width -{" "}
                  <span className="font-bold opacity-80">
                    {details.dimensions.width}
                  </span>
                </li>
                <li>
                  Handle -{" "}
                  <span className="font-bold opacity-80">
                    {details.dimensions.handle}
                  </span>
                </li>
              </ul>
            </div>
            <p className="font-xl mb-5">
              Capacity - <span className="font-bold">{details.capacity}</span>
            </p>
            <div>
              <button
                className={`w-full text-xl font-bold border-2 border-[#3c3633] px-4 py-2 mr-2 rounded-xl ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleAddToCart}
                disabled={isLoading}
              >
                {isLoading ? "Adding..." : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBag;
