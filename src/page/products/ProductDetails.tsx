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
}

const ProductDetails = () => {
  const details = useLoaderData() as ProductDetails;
  const { mutate: addToCart, isLoading } = useAddToCart();
  const navigate = useNavigate();

  // Assuming `user` is available from some global state or context
  const user = { email: "user@example.com" }; // Replace with actual user data

  const handleAddToCart = () => {
    const cartItem = {
      menuItemId: details._id,
      name: details.title,
      image: "", // Add image if available
      price: details.price,
      email: user.email, // Including the user's email
    };

    addToCart(cartItem, {
      onSuccess: () => {
        navigate("/cart");
      },
    });
  };

  return (
    <div className="px-10 mb-52 mt-12">
      <div className="w-full">
        <div className="flex gap-5">
          <div className="w-1/2 h-[480px] flex gap-3">
            <div className="h-full overflow-y-auto">
              <div className="h-full flex flex-col">
                {/* Render images here if available */}
              </div>
            </div>
            {/* Render a single large image here if available */}
          </div>
          <div className="w-1/2 p-5 pt-10">
            <h1 className="font-bold text-4xl">{details.title}</h1>
            <div className="py-5 font-semibold">
              <p>${details.price}</p>
              <p className="text-sm">{details.tex}</p>
            </div>
            <div>
              <p className="font-bold text-lg">Available Sizes:</p>
              <ul className="flex gap-5">
                {details.size.map((size, idx) => (
                  <li key={idx}>{size}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>Color</p>
              <ul className="flex gap-5">
                {details.color.map((color, idx) => (
                  <li key={idx}>{color}</li>
                ))}
              </ul>
            </div>
            <p>{details.productStatus}</p>

            <button
              onClick={handleAddToCart}
              className="mt-2 uppercase w-full py-2 rounded-lg border-2 border-gray-900"
              disabled={isLoading}
            >
              {isLoading ? "Adding to Cart..." : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
