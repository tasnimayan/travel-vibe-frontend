import { NavLink, Outlet}from 'react-router-dom';
import TourDateAside from './../../components/aside/TourDateAside';
import ProfileAside from '../../components/aside/ProfileAside';

const TourDetailsPage = () => {
  return (
    <>
      <div className="md:px-4 lg:px-24 bg-gray-50 text-center">
        <div className="flex flex-row py-20 lg:gap-8 md:gap-2">
          <aside className="hidden lg:block w-full lg:w-3/12 rounded-xl sticky top-0 bg-white p-2 h-auto">
            <ProfileAside />
            <TourDateAside />
          </aside>

          
          <main role="main" className="w-full lg:w-9/12 rounded-xl pl-2 bg-white">
            <div className='py-2 pr-2'>
              <div className="grid gap-4">
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