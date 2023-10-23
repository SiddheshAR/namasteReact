import React from 'react'
import {useState,useEffect} from 'react';


const useOnline = () => {
    const [Onstatus,setStatus] = useState(true);
    useEffect(()=>{
        const handleOnline =()=>{
            setStatus(true);
            console.log("Status checker321!!");
        }
        const handleOffline =()=>{
            setStatus(false);
            console.log("Status checker3123!!");
        }
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);
        console.log("Status checker!!");
        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    },[]);
    console.log(Onstatus);
    return Onstatus;
}

export default useOnline;
