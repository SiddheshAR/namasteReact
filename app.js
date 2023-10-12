import React from "react";
import ReactDOM from "react-dom/client";
import {HdFunct} from "/src/components/header.jsx";
import {Body_f} from "/src/components/restaurantCards.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./src/components/about";
import ErrorPage from "./src/components/errorpg"
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
    <Body_f />
    <Footer_f />
    </>)
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />
    },
    {
        path:"/about",
        element:<Aboutus />
    }
    ,
    {
        path:"/*",
        element:<ErrorPage />
    }
])

// console.log(swiggy.restaurants[0].info.name)
root.render(<RouterProvider router={appRouter} />);


