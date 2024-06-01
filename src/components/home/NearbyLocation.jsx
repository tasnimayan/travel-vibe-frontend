import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import MinimalCard from '../tour/MinimalCard';
import { fetchNearbyLocations } from '../../redux/state/tour/locationSlice';

const NearbyLocation = () => {
  const dispatch = useDispatch()
  const {nearbyLocations, loading} = useSelector(state =>state.location)

  useEffect(()=>{
    dispatch(fetchNearbyLocations({country:"bangladesh",location:"sylhet"}))
  },[dispatch])
// If data is fetching
  if(loading){
    return (
      <div className='mt-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-6'>
        {
        [1,2,3].map((item)=>{
          return(
            <div className="relative border bg-[#F8FAFC] flex flex-row items-center justify-center rounded-3xl p-6 animate-pulse cursor-pointer" key={item}>
              <div className="w-28 h-28 rounded-[100%] bg-gray-200 "></div>
              <div className="w-12 h-5 absolute top-2 right-3 rounded-2xl px-2 bg-gray-100">
              </div>
              <div className="ms-5">
                <div className="w-28 h-6 bg-gray-200 mb-2 rounded-xl"></div>
                <p className="w-20 h-5 bg-gray-200 rounded-xl"></p>
              </div>
          </div>
          )
        })
        }
      </div>
    )
  }

  return (
    <div className="mt-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-6">
      {
        nearbyLocations.map((item,idx)=><MinimalCard data={item} key={idx}/>)
      }
    </div>
  );
};

export default NearbyLocation;