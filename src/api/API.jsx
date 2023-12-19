import axios from "axios";


const baseURL = "https://tv.tasnimayan.dev/api";

export async function apiLogin (email, password){

  let payload = {email, password};
  try{
    let output = await axios.post(baseURL+"/users/login", payload)
    return output.data;
  }
  catch(err){
    console.log(err)
    return {};
  }
}