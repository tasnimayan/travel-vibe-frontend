import React from 'react'
import TrendingList from '../../components/categoryList/TrendingList';

const LazyTours = React.lazy(()=>import('./AllTours'))
import Header from '../../components/header/Header';
import PostSkeleton from '../../components/skeletons/PostSkeleton';
import AsideOptions from '../../components/aside/AsideOptions';
import Trending from '../../components/aside/Trending';
import DashboardLayout from '../../layout/DashboardLayout';
import PopularDestinations from '../../components/featured/PopularDestinations';
import AsideLayout from '../../layout/AsideLayout';
import TwoColLayout from '../../layout/TwoColLayout';
import MainColLayout from '../../layout/MainColLayout';
import TourCardSmall from '../../components/tour/TourCardSmall';



const TourHomePage = () => {
  return (
    <DashboardLayout>
      <div>
        {/* Hero Image with search bar */}
        <Header />

        {/* Popular destination Categories */}
        <div className='p-6'>
          <PopularDestinations />
        </div>

            <div className='px-16 mb-12'>
              <h4 className='text-3xl my-4 w-full'>Trending Tours</h4>        
              <TrendingList />
            </div>

      </div>


    
        <TwoColLayout>
          {/* Side Bar components layout */}
          <AsideLayout>
            {/* Aside sections */}
            <Trending />
            <AsideOptions /> 
          </AsideLayout>
          
          {/* Main content section of two column layout */}
          <MainColLayout>

<TourCardSmall />

            <React.Suspense fallback ={<PostSkeleton />} >  {/* fallback can take any component to show while loading */}
              <LazyTours />
            </React.Suspense>

            <div className="flex justify-center">
                <nav className="flex space-x-2" aria-label="Pagination">
                    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                        Previous
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                        1
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                        2
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                        3
                    </a>
                    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                        Next
                    </a>
                </nav>
            </div>


          </MainColLayout>
        </TwoColLayout>

    </DashboardLayout>
  );
};

export default TourHomePage;