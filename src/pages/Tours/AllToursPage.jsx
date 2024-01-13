import TourCard from './../../components/tour/TourCard'
const AllToursPage = () => {
  return (
    <div className="w-full">
      <div>
        <div>
          <h4 className='text-3xl my-4 w-full'>Explore Packages</h4>
        </div>
      {
        [1,2,3,4,5,6].map((item, index)=>(
          <TourCard key={index}/>))
      }
      </div>
      
    </div>
  );
};

export default AllToursPage;