import React from 'react'
import TrendingList from '../components/categoryList/TrendingList';

const LazyTours = React.lazy(()=>import('./Tours/AllToursPage'))
import Header from './../components/header/Header';
import PostSkeleton from './../components/skeletons/PostSkeleton';
import AsideOptions from './../components/aside/AsideOptions';
import Trending from './../components/aside/Trending';
import DashboardLayout from '../layout/DashboardLayout';
import Featured from './../components/featured/Featured';


const HomePage = () => {
  return (
    <DashboardLayout>
      <div>
        <Header />
        <div className='p-6'>
          <Featured />
        </div>
        <div className="md:px-4 lg:px-24 bg-gray-50">
          
          <div className="flex flex-row py-20 lg:gap-8 md:gap-2">
            <aside className="hidden lg:block w-full lg:w-3/12 rounded-xl sticky top-0 bg-white p-2 h-auto">
              <Trending />
              <AsideOptions />  
            </aside>

            
            <main role="main" className="w-full lg:w-9/12 rounded-xl pl-4 ">
              <div className='mb-12'>
                <h4 className='text-3xl my-4 w-full'>Trending Tours</h4>        
                <TrendingList />
              </div>
              <React.Suspense fallback ={<PostSkeleton />} >  {/* fallback can take any component to show while loading */}
                <LazyTours />
              </React.Suspense>
            </main>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
};

export default HomePage;