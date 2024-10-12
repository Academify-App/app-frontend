import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'

const walletTransfer = () => {
  const {width} = Dimensions.get('window')
  const router = useRouter()

  const getFontSize = () => {
    if (width < 375) {
      return 'text-[20px]'; 
    } else if (width < 768) {
      return 'text-[25px]';
    } else {
      return 'text-[28px]';
    }
  };

  return (
    <SafeAreaView className="w-[96%] mt-5 relative min-h-full">
      <ScrollView className="pl-3 pt-6">
        <View className="flex-row w-[95%]">
          <View>
            <TouchableOpacity onPress={()=>router.back()}>
              <AntDesign name="arrowleft" size={25} color="#292D32" style={{margin:"auto"}}/>
            </TouchableOpacity>
          </View>
          <View className="flex-col">
            <Text className={`ml-5 ${getFontSize()} font-robotomedium text-[#130138]`}>Wallet Transfer</Text>
            <Text className="ml-5 font-roboto mt-1 text-[#232440]">You are about to transfer from your wallet</Text>
          </View>
        </View>

        <View className="flex justify-center items-center mt-10">
          <View className="w-[85%]">
            <Text className="text-center text-slate-500">Enter Amount</Text>
            <TextInput 
            className="py-3 w-full text-center text-2xl text-[#232440] border-b border-b-slate-300 rounded-full mt-4"
            keyboardType='numeric'
            />
            <Text className="text-slate-500 mt-4">The above amount will be deducted from your wallet with 25% charges automatically applied</Text>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-7 w-full pl-3">
        <TouchableOpacity className="bg-[#250F53] rounded-full p-4">
        <Text className="text-center text-lg text-white">Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default walletTransfer