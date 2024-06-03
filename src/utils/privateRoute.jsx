import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

// This is to control the authenticated routing. No unauthorized user can use defined routes under this component on MainComponent
const PrivateRoute = ()=>{
  
  const location = useLocation();
  let token = Cookies.get("tvUserToken")

  return token ? <Outlet /> : <Navigate to="/login" state={{path:location.pathname}} />;
}

export default PrivateRoute;