import { useState } from "react";
import down from "../utils/img/down.png"
import up from "../utils/img/up.png"

import { Item } from "./Item.jsx";

export const Accordion = (props)=>{

    // const [showItems,setShowItems] = useState(true);

    const handleClick = ()=>{
       setShowIndex(showItems ? null : categoryData.id);
    } 
    const {categoryData,showItems,setShowIndex} = props;
    return(
       
             <div className="border-y-[12px] boder-solid border-gray-100 rounded-lg grid gap-2 w-1/2">

                <div id="header" className="flex items-center justify-between cursor-pointer p-2" onClick={handleClick}>
                    <h1 className="font-bold text-gray-800">{categoryData.title} ({categoryData.itemCards.length})</h1>
                    {showItems ? <span><img src={up} alt="uparrow" className="w-6 cursor-pointer"/></span> : <span><img src={down} alt="downarrow" className="w-8 cursor-pointer"/></span>}  
                </div>

                <div id="body" className={`transition-all duration-500 ${showItems ? "opacity-100 scale-100" :  "opacity-0 scale-75"}`}>

                   { showItems && <Item item={categoryData.itemCards}  ></Item>}
                </div>

            </div>
    )
}