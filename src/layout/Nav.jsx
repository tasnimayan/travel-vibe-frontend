
import { RiHome2Line } from "react-icons/ri";
import { MdTravelExplore, MdHotel } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { CgCommunity } from "react-icons/cg";

import Avatar from "../components/Avatar";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchUser } from "../redux/state/user/authSlice";
import Cookies from 'js-cookie';

const Nav = () => {
  const dispatch = useDispatch()
  const user = sessionStorage.getItem('user')

  useEffect(()=>{
    if(!user && Cookies.get('tvUserToken')){
      dispatch(fetchUser())
    }
  },[dispatch])
  return (
    <div className="top-nav w-full bg-white fixed z-50 shadow">
      <div className="px-4 py-3 text-gray-900 font-medium capitalize flex items-center justify-between">

        <a className="px-2 mr-2 border-r border-gray-800 text-xl" href="/">
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
            <MdTravelExplore className="mr-1 inline-block"/>
            <span className="hidden md:inline-block">Community</span>
          </NavLink>
        
        </div>

        <div>
          {
            user?<Avatar user={user}/> : (<>
            <Link to="/login" className="rounded bg-blue-600 py-2 px-4 text-sm font-medium text-white transition-transform duration-200 ease-in-out mr-3 hover:shadow-md hover:shadow-blue-300/75">Login</Link>
            <Link to="/signup" className="rounded bg-green-600 py-2 px-4 text-sm font-medium text-white transition-transform duration-200 ease-in-out hover:shadow-md hover:shadow-green-300/75">Sign up</Link>
            </>)
          }
        </div>

      </div>
    </div>
  );
};

export default Nav;