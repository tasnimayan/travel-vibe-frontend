import SectionHeading from '../../components/tour/SectionHeading';
import TourCard from '../../components/tour/TourCard'
const AllTours = () => {
  return (
    <div className="w-full">
      
      {/* Section heading component */}
        <SectionHeading 
          title={"Explore Tour Packages"}
          subtitle={""}
        />
        {/* All tours card goes here */}
        <div className="flex flex-col gap-4">
          {
            [1,2,3,4,5,6].map((item, index)=>(
              <TourCard key={index}/>))
          }
        </div>
      
    </div>
  );
};

export default AllTours;