import {Outlet} from "react-router-dom";
// import {Component} from "react";
import React from "react";
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
                <p>This is the Namaste React Live Course Chapter</p>
                <Outlet />
                <h3>Done.</h3>
            </>
        )
    }
}


export default Aboutus