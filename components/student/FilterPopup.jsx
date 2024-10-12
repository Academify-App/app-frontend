import { Text, View, Modal, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import icons from '../../constants/icons';
import Checkbox from 'expo-checkbox'

const FilterPopup = ({hideFilter}) => {
  const [handoutsChecked,setHandoutsChecked] = useState(false)
  const [materialsChecked,setMaterialsChecked] = useState(false)
  const [tutorialsChecked,setTutorialsChecked] = useState(false)
  const [bookChecked,setBookChecked] = useState(false)
  const [projectChecked,setProjectChecked] = useState(false)
  const [allLevelsChecked,setAllLevelsChecked] = useState(false)
  const [Level100Checked,setLevel100Checked] = useState(false)
  const [Level200Checked,setLevel200Checked] = useState(false)
  const [Level300Checked,setLevel300Checked] = useState(false)
  const [Level400Checked,setLevel400Checked] = useState(false)
  const [Level500Checked,setLevel500Checked] = useState(false)
  const [firstRating,setFirstRating] = useState(false)
  const [secondRating,setSecondRating] = useState(false)
  const [thirdRating,setThirdRating] = useState(false)
  const [lastRating,setLastRating] = useState(false)
  
  return (
    <Modal animationType='slide' onRequestClose={hideFilter}>
      <ScrollView className="w-[97%] pl-5 pt-10" showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between">
          <View className="flex-row">
            <TouchableOpacity onPress={hideFilter}>
              <AntDesign name="arrowleft" size={25} color="#292D32" style={{margin:"auto"}}/>
            </TouchableOpacity>
            <Text className="text-2xl text-[#202244] font-robotobold ml-3">Filters</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-xl text-[#250F53] font-robotomedium">Clear</Text>
          </TouchableOpacity>
        </View>
        
        {/* Categories Section  */}

        <View>
          <Text className="text-[#2B145A] font-robotomedium text-[25px] mt-5">Categories</Text>
          <View className="flex-row flex-wrap gap-5 mt-0"> 
            <View className="flex-row">
              <Checkbox 
              color={handoutsChecked ? "#250F53" : undefined}
              value={handoutsChecked}
              onValueChange={setHandoutsChecked}
              className="w-[25px] h-[25px] rounded-md"/>
              <Text className="pl-3 font-robotomedium text-[17px] m-auto">Handouts</Text>
            </View>
            <View className="flex-row">
              <Checkbox 
              color={materialsChecked ? "#250F53" : undefined}
              value={materialsChecked}
              onValueChange={setMaterialsChecked}
              className="w-[25px] h-[25px] rounded-md"/>
              <Text className="pl-3 font-robotomedium text-[17px] m-auto">Materials</Text>
            </View>
            <View className="flex-row">
              <Checkbox 
              color={tutorialsChecked ? "#250F53" : undefined}
              value={tutorialsChecked}
              onValueChange={setTutorialsChecked}
              className="w-[25px] h-[25px] rounded-md"/>
              <Text className="pl-3 font-robotomedium text-[17px] m-auto">Tutorials</Text>
            </View>
            <View className="flex-row">
              <Checkbox
              color={bookChecked ? "#250F53" : undefined}
              value={bookChecked}
              onValueChange={setBookChecked}
              className="w-[25px] h-[25px] rounded-md"/>
              <Text className="pl-3 font-robotomedium text-[17px] m-auto">Projects</Text>
            </View>
            <View className="flex-row">
              <Checkbox 
              color={projectChecked ? "#250F53" : undefined}
              value={projectChecked}
              onValueChange={setProjectChecked}
              className="w-[25px] h-[25px] rounded-md"
              />
              <Text className="pl-3 font-robotomedium text-[17px] m-auto">Books</Text>
            </View>
          </View>
        </View>

        {/* Levels Section */}

        <View className="mt-3">
          <Text className="text-[#2B145A] font-robotomedium text-[25px] mt-3">Levels</Text>
          <View className="flex-row w-[120px] mt-5">
            <Checkbox 
              color={allLevelsChecked ? "#250F53" : undefined}
              value={allLevelsChecked}
              onValueChange={setAllLevelsChecked}
              className="w-[25px] h-[25px] rounded-md"
            />
            <Text className="pl-1 font-robotomedium text-[17px] m-auto">All Levels</Text>
          </View>
          <View className="flex-row gap-5 mt-0 flex-wrap w-[300px]" >
            <View className="flex-row">
              <Checkbox 
                color={Level100Checked ? "#250F53" : undefined}
                value={Level100Checked}
                onValueChange={setLevel100Checked}
                className="w-[25px] h-[25px] rounded-md"
              />
              <Text className="ml-2 font-robotobold text-[#202244] mt-1">100</Text>
            </View>
            <View className="flex-row px-2">
              <Checkbox 
                color={Level200Checked ? "#250F53" : undefined}
                value={Level200Checked}
                onValueChange={setLevel200Checked}
                className="w-[25px] h-[25px] rounded-md"
              />
              <Text className="ml-2 font-robotobold text-[#202244] mt-1">200</Text>
            </View>
            <View className="flex-row px-1">
              <Checkbox 
                color={Level300Checked ? "#250F53" : undefined}
                value={Level300Checked}
                onValueChange={setLevel300Checked}
                className="w-[25px] h-[25px] rounded-md"
              />
              <Text className="ml-2 font-robotobold text-[#202244] mt-1">300</Text>
            </View>
            <View className="flex-row">
              <Checkbox 
                color={Level400Checked ? "#250F53" : undefined}
                value={Level400Checked}
                onValueChange={setLevel400Checked}
                className="w-[25px] h-[25px] rounded-md"
              />
              <Text className="ml-2 font-robotobold text-[#202244] mt-1">400</Text>
            </View>
            <View className="flex-row px-2">
              <Checkbox 
                color={Level500Checked ? "#250F53" : undefined}
                value={Level500Checked}
                onValueChange={setLevel500Checked}
                className="w-[25px] h-[25px] rounded-md"
              />
              <Text className="ml-2 font-robotobold text-[#202244] mt-1">500</Text>
            </View>
          </View>
        </View>

        {/* Price Section  */}

        <View className="mt-5 w-full">
          <Text className="text-[#2B145A] text-xl">Price range</Text>
          <View className="flex-row mt-3 justify-between">
            <TouchableOpacity className="border border-slate-400 px-5 py-3 rounded-lg flex-row"> 
              <Text>Min.Price</Text>
              <Image className="ml-3 mt-1" source={icons.dropdown}/>
            </TouchableOpacity>
            <TouchableOpacity className="border border-slate-400 px-5 py-3 rounded-lg ml-6 flex-row">
              <Text>Max.Price</Text>
              <Image className="ml-3 mt-1" source={icons.dropdown}/>
            </TouchableOpacity>
          </View>
        </View>

        {/* Ratings Section */}

        <View className="mt-5">
          <Text className="text-[#2B145A] text-xl">Rating</Text>
          <View className="mt-3">
            <View className="flex-row">
              <Checkbox
               color={firstRating ? "#250F53" : undefined}
               value={firstRating}
               onValueChange={setFirstRating}
               className="w-[25px] h-[25px] rounded-md" 
              />
              <Text className="ml-2 font-robotomedium text-[#202244] mt-1">4.5 & Up Above</Text>
            </View>
            <View className="flex-row mt-2">
              <Checkbox
              color={secondRating ? "#250F53" : undefined}
              value={secondRating}
              onValueChange={setSecondRating}
              className="w-[25px] h-[25px] rounded-md" 
              />
              <Text className="ml-2 font-robotomedium text-[#202244] mt-1">4.0 & Up Above</Text>
            </View>
            <View className="flex-row mt-2">
              <Checkbox
              color={thirdRating ? "#250F53" : undefined}
              value={thirdRating}
              onValueChange={setThirdRating}
              className="w-[25px] h-[25px] rounded-md" 
              />
              <Text className="ml-2 font-robotomedium text-[#202244] mt-1">3.5 & Up Above</Text>
            </View>
            <View className="flex-row mt-2">
              <Checkbox
              color={lastRating ? "#250F53" : undefined}
              value={lastRating}
              onValueChange={setLastRating}
              className="w-[25px] h-[25px] rounded-md" 
              />
              <Text className="ml-2 font-robotomedium text-[#202244] mt-1">3.0 & Up Above</Text>
            </View>
          </View>
        </View>

        <View className="h-[70px]">
          <Text className="opacity-0">hidden</Text>
        </View>
      </ScrollView>
        <TouchableOpacity className="bg-[#250F53] z-50 py-5 rounded-full w-[95%] bottom-5 left-3">
          <Text className="text-white text-center text-xl">Apply filters</Text>
        </TouchableOpacity>
    </Modal>
  )
}

export default FilterPopup
