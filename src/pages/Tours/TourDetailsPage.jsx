import { NavLink, Outlet}from 'react-router-dom';
import TourDateAside from './../../components/aside/TourDateAside';
import ProfileAside from '../../components/aside/ProfileAside';
import {FaRegUser, FaRegCalendar, FaRegHeart, FaShare} from 'react-icons/fa'
import { CiLocationOn, CiShare2 } from "react-icons/ci";

const TourDetailsPage = () => {
  return (
    <>
      <div className="md:px-8 lg:px-24 bg-gray-50">
        <div className="flex flex-row py-20 :gap-8 md:gap-6">
          <aside className="hidden md:block w-full md:w-3/12 rounded-xl sticky top-0 bg-white p-2 h-auto text-center">
            <ProfileAside />
            <TourDateAside />
          </aside>

          
          <main role="main" className="w-full md:w-9/12 rounded-xl pl-2 bg-white">
            <div className='py-2 pr-2'>
              <div className="grid gap-4">

                {/* Short details */}
                <div className="flex flex-row gap-2 text-start p-8">
                  {/* Tour Details  */}
                  <div className="text-sm w-2/3">
                    <h2 className="text-xl text-gray-700 font-semibold mb-2 leading-6">Rangamati, Sajek 3 nights 2 days tour</h2>
                    <div className="flex pb-2">
                      <FaRegCalendar/>
                      {/* <span>3 days</span> */}
                      <FaRegUser />
                      {/* <span>25 People going</span> */}
                      <CiLocationOn />
                      <span>Sayedabad Bus Terminal</span>
                    </div>
      
                    <span className="font-bold py-1 px-2 border rounded">4.5</span>
                    <span>370 reviews</span> <br/>

                  </div>
                  {/* Price section */}
                  <div className="flex flex-col w-1/3">
                    <div className="text-right text-montserrat leading-4">
                      <span className="text-sm text-gray-400">starting from</span>
                      <p className="text-2xl font-bold text-green-500">BDT 4999</p>
                      <span className="text-sm text-gray-400">per person</span>
                    </div>
                    <div className='text-right mt-4'>
                      <button className='border w-10 h-10 rounded-md border-green-600 mr-3'><FaRegHeart/></button>
                      <button className='border w-10 h-10 rounded-md border-green-600 mr-3'><CiShare2/></button>
                      <button className='h-10 px-4 rounded-md bg-green-600 hover:bg-green-700 text-white'>Book Now</button>
                      
                    </div>
                  </div>

                </div>

                <div>
                  <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="" />
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                  </div>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                  </div>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                  </div>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                  </div>
                  <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                  </div>
                </div>
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
          </main>
        </div>
      </div>
      
    </>
  );
};

export default TourDetailsPage;