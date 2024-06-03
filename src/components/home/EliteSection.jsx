// This component contains a section of the home page 
// Country navigation button on top with lists on bottom

import { NavLink } from "react-router-dom";
import SectionHeading from "../tour/SectionHeading";
import HotelCard from './../tour/HotelCard';
import Button from "../Button";


const EliteSection = () => {

  return (
    <div className="container mx-auto container-pad">
      <div>
        <SectionHeading 
          title = "Tourist Accommodation Worldwide"
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

export default EliteSection;