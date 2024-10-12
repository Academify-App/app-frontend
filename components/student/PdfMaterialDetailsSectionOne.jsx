import { View, Text, Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const PdfMaterialDetailsSectionOne = ({img,title,subtitle,ratings,price,downloads,locked}) => {

  const fetchRatings = () => {
    if(ratings === '5.0'){
      return(
        <>
          <AntDesign name="star" size={15} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
          <AntDesign name="star" size={15} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
          <AntDesign name="star" size={15} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
          <AntDesign name="star" size={15} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
          <AntDesign name="staro" size={15} color="black" style={{margin:"auto",paddingRight:3}}/>
        </>
      )
    }
  }

  return (
    <View>
      <View className="w-full rounded-2xl bg-gray-200 h-[300px] p-6">
        <Image className="w-full h-full rounded-2xl" source={img}/>
      </View>

      <View className="mt-1">
        <View>
          <Text className="text-[#2B145A] font-robotobold text-2xl">{title}: <Text>{subtitle}</Text></Text>
        </View>
        <View className="flex-row gap-3 pt-2">
          <View className="flex-row border-r-2 border-r-slate-500 pr-2">
            <View className="flex-row gap-1">{fetchRatings()}</View>
            <View>
              <Text className="text-slate-400 text-md font-robotomedium text-[15px]">{ratings} ratings</Text>
            </View>
          </View>
          <View>
            <Text className="text-slate-400 font-robotomedium text-[15px]">{downloads} downloads</Text>
          </View>
        </View>
        <View className="mt-2 flex-row justify-between">
          <View>
            <Text className="text-[#9C50E7] text-2xl font-robotobold">N{price}</Text>
          </View>
          <View className="flex-row justify-between mt-2">
            {locked ? <MaterialIcons name="lock-outline" size={27} color="black" />:''}
          </View>
        </View>
      </View>
    </View>
  )
}

export default PdfMaterialDetailsSectionOne