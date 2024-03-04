
import { RiHome2Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdTravelExplore, MdHotel } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";


import Avatar from "../components/Avatar";
import { Link } from 'react-router-dom';

const Nav = () => {
  const user =  {name:"Tasnim Ayan", photo:"https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"}

  return (
    <div className="p-4 w-full bg-white">
      <div className="p-2 text-gray-900 rounded-lg shadow-lg font-medium capitalize flex items-center justify-between">
        <span className="px-2 mr-2 border-r border-gray-800 text-xl">
          <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" alt="alt placeholder" className="w-8 h-8 -mt-1 inline mx-auto" />
          <h2 className=" inline-block">TRAVEL
            <span className=" font-bold text-yellow-400"> VIBE</span>
          </h2>
        </span>
        
        <div className="flex gap-x-2">

          <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded mb-5">
            <Link to="/" className="w-8 p-2">
              <RiHome2Line className="mr-1 inline-block"/> Home
            </Link>
          </span>
          <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded mb-5">
            <Link to="/tours" className="w-8 p-2">
              <MdTravelExplore className="mr-1 inline-block"/> Tour
            </Link>
          </span>
          <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded mb-5">
            <Link to="/hotels" className="w-8 p-2">
              <MdHotel className="mr-1 inline-block"/> Hotel
            </Link>
          </span>
          <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded mb-5">
            <Link to='/guides' className="w-8 p-2">
              <FaMapLocationDot  className="mr-1 inline-block"/>Guide
            </Link>
          </span>
        </div>
        {/* <span className="px-1 w-8 relative cursor-pointer hover:text-gray-700">
          <IoMdNotificationsOutline />
        <span className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">3</span>
        </span> */}
        <div>
          <Avatar user={user}/>
        </div>

      </div>
    </div>
  );
};

export default Nav;