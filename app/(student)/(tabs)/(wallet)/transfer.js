import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { useRouter } from "expo-router"
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import RecentTransfer from '../../../../components/student/RecentTransfer';

const transfer = () => {
  const {width} = Dimensions.get('window')
  const router = useRouter()

  const getFontSize = () => {
    if (width < 375) {
      return 'text-md'; 
    } else if (width < 768) {
      return 'text-lg';
    } else {
      return 'text-xl';
    }
  };

  return (
    <SafeAreaView className="w-full min-h-screen bg-white mt-5">
      <ScrollView className="pl-5 pt-6 w-[96%]" showsVerticalScrollIndicator={false}>
        <View className="flex-row w-[70%]">
          <TouchableOpacity onPress={()=>router.back()}>
            <AntDesign name="arrowleft" size={25} color="#292D32" style={{margin:"auto"}}/>
          </TouchableOpacity>
          <Text className="ml-5 text-[25px] font-robotomedium text-[#130138]">Transfer</Text>
        </View>

        <View className="mt-7">
          <TouchableOpacity className="flex-row justify-between py-3" onPress={()=>router.push('/walletTransfer')}>
            <View className="flex-row">
              <Entypo name="wallet" size={20} color="black" />
              <Text className={`ml-5 ${getFontSize()} items-center text-[#232440]`}>Transfer from your wallet</Text>
            </View>
            <View>
              <MaterialIcons name="keyboard-arrow-right" size={18} color="grey" style={{margin:"auto"}} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between py-3 mt-4"  onPress={()=>router.push('/bankTransfer')}>
            <View className="flex-row">
              <FontAwesome name="bank" size={20} color="black" />
              <Text className={`ml-5 ${getFontSize()} items-center text-[#232440]`}>Transfer from Bank</Text>
            </View>
            <View>
              <MaterialIcons name="keyboard-arrow-right" size={18} color="grey" style={{margin:"auto"}} />
            </View>
          </TouchableOpacity>
        </View>
        <RecentTransfer/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default transfer