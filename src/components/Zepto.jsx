import React from "react";
import { ReactDOM } from "react";
import { Router } from "react-router-dom";
import {useState} from "react";

const NameProp = ({title})=>{
    return(
        <h2 className="text-2xl">{title}</h2>
    )
}

const DescriptProp = ({full_desc})=>{
    return(
        <h2>{full_desc}</h2>
    )
}

const ShowButton =({updateFunct})=>{
    return(
        <button className="px-3 py-1 bg-cyan-400 text-gray-50 rounded-md" onClick={()=>{
            // toggleUpdate(true)
            updateFunct();
        }}>
            <h4>Show More.</h4>
        </button>
    )
}

const HideButton =({updateFunct2})=>{
    return(
        <button className="px-3 py-1 bg-cyan-400 text-gray-50 rounded-md" onClick={()=>{
            // toggleUpdate(true)
            updateFunct2();
        }}>
            <h4>Hide.</h4>
        </button>
    )
}

const ButtonParent = ({butStatus,toggleUp})=>{
return(
    <>
        {(butStatus)?
            <HideButton updateFunct2={function setToggle(){
            toggleUp(false);
        }} />
        :
        (<ShowButton updateFunct={function setToggle(){
            toggleUp(true);
        }}/>)
        }
    </>
)
}

const AccComp =({name,descript}) =>{

    const [toggleOn,toggleUpdate]=useState(false);

    return(
        <>
        <div className="border-2 border-sky-500 mx-9 my-4 p-2">
            <NameProp title={name}/>
            {toggleOn?(<DescriptProp full_desc={descript}/>):<h4></h4>}
        
        <ButtonParent butStatus={toggleOn} toggleUp={function abc(x){
            toggleUpdate(x);
        }} />
        </div>
        </>
    )
}

const Zepto =()=>{
    const des_content= "Quisque mattis viverra ipsum eu varius. Aenean eget mollis purus. Nullam quis augue mi. Sed dapibus tortor sapien, ac placerat nunc vulputate nec. Nullam vitae bibendum orci, vitae vestibulum diam. Vestibulum tincidunt, risus in molestie euismod, lorem dolor vestibulum diam, vel posuere ligula erat blandit sem. Nullam quis risus sit amet nibh commodo luctus a sed sapien. Aenean orci risus, commodo id elit congue, fringilla volutpat tellus. Duis gravida in sem vel fermentum. "
    return(
        <div>
            
            <AccComp name={"About us"} descript={des_content}/>
            <AccComp name={"Careers"} descript={des_content}/>
            <AccComp name={"Our Team"} descript={des_content}/>
        </div>
    )
}
export default Zepto;