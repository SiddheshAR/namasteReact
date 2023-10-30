import {swiggy} from "./swo.jsx";
import {Link,Outlet} from 'react-router-dom'
import {img_path, luna, jks} from "/src/components/.config.js"
import  {useState, useEffect, useContext} from "react";
import {ShimmerUi} from "./shimmer.jsx";
import useOnline from "../utils/hooks/useOnline.js";

import LocContext from "../utils/hooks/useLocation.js";

function filterData(searchInput,restaurants_db){
    let filterData1 = restaurants_db.filter((restaurant)=>
        // let lowerName=restaurant.info.name.toLowerCase();
        restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData1;
}

const RestoCard= ({name, areaName, avgRating, cloudinaryImageId})=>{

    const {location,setlocation} = useContext(LocContext);

       return (
            <>
            <div className="m-2 w-[250px] shadow-lg hover:shadow-2xl p-4" id="card">
            <div className="w-65 h-70">
                <img className="w-60 h-[250px] bg-cover " src={img_path+ cloudinaryImageId} />
            </div>
            <h2 className="text-xl break-words font-semibold ">{name}</h2>
            <h3 className="text-m text-green-700">{areaName}</h3>
            <h4 className="text-amber-500">Rating: {avgRating}/5</h4>
            <h4>Available at {location.location}</h4>
            </div>
            </>
        )
    }


export const Body_f = () =>{
    const networkStatus = useOnline();
    if(!networkStatus){
        return(
            <><h2>No Internet</h2></>
        )
    }
    const {location,setlocation} = useContext(LocContext);
    const [restaurants_db, restaurants_fn] = useState([]);
    const [filt_rest, set_filterRest] = useState([restaurants_db]);
    const [searchInput, setSearchInput ] = useState("");
    async function restaurant_fetch(){
        let sw_data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9067031&lng=72.8147123&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let sw_json = await sw_data.json();
        let new_rest = await sw_json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
        restaurants_fn(new_rest);
        set_filterRest(new_rest);
    }   
    useEffect(()=>{
        restaurant_fetch();
    },[])

        return (restaurants_db.length===0) ? (<ShimmerUi />) : (
            <div className="">
            <div className="px-14">
                <input type="text" 
                className="bg-slate-200 rounded-lg px-4 py-1 placeholder:italic placeholder:text-slate-400"
                    id="search-input" 
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e)=>{
                        setSearchInput(e.target.value);
                    }}  
                    >
                </input>
                <button className="rounded-lg bg-orange-400 hover:bg-orange-600 px-4 py-1 mx-1"
                onClick={()=>{
                    let sr_data = filterData(searchInput,restaurants_db);
                    set_filterRest(sr_data);
                }}
                >
                <h4 className="text-gray-50 ">Search</h4>
                </button>
                <button className="rounded-lg bg-amber-500 hover:bg-amber-600 px-4 py-1"
                onClick={()=>{
                    restaurant_fetch();
                }
                }
                >
                <h4 className="text-gray-50">Reset</h4>
                </button>

                {/* Context Fun */}

                <input type="text" value={location.location} className="bg-slate-200 rounded-lg px-4 py-1 placeholder:italic placeholder:text-slate-400"
                onChange={(e)=>
                    setlocation({location:e.target.value})
                }
                >

                </input>
            </div>
            <div className=" flex flex-wrap justify-evenly" id="mainBdy">
                <Outlet/>
            {filt_rest.map((resto)=>{
              return(<Link to= {"/restaurants/"+resto.info.id}
              key={resto.info.id}
              >
                <RestoCard {...resto.info}/>
              </Link>) 
            })}
            </div>
            </div>
        )
    }

// export default RestoCard();