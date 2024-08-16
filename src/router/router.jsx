import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../components/Error";
import Home from "../pages/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Card from "../components/Card";
import BuyingCart from "../components/BuyingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products/:id",
        element: <Card></Card>,
        loader: ({ params }) =>
          fetch(`https://server-two-sage-80.vercel.app/products/${params.id}`),
      },
      {
        path: "/buyingCart/category",
        element: <BuyingCart />,
      },
    ],
  },
]);

export default router;
