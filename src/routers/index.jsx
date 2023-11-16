import { createBrowserRouter } from "react-router-dom";

// Root

// Pages
import Error from "../pages/Error.jsx";
import About from "../pages/About.jsx";
import PageHome from "../pages/PageHome.jsx";
import PageResource from "../pages/PageResource.jsx";
import Layouts from "../layouts/Layouts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resource",
        element: <PageResource />,
      },
    ],
  },
]);

export default router;
