import {Outlet} from "react-router-dom";
// import {Component} from "react";
import React from "react";
import {useContext} from "react";
import LocContext from "../utils/hooks/useLocation.js";
const Aboutus1 = () =>{
    return(
        <>
            <h1>About us Page.</h1>
            <p>This is the Namaste React Live Course Chapter</p>
            <Outlet />
            <h3>Done.</h3>
        </>
    )
}

class Aboutus extends React.Component{
    render(){
        return(
            <>
                <h1>About us Page Build Using Class Based Component.</h1>
                <LocContext.Consumer>
                    {(x)=><h2 className="text-lg text-red-950 font-medium">{x.location.location}</h2>}
                    {/* {(x)=>{<h2>{x.location}</h2>}} */}
                </LocContext.Consumer>
                <p>This is the Namaste React Live Course Chapter11</p>
                <Outlet />
                <h3>Done.</h3>
            </>
        )
    }
}


export default Aboutus