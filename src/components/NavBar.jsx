
const NavBar = () => {
  return (
    <div className="px-4 flex justify-between items-center  bg-base-100 h-16 w-full fixed z-50">
      <a className="font-medium px-2 mr-2 border-r border-gray-800 text-xl" href="/">
        <h2 className=" inline-block">TRAVEL
          <span className=" font-bold text-yellow-400"> VIBE</span>
        </h2>
      </a>
      
      <div className="relative mr-6">
        <ul className="flex text-sm font-semibold px-1">
          <li className="px-2 relative group cursor-pointer hover:text-gray-400">For guides
            <div className="group-hover:flex hidden p-3 w-32 absolute start-0 top-full flex-col items-center bg-gray-100 rounded-md text-slate-700">
              <div className="mb-2 hover:border-b-2">Sign Up</div>
              <div className="mb-2 hover:border-b-2">Login</div>
            </div>
          </li>
          <li className="px-2 relative group cursor-pointer hover:text-gray-400">For organizations
            <div className="group-hover:flex hidden p-3 w-32 absolute start-0 top-full flex-col items-center bg-gray-100 rounded-md text-slate-700">
              <div className="mb-2 hover:border-b-2">Sign Up</div>
              <div className="mb-2 hover:border-b-2">Login</div>
            </div>
          </li>
        </ul>
      </div>

    </div>
    
  );
};

export default NavBar;