import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';


const PdfMaterialDetailsSectionTwo = ({provider}) => {
    const { width,height } = Dimensions.get('window')
    const getFontSize = () => {
        if (width < 375) {
          return 'flex-col'; 
        } else if (width < 768) {
          return 'flex-row';
        } else {
          return 'flex-row';
        }
      };
    
    const setMargin = () => {
        if(width < 375){
            return'mt-2'
        }
    }

   const fetchRatings = () => {
    if(provider.ratings === '4.0'){
        return(
            <>
                <AntDesign name="star" size={12} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
                <AntDesign name="star" size={12} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
                <AntDesign name="star" size={12} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
                <AntDesign name="star" size={12} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
                <AntDesign name="staro" size={12} color="black" style={{margin:"auto",paddingRight:3}}/>
            </>
        )
    }
  } 

  return (
    <View className="p-3 rounded-xl bg-white mt-4">
      <View className={`${getFontSize()} ml-2 justify-between`}>
        <View className="flex-row">
          <Image className="w-[55px] h-[55px] rounded-full" source={provider.img}/>
          <View className="flex-col ml-2">
            <Text className="text-[16px] font-robotobold">{provider.name}</Text>
            <View className="flex-row">
              <View className="flex-row">{fetchRatings()}</View>
              <Text className="ml-2 text-slate-400">{provider.materials} materials</Text>
            </View>
          </View>
        </View>
        <View className={`${setMargin()}`}>
          <TouchableOpacity className="p-3 rounded-lg bg-[#000]">
            <Text className="text-sm text-center text-white font-robotomedium">View Info</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-2 ml-2">
        <Text className="font-robotobold text-md">Dept:
          <Text className="font-robotomedium text-slate-400 text-md"> {provider.department}</Text>
        </Text>
      </View>
    </View>
  )
}

export default PdfMaterialDetailsSectionTwo