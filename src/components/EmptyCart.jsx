import { Link } from "react-router-dom"
import emptyCart from "../utils/img/cart.png"
export const EmptyCart = ()=>{
    return(
        <div className="grid gap-4 place-items-center">
            <div id="img-container" className="flex items-center justify-center">
                    <img src={emptyCart} alt="" className="w-3/4"/>
            </div>

            <div id="text" className="grid gap-4 place-items-center">
                    <h1 className="text-gray-500 text-2xl">Your cart is empty</h1>
                    <h1 className="text-gray-500 text-lg">You can go to home page to view more restaurants</h1>
                   <h1 className="bg-orange-500 px-8 py-2 text-white rounded-lg"><Link to="/">View Restaurants Near You</Link> </h1>
            </div>
        
        </div>
    )
}
