import { MENU_ITEM_URL } from "../utils/constants";

export const MenuCard = ({ menuData }) => {
  return (
    <div className="shadow-lg p-4 w-full md:w-1/2 flex flex-col md:flex-row gap-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in bg-white">
      {/* Text Container */}
      <div className="w-full flex flex-col justify-between p-2">
        <h2 className="text-xl md:text-2xl font-semibold">{menuData.name}</h2>
        <p className="text-lg font-semibold text-orange-600">
          ₹{Math.round(menuData.defaultPrice / 100 || menuData.price / 100)}
        </p>
        <p className="text-gray-500 text-sm md:text-base line-clamp-3">
          {menuData.description}
        </p>
      </div>

      {/* Image Container */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <img
          className="w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 object-cover rounded-lg"
          src={MENU_ITEM_URL + menuData.imageId}
          alt={menuData.name}
        />
      </div>
    </div>
  );
};
