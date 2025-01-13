import { useState, useEffect } from "react";
import { ResCard, withLabelVeg } from "./ResCard.jsx";
import { Shimmer } from "./shimmer.jsx";
import { Link } from "react-router-dom";
import { MAIN_RESTAURANTS_API } from "../utils/constants.js";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";

export const BodyComponent = () => {


  let [listOfRestaurant, setList] = useState([]);
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const LabelVeg = withLabelVeg(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_RESTAURANTS_API);

    const response = await data.json();

    

    const restaurants =
      response?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    const restaurantInfo =
      restaurants.map((restaurant) => restaurant.info) || [];

  
    setList(restaurantInfo);
    setFilteredRestaurant(restaurantInfo);
  };

  let [searchText, setSearchText] = useState("");

  const status = useOnlineStatus();

  if (status === false)
    return (
      <div>
        <h1>
          Looks Like You are Not Connected to the Internet, Please Check your
          connection!
        </h1>
      </div>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className=" p-4  grid gap-6">
      <div className=" p-2 flex justify-around">
        <div className="flex items-center gap-3">
          <button
            className="bg-orange-400 px-3 py-3 text-white rounded-md cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated{" "}
          </button>

          <button
            className="bg-green-600 p-3 rounded-md text-white cursor-pointer"
            onClick={() => {
              const vegItems = listOfRestaurant.filter((res) => res.veg);
              setFilteredRestaurant(vegItems);
            }}
          >
            Veg Only
          </button>

          <button
            className="bg-blue-400 p-3 rounded-md text-white cursor-pointer"
            onClick={() => {
              const quickItems = listOfRestaurant.filter(
                (res) => res?.sla?.deliveryTime <= 30
              );
              setFilteredRestaurant(quickItems);
            }}
          >
            Near Me
          </button>
        </div>

        <div className="flex w-1/2">
          <input
            type="text"
            className="border-gray-300 flex-1 border border-solid w-full rounded-l-full outline-none px-6 text-gray-500"
            id="s-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            role="button"
            aria-label="Search"
            className="bg-orange-500 p-4 text-white rounded-r-full"
            onClick={() => {
              const trimmedSearchText = searchText.trim().toLowerCase();
              const searcResult = listOfRestaurant.filter(
                (res) =>
                  res.name && res.name.toLowerCase().includes(trimmedSearchText)
              );
              setFilteredRestaurant(searcResult);
              setFilteredRestaurant(searcResult);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="p-4  grid grid-cols-4 gap-4">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={"/restaurants/" + restaurant.id}
            className="res-text"
          >
            {restaurant.veg ? (
              <LabelVeg resData={restaurant}></LabelVeg>
            ) : (
              <ResCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
