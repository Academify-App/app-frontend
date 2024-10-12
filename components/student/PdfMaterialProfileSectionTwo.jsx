import { View, Text } from 'react-native'
import React from 'react'

const PdfMaterialProfileSectionTwo = ({profile}) => {
  return (
    <View className="bg-white mt-5 rounded-lg p-4">
      <View>
        <View className="flex-row">
          <Text className="font-robotobold text-gray-500">Name:</Text>
          <Text className="font-roboto text-gray-500"> {profile.name}</Text>
        </View>
        <View className="flex-row">
          <Text className="font-robotobold text-gray-500">Member since:</Text>
          <Text className="font-roboto text-gray-500"> {profile.memberSince}</Text>
        </View>
        <View className="flex-row">
          <Text className="font-robotobold text-gray-500">Department:</Text>
          <Text className="font-roboto text-gray-500"> {profile.department}</Text>
        </View>
      </View>
      <View className="mt-5">
        <Text className="text-gray-500">{profile.about}</Text>
      </View>
    </View>
  )
}

export default PdfMaterialProfileSectionTwo