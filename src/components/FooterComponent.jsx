import { GOOGLE_URL,APPLE_PLAY } from "../utils/constants.js";
import logo from "../utils/img/logo.png"
export const FooterComponent = () => {
    return (
      <div className=" text-white grid gap-8 p-4  bg-blue-500 w-full">
        <div className=" p-5 flex gap-2 items-center justify-center ">
          <h1 className="text-3xl font-bold">For better experience,download the Myfood app now</h1>
          <img
            className="w-24"
            src={GOOGLE_URL}
          ></img>
          <img
            className="w-24"
            src={APPLE_PLAY}
          ></img>
        </div>
        <div className="text-white grid grid-cols-6 gap-5">
          <div className=" p-4 flex flex-col items-center justify-center">
            <img
              src={logo}
              className="w-24"
            ></img>
            <p>©2024 Myfood limited</p>
          </div>
          <div className=" p-4 ">
            <h1>Company</h1>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Team</li>
            </ul>
          </div>
          <div className=" p-4 ">
            <h1>Contact Us</h1>
            <ul>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div className=" p-4 ">
            <h1>Legal</h1>
            <ul>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className=" p-4 ">
            <h1>Available in:</h1>
            <ul>
              <li>Bangalore</li>
              <li>Delhi</li>
              <li>Chennai</li>
            </ul>
          </div>
  
          <div className=" p-4 ">
            <h1>Social Links</h1>
            <ul>
              <li>Linked In</li>
              <li>X</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  