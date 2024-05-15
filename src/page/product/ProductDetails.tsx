import { useLoaderData } from "react-router-dom";

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
  console.log(details.color);
  return (
    <div className="px-10 mb-52 mt-12 ">
      <div className="w-full">
        <div className="flex gap-5">
          <div className="w-1/2 h-[480px] flex gap-3">
            <div className="h-full overflow-y-auto">
              <div className="h-full flex flex-col">
                {/* You can render images here if available */}
              </div>
            </div>
            {/* You can render a single large image here if available */}
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
                {details.color.map((size, idx) => (
                  <li key={idx}>{size}</li>
                ))}
              </ul>
            </div>
            <p>{details.productStatus}</p>

            {/* Render other details as needed */}
            <button className="mt-2 uppercase w-full py-2 rounded-lg border-2 border-gray-900">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
