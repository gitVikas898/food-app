import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";
import logo from "../utils/img/logo.png";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const status = useOnlineStatus();
  const [btnName, setBtn] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setBtn((prevName) => (prevName === "Login" ? "Logout" : "Login"));
  };

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed  top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-center space-x-1 text-sm font-medium">
              <span className="text-gray-600">Status:</span>
              <span className="inline-flex items-center">
                {status ? (
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                ) : (
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                )}
              </span>
            </div>
            
            <Link
              to="/"
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/grocery"
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors"
            >
              Grocery
            </Link>
            <Link
              to="/cart"
              className="px-4 py-2 rounded-md text-sm font-medium bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
            >
              Cart ({cartItems.length})
            </Link>
            <button
              onClick={handleButtonClick}
              className="px-4 py-2 rounded-md text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            >
              {btnName}
            </button>
            <div className="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-700">
              {loggedInUser}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white border-t border-gray-200 py-2`}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <div className="flex items-center space-x-1 text-sm font-medium px-3 py-2">
              <span className="text-gray-600">Status:</span>
              <span className="inline-flex items-center">
                {status ? (
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                ) : (
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                )}
              </span>
            </div>
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600"
            >
              Contact
            </Link>
            <Link
              to="/grocery"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600"
            >
              Grocery
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 rounded-md text-base font-medium bg-orange-100 text-orange-600"
            >
              Cart ({cartItems.length})
            </Link>
            <button
              onClick={handleButtonClick}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-orange-500 text-white hover:bg-orange-600"
            >
              {btnName}
            </button>
            <div className="block px-3 py-2 rounded-md text-base font-medium bg-gray-100 text-gray-700">
              {loggedInUser}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};