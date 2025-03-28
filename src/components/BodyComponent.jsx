import { useState, useEffect } from "react";
import { ResCard, withLabelVeg } from "./ResCard.jsx";
import { Shimmer } from "./shimmer.jsx";
import { Link } from "react-router-dom";
import { MAIN_RESTAURANTS_API } from "../utils/constants.js";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";

export const BodyComponent = () => {
  const [listOfRestaurant, setList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const LabelVeg = withLabelVeg(ResCard);
  const status = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_RESTAURANTS_API);
    const response = await data.json();
    const restaurants =
      response?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    const restaurantInfo = restaurants.map((restaurant) => restaurant.info) || [];

    setList(restaurantInfo);
    setFilteredRestaurant(restaurantInfo);
  };

  if (!status) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center">
        <h1 className="text-xl font-semibold text-red-600">
          Looks like you're not connected to the Internet. Please check your connection!
        </h1>
      </div>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <div>
      <Shimmer />
    </div>
  ) : (
    <div className="pt-24  pb-24 max-w-7xl mx-auto">
      {/* Filters and Search */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            className="bg-orange-500 px-4 py-2 text-white rounded-lg shadow-md hover:bg-orange-600 transition"
            onClick={() => {
              setFilteredRestaurant(listOfRestaurant.filter((res) => res.avgRating > 4));
            }}
          >
            ⭐ Top Rated
          </button>
          <button
            className="bg-green-600 px-4 py-2 text-white rounded-lg shadow-md hover:bg-green-700 transition"
            onClick={() => {
              setFilteredRestaurant(listOfRestaurant.filter((res) => res.veg));
            }}
          >
            🥦 Veg Only
          </button>
          <button
            className="bg-blue-500 px-4 py-2 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurant.filter((res) => res?.sla?.deliveryTime <= 30)
              );
            }}
          >
            📍 Near Me
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex w-full md:w-1/2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 text-gray-600 focus:ring focus:ring-orange-300"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
          />
          <button
            className="bg-orange-500 px-6 py-2 text-white rounded-r-full hover:bg-orange-600 transition"
            onClick={() => {
              const trimmedSearchText = searchText.trim().toLowerCase();
              setFilteredRestaurant(
                listOfRestaurant.filter(
                  (res) => res.name && res.name.toLowerCase().includes(trimmedSearchText)
                )
              );
            }}
          >
            🔍 Search
          </button>
        </div>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
            {restaurant.veg ? (
              <LabelVeg resData={restaurant} />
            ) : (
              <ResCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
