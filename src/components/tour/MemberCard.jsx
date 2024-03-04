

const MemberCard = () => {

  return (
    <a className="flex flex-col overflow-hidden bg-white border dark:bg-neutral-900 rounded-3xl hover:shadow-xl transition-shadow " data-nc-id="CardAuthorBox2" href="/author">
        <div className="relative flex-shrink-0">
          <div className="flex aspect-w-7 aspect-h-3 md:aspect-h-4 w-full h-28">
            <img alt="" className="absolute w-full h-full left-0 top-0 right-0 bottom-0 bg-transparent" src="https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="absolute top-3 inset-x-3 flex">
            <div className="py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-yellow-600"><path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd"></path></svg>
            </div>
          </div>
        </div>
        <div className="pt-[1px] px-6 text-center flex flex-col items-center relative -translate-y-7">
          <svg className="h-12 text-white dark:text-neutral-900 dark:group-hover:text-neutral-800" viewBox="0 0 135 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M101.911 19.8581C99.4421 17.4194 97.15 14.8065 94.6816 12.1935C94.3289 11.671 93.8 11.3226 93.271 10.8C92.9184 10.4516 92.7421 10.2774 92.3895 9.92903C85.8658 3.83226 76.8737 0 67.1763 0C57.4789 0 48.4868 3.83226 41.7868 9.92903C41.4342 10.2774 41.2579 10.4516 40.9053 10.8C40.3763 11.3226 40.0237 11.671 39.4947 12.1935C37.0263 14.8065 34.7342 17.4194 32.2658 19.8581C23.45 28.7419 11.6368 30.4839 0 30.8323V54H16.5737H32.2658H101.734H110.374H134.176V30.6581C122.539 30.3097 110.726 28.7419 101.911 19.8581Z" fill="currentColor"></path></svg>
          <span className="absolute top-2">
            <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-12 h-12 text-2xl ">
              <img alt="Truelock Alric" loading="lazy" width="256" height="256" className="absolute inset-0 w-full h-full object-cover rounded-full text-transparent" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <span className="wil-avatar__name">T</span>
            </div>
          </span>
          <div className="mt-6">
            <h2 className="text-base font-medium"><span className="line-clamp-1">Truelock Alric</span></h2>
            <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">@ Author Job</span>
      </div>
    </div>
    </a>
      

  );
};

export default MemberCard;