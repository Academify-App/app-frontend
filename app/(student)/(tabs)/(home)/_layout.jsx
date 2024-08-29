import { Stack, useRouter } from 'expo-router';
import { View,Image, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'
import icons from '../../../../constants/icons';


export default function homeLayout() {
  const router = useRouter()

  return (
    <>
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
               <Image className="w-[25px] h-[25px]" source={icons.love} />
              </TouchableOpacity>
              <TouchableOpacity className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-gray-200 ml-2">
               <Image className="w-[25px] h-[25px]" source={icons.share} />
              </TouchableOpacity>
          </View>
          )
          }}
        />
      </Stack>
    </>
  );
}