import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import Slider from '@react-native-community/slider'

const BottomRangeSection = ({setIsGestureEnabled}) => {
  const [sliderValue,setSliderValue] = useState(0)
  const [rating,setRating] = useState('')

  const convertToEven = () => {
    setIsGestureEnabled(false)
    if(sliderValue === 3){
      setSliderValue(4)
    }else if(sliderValue === 5){
      setSliderValue(6)
    }else if(sliderValue === 7){
      setSliderValue(8)
    }else if(sliderValue === 9){
      setSliderValue(10)
    }
  }

  useEffect(()=>{
    convertToEven()
  },[sliderValue])

  useEffect(()=>{
    if(sliderValue === 2){
      setRating('Worst')
    }else if(sliderValue === 4){
      setRating('Fine')
    }else if(sliderValue === 6){
      setRating('Good')
    }else if(sliderValue === 8){
      setRating('Better')
    }else if(sliderValue === 10){
      setRating('Very Good')
    }
  },[sliderValue])

  return (
    <View className="ml-3 w-[95%] mt-2">
      <View className="w-full flex-row justify-between gap-3 p-2">
        <View className={`${rating === 'Worst' ? 'opacity-100' : 'opacity-30'}`}>
          <Text className="text-center text-lg">😖</Text>
          <Text className="font-robotomedium text-[#EB001B]">Worst</Text>
        </View>
        <View className={`${rating === 'Fine' ? 'opacity-100' : 'opacity-30'}`}>
          <Text className="text-center text-lg">☹️</Text>
          <Text className="font-robotomedium text-[#EB001B]">Fine</Text>
        </View>
        <View className={`${rating === 'Good' ? 'opacity-100' : 'opacity-30'}`}>
          <Text className="text-center text-lg">😐</Text>
          <Text className="font-robotomedium text-[#EB001B]">Good</Text>
        </View>
        <View className={`${rating === 'Better' ? 'opacity-100' : 'opacity-30'}`}>
          <Text className="text-center text-lg">😀</Text>
          <Text className="font-robotomedium text-[#EB001B]">Better</Text>
        </View>
        <View className={`${rating === 'Very Good' ? 'opacity-100' : 'opacity-30'}`}>
          <Text className="text-center text-lg">😍</Text>
          <Text className="font-robotomedium text-[#EB001B]">Very Good</Text>
        </View>
      </View>

      <View className="p-2">
        <Slider 
          style={{ width: '100%', height: 40 }}
          value={sliderValue}
          minimumValue={2}
          maximumValue={10}
          onValueChange={(value) => setSliderValue(Math.round(value))}
          onSlidingStart={convertToEven}
          onSlidingComplete={()=>setIsGestureEnabled(false)}
          minimumTrackTintColor={sliderValue < 4  ? '#EB001B33' : sliderValue > 2 && sliderValue < 8 ? '#EB001B' : '#9966CC' }
          maximumTrackTintColor='lightgrey' 
          thumbTintColor={sliderValue < 4  ? '#EB001B33' : sliderValue > 2 && sliderValue < 8 ? '#EB001B' : '#9966CC' }
        />
      </View> 
      
    </View>
  )
}

export default BottomRangeSection