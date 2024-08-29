import { SafeAreaView, TouchableOpacity, Text, View, TextInput, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import icons from '../../../../constants/icons'
import AntDesign from '@expo/vector-icons/AntDesign'
import data from '../../../../pdfData'


const pdfMaterials = () => {
  const router = useRouter()

  const passData = () => {
    router.push('/pdfMaterialDetails')
  }

  return (
    <SafeAreaView className="flex-1 w-[98%] mt-5">
      <View className="pt-6 pl-3 flex-1">
        <View>
          <View className="flex-row w-[70%]">
            <TouchableOpacity onPress={()=>router.back()}>
              <AntDesign name="arrowleft" size={25} color="#292D32" style={{margin:"auto"}}/>
            </TouchableOpacity>
            <Text className="ml-5 text-[30px] font-robotomedium">PDF Materials</Text>
          </View>
          <View className="mt-2 w-[80%]">
            <Text className="text-slate-400 font-robotomedium">Explore the materials here and search according to your preference</Text>
          </View>
        </View>

        <View className="w-full mt-5 p-4 rounded-[15px] border border-slate-300 flex-row justify-between">
          <TextInput className="ml-2 font-robotomedium w-[75%] text-[14px]"
            placeholder='Search by course name'
            placeholderTextColor='lightgrey'
          />
          <TouchableOpacity className="w-[30px] pt-1">
            <Image source={icons.search}/>
          </TouchableOpacity>
        </View>

        <View className="mt-4 flex-1">
          <Text className="text-[#250F53] text-3xl font-robotomedium">All Courses</Text>
          <FlatList
          data={data}
          renderItem={({item,index}) => (
            <TouchableOpacity className="w-full border-b border-b-slate-400 py-5 flex-row justify-between" onPress={()=>passData()}>
              <View className="flex-row">
                <View className="border border-slate-400 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                  <Text className="font-robotomedium text-[#9C50E7]">{`${index < 10 && '0'}${index+1}`}</Text>
                </View>
                <View className="ml-2 w-[250px] leading-3">
                  <Text className="font-robotobold text-[#250F53] text-lg">{item.title}</Text>
                  <Text numberOfLines={1} className=" text-[#545454] opacity-50 font-robotomedium text-sm">{item.subtitle}</Text>
                </View>
              </View>
              <View>
                <Text className="text-[#9C50E7] font-robotomedium">{item.pages} pages</Text>
                <Image className="mt-1 m-auto" source={icons.lock}/>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item)=>item.pages}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View className="h-[20px]"> 
              <Text className="opacity-0">we here</Text>
            </View>
          }
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default pdfMaterials