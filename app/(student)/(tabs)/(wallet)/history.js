import { View, Text, TouchableOpacity, SafeAreaView,ScrollView } from 'react-native'
import { useState } from 'react';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import AllTransactions from '../../../../components/student/AllTransactions';
import IncomingTransactions from '../../../../components/student/IncomingTransactions';
import OutgoingTransactions from '../../../../components/student/OutgoingTransactions';

const history = () => {
  const [active,setActive] = useState('All')
  const router = useRouter()

  return (
    <SafeAreaView className="w-full min-h-screen bg-white mt-5">
      <ScrollView className="pl-3 pt-6 w-[95%]" showsVerticalScrollIndicator={false}>
        <View className="flex-row">
          <TouchableOpacity onPress={()=>router.back()}>
            <AntDesign name="arrowleft" size={30} color="#292D32" style={{margin:"auto"}}/>
          </TouchableOpacity>
          <Text className="text-3xl ml-5">History</Text>
        </View>
        <View className="border border-slate-200 flex-row w-full justify-between items-center rounded-full p-2 mt-10 px-4">
          <TouchableOpacity 
           className={`${active === "All" && 'bg-[#2B145A]'} py-4 flex-1 w-[30%] rounded-full ml-1`}
           onPress={()=>setActive('All')}
           >
            <Text className={`text-center ${active === 'All' && 'text-white'}`}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity 
           className={`${active === "Incoming" && 'bg-[#2B145A]'} py-4 flex-1 w-[30%] rounded-full ml-1`}
           onPress={()=>setActive('Incoming')}
           >
            <Text className={`text-center  ${active === 'Incoming' && 'text-white'}`}>Incoming</Text>
          </TouchableOpacity>

          <TouchableOpacity 
           className={`${active === "Outgoing" && 'bg-[#2B145A]'} py-4 flex-1 w-[30%] rounded-full ml-1`}
           onPress={()=>setActive('Outgoing')}
           >
            <Text className={`text-center ${active === 'Outgoing' && 'text-white'}`}>Outgoing</Text>
          </TouchableOpacity>
        </View>
        <Text className="mt-5 text-2xl">Transactions</Text>
        
        {active === "All" ? <AllTransactions/> 
        : active === "Incoming" ? <IncomingTransactions/> 
        : active === "Outgoing" && <OutgoingTransactions/>
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default history