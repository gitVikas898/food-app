import { CDN_URL, RATING_URL } from "../utils/constants.js";

export const ResCard = (props) => {
  const { resData } = props;

  return (
    <div
      id="card"
      className="relative cursor-pointer rounded-lg p-4 h-96 flex flex-col justify-between border border-gray-200 shadow-md bg-white 
                 hover:shadow-xl hover:scale-105 transition-transform ease-in-out duration-300"
    >
      {/* Image Section */}
      <div className="relative rounded-lg overflow-hidden h-52">
        <img
          className="w-full h-full object-cover"
          src={CDN_URL + resData.cloudinaryImageId}
          alt={resData.name}
        />
      </div>

      {/* Info Section */}
      <div id="info" className="flex flex-col gap-2 text-gray-600 mt-2">
        <h3 className="font-semibold text-gray-900 truncate">{resData.name}</h3>

        {/* Rating & Delivery Time */}
        <div className="flex items-center gap-2">
          <img src={RATING_URL} className="w-5" alt="Rating Icon" />
          <span className="text-sm font-medium">{resData.avgRating}</span>
          <span className="text-sm">&#9679; {resData?.sla?.deliveryTime ? `${resData.sla.deliveryTime} mins` : "Loading..."}</span>
        </div>

        {/* Cuisines */}
        <p className="text-sm truncate">{resData.cuisines.join(", ")}</p>

        {/* Cost for Two */}
        <p className="text-sm font-medium">{resData.costForTwo}</p>
      </div>
    </div>
  );
};

/* Higher-Order Component for Veg Label */
export const withLabelVeg = (ResCard) => {
  return (props) => (
    <div className="relative">
      <label className="absolute top-2 left-2 px-3 py-1 bg-green-600 text-white text-xs rounded-md shadow-md">
        Veg
      </label>
      <ResCard {...props} />
    </div>
  );
};
