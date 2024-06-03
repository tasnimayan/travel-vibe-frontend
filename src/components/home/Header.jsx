import {FaSearch, } from 'react-icons/fa'
import { useState } from "react";
// import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date().toDateString());

  const navigate = useNavigate();

  const handleSearch = () => {
    let url = `/tours?${destination?'location='+destination : ''}${date?'&startDate='+date : ''}` 
    navigate(url);
  };




  return (
    <div className="header flex justify-center relative text-white bg-no-repeat bg-bottom bg-cover bg-blend-multiply"> 
      <div className="container flex flex-col items-center w-full m-auto" >
          <h1 className="px-2 text-3xl font-bold text-center mb-10 w-full md:w-1/2 md:text-5xl">
            A lifetime of discounts? It&apos;s Genius.
          </h1>
          
          <div className="headerSearch py-2 flex-col md:flex-row rounded-2xl text-sm">
            <div className="headerSearchItem">
              <FaSearch className='text-gray-300 inline-block mr-2'/>
              <input
                type="text"
                placeholder="Where are you going?"
                className="border-0 border-b-2 outline-none bg-transparent text-sm text-black placeholder:text-white"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>


            <div className="form-group" >
              <label htmlFor="startDate">Start Date</label>
              <input type="date" name='startDate' className='form-control bg-transparent'/>
            </div>
            <div className="form-group" >
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
