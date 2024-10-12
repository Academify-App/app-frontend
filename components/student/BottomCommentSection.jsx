import { View, Text, TextInput, TouchableOpacity} from 'react-native'

const BottomCommentSection = ({}) => {
  return (
    <View className="mt-3 w-[95%] ml-3">
      <View className="border border-slate-400 rounded-lg h-[130px]">
        <TextInput
          className="p-3" 
          placeholder='Enter your title here'
          placeholderTextColor='#C4C4C4'
          multiline={true}
        />
      </View>
      <TouchableOpacity className="w-full rounded-full mt-5 bg-[#000] p-4">
        <Text className="text-center text-lg text-white">Submit</Text>
      </TouchableOpacity>
      <View className="opacity-0 h-[50px]">
        <Text>hidden</Text>
      </View>
    </View>
  )
}

export default BottomCommentSection