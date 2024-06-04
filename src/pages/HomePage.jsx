// Home / Index page that loads on the root url

import Header from '../components/home/Header';
import About from '../components/home/About';
import NearbyLocation from '../components/home/NearbyLocation';
import ThrillingTours from '../components/home/ThrillingTours';
import OfferImages from '../components/home/OfferImages';


import SectionHeading from '../components/tour/SectionHeading';
import ChooseWhy from '../components/home/ChooseWhy';
import DiscountedTours from '../components/tour/DiscountedTours';



const HomePage = () => {
  return (
    <>
            {/* Hero Image with search bar */}
      <Header />
            {/* Static About section */}
      <About />

            {/* Nearby location based on current location */}
      <div className='container mx-auto container-pad bg-[#f7f4ee]'>
        <SectionHeading
          title = "Explore Nearby"
          subtitle = "Discover great places near where you live"
          align = "center"
        />
        <NearbyLocation />
      </div>


      <div className='container mx-auto container-pad bg-slate-200'>
        <SectionHeading 
          title="Thrilling Tour Plans"
          subtitle="Get best value plans for your next trip"
          align="center"
        />
        <ThrillingTours />
      </div>

      <OfferImages />

      <div className="container mx-auto bg-gray-600 text-white py-20 bg-[url('https://images.unsplash.com/photo-1501908734255-16579c18c25f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-blend-overlay rounded-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold leading-tight mb-4">Discover Your Dream Tour Package</h1>
              <p className="text-sm mb-8">Stay updated with the latest tour packages and exclusive offers</p>
              <a href="/signup" className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">Sign Up
              </a>
              <a href="/about" className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ms-4">Learn More
              </a>
            </div>
          </div>
        </div>
      </div>


      <DiscountedTours />
      <ChooseWhy />
    </>
  );
};

export default HomePage;