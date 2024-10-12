import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { useContext, useEffect } from 'react'
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import PostContext from '../../../../../context/PostContext'

const addMaterialTitle = () => {
  const {title,setTitle,setActive} = useContext(PostContext)
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

  useEffect(()=>{
    if(title !== ''){
      setActive(true)
    }else{
      setActive(false)
    }
  },[title])


  return (
    <SafeAreaView className="min-h-screen flex-1 w-[98%] mt-7">
      <ScrollView className="pt-6 pl-3">
        <View className="flex-col w-full">
          <TouchableOpacity onPress={()=>router.back()}>
            <AntDesign name="arrowleft" size={25} color="#292D32" style={{marginLeft:5}}/>
          </TouchableOpacity>
          <View className="mt-2 ml-[5px]">
            <Text className={`${getFontSize()} font-robotomedium text-[#323232]`}>Almost done, let's give your material a title.</Text>
            <Text className="text-[#898A8D] mt-2">Kindly add a title to your post to make it more visible for others.</Text>
          </View>
        </View>
        <View className="mt-6">
          <View className="border border-slate-400 rounded-lg h-[150px]">
            <TextInput
              className="p-3 w-[90%]" 
              placeholder='Enter your title here'
              placeholderTextColor='#C4C4C4'
              multiline={true}
              onChangeText={(text)=>setTitle(text)}
              maxLength={60} 
            />
          </View>
          <View>
            <Text className="mt-3 text-[#C4C4C4] font-roboto">Not more than 
              <Text className="text-black font-robotobold"> 35 </Text>characters
            </Text>
          </View>
        </View>
        <View className="h-[60px] opacity-0">
          <Text>hidden</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default addMaterialTitle