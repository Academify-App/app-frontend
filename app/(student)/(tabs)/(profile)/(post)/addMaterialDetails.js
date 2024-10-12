import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { useContext, useEffect } from 'react'
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Octicons from '@expo/vector-icons/Octicons'
import PostContext from '../../../../../context/PostContext'

const addMaterialDetails = () => {
  const {materialPages,setMaterialPages,department,setDepartment,setActive} = useContext(PostContext)
  const {width} = Dimensions.get('window')
  const router = useRouter()

  const getFontSize = () => {
    if (width < 375) {
      return 'text-[20px]'; 
    } else if (width < 768) {
      return 'text-[28px]';
    } else {
      return 'text-[32px]';
    }
  };

  const numOfPages = (mode) => {
    if(mode === 'add') {
      setMaterialPages((prevPages) => prevPages + 1)
    }else if (mode === 'subtract'){
      setMaterialPages((prevPages) => prevPages - 1);
    }
  }

  useEffect(()=>{
    if(department !== '' && materialPages >= 1 ){
      setActive(true)
    }else{
      setActive(false)
    }
  },[materialPages,department])

  return (
    <SafeAreaView className="min-h-screen flex-1 w-[98%] mt-7">
      <ScrollView className="pt-6 pl-3">
        <View className="flex-col w-full">
          <TouchableOpacity onPress={()=>router.back()}>
            <AntDesign name="arrowleft" size={25} color="#292D32" style={{marginLeft:5}}/>
          </TouchableOpacity>
          <View className="mt-2 ml-[5px]">
            <Text className={`${getFontSize()} font-robotomedium text-[#323232]`}>Let's begin with the basics</Text>
            <Text className="text-[#898A8D] mt-2">You will be required to add more details later.</Text>
          </View>
        </View>
  
        <View className="mt-8">
          <View className="w-full border-b border-b-slate-300 flex-row justify-between py-3">
            <View>
              <Text className="text-[#313131]">No of pages</Text>
            </View>
            <View className="flex-row">
              { materialPages > 1 ? (
                <TouchableOpacity 
                  className="w-[25px] h-[25px] flex justify-center items-center bg-gray-300 rounded-sm"
                  onPress={()=>numOfPages('subtract')}
                 >
                  <Octicons name="dash" size={15} color="black" />
                </TouchableOpacity>
              )
              :
              (
                <View className="opacity-30 w-[25px] h-[25px] flex justify-center items-center bg-gray-200 rounded-sm">
                  <Octicons name="dash" size={15} color="black" />
                </View>
              )}
              <TextInput className="px-3 text-center font-robotobold"
                value={String(materialPages)}
                onChangeText={(text)=>setMaterialPages(Number(text))
                }
                keyboardType='numeric'
                maxLength={2}
              />
              <TouchableOpacity 
               className="w-[25px] h-[25px] flex justify-center items-center bg-[#5B1295] rounded-sm"
               onPress={()=>numOfPages('add')}
               >
                <FontAwesome6 name="add" size={15} color="white" />
              </TouchableOpacity>
            </View>
          </View>
  
          <View className="mt-5">
            <View className="border border-slate-300 rounded-lg p-3">
              <Text className="text-[#979797] font-roboto">Department</Text>
              <TextInput 
                value={department}
                className="py-2 text-robotomedium" 
                placeholder='Type department here'
                placeholderTextColor='lightgray'
                onChangeText={(text)=>setDepartment(text)}
              />
            </View>
            <View className="border border-slate-300 mt-3 rounded-lg p-3 py-6">
              <Text className="text-[#979797] font-roboto">Level</Text>
            </View>
          </View>
        </View>

        <View className="h-[60px] opacity-0">
          <Text>hidden</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default addMaterialDetails