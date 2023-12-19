import { Routes, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import TourDetailsPage from '../pages/Tours/TourDetailsPage'
import Overview from '../components/Overview'
import Policy from '../components/Policy'
import Packages from '../components/Packages';
import ProfilePage from '../pages/Users/ProfilePage';

import React from 'react'
import LoginPage from '../pages/Users/LoginPage'
import PrivateRoute from './privateRoute'
import Loading from '../pages/Loading'
// import HomePage from './pages/HomePage'
const LazyHome = React.lazy(()=>import('../pages/HomePage'))
import SignUpPage from './../pages/Users/SignUpPage';
import AccountRecoverPage from './../pages/Users/AccountRecoverPage';
import CreateTourPage from '../pages/Tours/CreateTourPage'


const Router = () => {
  return (
    <Routes>
       {/* General Routes that is accessible to all non-account users */}
        <Route path="/" element={
        <React.Suspense fallback ={<Loading/>} >  {/* fallback can take any component to show while loading */}
          <LazyHome/>
        </React.Suspense> } />
        
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/tours' element={<TourDetailsPage/>} />
        
        <Route path="/tours/:tourId" element={<TourDetailsPage/>} >
          {/* Rendering Child component inside parent component */}
          <Route index element={<Overview />} />  {/* To set what to show at start of parent router*/}
          <Route path='overview' element={<Overview />} />
          <Route path='packages' element={<Packages />} />
          <Route path='itinerary' element={<Packages />} />
          <Route path='policy' element={<Policy />} />
        </Route>

        <Route path='/accounts/recover' element={<AccountRecoverPage />} />

        {/* Private Route For only logged users */}
        <Route element={<PrivateRoute />}>
          <Route path='/users/delete' element={<ProfilePage />} />
          <Route path='/users/:userId' element={<ProfilePage />} />
          
        </Route>

        {/* Routes only for Organization */}
        <Route path='/tours/new' element={<CreateTourPage />} />




        <Route path='*' element = {<ErrorPage/>} />


    </Routes>
  );
};

export default Router;