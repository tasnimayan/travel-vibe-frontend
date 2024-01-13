
const AsideOptions = () => {
  return (
      <div className=" bg-white shadow-md rounded-2xl p-4 w-full mb-4">
        <h4 className='text-xl w-full'>Filter By</h4>
        <ul>
          <li className='bg-slate-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>
            <label>Price Range</label> 
            <input type="range" min={100} max={100000} step={100}/>
          </li>
          <li className='bg-slate-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>Rangamati</li>
          <li className='bg-slate-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>Bandorban</li>
          <li className='bg-slate-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>Cox&apos;s Bazar</li>
          <li className='bg-slate-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>Sylhet</li>
          <li className='bg-slate-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>Kaptai</li>
          <li className='bg-slate-100 rounded m-2 px-4 py-1 text-slate-600 shadow-sm shadow-neutral-300'>Boga lake</li>
        </ul>
      </div>
  );
};

export default AsideOptions;