import logo from "../../../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useGetToCardLocal } from "../../../hooks/useGetToCardLocal";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
interface Item {
  discount: number;
  title: string;
  images: string;
  name: string;
  price: number;
  status: string;
  _id: string;
  collectionStatus: string;
}
const MiddleNav = () => {
  const { data, refetch } = useGetToCardLocal();
  const [quantity, setQuantity] = useState(0);
  const [searchModal, setSearchModal] = useState(false);
  const [products, setProducts] = useState<Item[]>([]);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setQuantity(data.length);
  }, [data, refetch]);
  const handleSearch = async (searchText: string) => {
    setSearchText(searchText);
  };
  const handleCloseModal = () => {
    setSearchModal(false);
    setProducts([]);
    setSearchText("");
  };
  useEffect(() => {
    (async () => {
      console.log(searchText);
      const response = await fetch(
        `https://amlaa.vercel.app/products/search/${searchText}`
      );
      const data = await response.json();
      if (data) {
        setProducts(data);
      }
    })();
  }, [searchText]);
  const handleClickProduct = (id: string) => {
    navigate(`/product/${id}`);
    handleCloseModal();
  };
  return (
    <div className="flex items-center my-4">
      <div className="w-full ml-4 sm:ml-0 flex sm:justify-center">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className=" p-3 px-4 pr-6">
        <ul className="flex items-center gap-1 sm:gap-3 text-xl justify-evenly">
          {/* <li className="cursor-pointer">
            <Link to={"/login"}>
              <FaRegUser />
            </Link>
          </li> */}
          <li className="text-2xl cursor-pointer">
            <button className="block" onClick={() => setSearchModal(true)}>
              {" "}
              <IoIosSearch />
            </button>
          </li>
          <li className="relative cursor-pointer">
            <span className="text-red-500 absolute -top-3 left-4 text-sm px-1 flex items-center justify-center bg-white rounded-full font-bold">
              {quantity}
            </span>
            <Link to={"/cart"}>
              <FiShoppingCart />
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`fixed duration-500 w-full overflow-y-auto bottom-0 left-0 bg-white z-20 ${
          searchModal ? "h-screen" : "h-0"
        }`}
      >
        <button
          className="text-3xl absolute top-4 right-4"
          onClick={handleCloseModal}
        >
          <IoClose />
        </button>

        <input
          id="email"
          onChange={(e) => handleSearch(e.target.value)}
          type="search"
          value={searchText}
          className="block w-4/5 mx-auto mt-14 p-4 bg-[#f3f4f6] mb-2 border-[#3c3633] rounded-md shadow-sm outline-none border-b-2  "
        />
        <div className="w-4/5 mx-auto grid sm:grid-cols-2 md:grid-cols-3 mt-10 gap-4">
          {products.length > 0
            ? products?.map((item) => (
                <div
                  className="flex rounded-md justify-center w-full my-1"
                  key={item._id}
                  onClick={() => handleClickProduct(item._id)}
                >
                  <div>
                    <div className="sm:h-[360px] h-[400px] lg:h-[460px] rounded-md overflow-hidden relative">
                      <img
                        className="w-full h-full object-cover object-top"
                        src={item?.images[0]}
                        alt=""
                      />
                    </div>
                    <div className="mt-4 px-3 barlow-regular">
                      <p className="capitalize barlow-regular text-lg">
                        {item?.title}
                      </p>
                      <p className="barlow-semibold mt-1 text-lg">
                        {item?.discount > 0 ? (
                          <p className="mb-5 md:font-medium text-xl gap-1 flex items-center opacity-80">
                            {item?.discount && item.price && (
                              <>
                                <span className="line-through">
                                  {" "}
                                  &#x09F3;
                                  {item.price}
                                </span>
                                {" - "}
                                <span>
                                  {" "}
                                  &#x09F3;{" "}
                                  {item.price -
                                    (item.price * item.discount) / 100}
                                </span>
                                <span className="text-sm rounded p-px bg-red-200 text-red-700">
                                  -{item?.discount}%
                                </span>
                              </>
                            )}
                          </p>
                        ) : (
                          <span> &#x09F3; {item.price}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : "No match found"}
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
