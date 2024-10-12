import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { useContext, useEffect } from 'react'
import { useRouter } from 'expo-router'
import PostContext from '../../../../../context/PostContext'
import AntDesign from '@expo/vector-icons/AntDesign'
import PhotoVideoUpload from '../../../../../components/student/PhotoVideoUpload'

const addPhotosVideos = () => {
  const { coverImg,setActive } = useContext(PostContext)

  const {width} = Dimensions.get('window')
  const router = useRouter()

  const getFontSize = () => {
    if (width < 375) {
      return 'text-[20px]'; 
    } else if (width < 768) {
      return 'text-[28px]';
    } else {
      return 'text-[32px]';
    }
  };

  useEffect(()=>{
    if(coverImg !== ''){
      setActive(true)
    }else{
      setActive(false)
    }
  },[coverImg])

  return (
    <SafeAreaView className="min-h-screen flex-1 w-[98%] mt-7">
    <ScrollView className="pt-6 pl-3">
      <View className="flex-col w-full">
        <TouchableOpacity onPress={()=>router.back()}>
          <AntDesign name="arrowleft" size={25} color="#292D32" style={{marginLeft:5}}/>
        </TouchableOpacity>
        <View className="mt-2 ml-[5px]">
          <Text className={`${getFontSize()} font-robotomedium text-[#323232]`}>Add photos/videos of your material</Text>
          <Text className="text-[#898A8D] mt-2">Kindly add a cover photo to get started.This photo will be the cover of your material.</Text>
        </View>
      </View>
      <PhotoVideoUpload/>
      <View className="h-[60px] opacity-0">
        <Text>hidden</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default addPhotosVideos