// Responsible to show skeleton when loading data on Trending search component
const LocationsSkeleton = () => {
  return (
    <div className=" bg-white shadow-md rounded-2xl p-4 w-full text-xs">
      <p className='text-lg w-full font-semibold'>Trending Searches</p>
      <ul className="flex flex-wrap">
        <li className='skeleton w-20 h-5 m-2'></li>
        <li className='skeleton w-24 h-5 m-2'></li>
        <li className='skeleton w-14 h-5 m-2'></li>
        <li className='skeleton w-24 h-5 m-2'></li>
        <li className='skeleton w-8 h-5 m-2'></li>
        <li className='skeleton w-20 h-5 m-2'></li>
        <li className='skeleton w-20 h-5 m-2'></li>
      </ul>
    </div>
  );
};

export default LocationsSkeleton;