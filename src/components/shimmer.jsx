export const Shimmer = () => {
  return (
    <div className="grid grid-cols-4 gap-2 p-8">
      <div className="h-96  grid gap-6 p-6">
        <div className="h-52 bg-gray-100 w-full rounded-lg"></div>
        <span className="px-8 bg-gray-100 w-1/2 rounded-full"></span>
        <span className="px-8 bg-gray-100 w-1/2 rounded-full"></span>
      </div>

      <div className="h-96  grid gap-6 p-6">
        <div className="h-52 bg-gray-100 w-full rounded-lg"></div>
        <span className="px-8 bg-gray-100 w-1/2 rounded-full"></span>
        <span className="px-8 bg-gray-100 w-1/2 rounded-full"></span>
      </div>

      <div className="h-96  grid gap-6 p-6">
        <div className="h-52 bg-gray-100 w-full rounded-lg"></div>
        <span className="px-8 bg-gray-100 w-1/2 rounded-full"></span>
        <span className="px-8 bg-gray-100 w-1/2 rounded-full"></span>
      </div>

      <div className="h-96  grid gap-6 p-6">
        <div className="h-52 bg-gray-100 w-full rounded-lg"></div>
        <span className="px-8 bg-gray-100 w-1/2 rounded-full"></span>
        <span className="px-8 bg-gray-100 w-1/2 rounded-full"></span>
      </div>
    </div>
  );
};

export const ShimmerMenu = () => {
  return (
    <div className=" rounded-lgp-6 w-1/2 flex gap-4 justify-between">
      <div
        id="shimmer-info"
        className=" grid gap-3 p-2"
      >
        <h1 className="w-96 h-8 bg-gray-100 rounded-full"></h1>
        <p className="w-80 h-8 bg-gray-100 rounded-full"></p>
        <p className="w-72 h-8 bg-gray-100 rounded-full"></p>
      </div>
      <div
        id="shimmer-image"
        className="bg-gray-100 rounded-lg w-52 h-52"
      ></div>
    </div>
  );
};

export const ShimmerMenuList = () => {

  return(<div id="container" className="grid gap-4">

    <div className="  p-6  flex gap-4 rounded-lg justify-between">
      <div
        id="shimmer-info"
        className="grid gap-3 p-2"
      >
        <h1 className="w-96 h-8 bg-gray-100 rounded-full"></h1>
        <p className="w-80 h-8 bg-gray-100 rounded-full"></p>
        <p className="w-72 h-8 bg-gray-100 rounded-full"></p>
      </div>
      <div id="shimmer-image" className="bg-gray-100 rounded-lg w-52 h-52"></div>
    </div>;

    <div className=" p-6 flex gap-4 rounded-lg justify-between">
      <div
        id="shimmer-info"
        className=" grid gap-3 p-2"
      >
        <h1 className="w-96 h-8 bg-gray-100 rounded-full"></h1>
        <p className="w-80 h-8 bg-gray-100 rounded-full"></p>
        <p className="w-72 h-8 bg-gray-100 rounded-full"></p>
      </div>
      <div id="shimmer-image" className="bg-gray-100 rounded-lg w-52 h-52"></div>
    </div>;


    <div className=" rounded-lg p-6  flex gap-4 justify-between">
      <div
        id="shimmer-info"
        className="grid gap-3 p-2"
      >
        <h1 className="w-96 h-8 bg-gray-100 rounded-full"></h1>
        <p className="w-80 h-8 bg-gray-100 rounded-full"></p>
        <p className="w-72 h-8 bg-gray-100 rounded-full"></p>
      </div>
      <div id="shimmer-image" className="bg-gray-100 rounded-lg w-52 h-52"></div>
    </div>;

  </div>)
};
