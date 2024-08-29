import React, { useContext, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import { useRouter } from 'expo-router'
import images from "../../constants/images"
import EmailVerification from '../../components/auth/EmailVerification'
import OtpVerification from '../../components/auth/OtpVerification'
import AuthContext from '../../context/AuthContext'

const emailVerification = () => {
  const { OtpLoading,OtpSuccess,setRegisterSuccess } = useContext(AuthContext)
  const router = useRouter()

  useEffect(()=>{
    if(OtpSuccess){
      setTimeout(()=>{
        router.replace("/(auth)")
        setRegisterSuccess(true)
      },2000)
    }
  },[OtpSuccess])

  return (
    <SafeAreaView className="bg-[#3d1879] w-full flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {OtpLoading && (<OtpVerification/>)}
        <View className="flex flex-row justify-between relative">
          <View>
            <View className="absolute top-[80%] left-24 flex flex-row">
              <Text className=" text-[24px] text-textColor font-robotomedium">Email Verification</Text>
            </View>
          </View>

          <View className="w-[180px] h-[120px] mr-7">
            <Image source={images.authLines}/>
          </View>
        </View>

        <View className="flex-1 bg-[#FFFFFF] w-full mt-6 rounded-tl-[40px] rounded-tr-[40px] p-1">
          <Text className="text-[18px] text-center mt-3 font-robotomedium">Verify your email address</Text>
          <EmailVerification/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default emailVerification

