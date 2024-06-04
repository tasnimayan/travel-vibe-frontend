// This component is responsible for the image gallery inside of Tour Details page
// takes a single prop 'images:[str]'
const BASE_URL = import.meta.env.VITE_BASE_URL

const DetailImages = ({images}) => {
  return (
    <div className="px-3">
      <div>
        <img className="h-auto max-h-[500px] w-full rounded-lg object-cover" src={BASE_URL+images[0]} alt="" />
      </div>


      <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
        {
          images?.map((image, idx)=>{
            return (
              <div key={idx}>
                <img className="h-20 rounded-lg object-cover" src={BASE_URL + image} alt="" />
              </div>
            )
          })
        }
      </div>
      
    </div>
  );
};

export default DetailImages;