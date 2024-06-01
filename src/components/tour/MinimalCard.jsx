import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchSearchedTours } from "../../redux/state/tour/tourSlice";
import { useDispatch } from "react-redux";

const MinimalCard = ({data}) => {
  const dispatch = useDispatch()
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate()

  const handleSearch = (location)=>{
    console.log("YeS")
    navigate(`/tours?location=${location}`)
    // dispatch(fetchSearchedTours({location:location}))
    // setParams({location:location})

  }

  return (
    <>
      <div className="relative border bg-[#F8FAFC] hover:bg-yellow-50 hover:shadow-lg hover:border-yellow-50 flex flex-row items-center justify-center rounded-3xl p-6 font-poppins cursor-pointer" onClick={()=>handleSearch(data.location)}>
        <div className="w-28 h-28 rounded-[100%] overflow-hidden">
          <img src={data.img} alt="travel" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-2 right-3 text-xs rounded-2xl px-2 bg-gray-100 text-slate-800 leading-loose">
          1883
        </div>
        <div className="ms-5">
          <div className="text-lg mb-2 text-black line-clamp-2">{data.location}</div>
          <p className="text-sm">{data.distance}</p>
        </div>
      </div>
      
    </>
  );
};

export default MinimalCard;