
import { useLocation, useSearchParams } from 'react-router-dom';
import Pagination from '../../components/mini/Pagination';
import TourCardSmall from './../../components/tour/TourCardSmall';
const AllTours = () => {

  const location = useLocation()
  const [query] = useSearchParams()
  console.log(query.get('page'))

  return (
    <div className="w-full">
      
        {/* All tours card goes here */}
        <div className="flex flex-col gap-4">
          {
            [1,2,3,4,5,6].map((item, index)=>(
              <TourCardSmall key={index}/>))
          }
        </div>
      
      {/* Pagination */}
        <Pagination 
        url = {location.pathname}
        currentPage = {query.get('page')} />

      
    </div>
  );
};

export default AllTours;