import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout";
import Global from "../../pages/Global/Global";
import Indonesia from "../../pages/Indonesia/Indonesia";
import Provinsi from "../../pages/Provinsi/Provinsi";
import About from "../../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Global />,
      },
      {
        path: "global",
        element: <Global />,
      },
      {
        path: "indonesia",
        element: <Indonesia />,
      },
      {
        path: "provinsi",
        element: <Provinsi />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
