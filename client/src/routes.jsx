import { createBrowserRouter } from "react-router";
import AppLayout from "./components/Layout";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Matrix from "./pages/Matrix";
import Settings from "./pages/Settings";
import User from "./pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "matrix",
        element: <Matrix />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
