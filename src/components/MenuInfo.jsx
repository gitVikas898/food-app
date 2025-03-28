import { CDN_URL, RATING_URL } from "../utils/constants";

export const MenuInfo = ({ info }) => {
  return (
    <div className="shadow-lg flex flex-col md:flex-row justify-between items-center max-w-screen-md w-full p-5 rounded-lg bg-white">
      {/* Left Section */}
      <div className="flex flex-col gap-2 items-center md:items-start">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">{info.name}</h2>
        
        {/* Rating and Cost */}
        <div className="flex gap-2 items-center font-semibold text-gray-700">
          <img src={RATING_URL} className="w-5 sm:w-6" alt="Rating Icon" />
          <p>{info.avgRating}</p>
          <p className="text-sm text-gray-600">{info.costForTwoMessage}</p>
        </div>
        
        {/* Location & Delivery Time */}
        <p className="text-gray-500 text-sm">{info.areaName}</p>
        <p className="text-gray-500 text-sm">
          {info?.sla?.minDeliveryTime}-{info?.sla?.maxDeliveryTime} mins
        </p>
      </div>

      {/* Restaurant Image */}
      <div className="w-32 sm:w-40 flex rounded-lg overflow-hidden shadow-md">
        <img className="w-full h-24 md:h-32 object-cover rounded-lg" src={CDN_URL + info.cloudinaryImageId} alt={info.name} />
      </div>
    </div>
  );
};
