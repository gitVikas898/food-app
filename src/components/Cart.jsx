import { useDispatch, useSelector } from "react-redux";
import { Item } from "./Item";
import Orders from "./Orders";
import { EmptyCart } from "./EmptyCart";
import { Address } from "./Address";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <div className="min-h-screen p-4 bg-slate-300">
      {cartItems.length === 0 ? (
        <div className="w-full   flex items-center justify-center">
          <EmptyCart></EmptyCart>
        </div>
      ) : (
        <div className="flex gap-4 items-center justify-center">
          <div>
             <Address></Address>
          </div>
          <div>
            <Orders item={cartItems} ></Orders>
          </div>
        </div>
      )}
    </div>
  );
};
