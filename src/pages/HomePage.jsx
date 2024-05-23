// Home / Index page that loads on the root url

import Header from '../components/header/Header';
import DashboardLayout from '../layout/DashboardLayout';
import MinimalCard from './../components/tour/MinimalCard';
import SliderCard from './../components/tour/SliderCard';
import TourCardMini from '../components/tour/TourCardMini';
import SectionHeading from '../components/tour/SectionHeading';
import About from '../components/home/About';
import EliteSection from '../components/home/EliteSection';
import ChooseWhy from '../components/home/ChooseWhy';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import OfferImages from '../components/home/OfferImages';



const HomePage = () => {
  return (
    <>
      <div>
        {/* Hero Image with search bar */}
        <Header />

        <About />

        <div className='container-pad bg-[#f7f4ee]'>
          <SectionHeading
            title = "Explore Nearby"
            subtitle = "Discover great places near where you live"
            align = "center"
          />
          <div className="mt-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {
              [1, 2, 3, 4, 4, 6, 7, 6].map((item)=><MinimalCard key={item}/>)
            }
          </div>
        </div>

      </div>

      <div className='container-pad bg-slate-200'>

        <SectionHeading 
          title="Thrilling Tour Plans"
          align="center"
        />
        <div className=" grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {
            [2,3,5].map((item)=><TourCardMini key={item}/>)
          }
        </div>
        {/* Bottom  Buttons */}
        <div className="flex justify-between mt-12">
          <button className="btn btn-sm btn-circle bg-gray-200">
            <FaChevronLeft />
          </button>
          <button className="btn bg-orange-300 text-black">View All Packages</button>
          <button className="btn btn-sm btn-circle bg-gray-200">
            <FaChevronRight />
          </button>
        </div>

      </div>

      <OfferImages />

      <div>
        <EliteSection />
      </div>


      <div className="bg-gray-600 text-white py-20 bg-[url('https://images.unsplash.com/photo-1501908734255-16579c18c25f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-blend-overlay rounded-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold leading-tight mb-4">Discover Your Dream Tour Package</h1>
              <p className="text-sm mb-8">Stay updated with the latest tour packages and exclusive offers</p>
              <a href="#" className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">Sign Up
              </a>
              <a href="#" className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ms-4">Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      

      <div className="container-pad">
        <SectionHeading
          title = "Something Special is going"
          align = "center"
          />
        <div className="flex gap-8 p-8">
          {
            [1, 2, 3, 4].map((item)=><SliderCard key={item}/>)
          }
        </div>
      </div>

      <div>
        <ChooseWhy />
      </div>



    </>
  );
};

export default HomePage;