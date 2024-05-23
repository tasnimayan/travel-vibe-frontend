// In case the tour list is empty this card will be shown in the UI

import Button from "../../components/Button";

const NoTour = () => {
  return (
    <div  className=' w-full p-16 shadow-lg text-center rounded-2xl bg-white flex flex-col items-center gap-12'>
      <h2 >No Tours Available</h2>
      <Button type="primary" as="a" href="/tours" size="lg" className="">Explore New Tours</Button>
    </div>
  )
};

export default NoTour;