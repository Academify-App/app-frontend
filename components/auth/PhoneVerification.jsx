import React from 'react'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox'

const PhoneVerification = () => {
  const router = useRouter()
  const [isChecked,setChecked] = useState(false)

  return (
    <View className="w-[90%] mt-7 ml-[22px]">
      <Text className="text-[#344054]">Phone number</Text>
      <TextInput
       keyboardType='numeric'
       className="mt-2 rounded-full p-4 bg-[#EBEBEB]" 
      />
      <View className="mt-5 ml-2 flex flex-row w-[80%]">
        <Checkbox 
          color={isChecked ? '#6E1FEF' : undefined}
          value={isChecked} 
          onValueChange={setChecked}
        /> 
        <Text className="ml-3 font-roboto">
          I've read and agree to Academify
          <Text className="text-[#6E1FEF]"> Terms of Service </Text>  
          and
          <Text className="text-[#6E1FEF]"> Privacy Policy</Text>
        </Text>
      </View>
      <TouchableOpacity className="p-6 bg-[#2B145A] mt-20 rounded-full" onPress={()=>router.push('/number-verification')}>
        <Text className="text-center font-robotomedium text-white text-[18px]">Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PhoneVerification
