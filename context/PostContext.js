import { createContext, useState } from "react";
import { useRouter } from "expo-router";
import * as ImagePicker from 'expo-image-picker'

const PostContext = createContext()

export const PostProvider = ({children}) => {
  const [active,setActive] = useState(false)
  const [progress,setProgress] = useState(5)
  const [progressWidth,setProgressWidth] = useState(5)
  const [coverImg,setCoverImg] = useState('')
  const [material,setMaterial] = useState('')
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState('')
  const [materialPages,setMaterialPages] = useState(1)
  const [department,setDepartment] = useState('')

  const router = useRouter()

  const uploadPhoto = async(mode) => {
    try{
      let result;
      if(mode === 'library'){
        await ImagePicker.requestMediaLibraryPermissionsAsync()
        result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        });
      } 
      else if(mode === 'camera') {
       await ImagePicker.requestCameraPermissionsAsync()
       result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality:1
       })
      }
  
     if (!result.canceled) {
      setCoverImg(result.assets[0].uri)
      router.push('/photoDisplay')
     }
    }catch(error){
     console.log(error.message)
    }
  }
 
  return(
    <PostContext.Provider value={{
      active,
      setActive,
      progress,
      setProgress,
      progressWidth,
      setProgressWidth,
      uploadPhoto,
      coverImg,
      material,
      setMaterial,
      title,
      setTitle,
      description,
      setDescription,
      price,
      setPrice,
      materialPages,
      setMaterialPages,
      department,
      setDepartment
    }}
    >
    {children}
    </PostContext.Provider>
  )
}

export default PostContext;