// Home / Index page that loads on the root url

import Header from '../components/header/Header';
import DashboardLayout from '../layout/DashboardLayout';
import PopularDestinations from '../components/featured/PopularDestinations';
import TrendingList from '../components/categoryList/TrendingList';
import MinimalCard from './../components/tour/MinimalCard';
import SliderCard from './../components/tour/SliderCard';
import TourCardMini from '../components/tour/TourCardMini';
import SectionHeading from '../components/tour/SectionHeading';
import About from '../components/home/About';
import EliteSection from '../components/home/EliteSection';


const HomePage = () => {
  return (
    <DashboardLayout>
      <div>
        {/* Hero Image with search bar */}
        <Header />

        <About />

        <div className='container-pad'>
          <SectionHeading
            title = "Explore Nearby"
            subtitle = "Discover great places near where you live"
            align = "center"
          />
          <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {
              [1, 2, 3, 4].map((item)=><MinimalCard key={item}/>)
            }
          </div>
        </div>

      </div>

      <div className='px-[8rem] bg-slate-200 py-16'>

        <SectionHeading 
          title="Thrilling Tour Plans"
          align="center"
        />
        <div className=" grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {
            [2,3,5].map((item)=><TourCardMini key={item}/>)
          }
        </div>
      </div>

      <div>
        <EliteSection />
      </div>
      


      <div className="flex gap-8 p-8">
        {
          [1, 2, 3, 4].map((item)=><SliderCard key={item}/>)
        }
      </div>



    </DashboardLayout>
  );
};

export default HomePage;