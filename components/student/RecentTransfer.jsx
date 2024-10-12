import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const RecentTransfer = () => {
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

  const data = [
    {
      id:4,
      img:require("../../assets/images/profile.jpg"),
      name:"Christopher Davies",
      source:"To wallet"
    },
    {
      id:6,
      img:require("../../assets/images/profile.jpg"),
      name:"Grace Cletus",
      source:"To bank account"
    },
    {
      id:5,
      img:require("../../assets/images/profile.jpg"),
      name:"Itoro Frank",
      source:"To bank account"
    },
    {
      id:2,
      img:require("../../assets/images/profile.jpg"),
      name:"Davron Bossman",
      source:"To wallet"
    },
    {
      id:1,
      img:require("../../assets/images/profile.jpg"),
      name:"Daniel Victor",
      source:"To wallet"
    }
  ]

  return (
    <View className="mt-7">
      <Text className={`${getFontSize()}`}>Recent Transfer</Text>
      <View className="mt-2">
        {data.length > 0 ? data.map((item)=>(
          <View key={item.id} className="py-3 border-b border-b-slate-300 flex-row justify-between w-full">
            <View className="flex-row items-center">
              <View className="w-[50px] h-[50px] rounded-full border border-slate-400 flex items-center justify-center">
                <Image source={item.img} className="w-[45px] h-[45px] rounded-full"/>
              </View>
              <View className="ml-3">
                <Text className={`text-[#232440] font-robotomedium ${getFontSize()}`}>{item.name}</Text>
                <Text className="text-grey mt-1 text-slate-400">{item.source}</Text>
              </View>
            </View>
            <View className="flex justify-center">
            <MaterialIcons name="keyboard-arrow-right" size={20} color="grey" style={{margin:"auto"}} />
            </View>
          </View>
        ))
        : 
        (
          <View className="flex justify-center items-center mt-10">
            <Text className="text-xl">No Transfers Made Yet</Text>
            <TouchableOpacity className="p-3 bg-[#000] mt-1 rounded-md" onPress={()=>router.push("/(student)/(tabs)/(materials)")}>
              <Text className="text-white">Make a transfer</Text>
            </TouchableOpacity>
          </View>
        )
        }
      </View>
    </View>
  )
}

export default RecentTransfer