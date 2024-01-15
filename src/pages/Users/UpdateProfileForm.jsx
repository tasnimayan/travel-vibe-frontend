
const UpdateProfileForm = () => {
  return (
    <section className=" bg-gray-100 max-w-4xl p-6 mx-auto rounded-md shadow-md mt-20">
        <h4 className="text-xl font-bold  capitalize dark:">Account settings</h4>
        <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                <div className="col-span-2">
                    <label className="block text-sm font-medium ">
                    Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span className="">Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                        </label>
                        <p className="pl-1 ">or drag and drop</p>
                      </div>
                      <p className="text-xs ">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                    <label className=" dark:text-gray-200" htmlFor="fname">First Name</label>
                    <input id="fname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className=" dark:text-gray-200" htmlFor="lname">Last Name</label>
                    <input id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className=" dark:text-gray-200" htmlFor="dob">Date of Birth</label>
                    <input id="dob" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className=" dark:text-gray-200" htmlFor="gender">Gender</label>
                    <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        <option value={"M"}>Male</option>
                        <option value={"F"}>Female</option>
                    </select>
                </div>

                <div>
                    <label className=" dark:text-gray-200" htmlFor="nid">NID</label>
                    <input id="nid" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" min={0}/>
                </div>

                <div>
                    <label className=" dark:text-gray-200" htmlFor="">Phone</label>
                    <input id="" type="tel" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>

                <div className="col-span-2">
                    <h4 className="text-xl font-bold  capitalize dark:">Address</h4>
                </div>

                <div>
                    <label className=" dark:text-gray-200" htmlFor="">Address</label>
                    <input id="" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                
                <div>
                    <label className=" dark:text-gray-200" htmlFor="">City</label>
                    <input id="" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                
                <div>
                    <label className=" dark:text-gray-200" htmlFor="">Post Code</label>
                    <input id="" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                </div>

                <div className="col-span-2">
                    <h4 className="text-xl font-bold  capitalize dark:">Emergency Contact</h4>
                </div>
                <div>
                    <label className=" dark:text-gray-200" htmlFor="">Number</label>
                    <input id="" type="tel" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div> 

                
            </div>

            <div className="flex justify-end mt-6">

                <button className="px-6 py-2 leading-5  transition-colors duration-200 transform border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none mr-2">Cancel</button>
                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none">Save</button>
            </div>
        </form>
    </section>
  );
};

export default UpdateProfileForm;