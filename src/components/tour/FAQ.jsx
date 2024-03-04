import { FaPlus, FaMinus  } from "react-icons/fa6";


const FAQ = () => {
  return (
    <section className="">
      <div className="">
        <div className="w-4/12">
          <h2 className="text-2xl font-semibold">FAQs about <br />London </h2>
        </div>
        <div className="w-8/12">

          <div className="relative mb-3">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group group-open text-dark-500"
                data-collapse-target="collapse-1"
              >
                <span>What is Travel Vibe?</span>
                <FaPlus className="absolute right-0 pt-1 text-lg group-open:opacity-0"/>
                <FaMinus className="absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100" />
              </button>
            </h6>
            <div
              data-collapse="collapse-1"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                Travel vibe is a platform where you can find all types of facilities related to travel. Whether you need a travel plan, hotel, local guide or connect with traveler, travel vibe is there for you to make your planning easy!
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default FAQ;