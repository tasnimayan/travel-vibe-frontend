import {FaSearch, } from 'react-icons/fa'

import "./header.css";
import { useState } from "react";
// import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState(new Date());

  const navigate = useNavigate();
  const [search, setSearch] = useState();

  const handleSearch = () => {
    setSearch({ type: "NEW_SEARCH", payload: { destination, dates } });
    navigate("/hotels", { state: { destination, dates } });
  };




  return (
    <div className="header">
      <div className="flex flex-col items-center w-full m-auto" >
          <h1 className="px-2 text-3xl font-bold text-center mb-10 w-full md:w-1/2 md:text-5xl">
            A lifetime of discounts? It&apos;s Genius.
          </h1>
          
          <div className="headerSearch py-2 flex-col md:flex-row rounded-2xl">
            <div className="headerSearchItem">
              <FaSearch className='text-gray-300'/>
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>


            <div className="form-group text-black text-sm" >
              <label htmlFor="startDate">Start Date</label>
              <input type="date" name='startDate' className='form-control bg-transparent'/>
            </div>
            <div className="form-group text-black text-sm" >
              <label htmlFor="startDate">End Date</label>
              <input type="date" name='startDate' className='form-control bg-transparent'/>
            </div>

            
            <div className="headerSearchItem">
              <button className=" shadow-lg bg-white py-2 px-10 md:w-full rounded-full text-blue-700 hover:bg-slate-200" onClick={handleSearch}>
                Search 
              </button>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Header;
