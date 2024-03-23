import Socials from "./Socials";

const GuideCard = ({data}) => {
  return (
    <div className="text-center">
      <div className="rounded-lg overflow-hidden shadow-lg border group/guideCard">
        <div className="relative">
          <img src={data.image ?? ''} alt={data.name} className="w-full h-60 object-cover"/>

          <div className='group-hover/guideCard:opacity-100 flex justify-center opacity-0 transition-opacity duration-500'>
            <Socials links={data.socials}/>
          </div>

        </div>
        <div className="py-4">
          <p className='font-semibold text-lg'>{data?.name}</p>
          <p className="text-sm">Chittagong</p>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;