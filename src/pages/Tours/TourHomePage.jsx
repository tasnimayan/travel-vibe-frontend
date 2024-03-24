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
import { FaSearch } from 'react-icons/fa';
import DateRange from '../../components/utility/DateRange';
import { lightPrimary } from './../../assets/Colors';





const TourHomePage = () => {




  return (
    <DashboardLayout>
      <div>

        <div className='flex items-center justify-center pt-12 text-black'>
          <div className="headerSearch py-2 flex-col md:flex-row rounded-2xl text-sm">
            <div className="flex flex-col">
              <label htmlFor="place">Where</label>
              <input
                type="text"
                name='place'
                placeholder="Search destination"
                className="border-b-2 outline-none bg-transparent text-sm text-black placeholder:text-xs placeholder:text-gray-800"
              />
            </div>

            <div className='relative'>
              <button className="btn btn-lightPrimary">Pick Date</button>
              <div className='hidden absolute right-0 translate-x-1/2 z-10'>
                <DateRange />
              </div>
            </div>

            <div className="headerSearchItem">
              <button className=" shadow-lg bg-white py-2 px-10 md:w-full rounded-full text-blue-700 hover:bg-slate-200">
                Search 
              </button>
            </div>
          </div>
        </div>



        <section className='grid grid-cols-1 gap-4 my-12'>
          <div className="">
            <h1 className='text-4xl font-semibold'>Top <span className="text-pink-400">Destinations</span> In The World</h1>
            <p>It is a long established fact that a reader will be the distracted by the readable content of a page when looking at its layout from it.</p>
          </div>
          <div className="col-span-2">

          <TrendingList />
          </div>
            <button className='w-48 p-5 text-white bg-pink-300'>Discover More</button>
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

    </DashboardLayout>
  );
};

export default TourHomePage;