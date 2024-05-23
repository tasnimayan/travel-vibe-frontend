import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {fetchUser} from "../../redux/state/user/authSlice"
import FullPageLoader from './../../components/utility/FullPageLoader';

import { toast } from "react-toastify";


const LoginPage = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state=> state.auth)

  const [loginData, setLoginData] = useState({email:'', password:''})

  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate()
  const location = useLocation()
  const eye = useRef();


  const handleLogin = async (e) =>{
    e.preventDefault();
    if(!loginData.email && !loginData.password){
      return toast.error("Please Enter Valid Details")
    }
    try{
      await dispatch(fetchUser(loginData)).unwrap()
      setLoginData({email:'', password:''})
      navigate(location.state?.path || '/')
    }
    catch(e){
      toast.error("Invalid Information")
      console.log(e)
    }
  }
  
  // Pass hide and show icon feature
  function passwordToggle() {
    if(passwordType==="password"){
      eye.current.setAttribute('type','text')
      setPasswordType("text")
    }
    else{
      eye.current.setAttribute('type','password')
      setPasswordType("password")
    }
  }
  
  return (
    <>
      <div className="flex justify-center items-center py-24 bg-contain bg-no-repeat" style={{backgroundImage:`url("/abstract.pg")`}}>
        {loading?<FullPageLoader />:null}
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
          <div
            className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
            <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
              Sign In
            </h3>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input type="email" onChange={(e)=> setLoginData({...loginData, email:e.target.value})} value={loginData.email}
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" " />
              <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input type="password" onChange={(e)=> setLoginData({...loginData, password:e.target.value})} ref={eye} value={loginData.password}
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" " />
              <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>

              <button className="absolute top-3 right-2 cursor-pointer p-1" onClick={passwordToggle}>
                {
                  passwordType==="password"? <FaRegEye/> :<FaRegEyeSlash/>
                }
              </button>
              
            </div>
            <div className="-ml-2.5">
              <div className="inline-flex items-center">
                <label htmlFor="checkbox" className="relative flex items-center p-3 rounded-full cursor-pointer">
                  <input type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="checkbox" />
                  <span
                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                      stroke="currentColor" strokeWidth="1">
                      <path fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"></path>
                    </svg>
                  </span>
                </label>
                <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="checkbox">
                  Remember Me
                </label>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <button onClick={handleLogin}
              className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              Login
            </button>

            <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="" />
                </a>
              </div>
              <div>
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="" />
                </a>
              </div>
              <div>
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg" alt="" />
                </a>
              </div>
            </div>
          </div>

            <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
              Don&apos;t have an account?
              <a href="/signup"
                className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                Sign up
              </a>
            </p>
          </div>
        </div>

        <div className="w-1/2 hidden md:flex items-center justify-center">
          
          <div className="w-80">
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-4">
                  <div>
                      <img className="h-48 max-w-full rounded-lg object-cover" src="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg?w=826&t=st=1705319313~exp=1705319913~hmac=a81a49cd789c70f011ef77c6870ba92b4cffd965dd85195b0b4c4deb5f265ac0" alt="" />
                  </div>
                  <div>
                      <img className="h-32 max-w-full rounded-lg  object-cover" src="https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?w=826&t=st=1705319011~exp=1705319611~hmac=f44ccddfb4559cbf681e2646397ddd49d1e3fd729753b1e63a5b4ae39dc5085e" alt="" />
                  </div>

                </div>
                <div className="grid gap-4">
                  <div>
                      <img className="h-40 max-w-full rounded-lg  object-cover" src="https://img.freepik.com/free-photo/girl-jumping-with-excitement-doorway-with-sea_181624-20834.jpg?w=740&t=st=1705319373~exp=1705319973~hmac=28bd305f3149526638c24638ca56bdad30183af5cc2e47e92afe4ce577d82dd1" alt="" />
                  </div>
                  <div>
                      <img className="h-56 max-w-full rounded-lg  object-cover" src="https://img.freepik.com/premium-vector/travel-vector-poster-design-let-s-go-travel-text-with-luggage-passport-camera-destination_572293-2377.jpg?w=740" alt="" />
                  </div>
                </div>
            </div>
            
          </div>

        </div>
      </div>
    </>
  );
};

export default LoginPage;