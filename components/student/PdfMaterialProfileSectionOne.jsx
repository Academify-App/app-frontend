import { View, Text, Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';


const PdfMaterialProfile = ({provider,profile}) => {

  const fetchRatings = () => {
    if(profile.numOfStars === 4.8){
      return(
        <>
          <AntDesign name="star" size={25} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
          <AntDesign name="star" size={25} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
          <AntDesign name="star" size={25} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
          <AntDesign name="star" size={25} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
          <AntDesign name="staro" size={25} color="grey" style={{margin:"auto",paddingRight:3}}/>
        </>
      )
    }
  }

  return (
    <View>
      <View className="flex justify-center items-center">
        <View className="w-[200px] h-[200px] rounded-full">
          <Image resizeMode='cover' className=" w-full h-full rounded-full" source={provider.img}/>
        </View>
        <View className="mt-2">
          <Text className="text-2xl font-robotobold text-[#2B145A]">Dr.{profile.name}</Text>
          <Text className="text-slate-400 text-lg mt-1 text-center">Resource Provider</Text>
        </View>
      </View>

      <View className="flex-row justify-around mt-2">
        <View className="flex-col">
          <Text className="text-xl font-robotomedium text-center text-[#2B145A]">{profile.ads}</Text>
          <Text className="text-md font-roboto text-[#2B145A]">Ads</Text>
        </View>
        <View className="flex-col">
          <Text className="text-xl font-robotomedium text-center text-[#2B145A]">{profile.sales}</Text>
          <Text className="text-md text-center font-roboto text-[#2B145A]">Sales</Text>
        </View>
        <View className="flex-col">
          <Text className="text-xl font-robotomedium text-center text-[#2B145A]">{profile.ratings}</Text>
          <Text className="text-md font-roboto text-[#2B145A]">Ratings</Text>
        </View>
      </View>

      <View className="mt-2 flex flex-row justify-center">
        <View>
          <Text className="text-lg">{profile.numOfStars}</Text>
        </View>
        <View className="flex-row gap-1 ml-2">{fetchRatings()}</View>
      </View>

      <View className="p-5 bg-[#EFEAFC] rounded-lg mt-2">
        <Text className="text-[#2B145A] pl-3 font-robotomedium text-lg">"{profile.quote}"</Text>
      </View>
    </View>
  )
}

export default PdfMaterialProfile