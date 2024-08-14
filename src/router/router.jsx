import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../components/Error";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    },
  ]);

  export default router;