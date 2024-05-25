import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";

type FileList = [];
type Inputs = {
  title: string;
  price: number;
  material: string;
  size: string[];
  color: string[];
  productType: string;
  discount: number;
  type: string;
  detailsMaterial: string;
  productStatus: string;
  collectionStatus: string;
  category: string;
  images: FileList;
};

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const mutation = useMutation((data: Inputs) =>
    fetch("https://black-and-white-server.vercel.app/product/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Add Product Section</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 grid grid-cols-2 gap-6"
      >
        {/* Title */}
        <div className="col-span-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            {...register("title", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            {...register("price", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Material */}
        <div>
          <label
            htmlFor="material"
            className="block text-sm font-medium text-gray-700"
          >
            Material
          </label>
          <input
            id="material"
            {...register("material", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.material && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Size */}
        <div>
          <label
            htmlFor="size"
            className="block text-sm font-medium text-gray-700"
          >
            Size (comma-separated)
          </label>
          <input
            id="size"
            {...register("size", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.size && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Color */}
        <div>
          <label
            htmlFor="color"
            className="block text-sm font-medium text-gray-700"
          >
            Color (comma-separated)
          </label>
          <input
            id="color"
            {...register("color", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.color && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Product Type */}
        <div>
          <label
            htmlFor="productType"
            className="block text-sm font-medium text-gray-700"
          >
            Product Type
          </label>
          <input
            id="productType"
            {...register("productType", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.productType && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Discount */}
        <div>
          <label
            htmlFor="discount"
            className="block text-sm font-medium text-gray-700"
          >
            Discount
          </label>
          <input
            id="discount"
            type="number"
            step="1"
            {...register("discount", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.discount && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Type */}
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <input
            id="type"
            {...register("type", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.type && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Details Material */}
        <div>
          <label
            htmlFor="detailsMaterial"
            className="block text-sm font-medium text-gray-700"
          >
            Details Material
          </label>
          <input
            id="detailsMaterial"
            {...register("detailsMaterial", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.detailsMaterial && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Product Status */}
        <div>
          <label
            htmlFor="productStatus"
            className="block text-sm font-medium text-gray-700"
          >
            Product Status
          </label>
          <select
            id="productStatus"
            {...register("productStatus", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select...</option>
            <option value="Available">Available</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
          {errors.productStatus && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Collection Status */}
        <div>
          <label
            htmlFor="collectionStatus"
            className="block text-sm font-medium text-gray-700"
          >
            Collection Status
          </label>
          <select
            id="collectionStatus"
            {...register("collectionStatus", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select...</option>
            <option value="New">New</option>
            <option value="Regular">Regular</option>
          </select>
          {errors.collectionStatus && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            {...register("category", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select...</option>
            <option value="tshirt">T-shirt</option>
            <option value="polos">Polos</option>
            <option value="shirt">Shirt</option>
            <option value="jackets">Jackets</option>
            <option value="headware">Headware</option>
            <option value="bottomware">Bottomware</option>
            <option value="deals">Deals</option>
            <option value="accessories">Accessories</option>
            <option value="new">New</option>
            <option value="deal">Deal</option>
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Image inputs */}

        {/* Image inputs */}
        {/* Image inputs */}

        <div className="col-span-2">
          <input
            type="submit"
            className="mt-2 w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
