
const PackageCard = ({data}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-2 md:p-4 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{data.name}</h2>

      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">BDT </span>
        <span className="text-3xl font-extrabold tracking-tight">{data.price}</span>
      </div>
      <ul className="list-disc list-inside mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        <li>{data.description}</li>
      </ul>

      <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
    </div>
  );
};

export default PackageCard;