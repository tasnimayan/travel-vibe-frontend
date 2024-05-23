
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const Auth = () => {
  let token = Cookies.get("tvUserToken")
  console.log(token)

  return token? <Outlet /> : <Navigate to = '/login' replace/>
};

export default Auth;