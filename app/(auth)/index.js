import { useContext, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import { useRouter } from 'expo-router'
import images from "../../constants/images"
import SignInForm from '../../components/auth/SignInForm'
import Success from '../../components/auth/Success'
import InvalidCredentials from '../../components/auth/InvalidCredentials'
import Error from '../../components/auth/Error'
import LoadingScreen from '../../components/auth/LoadingScreen'
import AuthContext from '../../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignIn = () => {
  const router = useRouter()
  const {registerSuccess,loading,invalidCredentials,registerServerError} = useContext(AuthContext)

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('accessToken');
      if (value !== null) {
        router.replace("/(student)/(tabs)/(home)")
      }
    } catch (error) {
      console.error('Error retrieving data', error);
    }
  };

  useEffect(()=>{
    retrieveData()
  },[])

  return (
    <SafeAreaView className="bg-[#3d1879] w-full flex-1">
      {loading && <LoadingScreen/>}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex flex-row justify-between">
          <View className="ml-6 mt-[50px]">
            <Text className="text-textColor font-robotomedium text-2xl ml-2">Sign in</Text>
          </View>
          <View className="w-[180px] h-[120px] mr-7">
            <Image source={images.authLines}/>
          </View>
        </View>
        <View className="flex-1 bg-[#FFFFFF] w-full mt-1 rounded-tl-[40px] rounded-tr-[40px] p-1">
          <View className="mt-[24px] ml-[26px]">
            <Text className="text-2xl text-[#202244] font-robotomedium">Welcome Back!</Text>
            <Text className="w-[90%] mt-2  max-w-md text-[#8D8A8A]">To access your dashboard please sign in with your personal info</Text>
          </View>
          <SignInForm/>
        </View>
      </ScrollView>
      {registerSuccess && <Success/>}
      {invalidCredentials && <InvalidCredentials/>}
      {registerServerError && <Error/>}
    </SafeAreaView>
  )
}

export default SignIn

