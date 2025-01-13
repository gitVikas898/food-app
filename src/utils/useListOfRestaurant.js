import { useEffect , useState } from "react"
import { MAIN_RESTAURANTS_API } from "./constants";
export const useListOfRestaurant = ()=>{

    let [listOfRestaurant, setList] =  useState([]);
    let [filteredRestaurant , setFilteredRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch(MAIN_RESTAURANTS_API);

        const response = await data.json();

        const restaurants = response?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const restaurantInfo = restaurants.map(restaurant => restaurant.info);
        setList(restaurantInfo);
        setFilteredRestaurant(restaurantInfo);
    }

    return {listOfRestaurant,filteredRestaurant}
}