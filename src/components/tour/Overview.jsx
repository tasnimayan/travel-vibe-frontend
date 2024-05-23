import { useSelector } from "react-redux";

const Overview = () => {
  const {tourDetails} = useSelector(state => state.tour)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Overview</h1>

      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {tourDetails.description}<br/><br/>
      </p>
    </div>
  );
};

export default Overview;