
const ScrollLoader = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full transparent z-50'>
      <div className="fixed w-full bg-black bg-opacity-50 h-full flex items-center justify-center">
        <button disabled className="text-white h-auto inline-flex items-center justify-center rounded-full transition-colors text-2xl font-bold px-4 py-3 sm:px-6">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>This Feature is Coming Soon</button>
      </div>
    </div>
  );
};

export default ScrollLoader;