import { Routes, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import TourDetailsPage from '../pages/Tours/TourDetailsPage'
import Overview from '../components/tour/Overview'
import Policy from '../components/tour/Policy'
import Packages from '../components/tour/Packages';
import ProfilePage from '../pages/Users/ProfilePage';

import LoginPage from '../pages/Users/LoginPage'
import PrivateRoute from './privateRoute'

import SignUpPage from './../pages/Users/SignUpPage';
import AccountRecoverPage from './../pages/Users/AccountRecoverPage';
import CreateTourPage from '../pages/Tours/CreateTourPage'
import TourHomePage from '../pages/Tours/TourHomePage'
import Itinerary from '../components/tour/Itinerary'
import ComponentGallery from '../pages/ComponentGallery'
import GuidesPage from '../pages/Guides/GuidesPage'
import HotelsHomePage from '../pages/Hotels/HotelsHomePage'
import FeedPage from '../pages/Community/FeedPage'
import HomePage from './../pages/HomePage';


const Router = () => {
  return (
    <Routes>
{/* ======== General Routes that is accessible to all non-account users ======== */}
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/tours' element={<TourHomePage/>} />
        
        <Route path='/tours/new' element={<CreateTourPage/>} />


        
        <Route path="/tours/:tourId" element={<TourDetailsPage/>} >
{/* ======== Rendering Child component inside parent component ======== */}
          <Route index element={<Overview />} />  {/* To set what to show at start of parent router*/}
          <Route path='overview' element={<Overview />} />
          <Route path='packages' element={<Packages />} />
          <Route path='itinerary' element={<Itinerary />} />
          <Route path='policy' element={<Policy />} />
        </Route>

        <Route path='/accounts/recover' element={<AccountRecoverPage />} />

{/* ======== Private Route For only logged users ======== */}
        <Route element={<PrivateRoute />}>
          <Route path='/profile/delete' element={<ProfilePage />} />
          <Route path='/profile/:userId' element={<ProfilePage />} />
          
        </Route>

{/* ======== Routes only for Organization ========
        <Route path='/tours/new' element={<CreateTourPage />} />


{/* ======== Guide related routes ======== */}
        <Route path='/guides' element={<GuidesPage/>} />


{/* ======== Hotels related routes ======== */}
        <Route path='/hotels' element={<HotelsHomePage/>} />


{/* ======== Community related routes ======== */}
        <Route path='/community' element={<FeedPage/>} />


        <Route path='/components' element={<ComponentGallery />} />

        <Route path='*' element = {<ErrorPage/>} />


    </Routes>
  );
};

export default Router;