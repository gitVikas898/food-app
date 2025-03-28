export const Shimmer = () => {
  return (
    <div className="min-h-screen pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="h-96 grid gap-6 p-6 bg-white rounded-lg shadow-md">
          <div className="h-52 bg-gray-200 w-full rounded-lg"></div>
          <span className="h-6 bg-gray-200 w-1/2 rounded-full"></span>
          <span className="h-6 bg-gray-200 w-1/2 rounded-full"></span>
        </div>
      ))}
    </div>
  );
};

export const ShimmerMenu = () => {
  return (
    <div className="w-full  flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-white shadow-md">
      <div id="shimmer-info" className="grid gap-3 p-2 w-full max-w-lg">
        <div className="w-96 h-8 bg-gray-200 rounded-full"></div>
        <div className="w-80 h-8 bg-gray-200 rounded-full"></div>
        <div className="w-72 h-8 bg-gray-200 rounded-full"></div>
      </div>
      <div id="shimmer-image" className="bg-gray-200 rounded-lg w-52 h-52"></div>
    </div>
  );
};

export const ShimmerMenuList = () => {
  return (
    <div id="container" className="grid gap-6 p-6">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="p-6 flex flex-col md:flex-row gap-6 items-center bg-white rounded-lg shadow-md">
          <div id="shimmer-info" className="grid gap-3 p-2 w-full">
            <div className="w-96 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-80 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-72 h-8 bg-gray-200 rounded-full"></div>
          </div>
          <div id="shimmer-image" className="bg-gray-200 rounded-lg w-52 h-52"></div>
        </div>
      ))}
    </div>
  );
};