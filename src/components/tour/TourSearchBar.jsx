import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaSearch } from 'react-icons/fa';

import { useDispatch } from "react-redux";
import { fetchSearchedTours } from "../../redux/state/tour/tourSlice";

const TourSearchBar = () => {
  const [location, setLocation] = React.useState('');
  const [startDate, setStartDate] = React.useState(null);

  const dispatch = useDispatch()

  const handleSearch = () => {
    // console.log('Searching for tours in', location, 'starting from', startDate);

    dispatch(fetchSearchedTours({location:location, startDate:startDate}))
  };

  return (
    <div className="headerSearch py-2 flex-col md:flex-row rounded-2xl text-sm">
      {/* <form className=''> */}
        <div className="flex flex-col">
          <label htmlFor="place" className='px-4'>Where</label>
          <input
            type="text"
            className="w-72 px-4 py-2 mr-2 rounded-l-md focus:outline-none focus:border-gray-500 border-b-2 outline-none bg-transparent text-sm text-black placeholder:text-xs placeholder:text-gray-800"
            placeholder="Search location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="place">When</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="w-72 bg-transparent px-4 py-2 rounded-r-md focus:outline-none focus:border-gray-500 border-b-2 outline-none "
            placeholderText="Select date"
            dateFormat="MM/dd/yyyy"
          />
        </div>

        <div>
          <button className=" shadow-lg bg-white py-2 px-10 md:w-full rounded-full text-gray-800 hover:bg-slate-200" onClick={handleSearch}>
            <FaSearch className="inline-block mr-2" />
            Search 
          </button>
        </div>
      {/* </form> */}
    </div>
  );
};

export default TourSearchBar;
