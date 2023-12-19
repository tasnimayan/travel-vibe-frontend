import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// This is to control the authenticated routing. No unauthorized user can use defined routes under this component on MainComponent
const PrivateRoute = ()=>{
  const user  = useSelector((state)=>state.auth.user)
  const location = useLocation();

  const isAuthenticated = user.email? true: false
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{path:location.pathname}} />;
}

export default PrivateRoute;