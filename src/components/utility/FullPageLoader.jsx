

const FullPageLoader = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black opacity-[10%] z-50">
      <div className="flex justify-center items-center mt-[50vh]">
        <div className="rounded-full h-20 w-20 bg-green-600 animate-ping"></div>
      </div>
    </div>
  );
};

export default FullPageLoader;