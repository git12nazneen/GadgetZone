import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../components/Error";
import Home from "../pages/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";

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
        ,{
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        }
      ]
    },
  ]);

  export default router;