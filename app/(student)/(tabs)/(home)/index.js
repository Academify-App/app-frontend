import {SafeAreaView, ScrollView, Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import icons  from "../../../../constants/icons"
import data from "../../../../availableCourses"
import FilterPopup from '../../../../components/student/FilterPopup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const index = () => {
  const router = useRouter()

  const [filterShown,setFilterShown] = useState(false)
  const [userObj,setUserObj] = useState("")

  const hideFilter = () => {
    setFilterShown(false)
  }

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userData');
      if (value !== null) {
        const parsedValue = JSON.parse(value)
        setUserObj(parsedValue)
      }
    } catch (error) {
      console.error('Error retrieving data', error);
    }
  }

  useEffect(()=>{
    retrieveData()
  },[])

  return (
    <SafeAreaView className="flex-1 w-[98%] mt-10">
      {filterShown && <FilterPopup hideFilter={hideFilter}/>}
      <ScrollView className="pt-6 pl-3" showsVerticalScrollIndicator={false}>
        <View className="w-[96%] flex-row justify-between">
          <View>
            <Text className="text-[#250F53] text-[30px]">Hi, {userObj.name ? userObj.name : 'Davron'}</Text>
            <Text className="mt-2 w-[90%] text-slate-400">What would you like to get Today? Search below</Text>
          </View>

          <View className="relative">
            <View className="absolute left-[60%] bg-[#FF3E6C] rounded-full w-[25px]">
              <Text className="text-[10px] text-white text-center">99+</Text>
            </View>
            <Image className="w-[40px] h-[40px]" source={icons.notificationBell}/>
          </View>
        </View>

        <View className="w-full mt-5 p-3 rounded-[15px] border border-slate-300 flex-row justify-between">
          <TouchableOpacity className="w-[30px] pt-3 pl-1">
            <Image source={icons.search}/>
          </TouchableOpacity>
          <TextInput className="ml-2 font-robotomedium w-[75%] text-[14px]"
            placeholder='Search for resource provider or course'
            placeholderTextColor='lightgrey'
          />
          <TouchableOpacity className="bg-[#250F53] rounded-[10px] w-[40px] p-3 flex justify-center items-center" 
          onPress={()=>setFilterShown(true)}
          >
            <Image source={icons.filter}/>
          </TouchableOpacity>
        </View>

        <View className="mt-5">
          <View className="flex-row justify-between">
            <Text className="text-2xl font-robotomedium text-[#250F53]">Categories</Text>
            <Link href='/categories'>
            <Text className="font-roboto text-[#5C3C9B] mt-2">See all</Text>
            </Link>
          </View>
          <View className="flex-row flex-wrap gap-2 mt-2 w-full">
            <TouchableOpacity className="px-4 py-3 border border-slate-400 rounded-2xl" onPress={()=>router.push('/(materials)')}>
              <Text className="text-center font-robotobold">All materials</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-5 py-3 border border-slate-400 rounded-2xl" onPress={()=>router.push('/pdfMaterials')}>
              <Text className="text-center font-robotobold">PDF Materials</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-3 flex-grow border border-slate-400 rounded-2xl">
              <Text className="text-center font-robotobold">E-Books</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-10 py-3 border border-slate-400 rounded-2xl">
              <Text className="text-center font-robotobold">Tutorials</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-10 py-3 border border-slate-400 rounded-2xl">
              <Text className="text-center font-robotobold">Projects</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-5">
          <View className="flex-row justify-between">
            <Text className="text-2xl font-robotomedium text-[#250F53]">Recent Available Courses</Text>
            <Text className="font-roboto text-[#5C3C9B] mt-2">See more</Text>
          </View>
          <View className="flex-1 flex-row flex-wrap gap-2 mt-2 relative">
          {data.map((item,index)=>(
              <View key={index} className="flex-col rounded-[20px] w-[46%] flex-grow" style={styles.shadow}>
                <View>
                  <Image source={item.img} className="w-full h-[100px] rounded-tr-[20px] rounded-tl-[20px]"/>
                </View>
                <View className="bg-[#000] rounded-bl-[20px] rounded-br-[20px] pt-2 pb-4 pl-1">
                  <View className="flex-row justify-between pr-3">
                    <View className="p-1">
                      <Text className="text-slate-300 text-[12px]">{item.course}</Text>
                      <Text className="text-white text-[15px] mt-1">{item.program}</Text>
                    </View>
                    <Text className="text-white font-robotobold text-[15px]">N{item.price}</Text>
                  </View>
                  <View className="flex-row justify-between mt-2">
                    <View className="flex-row ml-1">
                      <Image source={icons.star} className="w-[12px] h-[12px]"/>
                      <Text className="text-white text-[11px] ml-[1px]">{item.rating}</Text>
                    </View>
                    <Text className="text-white text-[11px]">{item.level} level</Text>
                    <Text className="text-white text-[11px] mr-2">{item.reviews} Reviews</Text>
                  </View>
                </View>
                <TouchableOpacity className="absolute left-[80%] top-[6%]">
                  <AntDesign name="heart" size={24} color="white" />
                </TouchableOpacity>
              </View>
          ))}
          </View>
        </View>
        <View className="h-[50px]">
          <Text className="opacity-0">hidden</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,  
    elevation: 5,
    shadowOffset: { width: 0, height: 2 }
  },   
})

export default index
