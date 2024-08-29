import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import images from "../../constants/images"
import icons from "../../constants/icons"
import PhoneVerification from '../../components/auth/PhoneVerification'

const phoneVerification = () => {
  const router = useRouter()
  return (
    <SafeAreaView className="bg-[#3d1879] w-full flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex flex-row justify-between">
          <View className="relative">
            <View className="absolute top-[70%] left-[80px] flex flex-row">
              <TouchableOpacity onPress={()=>router.back()}>
                <Image className="absolute -left-[60px] -top-[1px] mt-2 w-[24px] h-[24px]" source={icons.arrowleft} />
              </TouchableOpacity>

              <View>
                <Text className="mt-1 text-[24px] text-textColor font-robotomedium">Phone Verification</Text>
              </View>
            </View>
          </View>

          <View className="w-[180px] h-[120px] mr-7">
            <Image source={images.authLines}/>
          </View>
        </View>
        <View className="flex-1 bg-[#FFFFFF] w-full mt-6 rounded-tl-[40px] rounded-tr-[40px] p-1">
          <Text className="text-[18px] text-center mt-3 font-robotomedium">Enter your phone number</Text>
          <Text className="text-center font-roboto text-[16px] mt-2">This is the phone number we can reach you</Text>
          <PhoneVerification/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default phoneVerification

