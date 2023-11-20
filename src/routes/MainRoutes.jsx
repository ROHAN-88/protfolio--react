import React from "react";
import Mainpages from "../pages/Mainpages";
import Home from "../component/home/Home";
import About from "../component/about/About";

const MainRoutes = [
  {
    path: "/",
    element: <Mainpages />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cv",
        element: "",
      },
    ],
  },
];
export default MainRoutes;
