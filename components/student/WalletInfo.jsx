import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useRouter } from "expo-router"
import images from '../../constants/images'
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const WalletInfo = () => {
  const router = useRouter()

  return (
    <View className="bg-[#2B145A] p-[20px]">
      <View className="flex-row justify-between w-full">
        <View className="flex-row">
          <View className="w-[50px] h-[50px] rounded-full">
            <Image className="w-[50px] h-[50px] rounded-full" source={images.profile}/>
          </View>
          <View className="ml-1">
            <Text className="text-slate-300">Welcome Back</Text>
            <Text className="font-robotobold text-white text-2xl">Stephen</Text>
          </View>
        </View>
        <View className="relative mr-6">
          <Fontisto name="bell" size={24} color="white" />
          <View className="bg-red-500 rounded-full absolute left-5 w-[30px]">
            <Text className="text-white text-[10px] text-center font-roboto">99+</Text>
          </View>
        </View>
      </View>

      <View className="flex justify-center items-center mt-6 bg-[#522aa1] w-full rounded-2xl py-10">
        <View>
          <View className="flex-row justify-center"> 
            <Text className="text-white text-lg">Main Balance</Text>
            <Feather name="eye" size={20} color="lightgrey" style={{marginLeft:10,marginTop:5}}/>
          </View>
          <Text className="text-4xl text-white font-robotobold mt-2">N280,030.<Text className="text-[25px]">54</Text></Text>
        </View>
        <View className="flex-row mt-2 w-[90%] justify-between">
          <TouchableOpacity className="flex-1 p-2 h-[50px] justify-center items-center border-r-[1px] border-r-slate-400">
            <MaterialCommunityIcons name="arrow-collapse-up" size={17} color="lightgrey" />
            <Text className="text-white font-robotomedium mt-2">Fund</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 p-2 h-[50px] justify-center items-center border-r-[1px] border-r-slate-400">
            <MaterialCommunityIcons name="arrow-collapse-down" size={17} color="lightgrey" />
            <Text className="text-white font-robotomedium mt-2">Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" flex-1 p-2 h-[50px] justify-center items-center border-r-[1px] border-r-slate-400"
          onPress={()=>router.push('/(student)/(tabs)/(wallet)/transfer')}
          >
            <FontAwesome6 name="money-bill-transfer" size={17} color="lightgrey" />
            <Text className="text-white font-robotomedium mt-2">Transfer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default WalletInfo