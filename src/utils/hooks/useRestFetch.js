
async function useRestoFetch(resParam){
    
    let data_fetch =await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1075424&lng=72.8263142&restaurantId=${resParam.id}&catalog_qa=undefined&submitAction=ENTER`);
    let ark = await data_fetch.json();
    let rest_result=ark.data.cards[0].card.card.info;
    const cusinesFinal = ark.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
    // cusinesUpdate(cusinesFinal);
    const restObj = [rest_result,cusinesFinal]
    // console.log(rest_result);
    // return rest_result;
    console.log(restObj);
    return restObj;
    // restDataUpdate(rest_result);
    // let cusines_list = cusinesFinal.map((x)=>x.card?.info?.name);
}

export default useRestoFetch;