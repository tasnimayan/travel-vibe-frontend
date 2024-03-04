
const MinimalCard = () => {
  return (
    <div>
      <div className="relative border hover:bg-[#F8FAFC] hover:shadow-lg hover:border-[#F8FAFC] flex flex-row items-center rounded-3xl p-6 font-poppins cursor-pointer">
        <div className="w-28 h-28 rounded-full overflow-hidden">
          <img src="https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg" alt="travel" className=" w-full h-full object-cover" />
        </div>
        <div className="absolute top-2 right-3 text-xs rounded-2xl px-2 bg-gray-100 text-slate-800 leading-loose">
          1883
        </div>
        <div className="ms-5">
          <div className="text-lg mb-2 text-black">Sajek Valley</div>
          <p className="text-sm">280 km drive</p>
        </div>
      </div>
      
    </div>
  );
};

export default MinimalCard;