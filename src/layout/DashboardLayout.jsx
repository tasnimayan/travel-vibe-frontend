
import Nav from "./Nav";
import Footer from "./Footer";

function DashboardLayout(props) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
}

export default DashboardLayout;