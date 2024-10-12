import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { useRef, useEffect, useContext } from 'react'
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import PostContext from '../../../../../context/PostContext'

const addMaterialPrice = () => {
    const {price,setPrice,setActive} = useContext(PostContext)
    const {width} = Dimensions.get('window')
    const router = useRouter()
    const inputRef = useRef(null);

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
    if(price !== ''){
      setActive(true)
    }else{
      setActive(false)
    }
  },[price])

  useEffect(() => {
    if (inputRef.current) {
      setTimeout(()=>{
        inputRef.current.focus();
      },500)
    }
  }, []);

  return (
    <SafeAreaView className="min-h-screen flex-1 w-[98%] mt-7">
      <ScrollView className="pt-6 pl-3">
        <View className="flex-col w-full">
          <TouchableOpacity onPress={()=>router.back()}>
            <AntDesign name="arrowleft" size={25} color="#292D32" style={{marginLeft:5}}/>
          </TouchableOpacity>
          <View className="mt-2 ml-[5px]">
            <Text className={`${getFontSize()} font-robotomedium text-[#323232]`}>Let's set your price</Text>
            <Text className="text-[#898A8D] mt-2">Note you can change your price anytime.</Text>
          </View>
        </View>

        <View className="flex justify-center items-center mt-20 w-full">
          <View className="flex-row">
            <Text className="text-[#5B1295] text-[35px]">NGN</Text>
            <TextInput className="text-[#5B1295] text-[35px] px-2 ml-2" 
              value={price}
              ref={inputRef}
              keyboardType='numeric'
              maxLength={5}
              onChangeText={(text)=>setPrice(text)}
            />
          </View>
        </View>
        <View className="h-[60px] opacity-0">
          <Text>hidden</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default addMaterialPrice