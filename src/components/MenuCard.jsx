import { MENU_ITEM_URL } from "../utils/constants";
export const MenuCard = (props) => {
    const {menuData} = props;

    return(
        
            <div className=" shadow-lg p-4 w-1/2 flex gap-3 rounded-lg hover:scale-105 transition-transform duration-300 ease-in">
                <div className=" w-full grid gap-2 p-2">
                    <h2 className="text-2xl font-semibold">{menuData.name}</h2>
                    <p className="text-xl font-semibold">₹{Math.round(menuData.defaultPrice/100 || menuData.price/100)}</p>
                    <p className="text-gray-500 line-clamp-3">{menuData.description}</p>
                </div>
                <div className="flex rounded-lg ">
                    <img className="w-full object-center object-cover rounded-lg" src={MENU_ITEM_URL+menuData.imageId} />
                </div>
            </div>
    )
}