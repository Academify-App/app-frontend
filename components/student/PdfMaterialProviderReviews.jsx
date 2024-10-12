import { View, Text, Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const PdfMaterialProviderReviews = ({reviews}) => {
  const fetchRatings = () => {
    return(
    <>
      <AntDesign name="star" size={14} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
      <AntDesign name="star" size={14} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
      <AntDesign name="star" size={14} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
      <AntDesign name="star" size={14} color="#FFBF00" style={{margin:"auto",paddingRight:3}}/>
      <AntDesign name="staro" size={14} color="grey" style={{margin:"auto",paddingRight:3}}/>
    </>
    )
  }
  return (
    <View className="mt-5">
      <Text className="text-[#202244] text-lg">Reviews({reviews.length})</Text>
      <View>
        {reviews.length > 0 ? reviews.map((review,index)=>(
          <View key={index} className="flex-row mt-3 py-4 w-[88%]">
            <View className="w-[70px] h-[70px] rounded-full">
              <Image className="w-[70px] h-[70px] rounded-full" source={review.img}/>
            </View>
            <View className="ml-3">
              <View className="flex-row justify-between">
                <View>
                  <Text className="font-robotobold">{review.name}</Text>
                  <Text className="mt-1 text-gray-400">{review.date}</Text>
                </View>
                {review.ratings === '4.8' ? (
                  <View className="flex-row gap-1 ml-2">{fetchRatings()}</View>
                ):""}
              </View>
              <View className="mt-2">
                <Text className="text-gray-500">{review.message}</Text>
              </View>
            </View>
          </View>
        ))
        :""
        }
      </View>
    </View>
  )
}

export default PdfMaterialProviderReviews