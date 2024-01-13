import {FaSearch, } from 'react-icons/fa'

import "./header.css";
// import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
// import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Featured from '../featured/Featured';

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
      <div className="headerContainer" >
          <h1 className="px-2 text-3xl font-bold text-center mb-10 w-full md:w-1/2 md:text-5xl">
            A lifetime of discounts? It&apos;s Genius.
          </h1>
          
          <div className="headerSearch flex-col md:flex-row rounded-md">
            <div className="headerSearchItem">
              <FaSearch className='headerIcon'/>
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div>|</div>
            <div className="headerSearchItem">
                <input type='date' className='headerSearchInput'/>
            </div>
            
            <div className="headerSearchItem">
              <button className="headerBtn md:w-full rounded-md" onClick={handleSearch}>
                Search 
              </button>
            </div>
          </div>
              <Featured />

      </div>
    </div>
  );
};

export default Header;
