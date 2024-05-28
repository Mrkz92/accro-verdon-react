import Home from "./pages/Home";
import Stages from "./pages/Stages";
import Snacking from "./pages/Snacking";
import Gallery from "./pages/GalleryPage";
import Informations from "./pages/Informations";
import Security from "./pages/Security";
import Reservation from "./pages/Reservation";
import Mentions from "./pages/Mentions";
import NotFound from "./pages/NotFound";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/stages",
    element: <Stages />,
  },
  {
    path: "/snacking",
    element: <Snacking />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/informations",
    element: <Informations />,
  },
  {
    path: "/security",
    element: <Security />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/mentions",
    element: <Mentions />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
