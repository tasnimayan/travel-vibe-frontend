import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularLocations } from "../../redux/state/tour/popularLocationSlice";
import LocationsSkeleton from "../skeletons/LocationsSkeleton";
import { fetchSearchedTours } from "../../redux/state/tour/tourSlice";
import { useSearchParams } from "react-router-dom";

const Trending = () => {
  const dispatch = useDispatch()
  const {popularLocations, loading, error} = useSelector(state =>state.location)

  const [params, setParams] = useSearchParams();
  useEffect(()=>{
    dispatch(fetchPopularLocations())
  },[dispatch])

  const handleSearch = (location)=>{
    dispatch(fetchSearchedTours({location:location}))
    setParams({location:location})
  }

  if(loading){
    return <LocationsSkeleton />
  }
  return (
      <div className=" bg-white shadow-md rounded-2xl p-4 w-full text-xs">
        <p className='text-lg w-full font-semibold'>Trending Searches</p>
        <ul>
          {
            popularLocations?.map((location, idx)=>{
              return <li className='inline-block bg-slate-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300' key={idx}>
                <button onClick={()=>handleSearch(location.location)}>
                {location.location}
                </button>
              </li>
            })
          }
        </ul>
      </div>
  );
};

export default Trending;