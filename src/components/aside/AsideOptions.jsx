import { useRef, useState} from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { fetchSearchedTours } from "../../redux/state/tour/tourSlice";

const AsideOptions = () => {
  const [formData, setFormData] = useState({location:'',priceRange:0,duration:''})
  const rangeValue = useRef()

  const dispatch = useDispatch()

  const onValueChange = (e) =>{
    setFormData({...formData, priceRange:e.target.value})
    rangeValue.current.style.left = formData.priceRange / 20000 + "px"
  }

  const handleFormChange = (e) =>{
    let key = e.target.name
    let value = e.target.value
    setFormData({...formData,[key]:value})
  }

  const handleSearch = (e) =>{
    e.preventDefault();
    dispatch(fetchSearchedTours(formData))
  }

  return (
      <div className=" bg-white shadow-md rounded-2xl p-4 w-full mb-5">
        <h4 className='text-xl w-full'>Filter By</h4>
        <ul className="flex flex-col gap-y-4 px-2">
          <li className="pt-3">
            <form onSubmit={handleSearch}>
              <label htmlFor="input-group-search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input type="text" id="input-group-search" name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="search tours" onChange={handleFormChange}/>
              </div>
            </form>

          </li>
          {/* Price Range Input */}
          <li className='rounded px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>
            <label>Price Range</label> 
            
            <div className="text-sm relative">
              <span ref={rangeValue} className="absolute left-0 text-center font-bold p-2">{formData.priceRange < 1000 ? formData.priceRange : formData.priceRange/1000 + "K"}</span>
              <input type="range" className="mt-10 rs-range" min={0} max={20000} step={500} value={formData.priceRange} onChange={onValueChange}/>
            </div>

            <div className=" mt-2 text-xs flex justify-between">
              <span>0</span>
              <span>20K</span>
            </div>

          </li>


          <li className='rounded px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>
            <label>Destinations</label> 
              <ul className="h-48 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input name="location" type="radio" value="sylhet" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" onChange={handleFormChange}/>
                    <label htmlFor="checkbox-item-11" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Sylhet</label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input name="destination" type="radio" value="coxz bazar" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " onChange={handleFormChange}/>
                      <label htmlFor="checkbox-item-12" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Cox's Bazar</label>
                    </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input name="destination" type="radio" value="bandarban" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " onChange={handleFormChange}/>
                    <label htmlFor="checkbox-item-13" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Bandarban</label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input name="destination" type="radio" value="rangamati" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " onChange={handleFormChange}/>
                    <label htmlFor="checkbox-item-14" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Rangamati</label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input name="destination" type="radio" value="sundarban" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " onChange={handleFormChange}/>
                    <label htmlFor="checkbox-item-15" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Sundarban</label>
                  </div>
                </li>

              </ul>

          </li>

          <li className='rounded px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>
            <label>Duration</label> 
              <ul className="h-48 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input name="duration" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                    <label htmlFor="checkbox-item-11" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">1 - 2 Days Tour</label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input name="duration" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                      <label htmlFor="checkbox-item-12" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">2 - 3 Days Tour</label>
                    </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input name="duration" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                    <label htmlFor="checkbox-item-13" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">3 - 4 Days Tour</label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input name="duration" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                    <label htmlFor="checkbox-item-14" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">4 - 5 Days Tour</label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input name="duration" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                    <label htmlFor="checkbox-item-15" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">5 - 6 Days Tour</label>
                  </div>
                </li>

              </ul>

          </li>
          <li>
            <Button type="primary" className="w-full" onClick={handleSearch}>
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              Search</Button>
          </li>
        </ul>
      </div>
  );
};

export default AsideOptions;


