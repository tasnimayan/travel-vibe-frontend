
import Pagination from '../../components/mini/Pagination';
import TourCardSmall from './../../components/tour/TourCardSmall';
import { useSelector } from 'react-redux';

import PostSkeleton from '../../components/skeletons/PostSkeleton';
import NoTour from './NoTour';
import { useSearchParams } from 'react-router-dom';
const AllTours = () => {
  const [query, setQuery] = useSearchParams()

  const {tourList, totalPages, loading, error} = useSelector((state) => state.tour)
  let page = query.get('page') || 1


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
        url = {location.pathname}
        totalPages = {totalPages}
        currentPage = {query.get('page') || 1} />) : null
      }
            
    </div>
  );

};

export default AllTours;