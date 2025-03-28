import { useSelector } from "react-redux";
import { Item } from "./Item";
import Orders from "./Orders";
import { EmptyCart } from "./EmptyCart";
import { Address } from "./Address";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center px-4 py-10">
      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center">
          <EmptyCart />
        </div>
      ) : (
        <div className="pt-20 w-full max-w-screen-lg flex flex-col lg:flex-row gap-8">
          {/* Address Section */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <div className="bg-white shadow-md rounded-lg p-6">
              <Address />
            </div>
          </div>

          {/* Orders Section */}
          <div className="w-full lg:w-2/3 flex-grow">
            <div className="bg-white shadow-md rounded-lg p-6">
              <Orders item={cartItems} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
