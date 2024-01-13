import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import Header from "./header/Header";



const NavBar = () => {
  const user  = useSelector((state)=>state.auth.user)
  return (
    <div className="navbar bg-base-100">
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

      <div className="navbar-end">
        {/* {user.email? <Avatar user={user}/> : <a href='/login' className="btn btn-sm">Login</a>} */}
      </div>

    </div>
    
  );
};

export default NavBar;