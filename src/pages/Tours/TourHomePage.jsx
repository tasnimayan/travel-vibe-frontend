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
import Categories from '../../components/tour/Categories';




const TourHomePage = () => {




  return (
    <DashboardLayout>
      <div>
        {/* Hero Image with search bar */}
        <Header />

        {/* Popular destination Categories */}
        {/* <div className='p-6'>
          <PopularDestinations />
        </div>

        <div className='px-16 mb-12'>
          <h4 className='text-3xl my-4 w-full'>Trending Tours</h4>        
          <TrendingList />
        </div> */}
      </div>

      <div className='sm:px-3 md:px-6 lg:px-[4rem]'>
        <Categories />
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
          {/* Tour Post list */}
          <React.Suspense fallback ={<PostSkeleton />} >  {/* fallback can take any component to show while loading */}
            <LazyTours />
          </React.Suspense>

        </MainColLayout>
      </TwoColLayout>

    </DashboardLayout>
  );
};

export default TourHomePage;