import { increaseQuantity, decreaseQuantity } from "../utils/cartSlice";
import { useSelector, useDispatch } from "react-redux";
const Orders = ()=>{

    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((acc, menu) => {
        const price =
            menu.card.info.price / 100 ||
            menu.card.info.defaultPrice / 100;
        return acc + price * menu.quantity;
    }, 0);

    const gst = +(totalPrice * 0.18).toFixed(2); // 5% GST
  const delivery = +(totalPrice * 0.10).toFixed(2); // 4% Delivery charge
    return(
        <div className=" p-4 flex flex-col gap-1 bg-white">
            {cart.map((menu,index)=>(
                <div key={index} className=" flex items-center justify-between p-3">

                    <div className="w-48 mr-2">
                        <h1 className="text-sm">{menu.card.info.name}</h1>
                    </div>


                    <div className="mr-2 border border-gray-300 border-solid px-3 flex items-center justify-between w-20" >
                        <button className="text-green-500 text-lg" onClick={() => dispatch(increaseQuantity(menu.card.info.id))}>+</button>
                        <span className="text-green-500">{menu.quantity}</span>
                        <button className="text-gray-600 text-lg" onClick={() => dispatch(decreaseQuantity(menu.card.info.id))}>-</button>
                    </div>

                   <div  className="text-sm">
                       <h1 className="text-gray-400">  ₹
                            {(
                                (menu.card.info.price / 100 ||
                                    menu.card.info.defaultPrice / 100) *
                                menu.quantity
                            ).toFixed(2)}
                        </h1>
                   </div>

                </div>           
                ))}
                <div className="flex flex-col gap-3 ">
                    <h1 className="text-xl font-semibold">Bill Details </h1>
                    <div className="flex flex-col gap-4 ">
                        <div className="flex justify-between items-center">
                            <h1 className="text-gray-400 ">Item total : </h1>
                            <span className="text-green-500">{totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-gray-400 ">Delivery charge :</h1>
                            <span className="text-gray-400 "> {delivery} </span>
                        </div>
                        <div className="flex justify-between items-center">
                         <h1 className="text-gray-400 ">GST :  </h1>
                            <span className="text-gray-400 ">{gst} </span>
                        </div>
                        
                        <hr />
                        <div className="flex justify-between items-center">
                            <h1 className="text-gray-950 font-semibold">To Pay : </h1>
                            <span className="text-gray-950 font-semibold"> ₹{(totalPrice + gst + delivery).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Orders;