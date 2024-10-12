import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { useContext } from 'react'
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialCoverImg from '../../../../../components/student/MaterialCoverImg'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import PostContext from '../../../../../context/PostContext'

const materialReview = () => {
    const {title,price} = useContext(PostContext)
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


  return (
    <SafeAreaView className="min-h-screen flex-1 w-[95%] mt-7">
      <ScrollView className="pt-6 pl-3" showsVerticalScrollIndicator={false}>
        <View className="flex-col w-full">
          <TouchableOpacity onPress={()=>router.back()}>
            <AntDesign name="arrowleft" size={25} color="#292D32" style={{marginLeft:5}}/>
          </TouchableOpacity>
          <View className="mt-2 ml-[5px]">
            <Text className={`${getFontSize()} font-robotomedium text-[#323232]`}>Review your ads</Text>
            <Text className="text-[#898A8D] mt-2">See what we will show to guests. Ensure everything looks good.</Text>
          </View>
        </View>

        <View className="w-full border border-slate-400 p-3 py-4 rounded-lg mt-5">
            <View className="h-[280px]">
              <MaterialCoverImg/>
            </View>
            <View className="mt-2 w-full">
              <View className="flex-row justify-between">
                <View>
                  <Text className="text-[#202244] font-robotobold">{title}</Text>
                </View>
                <View className="flex-row">
                  <Text className="font-roboto text-[#313131]">New</Text>
                  <FontAwesome name="star" size={13} color="black" style={{marginLeft:4}}/>
                </View>
              </View>
              <View className="mt-1">
                <Text className="text-lg text-[#313131] font-robotomedium">NGN {price}</Text>
              </View>
            </View>
        </View>

        <View className="h-[60px] opacity-0">
          <Text>hidden</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default materialReview