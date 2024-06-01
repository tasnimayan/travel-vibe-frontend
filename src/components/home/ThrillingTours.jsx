import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TourCardMini from '../tour/TourCardMini';


const ThrillingTours = () => {
  return (
    <div>
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
  );
};

export default ThrillingTours;