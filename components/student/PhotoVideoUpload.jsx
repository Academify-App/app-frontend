import { View, Text, TouchableOpacity } from 'react-native'
import { useContext } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Feather from '@expo/vector-icons/Feather'
import PostContext from '../../context/PostContext'

const PhotoVideoUpload = () => {
  const {uploadPhoto} = useContext(PostContext)

  return (
    <View className="mt-8">
      <TouchableOpacity 
      className="w-full rounded-2xl border border-slate-300 p-10 flex-row justify-center items-center"
      onPress={()=>uploadPhoto('library')}
      >
        <FontAwesome6 name="add" size={20} color="black" />
        <Text className="ml-3 text-[#323232] font-robotomedium">Add Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      className="mt-5 w-full rounded-2xl border border-slate-300 p-10 flex-row justify-center items-center"
      onPress={()=>uploadPhoto('camera')}
      >
        <Feather name="camera" size={20} color="black" />
        <Text className="ml-3 text-[#323232] font-robotomedium">Take New Photo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PhotoVideoUpload