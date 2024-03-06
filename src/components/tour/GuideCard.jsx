import { FaFacebookF } from "react-icons/fa6";

const GuideCard = () => {
  return (
    <div className="border rounded-lg bg-yellow-100 overflow-hidden">
      <div className="relative flex items-center justify-center group">
        <div className="w-48 h-48 rounded-full overflow-hidden my-12">
          <img src="https://images.unsplash.com/photo-1513152697235-fe74c283646a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Null Khan" className="w-full h-full object-cover"/>
        </div>
        <div className="absolute left-0 bg-black bg-opacity-25 text-white h-full text-xl px-2 opacity-0 group-hover:opacity-100">
          <a href="/facebook">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="bg-white p-6 text-center hover:bg-green-400  transition-colors rounded-t-xl">
        <h3 className="text-2xl font-bold">Null Khan</h3>
        <p className="text-gray-400">Chittagong</p>
      </div>
    </div>
  );
};

export default GuideCard;