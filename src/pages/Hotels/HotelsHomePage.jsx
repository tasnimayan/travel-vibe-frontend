
// This is the home page for the hotels
import EliteSection from '../../components/home/EliteSection';
import HotelCard from '../../components/tour/HotelCard';
import ScrollLoader from './../../components/utility/ScrollLoader';

const HotelsHomePage = () => {
  return (
    <div className='relative'>
      {/* Loader */}
      <ScrollLoader />


      <div className='px-16'>
        {/* Top Heading with navigation */}
        <div className="flex flex-col mb-8 relative">
          <div className="nc-Section-Heading relative mb-10 text-neutral-900 dark:text-neutral-50">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold">Featured places to stay</h2>
              <span className="block mt-2 md:mt-3 font-normal text-base sm:text-lg text-neutral-500 dark:text-neutral-400">Popular places to stay that Chisfis recommends for you</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <nav className="nc-Nav relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar" data-nc-id="Nav">
              <ul className="flex  sm:space-x-2">
                <li className="nc-NavItem relative" data-nc-id="NavItem">
                  <button className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 focus:outline-none">New York</button>
                </li>
                <li className="nc-NavItem relative" data-nc-id="NavItem">
                  <button className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none">Tokyo</button>
                </li>
                <li className="nc-NavItem relative" data-nc-id="NavItem">
                  <button className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none">Paris</button>
                </li>
                <li className="nc-NavItem relative" data-nc-id="NavItem">
                  <button className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none">London</button>
                </li>
              </ul>
            </nav>
            <span className="hidden sm:block flex-shrink-0">
              <a className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base px-4 py-3 sm:px-6 font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 !leading-none  " href="/listing-stay">
                <div className="flex items-center justify-center">
                  <span>View all</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-5 h-5 ml-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </div>
              </a>
            </span>
          </div>
        </div>


        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
        {
          [1,2,3,4].map((item) =>{
            return <HotelCard key={item}/>
          })
        }
        </div>
      </div>

      <EliteSection />
    </div>
  );
};

export default HotelsHomePage;