

const TourDetailsSkeleton = () => {
  return (
    <div>
      <div className="flex flex-row gap-8 mb-6 bg-white p-4 rounded-xl">
        <div className="skeleton h-64 w-2/6"></div>
        <div className="flex flex-col gap-6 w-4/6 pr-6 relative">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="flex gap-6 absolute w-full bottom-0">
            <div className="skeleton h-8 w-1/2 rounded"></div>
            <div className="skeleton h-8 w-1/2 rounded"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TourDetailsSkeleton;