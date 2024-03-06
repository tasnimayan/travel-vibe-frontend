import GuideCard from "../../components/tour/GuideCard";
import DashboardLayout from "../../layout/DashboardLayout";


const GuidesPage = () => {
  return (
    <DashboardLayout>

{/* Search Items */}
      <div className="max-w-2xl mx-auto">

        <form className="flex items-center">

              <label htmlFor="voice-search" className="sr-only">Search</label>
              <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                  </div>
                  <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Guides on preferred location" required />
              </div>
              <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300"><svg className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search</button>
          </form>

      </div>

{/* Guides profile card */}
      <div className="p-12 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {
          [1,2,3,4,5].map((item) => {
            return <GuideCard key={item}/>
          })
        }

      </div>

    </DashboardLayout>
  );
};

export default GuidesPage;