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
    <DashboardLayout>
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
      


      <div className="flex gap-8 p-8">
        {
          [1, 2, 3, 4].map((item)=><SliderCard key={item}/>)
        }
      </div>

      <div>
        <ChooseWhy />
      </div>



    </DashboardLayout>
  );
};

export default HomePage;