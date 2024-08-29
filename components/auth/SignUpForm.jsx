import { useState, useEffect, useContext } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import  icons  from "../../constants/icons"
import AuthFooter from './AuthFooter'
import AuthContext from '../../context/AuthContext'

const SignUpForm = () => {
  const { registerUser } = useContext(AuthContext)

  const [seePassword,setSeePassword] = useState(false)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [nameRequired,setNameRequired] = useState()
  const [password,setPassword] = useState('')
  const [identity,setIdentity] = useState('')
  const [identityDropdown,setIdentityDropdown] = useState(false)
  const [emailRequired,setEmailRequired] = useState(false)
  const [identityRequired,setIdentityRequired] = useState(false)
  const [passwordRequired,setPasswordRequired] = useState(false)
  const [headerErrMsg,setHeaderErrMsg] = useState(false)
  const [emailErrMsg,setEmailErrMsg] = useState(false)
  const [passwordErrMsg,setPasswordErrMsg] = useState(false)

  const showIdentityPopUp = () => {
    setIdentityDropdown(!identityDropdown)
  }

  useEffect(()=>{
    if(identity != ""){
    setIdentityDropdown(false)
    setIdentityRequired(false)
    }
  },[identity])

   // Function to check if all fields are validated
  const checkFormFields = () => {
  if(name === "" && email === "" && password === "" && identity === ""){
    setHeaderErrMsg(true)
    setNameRequired(true)
    setEmailRequired(true)
    setPasswordRequired(true)
    setIdentityRequired(true)
    setTimeout(()=>{
      setHeaderErrMsg(false)
    },2000)
    return;
  }
  else if(name == "") {
    setNameRequired(true)
    setHeaderErrMsg(true)
  }
  else if(!email.includes("@gmail.com")){
    setEmailRequired(true)
    setEmailErrMsg(true)
    setHeaderErrMsg(true)
    setTimeout(()=>{
      setHeaderErrMsg(false)
    },2000)
  }else if(password.length < 6){
    setPasswordRequired(true)
    setPasswordErrMsg(true)
    setHeaderErrMsg(true)
    setTimeout(()=>{
      setHeaderErrMsg(false)
    },2000)
  }else if(identity === ""){
    setIdentityRequired(true)
    setHeaderErrMsg(true)
    setTimeout(()=>{
      setHeaderErrMsg(false)
    },2000)
  }else{
    setHeaderErrMsg(false)
    registerUser(name,email,password,identity)
  }
  }  


  // Functions that check if name field is not empty upon onChangeText
  const handleNameChange = (text) => {
    setName(text)
    checkNameValidity(text)
  }
  const checkNameValidity = (text) => {
    if(text === ""){
      setNameRequired(true)
    }else{
      setNameRequired(false)
    }
  }

  // Functions that check if email field is not empty upon onChangeText
  const handleEmailChange = (text) => {
    setEmail(text)
    checkEmailValidity(text)
  }
  const checkEmailValidity = (text) => {
    if(text === "" || !text.includes("@gmail.com")){
      setEmailErrMsg(true)
      setEmailRequired(true)
    }else{
      setEmailErrMsg(false)
      setEmailRequired(false)
    }
  }

  // Functions that check if password field is not empty upon onChangeText
  const handlePasswordChange = (text) => {
    setPassword(text)
    checkPasswordValidity(text)
  }
  const checkPasswordValidity = (text) => {
    if(text === "" || text.length < 6 ){
      setPasswordRequired(true)
      setPasswordErrMsg(true)
    }else{
      setPasswordErrMsg(false)
      setPasswordRequired(false)
    }
  }

  return (
    <View className="flex-1 mt-[20px] ml-[22px] w-[90%] max-w-md p-1">
      {headerErrMsg && <Text className="text-red-500 text-center font-robotobold mb-5">Please enter your personal info</Text>}
      <View>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row">
            <Text className="text-[#344054] font-robotomedium">Full name</Text>
            <View className="ml-[3px] -mt-[3px]">
              <Text className="text-red-500">*</Text>
            </View>
          </View>
        </View>
        <TextInput 
          className={`bg-[#EBEBEB] w-full rounded-full p-4 mt-1 ${nameRequired ? 'border border-red-500':''}`}
          placeholder='First & last name'
          placeholderTextColor="#98A2B3"
          value={name}
          onChangeText={handleNameChange}
        />
      </View>

      <View className="mt-4">
        <View className="flex flex-row justify-between">
          <View className="flex flex-row">
            <Text className="text-[#344054] font-robotomedium">Email Address</Text>
            <View className="ml-[3px] -mt-[3px]">
              <Text className="text-red-500">*</Text>
            </View>
          </View>
        </View>
        <TextInput
          className={`bg-[#EBEBEB] w-full rounded-full p-4 mt-1 ${emailRequired ? 'border border-red-500':''}`}
          placeholder='Enter email address'
          placeholderTextColor="#98A2B3"
          value={email}
          onChangeText={handleEmailChange}
        />
        {emailErrMsg && 
        <View className="flex flex-row mt-1">
          <Image source={icons.error}/>
          <Text className="text-red-500 font-roboto ml-1">Invalid Email(eg.davron@gmail.com)</Text>
        </View>
        }
      </View>

      <View className={`mt-4 ${passwordErrMsg ? "pb-3" : ""}`}>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row">
            <Text className="text-[#344054] font-robotomedium">Create Password</Text>
            <View className="ml-[3px] -mt-[3px]">
              <Text className="text-red-500">*</Text>
            </View>
          </View>
        </View>
        <TextInput
          secureTextEntry={seePassword ? false : true} 
          className={`bg-[#EBEBEB] w-full rounded-full p-4 mt-1 ${passwordRequired ? 'border border-red-500':''}`}
          placeholder='Enter at least 6 characters'
          placeholderTextColor="#98A2B3"
          value={password}
          onChangeText={handlePasswordChange}
        />
        {passwordErrMsg && 
        <View className="absolute top-[100%] flex flex-row mt-1">
          <Image source={icons.error}/>
          <Text className="text-red-500 font-roboto ml-1">Password should be at least 6 characters</Text>
        </View>
        }
        <TouchableOpacity className="absolute top-[50%] left-[87%]" onPress={()=>setSeePassword(!seePassword)}>
          {seePassword ? <Image source={icons.eyeClose}/> :  <Image source={icons.eye}/>}
        </TouchableOpacity>
      </View>
      
      <View className="mt-4 relative">
        <View className="flex flex-row justify-between">
          <View className="flex flex-row">
            <Text className="text-[#344054] font-robotomedium">Choose your identity</Text>
            <View className="ml-[3px] -mt-[3px]">
              <Text className="text-red-500">*</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity 
          className={`bg-[#EBEBEB] w-full rounded-full p-4 mt-1 ${identityRequired ? 'border border-red-500':''}`}
          onPress={()=>showIdentityPopUp()}
          >
         {identity ? (
            <Text className="text-#000">{identity}</Text>
          ) : (
            <Text className="text-[#98A2B3]">Sign in as...</Text>
          )}
        </TouchableOpacity>
        <View className="absolute top-[50%] left-[87%]" >
          <Image className="m-auto" source={icons.arrowdown}/> 
        </View>
        {identityDropdown ? (
        <View className="absolute top-[105%] left-[0] w-full z-20">
          <View className="bg-[#FFFFFF] flex flex-col w-full p-2 rounded-xl mt-1" style={styles.shadow}> 
            <TouchableOpacity className="p-2" onPress={()=>setIdentity("Student")}>
              <Text>Student</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-2" onPress={()=>setIdentity("Resource Provider")}>
              <Text>Resouce Provider</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-2" onPress={()=>setIdentity("Admin")}>
              <Text>Admin</Text>
            </TouchableOpacity>
          </View>
        </View>
        ) : ""}
      </View>

      <View className={`mt-5 w-full mb-1 ${identityDropdown ? 'mt-40':''}` }>
        <TouchableOpacity className="w-full bg-[#2B145A] rounded-full p-4" onPress={()=>checkFormFields()}>
          <Text className="text-center text-xl text-white font-medium">Sign up</Text>
        </TouchableOpacity>
        <Text className="text-center mt-4 font-roboto">Do you have an account?
          <Link href="/">
            <Text className="text-[#6E1FEF] font-medium"> Sign In</Text>
          </Link>
        </Text>
      </View>
      <AuthFooter/>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,  
    elevation: 5,
  },
})

export default SignUpForm
