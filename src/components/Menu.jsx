import { MenuCard } from "./MenuCard.jsx";
import { MenuInfo } from "./MenuInfo.jsx";
import { ShimmerMenu, ShimmerMenuList } from "./shimmer.jsx";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu.jsx";
import menu from "../utils/img/menu.png";
import { Accordion } from "./Accordion.jsx";
import { useState } from "react";

export const Menu = () => {
  const { resId } = useParams();
  const { resinfo, menuList, catergory } = useRestaurantMenu(resId); // Custom Hook
  const [showIndex, setShowIndex] = useState(0);

  // Show shimmer effect if data is not loaded
  if (menuList.length === 0 || resinfo.length === 0) {
    return (
      <div className="pt-20 flex flex-col items-center justify-center gap-6 p-6 border-2 border-green-500">
        <ShimmerMenu />
        <ShimmerMenuList />
      </div>
    );
  }

  return (
    <div className="pt-24 max-w-screen-lg w-full mx-auto p-5 space-y-6">
      {/* Restaurant Info Section */}
      <MenuInfo info={resinfo} key={resinfo.id} />

      {/* Menu Heading */}
      <div className="w-full flex items-center justify-center text-xl md:text-2xl bg-gray-100 rounded-full p-3 shadow-md">
        <img src={menu} alt="Menu Icon" className="w-10 sm:w-12 md:w-16 mx-3" />
        <span className="font-semibold text-gray-700">Menu</span>
      </div>

      {/* Accordion for Categories */}
      <div className="w-full space-y-4">
        {catergory.map((item, index) => (
          <Accordion
            key={item?.card?.card?.title}
            categoryData={item?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};
