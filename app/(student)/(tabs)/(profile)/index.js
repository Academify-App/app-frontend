import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useContext } from 'react';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feedback from '../../../../components/student/Feedback';
import AuthContext from '../../../../context/AuthContext';


const index = () => {
  const {bottomSheet,setBottomSheet} = useContext(AuthContext)
  const router = useRouter()

  return (
    <SafeAreaView className="min-h-screen bg-white">
      <ScrollView className="pt-10 pl-4 w-[95%]" showsVerticalScrollIndicator={false}>
        <View className="flex-col gap-3 w-full">
          <TouchableOpacity className="pl-2 py-3 flex-row justify-between w-full" onPress={()=>router.push('/profileInfo')}>
           <View className="flex-row">
            <View 
            className="rounded-full flex items-center justify-center w-[40px] h-[40px] bg-white"
            style={styles.shadow}
            >
              <AntDesign name="user" size={22} color="#130138" />
            </View>
            <Text className="text-md pl-3 m-auto">Profile</Text>
           </View>
           <View>
            <MaterialIcons name="keyboard-arrow-right" size={17} color="#363853" style={{margin:"auto"}} />
           </View>
          </TouchableOpacity>

          <TouchableOpacity className="pl-2 py-3 flex-row justify-between w-full" onPress={()=>router.push('/(post)')}>
           <View className="flex-row ">
            <View 
            className="rounded-full flex items-center justify-center w-[40px] h-[40px] bg-white"
            style={styles.shadow}
            >
              <Feather name="upload" size={22} color="#130138" />
            </View>
            <Text className="text-md pl-3 m-auto">Post Resource</Text>
           </View>
           <View>
            <MaterialIcons name="keyboard-arrow-right" size={17} color="#363853" style={{margin:"auto"}} />
           </View>
          </TouchableOpacity>

          <TouchableOpacity className="pl-2 py-3 flex-row justify-between w-full" onPress={()=>setBottomSheet(true)}>
           <View className="flex-row ">
            <View 
            className="rounded-full flex items-center justify-center w-[50px] h-[50px] bg-white"
            style={styles.shadow}
            >
              <MaterialCommunityIcons name="email-edit-outline" size={22} color="#130138" />
            </View>
            <Text className="text-md pl-3 m-auto">Give Feedback</Text>
           </View>
           <View>
            <MaterialIcons name="keyboard-arrow-right" size={17} color="#363853" style={{margin:"auto"}} />
           </View>
          </TouchableOpacity>

          <TouchableOpacity className="pl-2 py-3 flex-row justify-between w-full">
           <View className="flex-row ">
            <View 
            className="rounded-full flex items-center justify-center w-[50px] h-[50px] bg-white"
            style={styles.shadow}
            >
              <Fontisto name="bell" size={22} color="#130138" />
            </View>
            <Text className="text-md pl-3 m-auto">Notifications</Text>
           </View>
           <View>
            <MaterialIcons name="keyboard-arrow-right" size={17} color="#363853" style={{margin:"auto"}} />
           </View>
          </TouchableOpacity>

          <TouchableOpacity className="pl-2 py-3 flex-row justify-between w-full">
           <View className="flex-row ">
            <View 
            className="rounded-full flex items-center justify-center w-[50px] h-[50px] bg-white"
            style={styles.shadow}
            >
             <AntDesign name="message1" size={22} color="#130138" />
            </View>
            <Text className="text-md pl-3 m-auto">Dispute Resolution</Text>
           </View>
           <View>
            <MaterialIcons name="keyboard-arrow-right" size={17} color="#363853" style={{margin:"auto"}} />
           </View>
          </TouchableOpacity>

          <TouchableOpacity className="pl-2 py-3 flex-row justify-between w-full">
           <View className="flex-row ">
            <View 
            className="rounded-full flex items-center justify-center w-[50px] h-[50px] bg-white"
            style={styles.shadow}
            >
              <MaterialIcons name="security" size={22} color="#130138" />
            </View>
            <Text className="text-md pl-3 m-auto">Security</Text>
           </View>
           <View>
            <MaterialIcons name="keyboard-arrow-right" size={17} color="#363853" style={{margin:"auto"}} />
           </View>
          </TouchableOpacity>

          <TouchableOpacity className="pl-2 py-3 flex-row justify-between w-full">
           <View className="flex-row ">
            <View 
            className="rounded-full flex items-center justify-center w-[50px] h-[50px] bg-white"
            style={styles.shadow}
            >
              <Feather name="phone-call" size={22} color="#130138" />
            </View>
            <Text className="text-md pl-3 m-auto">Service Center</Text>
           </View>
           <View>
            <MaterialIcons name="keyboard-arrow-right" size={17} color="#363853" style={{margin:"auto"}} />
           </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity className="pl-2 py-3 flex-row w-full mt-5">
            <View className="flex-row ">
              <View 
              className="rounded-full flex items-center justify-center w-[50px] h-[50px] bg-white"
              style={styles.shadow}
              >
                <MaterialCommunityIcons name="logout" size={22} color="#FF3E6C" />
              </View>
              <Text className="text-md pl-3 m-auto text-[#FF3E6C]">Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="h-[100px]">
          <Text className="opacity-0">hidden</Text>
        </View>
      </ScrollView>
      {bottomSheet && <Feedback/>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2,  
    elevation: 5,
    shadowOffset: { width: 0, height: 2 }
  },   
  })

export default index