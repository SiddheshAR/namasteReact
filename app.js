import React,{lazy} from "react";
import ReactDOM from "react-dom/client";
import {useContext,useState} from "react";
import {HdFunct} from "/src/components/header.jsx";
import {Body_f} from "/src/components/restaurantCards.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Aboutus from "./src/components/about";
import ErrorPage from "./src/components/errorpg";
import ContactPage from "./src/components/contact";
import RestaurantPage from "./src/components/restaurantPage";
import ProfileComponent from "./src/components/profile";
import NewProfile from "./src/components/newProfile";
import SupportComp from "./src/components/supportTeam";
import SalesComp from "./src/components/sales";
// import Instamart from "./src/components/instamart";
import Zepto from "./src/components/Zepto";
import LocContext from "./src/utils/hooks/useLocation.js";

const Instamart = lazy(()=>import("./src/components/instamart"))

let root = ReactDOM.createRoot(document.getElementById("root1"));

const Footer_f = () =>{
    return( <>
<h1>Footer</h1>
    </> )
}


const AppLayout =()=>{

    const [UserLocation,setlocation]=useState({location:"Colaba"});

    return(
    <>
    <div className="bg-gray-300">
    <LocContext.Provider value={{location:UserLocation,setlocation:setlocation}}>
        <HdFunct />
        <Outlet />
        <Footer_f />
    </LocContext.Provider>
    </div>
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
                element:<Body_f />,
                children:[
                    {
                        path:"instamart",
                        element:<Instamart />
                    }
                ]
            },
            {
                path:"/about",
                element:<Aboutus />,
                // element:<ProfileComponent />,
                children:[
                    {
                        path:"profile2",
                        element:<ProfileComponent />
                    }
                ]},
            {
                path:"/contact",
                element:<ContactPage />,
                children:[
                    {
                        path:"support",
                        element:<SupportComp country={"India"}/>
                    },
                    {
                        path:"sales",
                        element:<SalesComp city={"Mumbai"}/>
                    }
                ]
            },
            {
                path:"/zepto",
                element:<Zepto />
            },
            {
                path:"/restaurants/:id",
                element:<RestaurantPage />,

                errorElement:<ErrorPage />

            },{
                path:"/newProfile",
                element:<NewProfile name={"Siddhesh2"}/>
            }
        ]
    }
]) 

root.render(<RouterProvider router={appRouter} />);


