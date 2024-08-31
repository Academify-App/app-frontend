import { View, Text } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const WalletActivity = () => {
  const data = [
    {
       expense: 'negative',
       title: "Handout Purchase",
       time: "July 15,4:45pm",
       amount: "2036"
    },
    {
        expense: 'postive',
        title: "Tutorial Sold",
        time: "July 04,4:45pm",
        amount: "2100"
    },
    {
        expense: 'negative',
        title: "Project Purchase",
        time: "July 16,4:45pm",
        amount: "1650"
    },
    {
        expense: 'postive',
        title: "Fund Deposit",
        time: "July 04,4:45pm",
        amount: "3000"
    },
    {
        expense: 'negative',
        title: "Handout Purchase",
        time: "July 15,4:45pm",
        amount: "2036"
    }

]
  return (
    <View className="w-full pl-3 bg-white pr-3">
      <View className="flex-row justify-between mt-4">
        <Text className="text-2xl font-robotomedium">Last Activity</Text>
        <Text className="text-[#5C3C9B] font-robotomedium mt-2">See All</Text>
      </View>

      {data.map((item,index)=>(
        <View key={index} className="rounded-3xl bg-gray-200 mt-2 p-5 flex-row justify-between">
            <View>
                <View className="flex-row">
                  {item.expense === 'negative' ? (
                  <View className="w-[40px] h-[40px] rounded-full bg-green-200 flex justify-center items-center">
                    <MaterialIcons name="arrow-outward" size={24} color="green" />
                  </View>
                  )
                  :
                  (
                  <View className="w-[40px] h-[40px] rounded-full bg-red-200 flex justify-center items-center"> 
                    <MaterialCommunityIcons name="arrow-bottom-left" size={24} color="red" />
                  </View>
                  )
                  }
                  <View className="ml-5">
                    <Text className="text-lg font-robotobold">{item.title}</Text>
                    <Text className="text-gray-500 font-robotomedium">{item.time}</Text>
                  </View>
                </View>
            </View>
            <View>
            { item.expense === "negative" ? (
                <Text className="text-2xl text-green-500 font-robotomedium">+N{item.amount}</Text>
            )
            :
            (
                <Text className="text-2xl text-red-500 font-robotomedium">-N{item.amount}</Text>
            )
            }
            </View>
        </View>
      ))}
      <View className="h-[100px]">
        <Text className="opacity-0">hidden</Text>
      </View>
    </View>
  )  
}  

export default WalletActivity