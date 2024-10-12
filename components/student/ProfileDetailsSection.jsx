import { View, Text, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native'

const ProfileDetailsSection = () => {
  return (
    <View className="min-h-screen bg-[#FFFFFF] w-full mt-7 rounded-tl-[30px] rounded-tr-[30px] p-5 relative">
      <View className="flex-row justify-between">
        <Text className="text-[#242424] font-robotobold">Personal Details</Text>
        <TouchableWithoutFeedback>
          <Text className="text-[#210E4B] font-robotomedium">Edit</Text>
        </TouchableWithoutFeedback>
      </View>

      <View className="mt-7">
        <View>
          <Text className="font-robotomedium text-[#210E4B]">Full Name</Text>
          <TextInput 
          className="bg-[#F4F6F9] rounded-full mt-2 p-5"
          placeholder="Victoria Davron"
          placeholderTextColor="#210E4B"
          />
        </View>
        <View className="mt-4">
          <Text className="font-robotomedium text-[#210E4B]">Email Address</Text>
          <TextInput 
          className="bg-[#F4F6F9] rounded-full mt-2 p-5"
          placeholder="vickdavron@gmail.com"
          placeholderTextColor="#210E4B"
          />
        </View>
        <View className="mt-4">
          <Text className="font-robotomedium text-[#210E4B]">Phone Number</Text>
          <TextInput 
          className="bg-[#F4F6F9] rounded-full mt-2 p-5"
          placeholder="+2349061792353"
          placeholderTextColor="#210E4B"
          />
        </View>
      </View>

      <View className="absolute top-[60%] w-full ml-3">
        <TouchableOpacity className="bg-[#210E4B] p-5 rounded-full">
          <Text className="text-lg text-center text-white">Upgrade</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileDetailsSection