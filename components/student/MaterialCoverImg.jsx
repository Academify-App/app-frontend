import { View, Image } from 'react-native'
import React, { useContext } from 'react'
import PostContext from '../../context/PostContext'

const MaterialCoverImg = () => {
  const {coverImg} = useContext(PostContext)
  return (
    <View className="w-full rounded-xl h-full">
      <Image source={{uri:coverImg}} className="w-full h-full rounded-xl" resizeMode='cover'/>
    </View>
  )
}

export default MaterialCoverImg