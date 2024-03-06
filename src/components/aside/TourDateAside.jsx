
const TourDateAside = () => {
  return (
    <div className=" bg-white shadow-md rounded-2xl p-4 w-full mb-4">
        {/* <h4 className='text-xl w-full'>Trending Searches</h4> */}
        <ul>
          <li className='border-gray-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>
            <p>Journey Date</p>
            <p>10 Jan 2024</p>
          </li>
          <li className='border-gray-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>
            <p>Journey Date</p>
            <p>10 Jan 2024</p>
          </li>
          <li className='border-gray-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>
            <p>Options</p>
            <select name="package" >
              <option value="1">Regular Package</option>
              <option value="2">Couple Package</option>
              <option value="3">Family Package</option>
            </select>            
          </li>
        </ul>

        <div className="text-center">
          <h5>Starting from</h5>
          <h4>BDT 3999</h4>
        </div>
        <a href="/" className="block border-gray-100 bg-orange-400 rounded m-2 px-4 py-2 text-white text-center shadow-sm shadow-neutral-300">
          Book Now
        </a>

      </div>
  );
};

export default TourDateAside;