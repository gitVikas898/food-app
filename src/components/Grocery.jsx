const Grocery = ()=>{
    return(
        <div className="min-h-screen">
            <div className="flex flex-col gap-4 p-2">
                <h1 className="text-2xl font-semibold font-mono">We will  arrive soon till then join our Newsletter for updates!</h1>
                <form action="#" className=" p-3 ">
                    <div className="flex gap-4 items-center justify-start" >
                        <label htmlFor="email" className="text-slate-800 font-mono text-xl">Email : </label>
                        <input type="email" id="email" className="w-1/3 border border-gray-200 border-solid p-3 rounded-lg outline-none" placeholder="Enter email"/>
                        <button type="#" className="bg-violet-600 px-4 py-3 w-1/6 text-white ">Subscribe</button>
                    </div>
    
                </form>
            </div>
        </div>
    )
}

export default Grocery