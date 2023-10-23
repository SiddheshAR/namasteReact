import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {img_path} from ".config.js"
import useRestoFetch from "../utils/hooks/useRestFetch";
const RestaurantPage=()=>{

    const resParam= useParams();
    const [restoData,restDataUpdate] = useState(null);
    const [cusines,cusinesUpdate]=useState([]);

    useEffect(()=>{
        restoData1=useRestoFetch(resParam);
        restoData1.then((x)=>{
            restDataUpdate(x[0]);
            cusinesUpdate(x[1]);
        })
        
    },[])

    if(!cusines){
        return<>
            <h2>Loading..</h2>
            <p>Wait for a while..</p>
        </> 
    }
    return(
        <div id="rest_page_container">
            <div>
                <div id="Resto-Details"><h3>{restoData?.name}</h3></div>
                <div id="Resto-Details"><h3>Restaurant ID:{resParam.id}</h3></div>
                <div id="Resto-Details"><h3>{restoData?.cuisines}</h3></div>
                <div id="Resto-Details"><h3>{restoData?.locality}</h3></div>
                <div id="Resto-Details"><h3>Rating:{restoData?.avgRatingString}</h3></div>
                <div id="resto-pg-image"><img  src={img_path+restoData?.cloudinaryImageId}></img></div>
            </div>
            <div>
                <h2 id="Resto-Details">Cusines Lists:</h2>
                <div>
                    {cusines.map((x,index)=>{
                       return(
                        <h4>{index+1}. {x.card.info.name} :{x.card.info.price} Rs </h4>
                       )})}
                </div>
            </div>
        </div>
    )
}

export default RestaurantPage;