import { useContext, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { Link, useRouter } from 'expo-router'
import  icons  from "../../constants/icons"
import Checkbox from 'expo-checkbox'
import AuthFooter from './AuthFooter'
import AuthContext from '../../context/AuthContext'

const SignInForm = () => {
  const { setLinkPressed, loginUser } = useContext(AuthContext)
  const router = useRouter()
  const [isChecked,setChecked] = useState(false)
  const [seePassword,setSeePassword] = useState(false)
  const [input,setInput] = useState('')
  const [password,setPassword] = useState('')
  const [inputRequired,setInputRequired] = useState(false)
  const [passwordRequired,setPasswordRequired] = useState(false)
  const [headerErrMsg,setHeaderErrMsg] = useState(false)
  const [passwordErrMsg,setPasswordErrMsg] = useState(false)
  
  // Function to check if all fields are validated
  const checkFormFields = () => {
    if(input === "" && password === ""){
      setHeaderErrMsg(true)
      setInputRequired(true)
      setPasswordRequired(true)
      return;
    }else if(input === ""){
      setHeaderErrMsg(true)
      setInputRequired(true)
    }else if(password.length < 6){
      setPasswordRequired(true)
      setPasswordErrMsg(true)
    }else{
      setHeaderErrMsg(false)
      loginUser(input,password)
    }
   }  

   // Functions that check if email field is not empty upon onChangeText
   const handleInputChange = (text) => {
    setInput(text)
    checkInputValidity(text)
    }
    const checkInputValidity = (text) => {
      if(text === ""){
      setInputRequired(true)
      }else{
      setInputRequired(false)
      }
    }

   // Functions that check if password field is not empty upon onChangeText
   const handlePasswordChange = (text) => {
    setPassword(text)
    checkPasswordValidity(text)
   }
   const checkPasswordValidity = (text) => {
    if(text === "" || text.length < 6){
      setPasswordRequired(true)
      setPasswordErrMsg(true)
    }else{
      setHeaderErrMsg(false)
      setPasswordErrMsg(false)
      setPasswordRequired(false)
    }
  }

  const forgotPasswordLink = () => {
    router.push('/(auth)/forgot-password')
    setLinkPressed("Forgot Password")
  }

  const signUpLink = () => {
    router.push('/(auth)/sign-up')
    setLinkPressed('Sign Up')
  }


  return (
    <View className="flex-1 mt-[16px] ml-[22px] w-[90%] max-w-md p-1">
      {headerErrMsg && <Text className="text-red-500 text-center font-robotobold mb-5">Please enter your personal info</Text>}
      <View>
        <Text className="text-[#344054] font-robotomedium">Username or Email Address</Text>
        <TextInput 
          className={`bg-[#EBEBEB] w-full rounded-full p-4 mt-1 ${inputRequired ? 'border border-red-500':''}`}
          placeholder='Enter email or Username'
          placeholderTextColor="#98A2B3"
          value={input}
          onChangeText={handleInputChange}
        />
      </View>

      <View className= {`mt-4 ${passwordErrMsg ? "pb-3" : ""}`}>
        <Text className="text-[#344054] font-robotomedium">Password</Text>
        <TextInput
          secureTextEntry={seePassword ? false : true} 
          className={`bg-[#EBEBEB] w-full rounded-full p-4 mt-1 ${passwordRequired ? 'border border-red-500':''}`}
          placeholder='Enter at least 6 characters'
          placeholderTextColor="#98A2B3"
          value={password}
          onChangeText={handlePasswordChange}
        />
        <TouchableOpacity className="absolute top-[50%] left-[87%]" onPress={()=>setSeePassword(!seePassword)}>
          {seePassword ? <Image source={icons.eyeClose}/> :  <Image source={icons.eye}/>}
        </TouchableOpacity>
        {passwordErrMsg && 
        <View className="absolute top-[100%] mb-10 flex flex-row mt-1">
          <Image source={icons.error}/>
          <Text className="text-red-500 font-roboto ml-1">Password should be at least 6 characters</Text>
        </View>
        }
      </View>

      <View className={`flex flex-row justify-between w-full mt-2 ${passwordErrMsg && "mt-5"}`}>
        <View className="flex flex-row">
          <Checkbox 
            className="h-4 w-4"
            color={isChecked ? '#2666CF' : undefined}
            value={isChecked} 
            onValueChange={setChecked}
          /> 
          <Text className="text-gray-400 ml-1 text-[12px] font-roboto mt-[1px]">Remember me</Text>       
        </View>
        <TouchableOpacity onPress={forgotPasswordLink}>
          <View>
            <Text className="font-roboto text-[#6E1FEF] text-[12px]">Forgot Password?</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className='mt-5 w-full mb-2'>
        <TouchableOpacity className="w-full bg-[#2B145A] rounded-full p-4" onPress={()=>checkFormFields()}>
          <Text className="text-center text-xl text-white font-robotomedium">Sign in</Text>
        </TouchableOpacity>
        <Text className="text-center mt-4 font-roboto">Don't have an account?
          <TouchableOpacity onPress={signUpLink}>
            <Text className="text-[#6E1FEF] font-roboto"> Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    <AuthFooter/>
    </View>
  )
}
export default SignInForm
