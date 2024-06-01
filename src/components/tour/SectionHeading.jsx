// Section Heading text 
// receives two props 'title:str' and 'subtitle:str'

const SectionHeading = (props) => {
  return (
    <div className={`flex flex-col relative text-${props.align?? 'left'} ${props.className}`}>
      <div className="relative mb-4 text-neutral-900">
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-semibold">{props.title?? ''}</h2>
          <span className="block mt-2 md:mt-3 font-normal text-base sm:text-lg text-neutral-500 dark:text-neutral-400">{props.subtitle?? ''}</span>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;