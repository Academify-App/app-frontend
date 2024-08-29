import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import images from "../../constants/images"
import NumberVerification from '../../components/auth/NumberVerification'

const numberVerification = () => {
  return (
    <SafeAreaView className="bg-[#3d1879] w-full max-w-md flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex flex-row justify-between relative">
          <View>
            <View className="absolute top-[80%] left-16 e flex flex-row">
              <Text className=" text-[24px] text-textColor font-robotomedium">Phone no. Verification</Text>
            </View>
          </View>

          <View className="w-[180px] h-[120px] mr-7">
            <Image source={images.authLines}/>
          </View>
        </View>

        <View className="flex-1 bg-[#FFFFFF] w-full mt-6 rounded-tl-[40px] rounded-tr-[40px] p-1">
          <Text className="text-[18px] text-center mt-3 font-robotomedium">Verify your phone number</Text>
          <NumberVerification/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default numberVerification

