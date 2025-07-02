import { createBrowserRouter } from "react-router";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
]);

export default router;
