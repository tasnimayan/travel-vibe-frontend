

const Avatar = ({user}) => {
  return (
    <div className="w-10 relative float-right mr-3 cursor-pointer hover:text-gray-700">
      <a
        className=" flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
        href=""
        id="dropdownMenuButton2"
        aria-expanded="false">
        {/* <!-- User avatar --> */}
        <img
          src={user.photo} className="rounded-full h-10 w-10" alt="" loading="lazy" />
      </a>
      <span className="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">3</span>

      {/* <!-- Profile dropdowns --> */}
      <ul
        className="absolute z-[1000] float-left m-0  min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block hidden">

        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
            href="#">Profile</a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
            href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;