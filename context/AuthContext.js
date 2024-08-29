import { createContext, useState, useEffect } from "react";
import { useRouter } from "expo-router";
import config from "../secret"
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const url = config.authURL
  const router = useRouter()
  const [loading,setLoading] = useState(false)
  const [OtpLoading,setOtpLoading] = useState(false)
  const [OtpSuccess,setOtpSuccess] = useState(false)
  const [registerSuccess,setRegisterSuccess] = useState(false)
  const [emailExists,setEmailExists] = useState(false)
  const [registerServerError,setRegisterServerError] = useState(false)
  const [invalidCredentials,setInvalidCredentials] = useState(false)
  const [linkPressed,setLinkPressed] = useState('')

  // FUNCTION FOR REGISTERING A NEW ACCOUUNT
  const registerUser = async(fullname,email,password,identity) => {
    const userData = {
      name: fullname,
      email: email,
      password: password,
      identity: identity
    }
    try{
      setLoading(true)
      const response = await fetch(`${url}/api/register`,{
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(userData)
      })
      if(response.status == "201"){
        await sendOTP(email)
      }else if(response.status == "409"){
        setEmailExists(true)
        console.log(response.status)
      }else if(response.status == "500"){
        setRegisterServerError(true)
        console.log("server error")
      }
    }catch(error){
      console.log("an error occurred",error)
    }finally{
      setLoading(false)
    }
  }
 
  // FUNCTION FOR SENDING OTP TO REGISTERED ACCOUNT
  const sendOTP = async(email) => {
    console.log(email)
    try{
      const response = await fetch(`${url}/api/send-otp`,{
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({email:email})
      })
      if(response.status == "201"){
        router.replace({pathname:'/(auth)/email-verification',params:{email:email}})
      }else if(response.status == "500"){
        setRegisterServerError(true)
      }
    }catch(error){
      console.log(error)
    }
  }

  // FUNCTION FOR VERIFYING OTP
  const verifyOTP = async(otp,email) => {
    try{
      setOtpLoading(true)
      const response = await fetch(`${url}/api/verify-otp`,{
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({
          email:email,
          otp:otp
        })
      })
      if(response.status == "201"){
        setOtpSuccess(true)
      }
      else if(response.status == "500"){
        setRegisterServerError(true)
      }
    }
    catch(error){
      console.log(error)
    }
  }

  // FUNCTION FOR LOGGING IN USERS
  const loginUser = async(email,password) => {
    try{
      setLoading(true)
      const response = await fetch(`${url}/api/login`,{
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({
          email:email,
          password:password
        })
      })
      const responseData = await response.json()
      if(response.status == "201"){
        await AsyncStorage.setItem('accessToken',responseData.access_token)
        await AsyncStorage.setItem('userData',JSON.stringify(responseData.user))
        router.replace('/(student)/(tabs)/(home)')
      }else if(response.status == "401"){
        setInvalidCredentials(true)
      }else if(response.status == "500"){
        setRegisterServerError(true)
      }
    }catch(error){
      console.log("an error occurred",error)
    }finally{
      setLoading(false)
    }
  }

  return(
    <AuthContext.Provider value={{
      loading,
      setLoading,
      OtpLoading,
      setOtpLoading,
      OtpSuccess,
      setOtpSuccess,
      registerUser,
      registerSuccess,
      setRegisterSuccess,
      emailExists,
      setEmailExists,
      registerServerError,
      setRegisterServerError,
      setLinkPressed,
      verifyOTP,
      loginUser,
      invalidCredentials,
      setInvalidCredentials
    }}
    >
    {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;