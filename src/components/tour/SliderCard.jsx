import { IoShareSocial } from "react-icons/io5";

const SliderCard = ({tour}) => {
  return (
    <div className="min-card">
      <img src="https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg" alt="travel" className=" w-full h-full" />
      <div className="absolute top-3 right-3 text-xs rounded-2xl px-2 py-[2px] font-semibold bg-slate-200 text-orange-500 z-10">
        { tour.discountRate }%
      </div>
      <div className="absolute bottom-0 w-full text-white z-10 p-4">
        <p className=" line-clamp-1">{tour.title}</p>
        <p className="text-xs mb-2">{tour.duration}</p>
        <div className="static flex justify-between items-end">
          <div className=" border-b-2 text-xl">${tour.price}</div>
          <div className="flex items-center">
            <span className="flex justify-center items-center border bg-white rounded-full text-gray-700 mr-4" style={{width:'30px', height:"30px"}}>
              <IoShareSocial />
            </span>
            <button className="btn btn-sm bg-blue-600 border-0 text-xs font-normal text-white rounded-full px-6">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;