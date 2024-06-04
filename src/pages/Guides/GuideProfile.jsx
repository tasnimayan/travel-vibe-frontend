import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGuideDetails } from "../../redux/state/guide/guideSlice";
import { useParams } from "react-router-dom";
import Loading from '../Loading'
const BASE_URL = import.meta.env.VITE_BASE_URL

const GuideProfile = ({ guide }) => {
  const dispatch = useDispatch()
  const {guideDetails } = useSelector(state=>state.guide)

  const param = useParams()

  useEffect(()=>{
    dispatch(fetchGuideDetails(param.guideId))
  },[dispatch])

  if(!guideDetails){
    return <Loading />
  }


  return (
    <div className="p-6">
      <div className="min-h-screen p-6">
        <div className="max-w-6xl  mx-auto bg-white p-12 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <img className="w-24 h-24 rounded-full object-cover" src={BASE_URL + guideDetails.photo || '/default.jpg'} alt="Guide Profile" />
            <div>
                <h2 className="text-2xl font-bold">{guideDetails.name}</h2>
                <p className="text-gray-600">{guideDetails.email}</p>
                <p className="text-gray-600">{guideDetails.phone}</p>
                <p className={`text-sm ${guideDetails.isAvailable ? 'text-green-500' : 'text-red-500'}`}>
                    {guideDetails.isAvailable ? 'Available' : 'Not Available'}
                </p>
            </div>
          
            <div className="mt-6 flex space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save Profile</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Hire Guide</button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Contact</button>
            </div>

          </div>

          <div className="mt-1 ms-24 px-4 py-8">
              <p className="text-gray-700">{guideDetails.bio}</p>
          </div>


          <div className="mt-6 grid grid-cols-1 md:grid-cols-2">
              <div className="p-4">
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-700">{guideDetails.address.addressLine}, {guideDetails.address.city}, {guideDetails.address.zip}, {guideDetails.address.country}</p>
              </div>
              <div className="p-4">
                  <h3 className="text-lg font-semibold">Languages</h3>
                  <p className="text-gray-700">{guideDetails.language.join(', ')}</p>
              </div>
              <div className="p-4">
                  <h3 className="text-lg font-semibold">Education</h3>
                  <p className="text-gray-700">{guideDetails.education}</p>
              </div>
              <div className="p-4">
                  <h3 className="text-lg font-semibold">Locations</h3>
                  <p className="text-gray-700">{guideDetails.locations.join(', ')}</p>
              </div>
              <div className="p-4">
                  <h3 className="text-lg font-semibold">Rating</h3>
                  <p className="text-gray-700">{guideDetails.rating}</p>
              </div>

              <div className="p-4">
                  <h3 className="text-lg font-semibold">Availability</h3>
                  <p className={`text-sm ${guideDetails.isAvailable ? 'text-green-500' : 'text-red-500'}`}>
                      {guideDetails.isAvailable ? 'Available' : 'Not Available'}
                  </p>
              </div>
              <div className="p-4">
                  <h3 className="text-lg font-semibold">Guided</h3>
                  <p className="text-gray-700">{guideDetails.servedCount} times</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideProfile;


    
{/* <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
<div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
  <img
    src={BASE_URL + guideDetails.photo || '/default.jpg'}
    alt={`${guideDetails.name}'s photo`}
    className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0"
  />
  <div className="text-center md:text-left">
    <h1 className="text-2xl font-bold mb-2">{guideDetails.name}</h1>
    <p className="text-gray-600 mb-2">{guideDetails.bio}</p>
    <div className="flex items-center space-x-4 mb-4">
      <span className="text-gray-500">{guideDetails.email}</span>
      <span className="text-gray-500">{guideDetails.phone}</span>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Address</h2>
      <p className="text-gray-600">
        {guideDetails.address.addressLine}, {guideDetails.address.city}, {guideDetails.address.country}, {guideDetails.address.zip}
      </p>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Languages</h2>
      <p className="text-gray-600">{guideDetails.language.join(', ')}</p>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Locations</h2>
      <p className="text-gray-600">{guideDetails.locations.join(', ')}</p>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Education</h2>
      <p className="text-gray-600">{guideDetails.education}</p>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Served Count</h2>
      <p className="text-gray-600">{guideDetails.servedCount}</p>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Rating</h2>
      <p className="text-gray-600">{guideDetails.rating}/5</p>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Availability</h2>
      <p className={`text-lg font-bold ${guideDetails.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
        {guideDetails.isAvailable ? 'Available' : 'Not Available'}
      </p>
    </div>

    <div className="flex justify-center md:justify-start space-x-4 mt-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
        Save to Favourite
      </button>
      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none">
        Reserve for Service
      </button>
    </div>
  </div>
</div>
</div> */}