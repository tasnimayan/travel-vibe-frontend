// This component contains a section of the home page 
// Country navigation button on top with lists on bottom
import { NavLink } from "react-router-dom";

import SectionHeading from "../tour/SectionHeading";

const EliteSection = () => {
  return (
    <div className="container-pad">
      <div>
        <SectionHeading 
          title = "Tourist Attraction Worldwide"
          align = "center"
        />
      </div>

      <div className="flex  space-y-1 text-center">

        <NavLink to="/"
          className={({isActive})=>{
            return isActive? "elite-item active" : "elite-item"
          }}>
          <span className="md:inline-block py-6 w-44 border text-xl font-semibold">Thailand</span>
        </NavLink>

        <NavLink to="/tours"
          className={({isActive})=>{
            return isActive? "elite-item active" : "elite-item"
          }}>
          <span className="md:inline-block py-6 w-44 border text-xl font-semibold">Indonesia</span>
        </NavLink>

        <NavLink to="/hotels"
          className={({isActive})=>{
            return isActive? "elite-item active" : "elite-item"
          }}>
          <span className="md:inline-block py-6 w-44 border text-xl font-semibold">India</span>
        </NavLink>

        <NavLink to="/guides"
          className={({isActive})=>{
            return isActive? "elite-item active" : "elite-item"
          }}>
          <span className="md:inline-block py-6 w-44 border text-xl font-semibold">UAE</span>
        </NavLink>

        <NavLink to="/community"
          className={({isActive})=>{
            return isActive? "elite-item active" : "elite-item"
          }}>
          <span className="md:inline-block py-6 w-44 border text-xl font-semibold">France</span>
        </NavLink>


      </div>
      
    </div>
  );
};

export default EliteSection;