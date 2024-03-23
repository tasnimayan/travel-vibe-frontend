
import Nav from "./Nav";
import Footer from "./Footer";

function DashboardLayout(props) {
  return (
    <>
      <Nav />
      <div className=" mt-[70px] container mx-auto">
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default DashboardLayout;