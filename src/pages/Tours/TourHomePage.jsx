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

        <section className='grid grid-cols-1 gap-4 my-12'>
          <div className="">
            <h1 className='text-4xl font-semibold'>Top <span className="text-pink-400">Destinations</span> In The World</h1>
            <p>It is a long established fact that a reader will be the distracted by the readable content of a page when looking at its layout from it.</p>
          </div>
          <div className="col-span-2">

          <TrendingList />
          </div>
            <Button type="primary" as="a" href="/search/tours/">Discover More</Button>
        </section>

      </div>

      {/* Popular destination Categories */}
      <div className='p-6'>
        <PopularDestinations />
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

    </>
  );
};

export default TourHomePage;