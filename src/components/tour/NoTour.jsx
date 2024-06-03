// In case the tour list is empty this card will be shown in the UI

import Button from "../Button";

const NoTour = () => {
  return (
    <div  className=' w-full p-16 shadow-lg text-center rounded-2xl bg-white flex flex-col items-center gap-12'>
      <h2 >No tours available!</h2>
      <Button type="primary" as="a" href="/tours" size="lg" className="">Explore Tours
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
        className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
      </svg>
      </Button>
    </div>
  )
};

export default NoTour;