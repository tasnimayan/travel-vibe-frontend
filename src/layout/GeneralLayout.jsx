// This is the layout for login and signup pages
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from './Footer';

const GeneralLayout = () => {
  return (
    <>
      <NavBar />
      <div className="mt-[70px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default GeneralLayout;