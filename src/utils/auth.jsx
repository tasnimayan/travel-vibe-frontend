import { useDispatch, useSelector} from "react-redux";
import { userLogin } from "../redux/state/user/authSlice";
import { Navigate, Outlet } from "react-router-dom";

const auth = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.auth)

  let handleLogin = ()=>{
    dispatch(userLogin({user, token}))
  }

  return user? <Outlet /> : <Navigate to = '/login' replace/>
};

export default auth;