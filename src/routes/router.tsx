import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/home/Home";
import AllProduct from "./../page/allProducts/AllProduct";
import BestDeals from "../page/bestdeals/BestDeals";
import BottomWar from "../page/bottomwar/BottomWar";
import TShirt from "../page/topOutFit/TShirt";
import Polo from "../page/topOutFit/Polo";
import Shirt from "../page/topOutFit/Shirt";
import Jackets from "../page/topOutFit/Jackets";
import Headwear from "../page/accecsaris/Headwear";
import AdminLayout from "../components/layout/AdminLayount/AdminLayout";
import AdminDashBoard from "../components/layout/AdminLayount/AdminDashBoard";
import AddProduct from "../components/layout/AdminLayount/AddProduct";
import UpDateProduct from "../components/layout/AdminLayount/UpDateProduct";
import CoustomerOder from "../components/layout/AdminLayount/CoustomerOder";
import Login from "../page/log/Loging";
import Registation from "../page/log/Registation";
import Search from "../page/search&cart/Search";
import Cart from "../page/search&cart/SelectedProductCart";
import { handleBuyProduct } from "../hooks/BuyProduct";
import ProductDetails from "../page/products/ProductDetails";
import Accessories from "../page/accecsaris/BagsAndWallets";
import OderAddres from "../page/search&cart/OderAddres";
import PaymentSystem from "../page/search&cart/PaymentSystem";

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
        path: "/allProduct",
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/collection/best-deal",
        element: <BestDeals></BestDeals>,
      },
      {
        path: "/collection/t-shirt",
        element: <TShirt></TShirt>,
      },
      {
        path: "/collection/polo",
        element: <Polo></Polo>,
      },
      {
        path: "/collection/shirt",
        element: <Shirt></Shirt>,
      },
      {
        path: "/collection/jackets",
        element: <Jackets></Jackets>,
      },
      {
        path: "/collection/bottomwar",
        element: <BottomWar></BottomWar>,
      },
      {
        path: "/collection/head-wear",
        element: <Headwear></Headwear>,
      },
      {
        path: "/collection/accessories",
        element: <Accessories></Accessories>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registation></Registation>,
      },
      {
        path: "/search",
        element: <Search></Search>,
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
      {
        path: "/oderAddres",
        element: <OderAddres></OderAddres>,
      },
      {
        path: "/payment-system",
        element: <PaymentSystem></PaymentSystem>,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <AdminDashBoard></AdminDashBoard>,
      },
      {
        path: "/admin-dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/admin-dashboard/update-product",
        element: <UpDateProduct></UpDateProduct>,
      },
      {
        path: "/admin-dashboard/coustomerOder",
        element: <CoustomerOder></CoustomerOder>,
      },
    ],
  },
]);

export default router;
