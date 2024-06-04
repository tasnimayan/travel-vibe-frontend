import Socials from "./Socials";
const BASE_URL = import.meta.env.VITE_BASE_URL

const GuideCard = ({data}) => {
  return (
    <div>
      <div className="text-center rounded-lg overflow-hidden shadow-lg border group/guideCard">
        <div className="relative">
        <a href={`/guides/${data._id}`}>
          <img src={BASE_URL + data.photo} alt={data.name} className="w-full h-60 object-cover"/>
        </a>
          <div className='group-hover/guideCard:opacity-100 flex justify-center opacity-0 transition-opacity duration-500'>
            <Socials links={data.socials}/>
          </div>

        </div>
        <div className="py-4">
          <p className='font-semibold text-lg'>{data?.name}</p>
          <p className="text-sm">{data.address.city}</p>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;