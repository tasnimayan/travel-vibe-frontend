// This component is responsible for fetching tours according to the url and show tour list

import Pagination from '../../components/mini/Pagination';
import TourCardSmall from './../../components/tour/TourCardSmall';
import { useDispatch, useSelector } from 'react-redux';

import PostSkeleton from '../../components/skeletons/PostSkeleton';
import NoTour from '../../components/tour/NoTour';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchSearchedTours, fetchTours } from '../../redux/state/tour/tourSlice';

const AllTours = () => {
  const path = useLocation()
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams()
  let page = query.get('page') || 1
  let location = query.get('location') || ''
  let startDate = query.get('startDate') || ''

  useEffect(()=>{
    if(query.size === 0){
      dispatch(fetchTours(page));
    }
    else {
      dispatch(fetchSearchedTours({location:location, startDate:startDate,page:page}))
    }
  }, [dispatch])


  const {tourList, totalPages, loading} = useSelector((state) => state.tour)


  if(loading){
    return <PostSkeleton />
  }
  if(!loading && tourList.length === 0 ){
    return <NoTour />
  }

  return (
    <div className="w-full">
        {/* All tours card goes here */}
        <div className="flex flex-col gap-4">
          {
            tourList?.map((tour, index)=>(
              <TourCardSmall tour={tour} key={index} />))
          }
        </div>
      
      {/* Pagination */}
      {
        totalPages>1 ? (<Pagination 
        url = {path.pathname}
        totalPages = {totalPages}
        currentPage = {query.get('page') || 1} />) : null
      }
            
    </div>
  );

};

export default AllTours;