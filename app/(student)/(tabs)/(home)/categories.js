import { SafeAreaView, ScrollView, Text, View,StyleSheet,Image, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import icons from '../../../../constants/icons';

const categories = () => {
  const router = useRouter()
  return (
    <SafeAreaView className="flex-1 w-full mt-5 bg-[#F5F5F5]">
      <ScrollView className="pt-6 pl-3" showsVerticalScrollIndicator={false}>
        <View>
          <View className="flex-row">
            <TouchableOpacity onPress={()=>router.back()}>
              <AntDesign name="arrowleft" size={25} color="#292D32" style={{margin:"auto"}}/>
            </TouchableOpacity>
            <Text className="ml-5 text-[30px] font-robotomedium">Categories</Text>
          </View>
          <View className="mt-2 w-[80%]">
            <Text className="text-slate-400 font-robotomedium">Explore the amazing categories and choose your preferred item</Text>
          </View>
        </View>

        <View className="flex-row flex-wrap gap-2 mt-1">
          <TouchableOpacity style={styles.shadow} onPress={()=>router.push('/(materials)')}
            className="bg-white border border-slate-400 p-3 w-[45%] h-[180px] rounded-lg flex justify-center items-center">
            <Image source={icons.allMaterials}/>
            <Text className="mt-1 text-lg font-robotobold text-[#2B145A]">All Materials</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shadow} onPress={()=>router.push('(materials)/tutorials')}
            className="bg-white border border-slate-400 p-3 w-[45%] h-[180px] rounded-lg flex justify-center items-center">
            <Image source={icons.tutorials}/>
            <Text className="mt-1 text-lg font-robotobold text-[#2B145A]">Tutorials</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shadow} onPress={()=>router.push('/pdfMaterials')}
            className="bg-white border border-slate-400 p-3 w-[45%] h-[180px] rounded-lg flex justify-center items-center">
            <Image source={icons.pdfMaterials}/>
            <Text className="mt-1 text-lg font-robotobold text-[#2B145A]">PDF Materials</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shadow} 
            className="bg-white border border-slate-400 p-3 w-[45%] h-[180px] rounded-lg flex justify-center items-center">
            <Image source={icons.documentStack}/>
            <Text className="mt-1 text-lg font-robotobold text-[#2B145A]">Ebooks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shadow} 
            className="bg-white border border-slate-400 p-3 w-[45%] h-[180px] rounded-lg flex justify-center items-center">
            <Image source={icons.documentStack}/>
            <Text className="mt-1 text-lg font-robotobold text-[#2B145A]">Projects</Text>
          </TouchableOpacity>
        </View>
        
        <View className="h-[50px]">
          <Text className="opacity-0">hidden</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,  
    elevation: 3,
    shadowOffset: { width: 0, height: 2 }
  },
      
  })

export default categories
