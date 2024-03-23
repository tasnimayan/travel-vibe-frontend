
const AsideLayout = (props) => {
  return (
    <aside className="overflow-auto no-scrollbar sticky left-0 top-0 hidden md:flex md:flex-col w-full lg:w-3/12 rounded-xl px-2 gap-y-4">
      {props.children}
    </aside>
  );
};

export default AsideLayout;