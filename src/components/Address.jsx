export const Address = ()=>{
    return (
        <div className="p-3 grid gap-2 ">
            <div id="address" className="grid gap-2 p-6 bg-white shadow-lg ">
                <h1 className="text-2xl text-slate-900">Delivery Address</h1>
                <p className="text-gray-500">7793 Gangotri, Q7X5+C75, Vijaya Gardens Road, Vijaya Gardens, Baridih, Jamshedpur, Jharkhand 831017, India</p>
            </div>
            <div className="bg-white shadow-lg p-6 flex flex-col gap-8">
                <h1 className="text-2xl text-slate-900">Choose Payment method</h1>
                <div className="flex items-center justify-center">
                    <button className="bg-green-500 w-full p-2 text-white font-semibold">PROCEED TO PAY</button>
                </div>
            </div>
        </div>
    )
}