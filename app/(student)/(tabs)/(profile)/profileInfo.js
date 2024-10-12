import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import { useRouter } from 'expo-router';
import ProfileDetailsSection from '../../../../components/student/ProfileDetailsSection'
import AntDesign from '@expo/vector-icons/AntDesign'
import images from "../../../../constants/images"
import Feather from '@expo/vector-icons/Feather';


const profileInfo = () => {
  const router = useRouter()
  
  return (
    <SafeAreaView className="bg-[#2B145A] min-h-screen">
      <ScrollView className="mt-5">
        <View className="w-[70px]">
          <TouchableOpacity onPress={()=>router.back()}>
            <AntDesign name="arrowleft" size={25} color="white" style={{marginLeft:20}}/>
          </TouchableOpacity>
        </View>
        <View className="flex items-center">
          <View className="rounded-full border border-slate-600 w-[60px] h-[60px] p-1">
            <View className="w-full h-full rounded-full relative">
              <Image source={images.profile} className="w-full h-full rounded-full"/>
              <TouchableOpacity className="absolute top-10 left-10">
                <Feather name="camera" size={15} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="mt-2">
            <Text className="font-robotobold text-white text-2xl">Victoria Williams</Text>
            <Text className="text-slate-500 text-center text-sm font-roboto">vickdavron@gmail.com</Text>
          </View>
        </View>
      <ProfileDetailsSection/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profileInfo