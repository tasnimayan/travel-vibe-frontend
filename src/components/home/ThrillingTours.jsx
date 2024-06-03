import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TourCardMini from '../tour/TourCardMini';
import Button from "../Button";


const ThrillingTours = () => {
  return (
    <div>
      <div className=" grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {
          [2,3,5].map((item)=><TourCardMini key={item}/>)
        }
      </div>
      {/* Bottom  Buttons */}
      <div className="flex justify-center mt-12">
        <Button type="tertiary" as="a" href="/tours" size="xl" className="">View all packages
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
          className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
          </svg>
        </Button>
      </div>
      
    </div>
  );
};

export default ThrillingTours;