import { NavLink, Outlet, useParams}from 'react-router-dom';
import TourDateAside from './../../components/aside/TourDateAside';
import ProfileAside from '../../components/aside/ProfileAside';
import {FaRegUser, FaRegCalendar, FaRegHeart} from 'react-icons/fa'
import { CiLocationOn, CiShare2 } from "react-icons/ci";
import DashboardLayout from '../../layout/DashboardLayout';
import TwoColLayout from '../../layout/TwoColLayout';
import AsideLayout from '../../layout/AsideLayout';
import MainColLayout from '../../layout/MainColLayout';
import DetailImages from '../../components/tour/DetailImages';
import Reviews from '../../components/tour/Reviews';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTourDetails } from './../../redux/state/tour/tourSlice';
import { useEffect } from 'react';
import TourDetailsSkeleton from '../../components/skeletons/TourDetailsSkeleton';

const TourDetailsPage = () => {
  const param = useParams()
  const dispatch = useDispatch()
  const {tourDetails, loading, error} = useSelector(state => state.tour)

  useEffect(()=>{
    dispatch(fetchTourDetails(param.tourId))

  }, [dispatch])
  if(loading){
    return <TourDetailsSkeleton />
  }
  if(!tourDetails){
    return <>No data found</>
  }
  return (
    <>
        
        <TwoColLayout>
          {/* left column options */}
          <MainColLayout>
            <div className='bg-white rounded-lg'>
              <div className='py-2 pr-2'>
                <div className="grid gap-4">

                  {/* Short details */}
                  <div className="flex flex-row gap-2 text-start p-8">
                    {/* Tour Details  */}
                    <div className="text-sm w-2/3">
                      <h2 className="text-xl text-gray-700 font-semibold mb-2 leading-6">{tourDetails.title}</h2>
                      <div className="flex pb-2">
                        <FaRegCalendar/>
                        <span>{tourDetails.duration}</span>
                        <FaRegUser />
                        <span>{tourDetails.personCapacity} person</span>

                      </div>
                      <div className="flex pb-2">
                        <CiLocationOn />
                        <span>{tourDetails.startLocation}</span>
                      </div>
        
                      <span className="font-bold py-1 px-2 border rounded">{tourDetails.ratingsAverage}</span>
                      <span>{tourDetails.ratingsQuantity} reviews</span> <br/>

                    </div>
                    {/* Price section */}
                    <div className="flex flex-col w-1/3">
                      <div className="text-right text-montserrat leading-4">
                        <span className="text-sm text-gray-400">starting from</span>
                        <p className="text-2xl font-bold text-green-500">BDT {tourDetails.price}</p>
                        <span className="text-sm text-gray-400">per person</span>
                      </div>
                      <div className='flex justify-end mt-4'>
                        <button className='flex items-center justify-center border w-10 h-10 rounded-md border-gray-200 mr-3 hover:bg-green-600 hover:text-white active:border-gray-700'><FaRegHeart/></button>
                        <button className='flex items-center justify-center border w-10 h-10 rounded-md border-gray-200 mr-3 hover:bg-green-600 hover:text-white active:border-gray-700'><CiShare2/></button>
                        <button className='h-10 px-4 rounded-md bg-green-600 hover:bg-green-700 text-white border active:border-gray-700'>Book Now</button>
                        
                      </div>
                    </div>

                  </div>

                  {/* Images Section */}
                  <DetailImages images={tourDetails.images}/>
                </div>
              </div>

              <div>
                <div className="block text-sm font-medium text-gray-500 border-b border-gray-200 bg-white dark:text-gray-400 dark:border-gray-700 ">
                  <ul className="flex flex-wrap text-center">
                    <li className="me-2">
                      <NavLink to="overview" className="inline-block p-4 border-b-2 text-blue-600 border-blue-600 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Overview</NavLink>
                    </li>
                    <li className="me-2">
                      <NavLink to="packages" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg active dark:text-blue-500 hover:text-gray-600 hover:border-gray-300 dark:border-blue-500">Packages</NavLink>
                    </li>
                    <li className="me-2">
                      <NavLink to="itinerary" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Itinerary</NavLink>
                    </li>
                    <li className="me-2">
                      <NavLink to="policy" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Policy</NavLink>
                    </li>
                    
                  </ul>
                </div>
                <div className='p-4 text-left'>
                  <Outlet />
                </div>
                
                {/* Outlet defines Where the Components of nested route will be rendered */}
              </div>

              <Reviews tourId={param.tourId}/>
            </div>

          </MainColLayout>

          
          <AsideLayout>
            <ProfileAside profile={tourDetails?.orgId}/>
            <TourDateAside data={tourDetails}/>
          </AsideLayout>

        </TwoColLayout>



    </>      
  );
};

export default TourDetailsPage;