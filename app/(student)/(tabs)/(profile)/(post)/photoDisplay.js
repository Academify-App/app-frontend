import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialCoverImg from '../../../../../components/student/MaterialCoverImg'

const photoDisplay = () => {
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
    <SafeAreaView className="min-h-screen flex-1 w-[98%] mt-7">
    <ScrollView className="pt-6 pl-3">
      <View className="flex-col w-full">
        <TouchableOpacity onPress={()=>router.back()}>
          <AntDesign name="arrowleft" size={25} color="#292D32" style={{marginLeft:5}}/>
        </TouchableOpacity>
        <View className="mt-2 ml-[5px]">
          <Text className={`${getFontSize()} font-robotomedium text-[#323232]`}>Hurray! How does this look?</Text>
          <Text className="text-[#898A8D] mt-2">You can always go back and choose a new image.</Text>
        </View>
      </View>
      <View className="h-[350px] mt-7">
        <MaterialCoverImg/>
      </View>
      <View className="h-[60px] opacity-0">
        <Text>hidden</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default photoDisplay