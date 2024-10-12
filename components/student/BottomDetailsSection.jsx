import { View, Text, TextInput, Dimensions } from 'react-native'

const BottomDetailsSection = () => {
  const {width} = Dimensions.get('window')

  const adjustWidth = () =>{
    if(width < 375) {
      return 'w-[145px]'
    }else if(width < 767){
      return 'w-[150px]'
    }
  }

  return (
    <View className="ml-3 flex-row justify-between w-[94%] mt-5 flex-wrap">
      <View className="p-2">
        <Text>Name</Text>
        <TextInput 
          className={`border border-slate-300  mt-1 p-3 rounded-lg ${adjustWidth()}`}
          placeholder='Davron Trump'
          placeholderTextColor='lightgrey'
        />
      </View>
      <View className="p-2">
        <Text>Contact Number</Text>
        <TextInput 
          className={`border border-slate-300 mt-1 p-3 rounded-lg ${adjustWidth()}`}
          keyboardType='numeric'
          placeholder='+234 80300 00000'
          placeholderTextColor='lightgrey'
        />
      </View>
      <View className="mt-2 p-2">
        <Text>Email Address</Text>
        <TextInput 
          className='border border-slate-300 mt-1 p-3 rounded-lg'
          keyboardType='email'
          placeholder='davron@gmail.com'
          placeholderTextColor='lightgrey'
        />
      </View>
  </View>
  )
}

export default BottomDetailsSection