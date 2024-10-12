import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { useContext, useEffect } from 'react'
import { useRouter } from 'expo-router'
import PostContext from '../../../../../context/PostContext'
import AntDesign from '@expo/vector-icons/AntDesign'

const index = () => {
  const { material,setMaterial,setActive } = useContext(PostContext)
  const {width} = Dimensions.get('window')
  const router = useRouter()

  const getFontSize = () => {
    if (width < 375) {
      return 'text-[21px]';
    } else if (width < 768) {
      return 'text-[25px]';
    } else {
      return 'text-[28px]';
    }
  };

  useEffect(()=>{
    if(material !== ''){
      setActive(true)
    }else{
      setActive(false)
    }
  },[material])

  
  return (
    <SafeAreaView className="min-h-screen flex-1 w-[98%] mt-7">
      <ScrollView className="pt-6 pl-5">
        <View className="flex-row w-full">
          <TouchableOpacity onPress={()=>router.back()}>
            <AntDesign name="arrowleft" size={25} color="#292D32" style={{margin:"auto"}}/>
          </TouchableOpacity>
          <Text className={`ml-5 ${getFontSize()} font-robotomedium text-[#323232]`}>Post your material</Text>
        </View>

        <View className="mt-3">
          <Text className="text-lg font-robotomedium text-[#323232]">Type of Material</Text>
          <Text className="mt-1 font-roboto">Let's know your material type to help you further!</Text>
        </View>

        <View className="mt-10 flex flex-row flex-wrap">
          <TouchableOpacity className="w-[45%] h-[100px] bg-slate-200 justify-center items-center rounded-md" 
          onPress={()=>setMaterial("Handout(PDF)")}
          >
            {material === "Handout(PDF)" && <View className="w-full h-full bg-[#2B145A] absolute rounded-lg opacity-80"></View>}
            <Text className={`text-[#313131] font-robotomedium ${material === "Handout(PDF)" && 'text-white'}`}>Handout(PDF)</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[45%] h-[100px] bg-slate-200 justify-center items-center ml-3 rounded-md"
           onPress={()=>setMaterial("Tutorial")}
          >
            {material === "Tutorial" && <View className="w-full h-full bg-[#2B145A] absolute rounded-lg opacity-80"></View>}
            <Text className={`text-[#313131] font-robotomedium ${material === "Tutorial" && 'text-white'}`}>Tutorial Videos</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[45%] h-[100px] bg-slate-200 justify-center items-center mt-3 rounded-md"
           onPress={()=>setMaterial("Project")}
          >
            {material === "Project" && <View className="w-full h-full bg-[#2B145A] absolute rounded-lg opacity-80"></View>}
            <Text className={`text-[#313131] font-robotomedium ${material === "Project" && 'text-white'}`}>Projects</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[45%] h-[100px] bg-slate-200 justify-center items-center mt-3 ml-3 rounded-md"
           onPress={()=>setMaterial("Book")}
          >
            {material === "Book" && <View className="w-full h-full bg-[#2B145A] absolute rounded-lg opacity-80"></View>}
            <Text className={`text-[#313131] font-robotomedium ${material === "Book" && 'text-white'}`}>Books</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index