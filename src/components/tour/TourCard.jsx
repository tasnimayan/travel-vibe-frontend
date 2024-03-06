import { Link } from "react-router-dom";
import {FaRegUser, FaRegCalendar, FaStar, FaHeart, FaComment} from 'react-icons/fa'
import { CiLocationOn } from "react-icons/ci";
import AvatarBox from './../utility/AvatarBox';



const TourCard = () => {
  let item = {
    _id:"20014", photos:['https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg'], title:"Rangamati, Sajek Valley 3 nights and 2 days", distance:250, desc:"Description goes from here. Tour details is written here for the description purpose. Some other details will be shown after the details page is opened", rating:4.5, cheapestPrice:4550
}
  return (
    <div className="p-2 gap-6 bg-white rounded-xl shadow-lg border md:flex md:flex-row">
      {/* Image section */}
      <div className="w-full md:w-1/3">
        <div className="grid grid-cols-2 gap-1">
          <div className="col-span-2">
            <img src={item.photos[0]} className="w-full h-full object-cover rounded-lg" />

          </div>
          <img src={item.photos[0]} className="w-full h-full object-cover rounded-lg" />
          <img src={item.photos[0]} className="w-full h-full object-cover rounded-lg" />

        </div>
      </div>

{/* Other description */}
      <div className="flex flex-col justify-between w-2/3"> 
        <div className="flex flex-col gap-2">

          {/* Organizer Avatar */}
          <AvatarBox details={{name:'Bee Tours and Travel', time:'2 min ago', isVerified:false}}/>

          <div className="flex flex-row gap-2">
            {/* Tour Details  */}
            <div className="text-sm w-2/3">
              <h2 className="text-xl text-gray-700 font-semibold mb-2 leading-6">{item.title}</h2>
              <div className="flex pb-2">
                <FaRegCalendar/>
                {/* <span>3 days</span> */}
                <FaRegUser />
                {/* <span>25 People going</span> */}
                <CiLocationOn />
                <span>Sayedabad Bus Terminal</span>
              </div>

              {item.rating && 
              <span className="font-bold py-1 px-2 border rounded">{item.rating}</span>}
              <span>370 reviews</span> <br/>

            </div>
            {/* Price section */}
            <div className="flex flex-col w-1/3">
              <div className="text-right text-montserrat leading-4">
                <span className="text-sm text-gray-400">starting from</span>
                <p className="text-2xl font-bold text-green-500">BDT {item.cheapestPrice}</p>
                <span className="text-sm text-gray-400">per person</span>
              </div>
            </div>

          </div>
          {/* Tour details */}
          <p className="text-sm">{item.desc}
          </p>
        </div>
        {/* Bottom Buttons */}
        <div className="flex">
          <button className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Link to={`/tours/${item._id}`}>
          View Details</Link></button>
          <button className="w-1/2 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Book Now</button>
        
        </div>
      </div>
    </div>
  );
};

export default TourCard;
