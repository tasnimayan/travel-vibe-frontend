// This component contains a section of the home page 
// Country navigation button on top with lists on bottom

import { NavLink } from "react-router-dom";
import SectionHeading from "../tour/SectionHeading";
import HotelCard from './../tour/HotelCard';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const EliteSection = () => {

  return (
    <div className="container mx-auto container-pad">
      <div>
        <SectionHeading 
          title = "Tourist Attraction Worldwide"
          align = "center"
        />
      </div>

{/* Navigation Menu */}
      <div className="flex justify-center text-center mb-12">

        <NavLink to="#"
          className={({isActive})=>{
            return isActive? "elite-item active" : "elite-item"
          }}>
          <span className="md:inline-block py-6 w-44 border text-xl font-semibold">Thailand</span>
        </NavLink>

        <NavLink to="#"
          className={({isActive})=>{
            return isActive? "elite-item active" : "elite-item"
          }}>
          <span className="md:inline-block py-6 w-44 border text-xl font-semibold">Indonesia</span>
        </NavLink>

        <NavLink to="#"
          className={({isActive})=>{
            return isActive? "elite-item active" : "elite-item"
          }}>
          <span className="md:inline-block py-6 w-44 border text-xl font-semibold">India</span>
        </NavLink>

        <NavLink to="#"
          className={({isActive})=>{
            return isActive? "elite-item active" : "elite-item"
          }}>
          <span className="md:inline-block py-6 w-44 border text-xl font-semibold">UAE</span>
        </NavLink>

        <NavLink to="#"
          className={({isActive})=>{
            return isActive? "elite-item active" : "elite-item"
          }}>
          <span className="md:inline-block py-6 w-44 border text-xl font-semibold">France</span>
        </NavLink>


      </div>

      <div className=" grid gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {
          [2,3,5].map((item)=><HotelCard key={item}/>)
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

export default EliteSection;