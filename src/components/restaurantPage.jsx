import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {img_path} from ".config.js"

const RestaurantPage=()=>{
    const [restoData,restDataUpdate] = useState([]);
    const [cusines,cusinesUpdate]=useState([]);
    const resParam= useParams();
    const restaurantLink = (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1075424&lng=72.8263142&restaurantId=${resParam.id}&catalog_qa=undefined&submitAction=ENTER`)
    console.log(restaurantLink);

    async function RestoFetch(){

        let data_fetch =await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1075424&lng=72.8263142&restaurantId=${resParam.id}&catalog_qa=undefined&submitAction=ENTER`);


        let ark = await data_fetch.json();
        let rest_result=ark.data.cards[0].card.card.info;
        // console.log();
        // console.log(ark.data.cards[0].card.card.info.name);
        const cusinesFinal = ark.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
        cusinesUpdate(cusinesFinal);
        restDataUpdate(rest_result);
        let cusines_list = cusinesFinal.map((x)=>x.card?.info?.name);
        // console.log(cusines_list);
        // return rest_result;
    }
    useEffect(()=>{
        RestoFetch();
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
                <div id="Resto-Details"><h3>{restoData.name}</h3></div>
                <div id="Resto-Details"><h3>Restaurant ID:{resParam.id}</h3></div>
                <div id="Resto-Details"><h3>{restoData.cuisines}</h3></div>
                <div id="Resto-Details"><h3>{restoData.locality}</h3></div>
                <div id="Resto-Details"><h3>Rating:{restoData.avgRatingString}</h3></div>
                <div id="resto-pg-image"><img  src={img_path+restoData.cloudinaryImageId}></img></div>
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