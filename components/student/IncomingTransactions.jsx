import { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, Dimensions } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const IncomingTransactions = () => {
  const { width} = Dimensions.get('window')
  const [loading,setLoading] = useState(true)

  const getFontSize = () => {
    if (width < 375) {
      return 'text-md'; 
    } else if (width < 768) {
      return 'text-lg';
    } else {
      return 'text-xl';
    }
  };

  const fetchingTransactions = () =>{
    setTimeout(()=>{
     setLoading(false)
    },3000)
  }

  useEffect(()=>{
    fetchingTransactions()
  })

  const data = [
    {
      title: "Handout Purchase",
      time: "July 15,4:45pm",
      amount: "2036"
     },
     {
        title: "Tutorial Sold",
        time: "July 04,4:45pm",
        amount: "2100"
     },
     {
        title: "Project Purchase",
        time: "July 16,4:45pm",
        amount: "1650"
     },
     {
        title: "Fund Deposit",
        time: "July 04,4:45pm",
        amount: "3000"
     },
     {
        title: "Handout Purchase",
        time: "July 15,4:45pm",
        amount: "2036"
     },
     {
      title: "Handout Purchase",
      time: "July 15,4:45pm",
      amount: "2036"
    }
  ]
  return (
    <View>
      {loading ? 
      (
        <View className="flex justify-center items-center">
          <ActivityIndicator size={50}/>
        </View>
      )
      :
      (
        <View>
          {data.map((item,index)=>(
            <View key={index} className="rounded-3xl bg-slate-100 mt-2 p-5 flex-row justify-between">
              <View>
                <View className="flex-row">
                  <View className="w-[40px] h-[40px] rounded-full bg-green-200 flex justify-center items-center">
                    <MaterialCommunityIcons name="arrow-bottom-left" size={24} color="green" />
                  </View>

                  <View className="ml-5">
                    <Text  className={`${getFontSize()}  font-robotobold`}>{item.title}</Text>
                    <Text className="text-gray-500 font-robotomedium">{item.time}</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text className={`${getFontSize()} text-green-500 font-robotomedium`}>+N{item.amount}</Text>
              </View>
            </View>
        ))}
        </View>
      )
      }
      <View className="h-[100px]">
        <Text className='opacity-0'>hidden</Text>
      </View>
    </View>
  )
}

export default IncomingTransactions