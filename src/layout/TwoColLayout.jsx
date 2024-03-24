
const TwoColLayout = (props) => {
  return (
    <div className="sm:px-3 md:px-6 lg:px-[4rem]">
      <div className="flex flex-row py-8 lg:pb-16 lg:gap-6 md:gap-2">
        {props.children}
      </div>
    </div>
  );
};

export default TwoColLayout;