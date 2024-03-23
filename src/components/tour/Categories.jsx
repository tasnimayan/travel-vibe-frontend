
import { GiIsland } from "react-icons/gi";
// import { TbBeach } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Categories = () => {
  const category = ["Island", "Beach", "Camping", "Mountain", "Historical", "Pool", "Tropical"  , "Adventure", "Countryside", "Boat"]
  return (
    <div className="relative flex items-center border-t py-4">
      <div className='flex items-center overflow-hidden'>
        {
          category.map((item, idx)=>(
            <Link href="#" aria-current="false" key={idx}
                className="min-w-[6rem] border-b border-transparent flex flex-col items-center justify-center px-5 py-2 transition-all duration-300 hover:border-gray-800">
                <GiIsland className='w-6 h-6'/>
                <span className='text-xs tracking-wide mt-2 line-clamp-1'>{item}</span>
            </Link>
          ))
        }

      </div>

      <button className="absolute left-0 flex items-center justify-center w-8 h-8 border rounded-full -translate-x-1/2 -translate-y-2 bg-white shadow-[.6rem_0_1rem_5px_rgb(255,255,255)] hover:scale-105 active:border-indigo-500">
        <FaChevronLeft />
      </button>
      <button className="absolute right-0 flex items-center justify-center w-8 h-8 border rounded-full translate-x-1/2 -translate-y-2 bg-white shadow-[-.6rem_0_1rem_5px_rgb(255,255,255)] hover:scale-105 active:border-indigo-500">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Categories;