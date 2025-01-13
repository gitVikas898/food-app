import { useEffect, useState } from "react"
import { MENU_API } from "./constants";

export const useRestaurantMenu = (resId) =>{

    const[menuList ,setMenuList] = useState([]);
    const [resinfo,setResInfo] = useState([]);
    const [catergory,setCategory] = useState([]);
   

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async()=>{

       try{ const data = await fetch(MENU_API+resId);

        const response = await data.json();

        const menu = response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

        const info = menu.map((res)=>res.card.info) ||[];   //recomended 

        const categories =  response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


       
       
        setCategory(categories);

        setMenuList(info);    
        
        const resInfoEx = response?.data?.cards[2]?.card?.card?.info || null ;

        setResInfo(resInfoEx)
       }
       catch(error){
            console.error("Error fetching restaurant data:", error);
       }
    }

    return{menuList,resinfo,catergory}
}