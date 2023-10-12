import {swiggy} from "./swo.jsx";
import {img_path, luna, jks} from "/src/components/.config.js"
import  {useState, useEffect} from "react";
import Shimmer from "./shimmer.jsx";

function filterData(searchInput,restaurants_db){
    let filterData1 = restaurants_db.filter((restaurant)=>
        restaurant.info.name.includes(searchInput)
    );
    return filterData1;
}

const RestoCard= ({name, areaName, avgRating, cloudinaryImageId})=>{
       return (
            <>
            <div id="card">
            <img src={img_path+ cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{areaName}</h3>
            <h4>{avgRating}</h4>
            </div>
            </>
        )
    }

export const Body_f = () =>{
    const [restaurants_db, restaurants_fn] = useState([]);
    const [searchInput, setSearchInput ] = useState("");
    async function restaurant_fetch(){
        let sw_data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1075424&lng=72.8263142&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let sw_json = await sw_data.json();
        let new_rest = await sw_json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
        restaurants_fn(new_rest);
    }   
    useEffect(()=>{
        restaurant_fetch();
        // console.log("Okokok")
    },[])
        return (restaurants_db.length===0) ? (<Shimmer/>) : (
            <>
            <div>
                <input type="text" 
                    id="search-input" 
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e)=>{
                        setSearchInput(e.target.value);
                    }}  
                    >
                </input>
                <button
                onClick={()=>{
                    let sr_data = filterData(searchInput,restaurants_db);
                    restaurants_fn(sr_data);
                }
                }
                >
                Search
                </button>
                <button
                onClick={()=>{
                    restaurant_fetch();
                }
                }
                >
                Reset
                </button>
            </div>
            <div id="mainBdy">
            {restaurants_db.map((resto)=>{
              return <RestoCard {...resto.info}/>
            })}
            </div>
            </>
        )
    }

// export default RestoCard();