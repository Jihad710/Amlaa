import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/home/Home";

import Login from "../page/log/Loging";
import Registation from "../page/log/Registation";

import Cart from "../page/search&cart/SelectedProductCart";
import { handleBuyProduct } from "../hooks/BuyProduct";
import ProductDetails from "../page/products/ProductDetails";
import Products from "../page/allProducts/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/:category",
        element: <Products></Products>,
      },
      // {
      //   path: "/products/deals",
      //   element: <BestDeals></BestDeals>,
      // },
      // {
      //   path: "/products/tshirt",
      //   element: <TShirt></TShirt>,
      // },
      // {
      //   path: "/products/polos",
      //   element: <Polo></Polo>,
      // },
      // {
      //   path: "/products/shirt",
      //   element: <Shirt></Shirt>,
      // },
      // {
      //   path: "/products/jackets",
      //   element: <Jackets></Jackets>,
      // },
      // {
      //   path: "/products/bottomwar",
      //   element: <BottomWar></BottomWar>,
      // },
      // {
      //   path: "/products/head-wear",
      //   element: <Headwear></Headwear>,
      // },
      // {
      //   path: "/products/accessories",
      //   element: <Accessories></Accessories>,
      // },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registation></Registation>,
      },

      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
        loader: ({ params }) => handleBuyProduct(params.id as string),
      },
    ],
  },
]);

export default router;
