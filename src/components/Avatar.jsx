
import Cookies from 'js-cookie';

const Avatar = ({user}) => {
// User logout functionality
  const handleLogout = ()=>{
    Cookies.remove('tvUserToken')
    sessionStorage.clear()
    window.location.reload()
  }

  return (
    <div className="w-10 relative float-right mr-3 cursor-pointer hover:text-gray-700 group">
      <div
        className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none">
        <img
          src={user.photo??'avatar_default.jpg'} className="rounded-full h-10 w-10 outline-double outline-gray-200" alt="" loading="lazy" />
      </div>
      <span className="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full"></span>

      {/* <!-- Profile dropdowns --> */}
      <ul
        className="absolute z-[100] float-left end-0 m-0 min-w-[8rem] overflow-hidden rounded-lg bg-white text-center text-base shadow-lg hidden group-hover:block">

        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
            href="/profile">Profile</a>
        </li>
        <li>
          <button
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
            onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;