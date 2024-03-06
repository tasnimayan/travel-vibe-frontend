// Why Choose Us section in the Home / Index Page 

import SectionHeading from "../tour/SectionHeading";
import { GiWorld } from "react-icons/gi";


const ChooseWhy = () => {
  return (
    <div className="container-pad">
      <SectionHeading
        title = "Why Choose Travel Vibe"
        align = "center"
        />
      <div className="flex flex-wrap">
        
        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div className="flex gap-4 items-center px-4 py-6 rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div className="w-1/3">
              <div
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-24 h-24  rounded-full shadow-2xl shadow-[#304FFE] border-white flex justify-center items-center text-6xl">
                    <GiWorld />
              </div>
            </div>
            
            <div className="text-left">
              <h2 className="text-gray-900 text-lg font-bold mb-2">Worldwide Coverage</h2>
              <p className="text-sm text-gray-400 leading-relaxed">Cras facilisis fermentum ex seda ullamcorper odio rutrum accoun Phasellus auctor</p>
            </div>

          </div>
        </div>

        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div className="flex gap-4 items-center px-4 py-6 rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div className="w-1/3">
              <div
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-24 h-24  rounded-full shadow-2xl shadow-[#304FFE] border-white flex justify-center items-center text-6xl">
                    <GiWorld />
              </div>
            </div>
            
            <div className="text-left">
              <h2 className="text-gray-900 text-lg font-bold mb-2">Worldwide Coverage</h2>
              <p className="text-sm text-gray-400 leading-relaxed">Cras facilisis fermentum ex seda ullamcorper odio rutrum accoun Phasellus auctor</p>
            </div>

          </div>
        </div>

        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div className="flex gap-4 items-center px-4 py-6 rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div className="w-1/3">
              <div
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-24 h-24  rounded-full shadow-2xl shadow-[#304FFE] border-white flex justify-center items-center text-6xl">
                    <GiWorld />
              </div>
            </div>
            
            <div className="text-left">
              <h2 className="text-gray-900 text-lg font-bold mb-2">Fast Booking</h2>
              <p className="text-sm text-gray-400 leading-relaxed">Burabitur convallis enim atnora ullamcorper sagittis. Morbi nug scelerisque for thana.</p>
            </div>

          </div>
        </div>

        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div className="flex gap-4 items-center px-4 py-6 rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div className="w-1/3">
              <div
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-24 h-24  rounded-full shadow-2xl shadow-[#304FFE] border-white flex justify-center items-center text-6xl">
                    <GiWorld />
              </div>
            </div>
            
            <div className="text-left">
              <h2 className="text-gray-900 text-lg font-bold mb-2">Guided Tours</h2>
              <p className="text-sm text-gray-400 leading-relaxed">Burabitur convallis enim atnora ullamcorper sagittis. Morbi nug scelerisque for thana.</p>
            </div>

          </div>
        </div>

        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div className="flex gap-4 items-center px-4 py-6 rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div className="w-1/3">
              <div
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-24 h-24  rounded-full shadow-2xl shadow-[#304FFE] border-white flex justify-center items-center text-6xl">
                    <GiWorld />
              </div>
            </div>
            
            <div className="text-left">
              <h2 className="text-gray-900 text-lg font-bold mb-2">Best Support 24/7</h2>
              <p className="text-sm text-gray-400 leading-relaxed">Burabitur convallis enim atnora ullamcorper sagittis. Morbi nug scelerisque for thana.</p>
            </div>

          </div>
        </div>

        <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
          <div className="flex gap-4 items-center px-4 py-6 rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div className="w-1/3">
              <div
                  className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-24 h-24  rounded-full shadow-2xl shadow-[#304FFE] border-white flex justify-center items-center text-6xl">
                    <GiWorld />
              </div>
            </div>
            
            <div className="text-left">
              <h2 className="text-gray-900 text-lg font-bold mb-2">Ultimate Flexibility</h2>
              <p className="text-sm text-gray-400 leading-relaxed">Burabitur convallis enim atnora ullamcorper sagittis. Morbi nug scelerisque for thana.</p>
            </div>

          </div>
        </div>

      </div>
      
    </div>
  );
};

export default ChooseWhy;