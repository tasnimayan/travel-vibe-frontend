import { Link } from "react-router-dom";
import {FaRegUser} from 'react-icons/fa'
import AvatarBox from './../utility/AvatarBox';
import { FaStar } from "react-icons/fa";




const TourCardSmall = () => {
  let item = {
    _id:"20014", photos:['https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg'], title:"Rangamati, Sajek Valley 3 nights and 2 days", distance:250, desc:"Description goes from here. Tour details is written here for the description purpose. Some other details will be shown after the details page is opened", rating:4.5, cheapestPrice:4550
}
  return (
    <div className="text-montserrat p-4 gap-6 bg-white rounded-xl shadow-lg border md:flex md:flex-row">
      {/* Image section */}
      <div className="w-full md:w-2/5 relative">
        <a href="#">
          <img src={item.photos[0]} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute top-3 -left-4 text-white bg-black p-2 text-xs rounded-r-md line-clamp-1">3 days/ 4 nights</div>
        </a>
      </div>

      {/* Description */}
      <div className="flex flex-col justify-between md:w-3/5"> 
        <div className="flex flex-col gap-2">

          {/* Organizer Avatar */}
          <AvatarBox details={{name:'Bee Tours and Travel', time:'2 min ago', isVerified:false}}/>

          <div className="flex flex-row gap-2">
            {/* Tour Details  */}
            <div className="w-2/3">
              <h2 className="text-lg text-black font-[500] mb-2 line-clamp-2">{item.title} another thin is </h2>
              <div className="flex pb-2 text-xs text-gray-500">
                <span>
                  <FaRegUser className="inline-block mb-1 mr-2"/>
                  1 to 25 People</span>

                <div className="ms-6">
                {item.rating && <>
                  <span className="font-bold mr-2">
                    <FaStar className="inline-block mb-1 text-yellow-400 mr-1"/>{item.rating}</span>
                    <span>(370 reviews)</span> </>}
                  
                </div>
              </div>
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

          <p className="uppercase text-xs text-black font-semibold line-clamp-1">
            Dhaka &rarr; 
            Chittagong &rarr; 
            Chittagong &rarr; 
            Chittagong &rarr; 
            Cox's Bazar
          </p>
          {/* Tour details */}
          <div className="pb-4">
            <p className="text-sm line-clamp-3">{item.desc}</p>
          </div> 
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

export default TourCardSmall;
