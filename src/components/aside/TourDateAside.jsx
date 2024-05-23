
const TourDateAside = ({data}) => {

  return (
    <div className=" bg-white shadow-md rounded-2xl p-4 w-full mb-4">
        {/* <h4 className='text-xl w-full'>Trending Searches</h4> */}
        <ul>
          <li className='border-gray-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>
            <p>Journey Date</p>
            <p>{new Date(data.startDate).toDateString()}</p>
          </li>
          <li className='border-gray-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>
            <p>Journey Duration</p>
            <p>{data.duration}</p>
          </li>
          <li className='border-gray-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>
            <p>Options</p>
            <select name="package" >
              {data.packages?.map(item =>{
                return <option value={item._id} key={item._id}>{item.name}</option>
              })}
            </select>            
          </li>
        </ul>

        <div className="text-center">
          <h5>Starting from</h5>
          <h4>BDT {data.price}</h4>
        </div>
        <a href="/" className="block border-gray-100 bg-orange-400 rounded m-2 px-4 py-2 text-white text-center shadow-sm shadow-neutral-300">
          Book Now
        </a>

      </div>
  );
};

export default TourDateAside;