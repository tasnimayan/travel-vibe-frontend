
const HotelCard = () => {
  return (
    <div className=" border rounded">
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
  );
};

export default HotelCard;