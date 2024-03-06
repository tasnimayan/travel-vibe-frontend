import { CiCalendar} from "react-icons/ci"; 
import { FaStar } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";


const TourCardMini = () => {
  return (
    <div className="bg-white rounded overflow-hidden group/cardGroup">
      <div className="relative w-full">
        <div className="relative group/cardGallerySlider">
          <div className="w-full overflow-hidden h-80">
            <a className="flex items-center justify-center w-full h-full" href="/listing-stay-detail">
                <img alt="listing card gallery" loading="lazy" decoding="async" data-nimg="fill" className="object-cover w-full h-full top-0 right-0 left-0 bottom-0 text-transparent group-hover/cardGroup:scale-110 transition-transform duration-500" src="https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </a>
          </div>
          {/* Image change Button */}
          <div className="opacity-0 group-hover/cardGallerySlider:opacity-100 transition-opacity">
            <button className="absolute w-8 h-8 right-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none" style={{transform:`translate3d(0px, 0px, 0px)`}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
              </svg>
            </button>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-neutral-900 opacity-50 rounded-b-lg"></div>
          <div className="flex items-center justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-1.5">
            <button className="w-1.5 h-1.5 rounded-full bg-white"></button>
            <button className="w-1.5 h-1.5 rounded-full bg-white/60 "></button>
            <button className="w-1.5 h-1.5 rounded-full bg-white/60 "></button>
            <button className="w-1.5 h-1.5 rounded-full bg-white/60 "></button>
          </div>
        </div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-white bg-black bg-opacity-30 hover:bg-opacity-50 absolute right-3 top-3 z-[1]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </div>
        <div className="text-center text-xs py-0.5 bg-yellow-400 font-semibold absolute -left-7 top-5 leading-loose w-32 -rotate-45">Popular</div>
      </div>

      <div className="py-4 space-y-3 ">
        <div className="flex items-center space-x-1 text-sm px-4" data-nc-id="StartRating">
          <div className="flex pb-[2px] text-yellow-400 text-xs">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="font-medium ">4.8</span>
          <span className="text-gray-400">(28 Review)
          </span>
        </div>
        <div className="space-y-2 px-4">
          <div className="flex items-center space-x-2">
            <h2 className="font-semibold capitalize text-neutral-900 dark:text-white text-base">
              <span className="line-clamp-1 hover:text-green-700 cursor-pointer">Best Western Cedars Hotel </span>
            </h2>
          </div>
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-1.5">
            <CiCalendar /> 4 days
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className=""> 6 Location</span>
          </div>
        </div>

        <hr />

        <div className="flex justify-between items-center px-4">
          <div className="flex flex-col">
            <span className="text-xs font-semibold">Starting from:</span>
            <span className="text-xl font-bold text-green-600">$120.00</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">Per Person</span>
            
          </div>
          <div>
            <span className="py-3 px-4 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition-all duration-300">Book Trip
            <IoIosAirplane className="text-xl inline-block ms-2"/>
            </span>
          </div>
        </div>
      </div>


    </div>
  );
};

export default TourCardMini;