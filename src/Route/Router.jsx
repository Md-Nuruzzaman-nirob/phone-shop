import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import MainLayouts from "../MainLayouts/MainLayouts";
import Login from "../pages/Login/Login";
import Phone from "../pages/Phone/Phone";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/phones/:id",
        element: <Phone></Phone>,
        loader: () => fetch("/phones.json"),
      },
    ],
  },
]);

export default myCreatedRouter;
