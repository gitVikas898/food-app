export const Address = () => {
    return (
      <div className="p-4 md:p-6 max-w-3xl mx-auto">
        {/* Delivery Address */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Delivery Address</h1>
          <p className="text-gray-600 leading-relaxed">
            7793 Gangotri, Q7X5+C75, Vijaya Gardens Road, Vijaya Gardens, Baridih, Jamshedpur, Jharkhand 831017, India
          </p>
        </div>
  
        {/* Payment Section */}
        <div className="mt-6 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Choose Payment Method</h1>
  
          <button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 rounded-md transition-all">
            PROCEED TO PAY
          </button>
        </div>
      </div>
    );
  };
  