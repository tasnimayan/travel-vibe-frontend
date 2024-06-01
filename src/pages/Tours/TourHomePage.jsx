import React, { useEffect } from 'react'
import TrendingList from '../../components/categoryList/TrendingList';

const LazyTours = React.lazy(()=>import('./AllTours'))
import PostSkeleton from '../../components/skeletons/PostSkeleton';
import AsideOptions from '../../components/aside/AsideOptions';
import Trending from '../../components/aside/Trending';
import PopularDestinations from '../../components/featured/PopularDestinations';
import AsideLayout from '../../layout/AsideLayout';
import TwoColLayout from '../../layout/TwoColLayout';
import MainColLayout from '../../layout/MainColLayout';
import Categories from '../../components/tour/Categories';

import TourSearchBar from '../../components/tour/TourSearchBar';
import Button from '../../components/Button';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchTours } from '../../redux/state/tour/tourSlice';                                                
import SectionHeading from '../../components/tour/SectionHeading';
import DiscountedTours from '../../components/tour/DiscountedTours';


const TourHomePage = () => {

  const [query] = useSearchParams()
  let page = query.get('page') || 1
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchTours(page));
  }, [dispatch])

  return (
    <>
      <div>
        <div className='flex items-center justify-center pt-12 text-black'>
          <TourSearchBar />
        </div>

      </div>

      {/* Popular destination Categories */}
      <section className='p-6'>
        <SectionHeading
          title="Top Destinations In The World"
          subtitle="Discover top destinations"
          align="left"
          className='px-4 md:px-20'
          />
        <PopularDestinations />
      </section>


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

    </>
  );
};

export default TourHomePage;