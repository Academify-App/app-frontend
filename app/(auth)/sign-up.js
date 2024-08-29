import { useContext } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import images from "../../constants/images"
import SignUpForm from '../../components/auth/SignUpForm'
import AuthContext from '../../context/AuthContext'
import LoadingScreen from '../../components/auth/LoadingScreen'
import Error from '../../components/auth/Error'


const SignUp = () => {
  const { loading,emailExists,registerServerError } = useContext(AuthContext)


  return (
    <SafeAreaView className="bg-[#3d1879] w-full flex-1 relative">
      {loading && <LoadingScreen/>}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex flex-row justify-between">
          <View className="ml-6 mt-[35px]">
            <Text className="text-textColor font-robotomedium text-2xl ml-2">Sign up</Text>
          </View>
          <View className="w-[180px] h-[90px] mr-7">
            <Image source={images.authLines}/>
          </View>
        </View>
        <View className="flex-1 bg-[#FFFFFF] w-full mt-[7px] rounded-tl-[40px] rounded-tr-[40px] p-1">
          <View className="mt-[24px] ml-[26px]">
            <Text className="text-2xl text-[#202244] font-robotomedium">Create an account</Text>
            <Text className="w-[90%] mt-2 text-[#8D8A8A]">
              To access your dashboard please sign up by entering with your correct personal info
            </Text>
          </View>
          <SignUpForm/>
        </View>
      </ScrollView>
      {emailExists && <Error/>}
      {registerServerError && <Error/>}
    </SafeAreaView>
  )
}

export default SignUp

