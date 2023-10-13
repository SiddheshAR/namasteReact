import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {img_path} from ".config.js"


const RestaurantPage=()=>{
    const [restoData,restDataUpdate] = useState([]);
    const resParam= useParams();
    console.log(resParam);
    async function RestoFetch(){
        let data_fetch =await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1075424&lng=72.8263142&restaurantId=21216&catalog_qa=undefined&submitAction=ENTER');
        let ark = await data_fetch.json();
        let rest_result=ark.data.cards[0].card.card.info;
        // console.log();
        // console.log(ark.data.cards[0].card.card.info.name);
        restDataUpdate(rest_result);
        console.log(rest_result)
        // return rest_result;
    }
    useEffect(()=>{
        RestoFetch();
    },[])

    return(
        <>
        <h2>Hello.</h2>
            <p>{resParam.id}</p>
            <div id="Resto-Details"><h3>{restoData.name}</h3></div>
            <div id="Resto-Details"><h3>{restoData.cuisines}</h3></div>
            <div id="Resto-Details"><h3>{restoData.locality}</h3></div>
            <div id="Resto-Details"><h3>Rating:{restoData.avgRatingString}</h3></div>
            <div id="resto-pg-image"><img  src={img_path+restoData.cloudinaryImageId}></img></div>
        </>
    )
}

export default RestaurantPage;