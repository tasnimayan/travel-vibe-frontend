import React, { useEffect } from 'react'


const LazyTours = React.lazy(()=>import('./AllTours'))
import PostSkeleton from '../../components/skeletons/PostSkeleton';
import AsideOptions from '../../components/aside/AsideOptions';
import Trending from '../../components/aside/Trending';
import DashboardLayout from '../../layout/DashboardLayout';
import AsideLayout from '../../layout/AsideLayout';
import TwoColLayout from '../../layout/TwoColLayout';
import MainColLayout from '../../layout/MainColLayout';
import Categories from '../../components/tour/Categories';

import TourSearchBar from '../../components/tour/TourSearchBar';
import { useDispatch } from 'react-redux';
import { fetchSearchedTours } from '../../redux/state/tour/tourSlice';
import { useSearchParams } from 'react-router-dom';


const SearchedTour = () => {


  const [params, setParams] = useSearchParams()
  let location = params.get('location')
  let startDate = params.get('startDate')

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchSearchedTours({location:location, startDate:startDate}))
  }, [dispatch])

  const handleSearch = () => {
    // console.log('Searching for tours in', location, 'starting from', startDate);
    dispatch(fetchSearchedTours({location:location, startDate:startDate}))
  };

  return (
    <DashboardLayout>
    <div>
      <div className='flex items-center justify-center pt-12 text-black'>
        <TourSearchBar />
      </div>
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

export default SearchedTour;