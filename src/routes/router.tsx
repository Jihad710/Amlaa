import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CollectionSummer from "../page/collection/CollectionSummer";
import Home from "../page/home/Home";
// import Deals from "../page/offeredItems/OfferedItems";

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
        path: "/collection/spring-summer",
        element: <CollectionSummer></CollectionSummer>,
      },
      {
        path: "/collection/best-deal",
        element: <></>,
      },
      {
        path: "/collection/best-deal",
        // element: <Deals></Deals>,
      },
      {
        path: "/collection/best-deal",
        // element: <Deals></Deals>,
      },
      {
        path: "/collection/best-deal",
        // element: <Deals></Deals>,
      },
    ],
  },
]);

export default router;
