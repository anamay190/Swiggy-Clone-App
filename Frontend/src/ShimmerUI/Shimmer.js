const Shimmer = ({ count = 6 }) => {
  return (
    <div className="body font-roboto min-h-screen mb-40 mt-12">
      {/* Shimmer for search input and sort button */}
      <div className="filter w-full flex flex-col md:flex-row md:items-center md:justify-center gap-4 px-4 py-3">
        <div className="w-full md:w-64 h-10 px-3 py-1 bg-gray-300 rounded-md animate-pulse"></div>

        <div className="w-48 h-10 px-4 py-2 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      {/* Shimmer for restaurant cards */}
      <div className="mt-8 flex flex-wrap justify-center res-container">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="mx-3 my-2 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 animate-pulse"
          >
            <div className="w-full h-[150px] bg-gray-300 rounded-lg mb-4"></div>

            <div className="flex-grow">
              <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
            </div>

            <div className="flex items-center">
              <div className="h-8 bg-gray-300 rounded w-1/4 mr-3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
