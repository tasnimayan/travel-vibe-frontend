import {Link, Outlet}from 'react-router-dom';
const TourDetailsPage = () => {
  return (
    <div>
      This is tour details

      <nav>
        <Link to='overview' className='p-2 mx-3 border-b-2 rounded-md '>Overview</Link>
        <Link to='packages' className='p-2 mx-3 border-b-2 rounded-md '>Package</Link>
        <Link to='policy' className='p-2 mx-3 border-b-2 rounded-md '>Policy</Link>
      </nav>
      {/* Outlet defines Where the Components of nested route will be rendered */}
      <Outlet />
      
    </div>
  );
};

export default TourDetailsPage;