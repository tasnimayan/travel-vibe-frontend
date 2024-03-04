import HotelCard from "../components/tour/HotelCard";
import MemberCard from "../components/tour/MemberCard";
import MinimalCard from "../components/tour/MinimalCard";
import SliderCard from './../components/tour/SliderCard';
import LogoCard from './../components/tour/LogoCard';
import FAQ from "../components/tour/FAQ";
import GuideCard from "../components/tour/GuideCard";

const ComponentGallery = () => {
  return (
    <div>
      <div>
        <GuideCard />
      </div>


      <div>
        <div className="text-center">
          <h4 className="text-3xl">Explore nearby</h4>
          <p>Discover great places near where you live</p>
        </div>
        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {
            [1, 2, 3, 4].map((item)=><MinimalCard key={item}/>)
          }
        </div>

      </div>

      <div className="flex gap-8 p-8">
        {
          [1, 2, 3, 4].map((item)=><SliderCard key={item}/>)
        }
      </div>
    
    
    <div className="bg-[#F1F5F9]">
      <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-12 border">
        <MemberCard />
      </div>
    </div>

    <div>
      <HotelCard />
    </div>
    
    <div>
      <LogoCard />
    </div>

    <FAQ />
      
  </div>
  );
};

export default ComponentGallery;