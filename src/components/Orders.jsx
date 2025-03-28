import { increaseQuantity, decreaseQuantity } from "../utils/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Orders = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, menu) => {
    const price = menu.card.info.price / 100 || menu.card.info.defaultPrice / 100;
    return acc + price * menu.quantity;
  }, 0);

  const gst = +(totalPrice * 0.18).toFixed(2); // 18% GST
  const delivery = +(totalPrice * 0.10).toFixed(2); // 10% Delivery charge

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Order Items */}
      {cart.map((menu, index) => (
        <div
          key={index}
          className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 p-4 border-b border-gray-300"
        >
          {/* Item Name */}
          <div className="w-full md:w-1/3">
            <h1 className="text-lg font-semibold text-gray-800">{menu.card.info.name}</h1>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
            <button
              className="text-green-600 text-xl px-2"
              onClick={() => dispatch(increaseQuantity(menu.card.info.id))}
            >
              +
            </button>
            <span className="text-gray-800 text-lg mx-2">{menu.quantity}</span>
            <button
              className="text-red-500 text-xl px-2"
              onClick={() => dispatch(decreaseQuantity(menu.card.info.id))}
            >
              -
            </button>
          </div>

          {/* Price */}
          <div className="text-lg font-medium text-gray-700">
            ₹
            {(
              (menu.card.info.price / 100 || menu.card.info.defaultPrice / 100) * menu.quantity
            ).toFixed(2)}
          </div>
        </div>
      ))}

      {/* Bill Details */}
      <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Bill Details</h1>

        <div className="space-y-4">
          {/* Item Total */}
          <div className="flex justify-between text-lg">
            <h1 className="text-gray-500">Item Total:</h1>
            <span className="text-green-600 font-semibold">₹{totalPrice.toFixed(2)}</span>
          </div>

          {/* Delivery Charge */}
          <div className="flex justify-between text-lg">
            <h1 className="text-gray-500">Delivery Charge:</h1>
            <span className="text-gray-500">₹{delivery}</span>
          </div>

          {/* GST */}
          <div className="flex justify-between text-lg">
            <h1 className="text-gray-500">GST (18%):</h1>
            <span className="text-gray-500">₹{gst}</span>
          </div>

          <hr className="border-gray-300" />

          {/* Total Payable */}
          <div className="flex justify-between text-xl font-bold">
            <h1 className="text-gray-900">Total To Pay:</h1>
            <span className="text-gray-900">₹{(totalPrice + gst + delivery).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
