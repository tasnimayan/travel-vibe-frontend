
import { RiHome2Line } from "react-icons/ri";
import { MdTravelExplore, MdHotel } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { CgCommunity } from "react-icons/cg";



import Avatar from "../components/Avatar";
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const user =  {name:"Tasnim Ayan", photo:"https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"}

  return (
    <div className="top-nav w-full bg-white fixed z-50 shadow">
      <div className="px-4 py-3 text-gray-900 font-medium capitalize flex items-center justify-between">

{/* Hamburger Menu */}
  {/* <div className="group flex cursor-pointer items-center justify-center rounded-3xl bg-white p-2 md:hidden">
    <div className="space-y-2">
        <span className="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
        <span className="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
    </div>
  </div> */}


        <a className="px-2 mr-2 border-r border-gray-800 text-xl" href="/">
          {/* <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" alt="alt placeholder" className="w-8 h-8 -mt-1 inline mx-auto" /> */}
          <h2 className=" inline-block">TRAVEL
            <span className=" font-bold text-yellow-400"> VIBE</span>
          </h2>
        </a>
        
        <div className="flex gap-x-2">

          <NavLink to="/"
            className={({isActive})=>{
              return isActive? "nav-item active" : "nav-item"
            }}>
            <RiHome2Line className="mr-1 inline-block"/>
            <span className="hidden md:inline-block">Home</span>
          </NavLink>

          <NavLink to="/tours"
            className={({isActive})=>{
              return isActive? "nav-item active" : "nav-item"
            }}>
            <MdTravelExplore className="mr-1 inline-block"/>
            <span className="hidden md:inline-block">Tour</span>
          </NavLink>
         
          <NavLink to="/hotels"
            className={({isActive})=>{
              return isActive? "nav-item active" : "nav-item"
            }}>
            <MdHotel className="mr-1 inline-block"/>
            <span className="hidden md:inline-block">Hotel</span>
          </NavLink>
          
          <NavLink to="/guides"
            className={({isActive})=>{
              return isActive? "nav-item active" : "nav-item"
            }}>
            <FaMapLocationDot className="mr-1 inline-block"/>
            <span className="hidden md:inline-block">Guide</span>
          </NavLink>
          
          <NavLink to="/community"
            className={({isActive})=>{
              return isActive? "nav-item active" : "nav-item"
            }}>
            <CgCommunity className="mr-1 inline-block"/>
            <span className="hidden md:inline-block">Community</span>
          </NavLink>
         
         {/* Remove in production */}
          <NavLink to="/components"
            className={({isActive})=>{
              return isActive? "nav-item active" : "nav-item"
            }}>
            <MdTravelExplore className="mr-1 inline-block"/>
            <span className="hidden md:inline-block">Component</span>
          </NavLink>

        </div>

        <div>
          <Avatar user={user}/>
        </div>

      </div>
    </div>
  );
};

export default Nav;