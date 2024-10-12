import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'react-native';
import { View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign'

export default function homeLayout() {
  const router = useRouter()

  return (
    <>
    <StatusBar barStyle='dark-content'/>
      <Stack>
        <Stack.Screen name="index" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="categories" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="pdfMaterials" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="pdfMaterialDetails" options={
          {headerTitle:"",
          headerLeft:()=>(
            <TouchableOpacity onPress={()=>router.back()}>
              <AntDesign name="arrowleft" size={25} color="#292D32" style={{margin:"auto"}}/>
            </TouchableOpacity>
          ),
          headerRight:() => (
            <View className="flex-row">
              <TouchableOpacity className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-gray-200">
                <AntDesign name="heart" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-gray-200 ml-2">
                <Ionicons name="download-outline" size={24} color="black" />
              </TouchableOpacity>
          </View>
          )
          }}
        />
      </Stack>
    </>
  );
}