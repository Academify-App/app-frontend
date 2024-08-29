import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput  } from 'react-native'
import { useRouter } from 'expo-router'
import images from "../../constants/images"
import icons from "../../constants/icons"
import PasswordResetSuccess from '../../components/auth/PasswordResetSuccess'
import LoadingScreen from '../../components/auth/LoadingScreen'

const resetPassword = () => {
  const router = useRouter()
  const [loading,setLoading] = useState(false)
  const [success,setSuccess] = useState(false)
  const [seePassword,setSeePassword] = useState(false)
  const [password,setPassword] = useState('')
  const [errMsg,setErrMsg] = useState('')

  const passwordReset = () => {
    setErrMsg('')
    if(password === "") {
      setErrMsg("No password")
    }else if(password.length < 6){
      setErrMsg("Weak Password")
      setTimeout(()=>{
        setErrMsg("Weak Password")
      },5000)
    }else{
      setErrMsg('')
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
        setSuccess(true)
      },3000)
    }
  }

  return (
    <SafeAreaView className="bg-[#3d1879] w-full h-full flex-1 relative">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {loading && <LoadingScreen/>}
        {success && <PasswordResetSuccess/>}
        <View className="flex flex-row justify-between">
          <View className="relative">
            <View className="absolute top-[70%] left-[80px] flex flex-row">
              <TouchableOpacity onPress={()=>router.back()} className="p-1 mt-1 absolute -left-[60px]">
                <Image className="-top-[1px] m-auto w-[24px] h-[24px]" source={icons.arrowleft} />
              </TouchableOpacity>
              <View>
                <Text className="mt-1 text-[24px] text-textColor font-robotomedium">Reset Password</Text>
              </View>
            </View>
          </View>

          <View className="w-[180px] h-[120px] mr-7">
            <Image source={images.authLines}/>
          </View>
        </View>

        <View className="flex-1 bg-[#FFFFFF] w-full mt-6 rounded-tl-[40px] rounded-tr-[40px] p-1">
          <Text className="text-[18px] text-center mt-3 font-robotomedium">Enter a new password</Text>
          <Text className="text-center font-roboto text-[16px] mt-2">Kindly enter a strong password you would remember</Text>
          <View className="w-[90%] mt-7 ml-[22px]">
            <View className="relative">
              <TextInput
              secureTextEntry={seePassword ? false : true}
              className={`mt-2 rounded-full p-5 bg-[#EBEBEB] border border-slate-300 ${errMsg !== "" && 'border border-red-500'}`}  
              placeholder='Enter at least 6 characters'
              value={password}
              onChangeText={setPassword}
              placeholderTextColor='grey'
              /> 
              <TouchableOpacity className="absolute top-[40%] left-[87%]" onPress={()=>setSeePassword(!seePassword)}>
                {seePassword ? <Image source={icons.eyeClose}/> :  <Image source={icons.eye}/>}
              </TouchableOpacity>
            </View>
            {errMsg === "No password" ? 
            (
              <View className="flex flex-row mt-1">
                <Image source={icons.error}/>
                <Text className="text-red-500 font-roboto ml-1">Enter new password</Text>
              </View>
            ): errMsg === "Weak Password" ? (
              <View className="flex flex-row mt-1">
                <Image source={icons.error}/>
                <Text className="text-red-500 font-roboto ml-1">Weak password(6 characters or more)</Text>
            </View>
            ):''
            }
            <TouchableOpacity className="p-6 bg-[#2B145A] mt-10 rounded-full" onPress={()=>passwordReset()}>
                <Text className="text-center font-robotomedium text-white text-[18px]">Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default resetPassword

