
const HotelCard = () => {
  return (
<div className=" px-16">
  
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
    
    <div>
      <div className="relative w-full">
        <div className="relative group/cardGallerySlider">
          <div className="w-full overflow-hidden rounded-xl h-80">
            <a className="flex items-center justify-center w-full h-full" href="/listing-stay-detail">
                <img alt="listing card gallery" loading="lazy" decoding="async" data-nimg="fill" className="object-cover w-full h-full top-0 right-0 left-0 bottom-0 text-transparent" src="https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </a>
          </div>
          {/* Image change Button */}
          <div className="opacity-0 group-hover/cardGallerySlider:opacity-100 transition-opacity">
            <button className="absolute w-8 h-8 right-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none" style={{transform:`translate3d(0px, 0px, 0px)`}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
              </svg>
            </button>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-neutral-900 opacity-50 rounded-b-lg"></div>
          <div className="flex items-center justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-1.5">
            <button className="w-1.5 h-1.5 rounded-full bg-white"></button>
            <button className="w-1.5 h-1.5 rounded-full bg-white/60 "></button>
            <button className="w-1.5 h-1.5 rounded-full bg-white/60 "></button>
            <button className="w-1.5 h-1.5 rounded-full bg-white/60 "></button>
          </div>
        </div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-white bg-black bg-opacity-30 hover:bg-opacity-50 absolute right-3 top-3 z-[1]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </div>
        <div className="flex items-center justify-center text-xs py-0.5 px-3 bg-red-700 text-red-50 rounded-full absolute left-3 top-3 leading-loose">-10% today</div>
      </div>
      <a href="/listing-stay-detail">
        <div className="mt-3 space-y-3">
          <div className="space-y-2">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">Entire cabin</span>
            <div className="flex items-center space-x-2">
              <h2 className="font-semibold capitalize text-neutral-900 dark:text-white text-base">
                <span className="line-clamp-1">Best Western Cedars Hotel </span>
              </h2>
            </div>
            <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className="">1 Anzinger Court</span>
            </div>
          </div>
          <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold">$26

              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">/night</span>
            </span>
            <div className="nc-StartRating flex items-center space-x-1 text-sm  " data-nc-id="StartRating">
              <div className="pb-[2px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px] text-orange-500">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="font-medium ">4.8</span>
              <span className="text-neutral-500 dark:text-neutral-400">(28)
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>

    {
      [1,2,3,4].map((item) =>{
        return (
          <div key={item}>
          <div className="relative w-full">
            <div className="relative group/cardGallerySlider">
              <div className="w-full overflow-hidden rounded-xl h-80">
                <a className="flex items-center justify-center w-full h-full" href="/listing-stay-detail">
                    <img alt="listing card gallery" loading="lazy" decoding="async" data-nimg="fill" className="object-cover w-full h-full top-0 right-0 left-0 bottom-0 text-transparent" src="https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </a>
              </div>
              {/* Image change Button */}
              <div className="opacity-0 group-hover/cardGallerySlider:opacity-100 transition-opacity">
                <button className="absolute w-8 h-8 right-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none" style={{transform:`translate3d(0px, 0px, 0px)`}}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                  </svg>
                </button>
              </div>
    
              <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-neutral-900 opacity-50 rounded-b-lg"></div>
              <div className="flex items-center justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-1.5">
                <button className="w-1.5 h-1.5 rounded-full bg-white"></button>
                <button className="w-1.5 h-1.5 rounded-full bg-white/60 "></button>
                <button className="w-1.5 h-1.5 rounded-full bg-white/60 "></button>
                <button className="w-1.5 h-1.5 rounded-full bg-white/60 "></button>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-white bg-black bg-opacity-30 hover:bg-opacity-50 absolute right-3 top-3 z-[1]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-center text-xs py-0.5 px-3 bg-red-700 text-red-50 rounded-full absolute left-3 top-3 leading-loose">-10% today</div>
          </div>
          <a href="/listing-stay-detail">
            <div className="mt-3 space-y-3">
              <div className="space-y-2">
                <span className="text-sm text-neutral-500 dark:text-neutral-400">Entire cabin</span>
                <div className="flex items-center space-x-2">
                  <h2 className="font-semibold capitalize text-neutral-900 dark:text-white text-base">
                    <span className="line-clamp-1">Best Western Cedars Hotel </span>
                  </h2>
                </div>
                <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-1.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="">1 Anzinger Court</span>
                </div>
              </div>
              <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
              <div className="flex justify-between items-center">
                <span className="text-base font-semibold">$26
    
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">/night</span>
                </span>
                <div className="nc-StartRating flex items-center space-x-1 text-sm  " data-nc-id="StartRating">
                  <div className="pb-[2px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px] text-orange-500">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="font-medium ">4.8</span>
                  <span className="text-neutral-500 dark:text-neutral-400">(28)
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        )
      })
    }

  </div>

  <div className="flex mt-16 justify-center items-center">
    <button disabled="" className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  ">
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>Show me more </button>
  </div>
</div>
  );
};

export default HotelCard;