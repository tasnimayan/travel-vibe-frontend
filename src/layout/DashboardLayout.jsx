
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <Nav />
      <div className="mt-[70px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default DashboardLayout;