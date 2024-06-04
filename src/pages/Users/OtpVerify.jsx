
import { useState } from "react";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
import { fetchOtpVerification } from "../../redux/state/user/authSlice";

const OtpPage = () => {
  let navigate=useNavigate();
  let [otp, setOtp] = useState(null)

  const onFormSubmit = async ()=>{
    if(!otp){
        toast.error("Enter valid OTP")
    }else {
        let res = await fetchOtpVerification(otp);
        res?navigate("/"):toast.error("Incorrect OTP!")
    }
  }

  return (
    <div className="container mx-auto py-20 px-12 border">
      <div className="flex justify-center">
        <div className="flex flex-col rounded-xl p-14 border">
          <div>
            <h4 className="text-lg font-semibold">Enter Verification Code</h4>
            <p className="text-gray-600">A verification code has been sent to the email address you provide</p>
          </div>
          <input value={otp} onChange={(e)=>{setOtp(e.target.value)}}  placeholder="Verification" type="text" className="mt-4 w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
          <button onClick={onFormSubmit} className="btn mt-3 btn-success">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;