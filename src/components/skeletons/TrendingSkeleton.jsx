
const TrendingSkeleton = () => {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col gap-4 border p-2 rounded-xl">
        <div className="skeleton h-56 w-64"></div>
        <div className="flex flex-col gap-2 w-3/6">
          <div className="skeleton h-2 w-20"></div>
          <div className="skeleton h-2 w-28"></div>
          <div className="skeleton h-2 w-full"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border p-2 rounded-xl">
        <div className="skeleton h-40 w-36"></div>
        <div className="flex flex-col gap-2 w-3/6">
          <div className="skeleton h-2 w-20"></div>
          <div className="skeleton h-2 w-28"></div>
          <div className="skeleton h-2 w-full"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border p-2 rounded-xl">
        <div className="skeleton h-40 w-36"></div>
        <div className="flex flex-col gap-2 w-3/6">
          <div className="skeleton h-2 w-20"></div>
          <div className="skeleton h-2 w-28"></div>
          <div className="skeleton h-2 w-full"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border p-2 rounded-xl">
        <div className="skeleton h-40 w-36"></div>
        <div className="flex flex-col gap-2 w-3/6">
          <div className="skeleton h-2 w-20"></div>
          <div className="skeleton h-2 w-28"></div>
          <div className="skeleton h-2 w-full"></div>
        </div>
      </div>
      
    </div>
  );
};

export default TrendingSkeleton;