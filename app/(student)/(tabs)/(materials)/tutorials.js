import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import { useRouter } from "expo-router"
import AntDesign from '@expo/vector-icons/AntDesign';
import icons from '../../../../constants/icons';

const tutorials = () => {
  const router = useRouter()

  const data = [
    {
        id: 1,
        img: require('../../../../assets/images/studying.jpg'),
        course:'Major World Civilization',
        topic:'Introduction to MWC',
        price: '2,600',
        rating: '4.8',
        numOfVideos: '15',
        locked: true
    },
    {
        id: 2,
        img: require('../../../../assets/images/studying.jpg'),
        course:'Major World Civilization',
        topic:'Introduction to MWC',
        price: '2,600',
        rating: '4.8',
        numOfVideos: '15',
        locked: true
    },
    {
        id: 3,
        img: require('../../../../assets/images/studying.jpg'),
        course:'Major World Civilization',
        topic:'Introduction to MWC',
        price: '2,600',
        rating: '4.8',
        numOfVideos: '15',
        locked: true
    },
    {
        id: 4,
        img: require('../../../../assets/images/studying.jpg'),
        course:'Major World Civilization',
        topic:'Introduction to MWC',
        price: '2,600',
        rating: '4.8',
        numOfVideos: '15',
        locked: true
    }
  ]

  return (
    <SafeAreaView className="flex-1 w-[97%] mt-5">
      <View className="pl-3 pt-6 pb-20">
        <View>
          <View className="flex-row w-[50%]">
            <TouchableOpacity onPress={()=>router.push("/(home)/categories")}>
              <AntDesign name="arrowleft" size={25} color="#292D32" style={{margin:"auto"}}/>
            </TouchableOpacity>
            <Text className="ml-5 text-[30px] font-robotomedium">Tutorials</Text>
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
        
        <FlatList
        data={data}
        renderItem={({item})=>(
        <TouchableOpacity className="mt-5 rounded-lg border border-slate-500 w-full flex-row">
          <View className="w-[35%] h-[150px] relative">
            <Image source={item.img} className="w-full h-full rounded-tl-lg rounded-bl-lg"/>
            <View className="absolute top-[45%] left-[50%]">
              <Image source={icons.playBtn}/>
            </View>
          </View>
          <View className="ml-2 flex-grow pr-4">
            <View className="flex-row justify-between mt-4">
              <Text className="text-[#9747FF] font-robotomedium">{item.course}</Text>
              <Image className="w-[17px] h-[20px]" source={icons.love}/>
            </View>
            <View className="mt-1">
              <Text className="text-[#2B145A] font-robotobold text-lg">{item.topic}</Text>
              <Text className="text-[#9747FF] text-lg">N{item.price}</Text>
            </View>
            <View className="flex-row justify-between mt-3">
              <View className="flex-row">
                <Image className="w-[15px] h-[15px]" source={icons.star}/>
                <Text className="font-robotobold ml-1">{item.rating}</Text>
              </View>
              <Text className="font-robotobold">{item.numOfVideos} videos</Text>
              <View>
                <Image className="w-[17px] h-[20px]" source={icons.lock}/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        )}
        vertical
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
        <View className="h-[120px]">
            <Text className="opacity-0">hidden</Text>
        </View>
        }
        />
    
      </View>
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

export default tutorials
