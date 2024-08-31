import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router';
import icons from '../../../../constants/icons';
import data from "../../../../allMaterialsData"
import AntDesign from '@expo/vector-icons/AntDesign';


const index = () => {
  const router = useRouter()
  return (
    <SafeAreaView className="flex-1 w-[98%] mt-5">
      <ScrollView className="pt-6 pl-3 pb-20" showsVerticalScrollIndicator={false}>
        <View>
          <View className="flex-row w-[50%]">
            <TouchableOpacity onPress={()=>router.back()}>
              <AntDesign name="arrowleft" size={25} color="#292D32" style={{margin:"auto"}}/>
            </TouchableOpacity>
            <Text className="ml-5 text-[30px] font-robotomedium">All Materials</Text>
          </View>
          <View className="mt-2 w-[80%]">
            <Text className="text-slate-400 font-robotomedium">Explore the materials here and search according to your preference</Text>
          </View>
        </View>

        <View className="w-full mt-5 p-4 rounded-[15px] border border-slate-300 flex-row justify-between">
          <TextInput className="ml-2 font-robotomedium w-[75%] text-[14px]"
            placeholder='Search by course/providers name'
            placeholderTextColor='lightgrey'
          />
          <TouchableOpacity className="w-[30px] pt-1">
            <Image source={icons.search}/>
          </TouchableOpacity>
        </View>

        <View className="flex-1 flex-row flex-wrap gap-3 mt-3">
          { data.map((item,index)=>(
          <TouchableOpacity key={index} className="flex-col rounded-[20px] w-[45%] flex-grow" style={styles.shadow}>
            <View>
              <Image source={item.image} className="w-full h-[100px] rounded-tr-[20px] rounded-tl-[20px]"/>
            </View>
            <View className="bg-white rounded-bl-[20px] rounded-br-[20px] pt-2 pb-4 pl-1">
              <View className="flex-row justify-between">
                <View className="p-1 w-full">
                  <View className="flex-row justify-between">
                    <Text className="text-slate-500 text-[10px]">{item.course}</Text>
                    <View className="flex-row">
                      <Image source={icons.star} className="w-[12px] h-[12px]"/>
                      <Text className="font-robotomedium text-[11px] ml-[1px]">{item.rating}</Text>
                    </View>
                  </View>
                  <Text numberOfLines={1} className="text-[#381977] text-[15px] mt-1">{item.topic}</Text>
                </View>
              </View>
              <View className="flex-row justify-between mt-2 p-2">
                <Text className="text-[#381977] text-[13px]">{item.level} level</Text>
                <Text className="text-[#381977] text-[15px] font-robotobold">N{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
          ))}
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
      shadowOpacity: 0.3,
      shadowRadius: 2,  
      elevation: 5,
      shadowOffset: { width: 0, height: 2 }
    },   
  })

export default index
