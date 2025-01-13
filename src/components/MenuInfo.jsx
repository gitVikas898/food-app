import { CDN_URL, RATING_URL} from "../utils/constants"
export const MenuInfo = (props) =>{
    const {info} = props
    return(
        <div className="shadow-lg flex justify-between w-1/2 p-4 rounded-lg">
                <div className="grid gap-1 place-items-center justify-items-start">
                    <h2 className="text-4xl font-semibold">{info.name}</h2>
                    <div className="flex gap-2 items-center font-semibold">
                        <img src={RATING_URL} className="w-6"></img>
                        <p>{info.avgRating}</p>
                        <p>{info.costForTwoMessage}</p>
                    </div>
                    <p className="text-gray-500">{info.areaName}</p>
                    <p className="text-gray-500">{info?.sla?.minDeliveryTime}-{info?.sla?.maxDeliveryTime}mins</p>
                </div>
                <div className="w-40 flex rounded-lg">
                    <img className="w-full object-cover rounded " src={CDN_URL+info.cloudinaryImageId} alt="" />
                </div>
            </div>
    )
}