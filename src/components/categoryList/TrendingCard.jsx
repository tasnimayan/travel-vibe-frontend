
import {FaMapMarkerAlt,  FaCalendar, FaUser, FaStar} from 'react-icons/fa'
const TrendingCard = () => {
  return (
    <div>
      <div className="w-44 bg-white rounded-lg border shadow-lg dark:bg-gray-800 dark:border-gray-700 ">
        <div className="p-2">
          <div className='relative'>
            <img className="h-36 rounded-lg" src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="product image" />
          <div className='w-full h-full absolute rounded-lg bg-black opacity-20 top-0'></div>
          <h5 className="absolute bottom-2 left-1 text-sm text-white uppercase font-semibold tracking-tight leading-4 ">Sajek Valley 5 Days more</h5>

          </div>
          <div className="flex items-center mt-2 text-xs">
            <FaCalendar /><span className='mx-1'>8 Days</span>
            <FaUser /><span className='mx-1'>25 people</span>
          </div>
          <div className="flex items-center mt-2 text-xs">
            <FaMapMarkerAlt /><span className='mx-1'>Sayedabad</span>
            <FaStar />
            <span className=" text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 mx-1">4.5
            </span>
          </div>
          <p className="text-md font-bold text-green-600 dark:text-white ">$599</p>
          <a href="#" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center block">Explore</a>
        </div>
      </div>

      
    </div>
  );
};

export default TrendingCard;