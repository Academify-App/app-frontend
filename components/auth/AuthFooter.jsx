import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { useSegments } from 'expo-router'
import icons from "../../constants/icons"

const AuthFooter = () => {
  const segments = useSegments()
  const currentRoute = segments.join('/')

  return (
    <View className="mt-4 flex-1 w-full overflow-hidden pb-8">
      <View className="flex-1 flex-row justify-center w-full">
        <View className="flex-1 h-full">
          <View className="flex m-auto w-full border border-gray-300"></View>
        </View>
        <View className="px-3">
          <Text className="text-slate-400 text-[20px] font-roboto">Or Continue With</Text>
        </View>
        <View className="flex-1 h-full">
          <View className="flex m-auto w-full border border-gray-300"></View>
        </View>
      </View>
      <View>
        <TouchableOpacity className="flex flex-row justify-center items-center rounded-full border border-slate-300 p-4 mt-5">
          <View className="mr-2">
            <Image source={icons.google}/>
          </View>
          <View>
            <Text className="text-[#323232] font-robotomedium text-center">Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row justify-center items-center rounded-full border border-slate-300 p-4 mt-5">
           <View className="mr-2">
              <Image source={icons.facebook}/>
            </View>
            <View>
              <Text className="text-[#323232] font-robotomedium text-center">Continue with Facebook</Text>
            </View>
        </TouchableOpacity>
        {currentRoute === "(auth)/sign-up" && <Text className="text-center mt-8 text-[#6E1FEF] underline">Read Privacy Policy</Text>}
      </View>
    </View>
  )
}

export default AuthFooter