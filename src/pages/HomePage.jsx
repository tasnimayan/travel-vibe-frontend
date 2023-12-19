import { useSearchParams } from "react-router-dom";

const HomePage = () => {

  let card = {
      title: "Dr. Perry Williams Joins UNR as Assistant Professor",
      excerpt: "Dr. Perry Williams recently joined the faculty in the Department of Natural Resources and Environmental Science at the University of Nevada, Reno, and was kind enough to provide his biography to help us get to know him. Welcome to Nevada, Dr. Williams!",
      date: "2021-12-01",
      author: "Perry Williams",
      img: "https://source.unsplash.com/l3Jdvs1Qui4/800x600",
    }


  const [searchParams, setSearchParams] = useSearchParams()
  return (
    <div>
      This is Home 

      <p>Getting the filters :{searchParams.get('filter')}</p>


      <div className="pt-6 pb-12 bg-gray-300">  
        <div id="card" className="">
          <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl">Tours</h2>
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">

              <div className="h-64 w-auto md:w-1/2">
                <img className="inset-0 h-full w-full object-cover object-center" src="card.img" />
              </div>
              {/* <!-- content --> */}
              <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 className="font-semibold text-lg leading-tight truncate">{ card.title }</h3>
                <p className="mt-2">
                  { card.excerpt }
                </p>
                <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  { card.author } &bull; { card.date }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button onClick={()=> setSearchParams({filter:'trending'})} className="btn mx-2">Trending tours</button>
        <button onClick={()=> setSearchParams({filter:'cheap'})} className="btn mx-2">Cheap tours</button>
      </div>
      

    </div>
  );
};

export default HomePage;