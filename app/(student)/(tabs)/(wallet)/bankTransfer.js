import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'

const bankTransfer = () => {
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
          <Text className={`ml-5 ${getFontSize()} font-robotomedium text-[#130138]`}>Withdraw to bank</Text>
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
          <View className="w-[85%] mt-5">
            <TextInput
            className="bg-slate-300 rounded-full py-4 pl-5" 
            placeholder='Account no.'
            placeholderTextColor='grey'
            />
            <TextInput
            className="bg-slate-300 rounded-full py-4 pl-5 mt-3" 
            placeholder='GTbank'
            placeholderTextColor='#363853'
            readOnly={true}
            />
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-7 w-full pl-3">
        <TouchableOpacity className="bg-[#5B259F] rounded-full p-4">
          <Text className="text-center text-lg text-white">Withdraw</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default bankTransfer