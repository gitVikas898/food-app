import { MenuCard } from "./MenuCard.jsx";
import { MenuInfo } from "./MenuInfo.jsx";
import { ShimmerMenu,ShimmerMenuList } from "./shimmer.jsx";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu.jsx";
import menu from "../utils/img/menu.png"
import { Accordion } from "./Accordion.jsx";
import { useState } from "react";



export const Menu = ()=>{

    const {resId} = useParams();

    const {resinfo,menuList,catergory}  = useRestaurantMenu(resId);//my custom hook in utils

    const [showIndex,setShowIndex] = useState(0)

  
    return menuList.length === 0 || resinfo.length === 0 ?
     (
         <div className="flex flex-col gap-4 items-center justify-between p-6 border-2 border-green-500 border-solid" >
            <ShimmerMenu></ShimmerMenu>
            <ShimmerMenuList></ShimmerMenuList>
        </div>
        ) 
        : (
        <div className="grid gap-4 m-5 place-items-center">
            <MenuInfo info={resinfo} key={resinfo.id}></MenuInfo>
            <div className=" w-full flex items-center justify-center text-2xl bg-gray-50 rounded-full">
               
                <img src={menu} alt="" className="w-16 mx-3"/>
            
            </div>
            {
                catergory.map((item , index)=>(
                    <Accordion key={item?.card?.card.title} categoryData ={item?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={()=>setShowIndex(index === showIndex ? null : index)} ></Accordion>
                ))
            }
        </div>
    )
}