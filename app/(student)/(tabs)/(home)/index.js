import {SafeAreaView, ScrollView, Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import icons  from "../../../../constants/icons"
import data from "../../../../availableCourses"
import Fontisto from '@expo/vector-icons/Fontisto';
import FilterPopup from '../../../../components/student/FilterPopup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const index = () => {
  const {width} = Dimensions.get('window')
  const router = useRouter()

  const [filterShown,setFilterShown] = useState(false)
  const [userObj,setUserObj] = useState("")

  const adjustWidth = () => {
    if(width < 375){
      return 'text-[11px]'
    }
  }

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

          <View className="relative mr-5">
            <View className="absolute left-[90%] bg-[#FF3E6C] rounded-full w-[25px]">
              <Text className="text-[10px] text-white text-center">99+</Text>
            </View>
            <Fontisto name="bell" size={24} color="black" />
          </View>
        </View>

        <View className="w-full mt-5 p-3 rounded-[15px] border border-slate-300 flex-row justify-between">
          <TouchableOpacity className="w-[30px] pt-3 pl-1">
            <Image source={icons.search}/>
          </TouchableOpacity>
          <TextInput className={`ml-2 font-robotomedium ${adjustWidth()} w-[75%]`}
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
            <Text className="text-[16px] font-robotomedium text-[#250F53]">Categories</Text>
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

        <View className="mt-5 flex-1">
          <View className="flex-row justify-between">
            <Text className="text-[16px] font-robotomedium text-[#250F53]">Recent Available Courses</Text>
            <Text className="font-roboto text-[#5C3C9B]">See more</Text>
          </View>
          <View className="flex-1 flex-row flex-wrap justify-between gap-2 mt-2 relative w-full">
          {data.map((item,index)=>(
            <View key={index} className="flex-col rounded-[20px] w-[46%] flex-grow" style={styles.shadow}>
              <View>
                <Image source={item.img} className="w-full h-[100px] rounded-tr-[20px] rounded-tl-[20px]"/>
              </View>
              <View className="bg-[#000] rounded-bl-[20px] rounded-br-[20px] pt-2 pb-4 pl-2">
                <View>
                  <View>
                    <Text numberOfLines={1} className="text-slate-300 text-[12px]">{item.course}</Text>
                  </View>
                  <View>
                    <Text numberOfLines={1} className="text-white text-[15px] mt-1">{item.program}</Text>
                  </View>
                </View>

                <View className>
                  <Text className="text-white font-robotobold text-[15px] mt-1">N{item.price}</Text>
                </View>

                <View className="flex-row justify-between mt-2 flex-wrap pr-2">
                  <View className="flex-row">
                    <AntDesign name="star" size={11} color="#FFBF00" style={{margin:"auto"}}/>
                    <Text className="text-white text-[11px] ml-[3px]">{item.rating}</Text>
                  </View>
                  <View>
                    <Text className="text-white text-[11px]">{item.level} level</Text>
                  </View>
                  <View>
                    <Text className="text-white text-[11px] mr-2">{item.reviews} Reviews</Text>
                  </View>
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
