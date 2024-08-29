import { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput  } from 'react-native'
import { useRouter } from 'expo-router'
import images from "../../constants/images"
import icons from "../../constants/icons"

const forgotPassword = () => {
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [errMsg,setErrMsg] = useState('')

  const emailValidity = () => {
    setErrMsg('')
    if(email === "") {
      setErrMsg("No email")
    }else if(!email.includes("@gmail.com")){
      setErrMsg("Invalid Email")
    }else{
      setErrMsg('')
      setEmail('')
      router.push('/email-verification')
    }
  }

  return (
    <SafeAreaView className="bg-[#3d1879] w-full flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex flex-row justify-between">
          <View className="relative">
            <View className="absolute top-[70%] left-[80px] flex flex-row">
              <TouchableOpacity onPress={()=>router.back()} className="p-1 mt-1 absolute -left-[60px]">
                <Image className="-top-[1px] m-auto w-[24px] h-[24px]" source={icons.arrowleft} />
              </TouchableOpacity>
              <View>
                <Text className="mt-1 text-[24px] text-textColor font-robotomedium">Forgot Password</Text>
              </View>
            </View>
          </View>

          <View className="w-[180px] h-[120px] mr-7">
            <Image source={images.authLines}/>
          </View>
        </View>

        <View className="flex-1 bg-[#FFFFFF] w-full mt-6 rounded-tl-[40px] rounded-tr-[40px] p-1">
          <Text className="text-[18px] text-center mt-3 font-robotomedium">Enter your email address</Text>
          <Text className="text-center font-roboto text-[16px] mt-2">Kindly enter your email address to reset your password</Text>
          <View className="w-[90%] mt-7 ml-[22px]">
            <TextInput
            className={`mt-2 rounded-full p-5 bg-[#EBEBEB] border border-slate-300 ${errMsg !== "" && 'border border-red-500'}`} 
            placeholder='Enter email address'
            placeholderTextColor='grey'
            value={email}
            onChangeText={setEmail}
            />
            {errMsg === "No email" ? 
            (
              <View className="flex flex-row mt-1">
                <Image source={icons.error}/>
                <Text className="text-red-500 font-roboto ml-1">Enter your email</Text>
              </View>
            ): errMsg === "Invalid Email" ? (
              <View className="flex flex-row mt-1">
                <Image source={icons.error}/>
                <Text className="text-red-500 font-roboto ml-1">Invalid email(davron@gmail.com)</Text>
              </View>
            ):''
            } 
            <TouchableOpacity className="p-6 bg-[#2B145A] mt-10 rounded-full" onPress={()=>emailValidity()}>
                <Text className="text-center font-robotomedium text-white text-[18px]">Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default forgotPassword

