import { Link } from "react-router-dom";
import {FaRegUser} from 'react-icons/fa'
import AvatarBox from './../utility/AvatarBox';
import { FaStar } from "react-icons/fa";
import { FaCalendar, FaStopwatch } from "react-icons/fa6";
const BASE_URL = import.meta.env.VITE_BASE_URL


const TourCardSmall = ({tour}) => {
  // Calculation of posted time according to today
  const DAY_IN_MILISECOND = 1000 * 60 * 60 *  24
  const date = new Date()
  const createdAt = new Date(tour.createdAt?? '2024-03-20')
  let posted = Math.floor((date - createdAt)/DAY_IN_MILISECOND)

  const getDate = (userDate)=>{
    let created_date = new Date(userDate)
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = created_date.getFullYear();
    let month = months[created_date.getMonth()];
    let date = created_date.getDate();
    let hour = created_date.getHours();
    let min = created_date.getMinutes();

    let fullDate = date + ',' + month + ' ' + year
    let time = hour + ':' + min ;
    return [fullDate, time];
  }

  return (
    <div className="text-montserrat p-4 gap-6 bg-white rounded-xl shadow-lg border md:flex md:flex-row">
      {/* Image section */}
      <div className="w-full md:w-2/5 relative">
        <a href={`/tours/${tour._id}`}>
          <img src={BASE_URL+tour.images[0]} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute top-3 -left-4 text-white bg-black p-2 text-xs rounded-r-md line-clamp-1">{tour.duration}</div>
        </a>
      </div>

      {/* Description */}
      <div className="flex flex-col justify-between md:w-3/5"> 
        <div className="flex flex-col gap-2">

          {/* Organizer Avatar */}
          <AvatarBox details={{name:tour.orgData?.name, img:BASE_URL+tour.orgData?.photo, time:`${posted} days ago`, isVerified:false}}/>

          <div className="flex flex-row gap-2">
            {/* Tour Details  */}
            <div className="w-2/3">
              <h2 className="text-lg text-black font-[500] mb-2 line-clamp-2">{tour.title}</h2>
              <div className="flex pb-2 text-xs text-gray-500">
                <span>
                  <FaRegUser className="inline-block mb-1 mr-2"/>
                  1 to {tour.personCapacity} People</span>

                <div className="ms-6">
                {tour.ratingsAverage && <>
                  <span className="font-bold mr-2">
                    <FaStar className="inline-block mb-1 text-yellow-400 mr-1"/>{tour.ratingsAverage}</span>
                    <span>({tour.ratingsQuantity} reviews)</span> </>}
                  
                </div>
              </div>
              <div className="flex pb-2 text-xs text-gray-500">
                <span>
                  <FaCalendar className="inline-block mb-1 mr-2"/>
                  {getDate(tour.startDate)[0]}</span>

                <div className="ms-6">
                  <FaStopwatch className="inline-block mb-1 mr-2" />
                {getDate(tour.startTime)[1]}
                </div>
              </div>
            </div>
            {/* Price section */}
            <div className="flex flex-col w-1/3">
              <div className="text-right text-montserrat leading-4">
                <span className="text-sm text-gray-400">starting from</span>
                <p className="text-2xl font-bold text-green-500">USD {tour.price}</p>
                <span className="text-sm text-gray-400">per person</span>
              </div>

            </div>
          </div>

          {/* <p className="uppercase text-xs text-black font-semibold line-clamp-1">
            Dhaka &rarr; 
            Chittagong &rarr; 
            Chittagong &rarr; 
            Chittagong &rarr; 
            Cox&apos;s Bazar
          </p> */}
          {/* Tour details */}
          <div className="pb-4">
            <p className="text-sm line-clamp-3">{tour.description}</p>
          </div> 
        </div>
        {/* Bottom Buttons */}
        <div className="flex">
          <Link to={`/tours/${tour._id}`} className="w-1/2 text-white text-center bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          View Details</Link>
          <Link to={`/tours/${tour._id}`} className="text-center w-1/2 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Book Now</Link>
        
        </div>
      </div>
    </div>
  );
};

export default TourCardSmall;
