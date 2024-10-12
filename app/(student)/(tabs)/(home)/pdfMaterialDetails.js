import { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import PdfMaterialDetailsSectionOne from '../../../../components/student/PdfMaterialDetailsSectionOne'
import PdfMaterialDetailsSectionTwo from '../../../../components/student/PdfMaterialDetailsSectionTwo'
import PdfMaterialProfileSectionOne from "../../../../components/student/PdfMaterialProfileSectionOne"
import PdfMaterialProfileSectionTwo from '../../../../components/student/PdfMaterialProfileSectionTwo'
import PdfMaterialProviderReviews from '../../../../components/student/PdfMaterialProviderReviews'

const pdfMaterialDetails = () => {
  const [active,setActive] = useState("Details")
  const { img, title, subtitle, price, ratings, downloads, locked, resourceProvider, profile, providerReviews } = useLocalSearchParams()

  return (
    <SafeAreaView className="w-[96%] bg-[#F5F5F5] relative min-h-screen">
      <ScrollView className="pl-3 pt-4 relative" showsVerticalScrollIndicator={false}>
        { active === "Details" ? 
          (
          <PdfMaterialDetailsSectionOne 
          img={img} 
          title={title} 
          subtitle={subtitle}
          price={price} 
          ratings={ratings} 
          downloads={downloads} 
          locked={locked}
          />
          )
          :
          active === "Profile" || "Reviews" ? 
            (
            <PdfMaterialProfileSectionOne profile={JSON.parse(profile)} provider={JSON.parse(resourceProvider)}/>
            )
          :
          ""
        }
        <View className="flex-row bg-white rounded-full p-2 justify-center items-center mt-3">
          <TouchableOpacity 
          className={` ${active === "Details" && 'bg-[#2B145A]'} flex-1 py-4 rounded-full`} 
          onPress={()=>setActive('Details')}
          >
            <Text className={`text-center ${active === 'Details' && 'text-white'}`}>Details</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          className={` ${active === "Profile" && 'bg-[#2B145A]'} flex-1 py-4 rounded-full`} 
          onPress={()=>setActive('Profile')}
          >
            <Text className={`text-center ${active === 'Profile' && 'text-white'}`}>Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
          className={` ${active === "Reviews" && 'bg-[#2B145A]'} flex-1 py-4 rounded-full`} 
          onPress={()=>setActive('Reviews')}
          >
            <Text className={`text-center ${active === 'Reviews' && 'text-white'}`}>Reviews</Text>
          </TouchableOpacity>
        </View>
        {active === "Details" ? (
          <PdfMaterialDetailsSectionTwo provider={JSON.parse(resourceProvider)}/>
        )
        : 
        active === "Profile" ? (
          <PdfMaterialProfileSectionTwo profile={JSON.parse(profile)}/>
        )
        :
        active === "Reviews" ? (
          <PdfMaterialProviderReviews reviews={JSON.parse(providerReviews)}/>
        ):""
      }
        <View className="h-[250px]">
          <Text className="opacity-0">hidden</Text>
        </View>
      </ScrollView>
      <View className="absolute bottom-10 pl-3 w-full">
        <TouchableOpacity className="bg-[#250F53] rounded-full py-4">
          <Text className="text-center text-lg text-white">Buy Now - N{price}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default pdfMaterialDetails
