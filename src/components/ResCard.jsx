import { CDN_URL, RATING_URL } from "../utils/constants.js";
export const ResCard = (props) => {
    const { resData } = props;
    return (
      <div id="card" className=" cursor-pointer rounded-md p-4  h-96 flex flex-col justify-between hover:shadow-lg hover:scale-105  transition-transform   ease-in duration-300  ">
        
        <div className=" rounded-md  h-52 flex">
          <img
            className="w-full object-cover rounded-md"
            src={
              CDN_URL+resData.cloudinaryImageId
            }
          ></img>
        </div>

        <div id="info" className="flex flex-col gap-2 text-gray-600">
          <h3 className="font-bold text-slate-950">{resData.name}</h3>
          <div className="flex gap-1">
            <img src={RATING_URL}className="w-6"></img>
            <span className="">{resData.avgRating}</span>
            <span className="">&#9679; {resData?.sla?.deliveryTime ? `${resData.sla.deliveryTime} mins` : "Loading..."}</span>
          </div>
            <p className="truncate">{resData.cuisines.join(",")}</p>
            <p>{resData.costForTwo} </p>
        </div>
      </div>
    );
  };


  export const withLabelVeg = (ResCard)=>{
    return(props)=>{
      return(
        <div>
          <label className="px-4 bg-green-500 text-white absolute m-2 rounded-md z-10">Veg</label>
          <ResCard {...props}></ResCard>
        </div>
      )
    }
  }