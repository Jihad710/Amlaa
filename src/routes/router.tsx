import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/home/Home";
// import Deals from "../page/offeredItems/OfferedItems";
import AllProduct from "./../page/allProducts/AllProduct";
import BestDeals from "../page/bestdeals/BestDeals";
import BottomWar from "../page/bottomwar/BottomWar";
import TShirt from "../page/topOutFit/TShirt";
import Polo from "../page/topOutFit/Polo";
import Shirt from "../page/topOutFit/Shirt";
import Jackets from "../page/topOutFit/Jackets";
import Headwear from "../page/accecsaris/Headwear";
import BagsAndWallets from "../page/accecsaris/BagsAndWallets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
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
        path: "/collection/bags-and-wallets",
        element: <BagsAndWallets></BagsAndWallets>,
      },
    ],
  },
]);

export default router;
