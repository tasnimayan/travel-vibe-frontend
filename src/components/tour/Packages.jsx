import { useSelector } from "react-redux";
import PackageCard from "./PackageCard";

const Packages = () => {
  const {tourDetails} = useSelector(state => state.tour)
  const packages = tourDetails.packages
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Packages</h1>
        <div className="mb-4 flex gap-4">
          {
            packages.map((pkg, idx)=>{
              return <PackageCard data={pkg} key={idx}/>
            })
          }
        </div>

    </div>
  );
};

export default Packages;