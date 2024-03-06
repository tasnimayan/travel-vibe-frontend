
const MainColLayout = (props) => {
  return (
    <main role="main" className="w-full lg:w-9/12 rounded-xl pl-4 ">
      {props.children}
    </main>
  );
};

export default MainColLayout;