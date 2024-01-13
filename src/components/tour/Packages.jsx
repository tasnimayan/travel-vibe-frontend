import PackageCard from "./PackageCard";

const Packages = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Packages</h1>
        <div className="mb-4 flex gap-4">
          <PackageCard />
          <PackageCard />
          <PackageCard />
        </div>

    </div>
  );
};

export default Packages;