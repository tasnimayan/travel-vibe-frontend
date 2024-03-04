import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import Notification from "./Notification";


const NavBar = () => {
  // const user  = useSelector((state)=>state.auth.user)
  const user =  {name:"Tasnim Ayan", photo:"https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"}
  return (
    <div className="navbar bg-base-100 border-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li className="px-2 text-base"><Link to='/'>Home</Link></li>
            <li className="px-2 text-base"><Link to='/tour/1234'>Tour</Link></li>
            <li className="px-2 text-base"><Link to='/abc'>Option</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Travel Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="px-2 text-base"><Link to='/'>Home</Link></li>
          <li className="px-2 text-base"><Link to='/tours'>Tour</Link></li>
          <li className="px-2 text-base"><Link to='/hotels'>Hotel</Link></li>
          <li className="px-2 text-base"><Link to='/guides'>Guide</Link></li>
        </ul>
      </div>

      <div className="navbar-end relative mr-6">
      {/* <div className="relative flex items-center"> */}
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link to="/login">Login</Link></button>
        <Notification />
        <Avatar user={user}/>
      </div>

    </div>
    
  );
};

export default NavBar;






{/* <nav
  className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
  </div>
</nav> */}