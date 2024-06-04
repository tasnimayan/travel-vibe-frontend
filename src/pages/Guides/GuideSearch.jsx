// This search component is for guides only

import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchedGuide } from './../../redux/state/guide/guideSlice';
import { useSearchParams } from "react-router-dom";

const GuideSearch = () => {
  const [search, setSearch] = useState({location:'', country:'',language:''})
  const dispatch = useDispatch()
  const [query] = useSearchParams()
  let page = query.get('page')

  const handleSearch = (e)=>{
    e.preventDefault()
    setSearch({...search, page:page})
    dispatch(fetchSearchedGuide(search))
    setSearch({location:'', country:'',language:''})
  }

  return (
    <div className="bg-white py-20 px-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Search for Guides</h2>
        <form onSubmit={handleSearch}>

          <div className="flex lg:flex-row flex-col lg:items-end items-center  justify-center gap-2">
            <div className="">
              <label className="block text-gray-700 mb-1" htmlFor="country">Country</label>
              <input
                  id="country"
                  type="text"
                  value={search.country}
                  onChange={(e) => setSearch({...search,country:e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter country"
              />
            </div>
            <div className="">
              <label className="block text-gray-700 mb-1" htmlFor="location">Location</label>
              <input
                  id="location"
                  type="text"
                  value={search.location}
                  onChange={(e) => setSearch({...search,location:e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter location"
              />
            </div>
            <div className="">
              <label className="block text-gray-700 mb-1" htmlFor="language">Language</label>
              <input
                id="language"
                type="text"
                value={search.language}
                onChange={(e) => setSearch({...search,language:e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter language"
              />
            </div>
            <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300" onClick={handleSearch}><svg className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search</button>

          </div>
        </form>
    </div>
  );
};

export default GuideSearch;