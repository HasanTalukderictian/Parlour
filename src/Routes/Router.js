import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Services from "../pages/Our Services/Services";


 

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/service',
            element:<Services></Services>
        }
      ]
      
    },
  ]);