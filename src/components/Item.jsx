import { useDispatch } from "react-redux";
import { MENU_ITEM_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

export const Item = (props)=>{

    const dispatch = useDispatch();

    const handleAdd = (menu)=>{
        dispatch(addItem(menu));
    }

    const {item} = props
    // console.log(item)
    return(
        <div className="grid gap-4">
            {item.map((menu)=>(
                <div className=" mb-4 px-3 pt-3 pb-8 flex gap-4 justify-between shadow-lg rounded-lg" key={menu.card.info.id}>
                    <div className="flex flex-col gap-2 ">
                        <h1 className="font-semibold text-md">{menu.card.info.name}</h1>
                        <span className="font-semibold">
                            ₹{menu.card.info.price/100 ? menu.card.info.price/100 : menu.card.info.defaultPrice/100}</span>
                        <span>
                            {menu.card.info.ratings.aggregatedRating.rating}
                            
                            {menu.card.info.ratings.aggregatedRating.ratingCountV2 ? `(${menu.card.info.ratings.aggregatedRating.ratingCountV2})` :""}
                        </span>
                        <p className="line-clamp-2">{menu.card.info.description}</p>
                    </div>
                    <div className="rounded-lg w-32 h-32 flex  flex-shrink-0 relative">
                        <div className="absolute z-10 top-24 left-4">
                            <button className="bg-white px-8 py-2 shadow-lg rounded-lg text-green-600 font-bold" onClick={()=>handleAdd(menu)}>ADD</button>
                        </div>
                        <img src={MENU_ITEM_URL+menu.card.info.imageId} alt="" className=" w-full rounded-lg flex-shrink-0"/>
                    </div>
                </div>
            ))}
        </div>
    )
}