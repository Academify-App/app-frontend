import { useRef,useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Animated, Easing, Image, Text } from 'react-native'
import icons from "../../constants/icons"

const PasswordResetSuccess = () => {
  const router = useRouter()
  const translateY = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(()=>{
    setTimeout(()=>{
        router.replace('/(auth)')
    },2000)
  })

  return (
    <Animated.View className="z-10 flex w-full justify-center items-center absolute top-0 left-0 h-full" 
    style={{ backgroundColor: 'white', transform: [{ translateY }] }}
    >
    <View className="w-full flex justify-center items-center h-full">
      <View className="flex items-center justify-center w-[100px] h-[100px]  border-2 border-[#0FA958] rounded-full "> 
        <Image source={icons.success}/>
      </View>
      <View className="mt-5 w-[70%]">
        <Text className="text-xl font-robotomedium text-[#0FA958] text-center">Password Reset Successful</Text>
      </View>
    </View>
    </Animated.View>
  )
}

export default PasswordResetSuccess
