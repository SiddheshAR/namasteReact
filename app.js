import React from "react";
import ReactDOM from "react-dom/client";
import {HdFunct} from "/src/components/header.jsx";
import {Body_f} from "/src/components/restaurantCards.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Aboutus from "./src/components/about";
import ErrorPage from "./src/components/errorpg";
import ContactPage from "./src/components/contact";
import RestaurantPage from "./src/components/restaurantPage"
let root = ReactDOM.createRoot(document.getElementById("root1"));


const Footer_f = () =>{
    return( <>
<h1>Footer</h1>
    </> )
}

const AppLayout =()=>{
    return(
    <>
    <HdFunct />
    <Outlet />
    <Footer_f />
    </>)
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<Body_f />
            },
            {
                path:"/about",
                element:<Aboutus />
            },
            {
                path:"/contact",
                element:<ContactPage />
            },
            {
                path:"/restaurants/:id",
                element:<RestaurantPage />,
                errorElement:<ErrorPage />
            }
        ]
    }
])

root.render(<RouterProvider router={appRouter} />);


