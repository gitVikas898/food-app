import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";
import logo from "../utils/img/logo.png"
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";


export const Header = () => {

  const status = useOnlineStatus()

  let [btnName ,setBtn] = useState(["Login"]);


  const handleButtonClick = () => {
    setBtn((prevName) => (prevName === "Login" ? "Logout" : "Login"));
  };


  const {loggedInUser} = useContext(UserContext);

  //Subscribing to store using a selector 

  const cartItems = useSelector((store)=>store.cart.items);


    return (
      <div className=" z-10 items-center p-2 flex justify-between shadow-md w-full">
        <div className="max-w-24 ">
          <img
             src={logo}
            className="flex"
          ></img>
        </div>
  
        <div className=" flex items-center justify-center p-2 ">
          <ul className="flex gap-4 items-center">
            <li>Online Status :{status? "🟢" : "🔴"}</li>
            <li>
              <Link to="/" className="bg-orange-400 px-4 py-2 rounded text-white">Home</Link>
            </li>
            <li>
               <Link to="/about"  className="bg-orange-400 px-4 py-2 rounded text-white">About Us</Link>
            </li>
            <li> 
               <Link to="/contact"  className="bg-orange-400 px-4 py-2 rounded text-white">Contact Us</Link>
            </li>
            <li> 
               <Link to="/grocery"   className="bg-orange-400 px-4 py-2 rounded text-white">Grocery</Link>
            </li>
            <li>
              <Link to="/cart"   className="bg-orange-400 px-4 py-2 rounded text-white">Cart:({cartItems.length}) </Link>
            </li>
            <li>
              <button className="bg-orange-400 px-4 py-2 rounded text-white" onClick={handleButtonClick} >{btnName}
            </button>
            </li>

            <li  className="bg-orange-400 px-4 py-2 rounded text-white">
                {loggedInUser}
            </li>
          </ul>
        </div>
      </div>
    );
  };