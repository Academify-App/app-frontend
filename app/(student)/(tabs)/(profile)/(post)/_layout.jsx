import { Stack, useSegments, useRouter } from 'expo-router';
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useContext, useEffect } from 'react';
import PostContext from '../../../../../context/PostContext';

export default function homeLayout() {
  const { active,progress,setProgress,progressWidth,setProgressWidth} = useContext(PostContext)

  const {width} = Dimensions.get('window')
  const router = useRouter()
  const segments = useSegments()
  const lastSegment = segments[segments.length-1]

  const adjustWidth = () => {
    if (width < 375) {
      return 'w-[87%]'; 
    } else if (width < 768) {
      return 'w-[90%]';
    } else {
      return 'w-[92%]'
    }
  }

  const updatingProgressState = () => {
    if(lastSegment === "(post)"){
      setProgress(5)
      setProgressWidth(5)
    }else if (lastSegment === "addPhotosVideos"){
      setProgress(10)
      setProgressWidth(10)
    }else if (lastSegment === "photoDisplay"){
      setProgress(30)
      setProgressWidth(30)
    }else if (lastSegment === "addMaterialDetails"){
      setProgress(50)
      setProgressWidth(50)
    }else if (lastSegment === "addMaterialTitle"){
      setProgress(70)
      setProgressWidth(70)
    }else if (lastSegment === "addMaterialDescription"){
      setProgress(80)
      setProgressWidth(80)
    }else if (lastSegment === "addMaterialPrice"){
      setProgress(90)
      setProgressWidth(90)
    }else if (lastSegment === "materialReview"){
      setProgress(100)
      setProgressWidth(100)
    }
  }
  useEffect(()=>{
    updatingProgressState()
  },[lastSegment])

  const postRouter = () => {
   if (lastSegment === "(post)"){
    router.push('/addPhotosVideos')
   }else if (lastSegment === "addPhotosVideos"){
    router.push('/photoDisplay')
   }else if (lastSegment === "photoDisplay"){
    router.push('/addMaterialDetails')
   }else if (lastSegment === "addMaterialDetails"){
    router.push('/addMaterialTitle')
   }else if (lastSegment === "addMaterialTitle"){
    router.push('/addMaterialDescription')
   }else if (lastSegment === "addMaterialDescription"){
    router.push('/addMaterialPrice')
   }else if (lastSegment === "addMaterialPrice"){
    router.push('/materialReview')
   }
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="addPhotosVideos" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="photoDisplay" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="addMaterialDetails" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="addMaterialTitle" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="addMaterialDescription" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="addMaterialPrice" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="materialReview" options={{headerTitle: "",headerShown:false}}/>
      </Stack>


      <SafeAreaView className="w-[98%] ml-1 flex justify-center items-center relative h-[20%]">
        <View className={`h-[5%] flex-row ml-1 ${adjustWidth()} bg-gray-300 absolute top-[25%]`}>
          <View style={{ width: `${progressWidth}%`, height: '100%', backgroundColor: 'black' }}></View>
          <Text className="-translate-y-6 -translate-x-4 h-[40px]">{progress}%</Text>
        </View>
        {active ? (
          <TouchableOpacity className="bg-[#2B145A] rounded-full w-[90%] ml-2 p-5 absolute bottom-4" onPress={()=>postRouter()}>
            <Text className="text-white text-center text-lg">Next</Text>
          </TouchableOpacity>
        )
        :
        lastSegment === "materialReview" ? (
          <View className="bg-[#2B145A] rounded-full w-[90%] ml-2 p-5 absolute bottom-4">
            <Text className="text-white text-center text-lg">Publish</Text>
          </View>
        )
        :
        (
          <View className="bg-[#2B145A] rounded-full w-[90%] ml-2 p-5 absolute bottom-4 opacity-80">
            <Text className="text-white text-center text-lg">Next</Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}