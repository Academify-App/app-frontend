import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import { Link, router } from "expo-router";
import { ArrowLeft, DocumentCopy, VideoSquare } from "iconsax-react-nativejs";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AllCategories = () => {
  return (
    <SafeAreaView className="h-full py-3 px-5 bg-[#FCFCFC]">
      <View className="mb-4">
        <View className="flex flex-row mb-3">
          <TouchableOpacity
            onPress={() => {
              router.replace("/(student)/Home");
            }}
          >
            <ArrowLeft size="24" color="#292D32" />
          </TouchableOpacity>
          <Text className="text-2xl text-[#323232] font-semibold ml-5">
            Categories
          </Text>
        </View>
        <Text className="w-8/12 text-[#545454CC] text-sm font-normal">
          Explore the amazing categories and choose your preferred item
        </Text>
      </View>
      <View className="flex flex-row gap-x-6 w-full">
        <Link href={"/(student)/Materials"} className="w-[45%]">
          <View
            className="flex flex-col items-center justify-center h-[165px] gap-y-[5px] bg-[#Ffffff] rounded-xl p-4 w-full border-[0.5px] border-[#66666666]"
            style={{
              boxShadow:
                " 0px 0px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.06);",
            }}
          >
            <Octicons name="stack" size={24} color="#2B145A" />
            <Text className="text-[#2B145A] text-sm font-semibold">
              All Materials
            </Text>
          </View>
        </Link>
        <Link href={"/(student)/VideoTutorials"} className="w-[45%]">
          <View
            className="flex flex-col items-center justify-center h-[165px] gap-y-[5px] bg-[#Ffffff] rounded-xl p-4 w-full border-[0.5px] border-[#66666666]"
            style={{
              boxShadow:
                " 0px 0px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.06);",
            }}
          >
            <VideoSquare size="32" color="#2B145A" />
            <Text className="text-[#2B145A] text-sm font-semibold">
              Tutorials
            </Text>
          </View>
        </Link>
      </View>
      <View className="flex flex-row gap-x-6 w-full mt-6">
        <Link href={"/(student)/PdfMaterials"} className="w-[45%]">
          <View
            className="flex flex-col items-center justify-center h-[165px] gap-y-[5px] bg-[#Ffffff] rounded-xl p-4 w-full border-[0.5px] border-[#66666666]"
            style={{
              boxShadow:
                " 0px 0px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.06);",
            }}
          >
            <AntDesign name="pdffile1" size={24} color="#2B145A" />
            <Text className="text-[#2B145A] text-sm font-semibold">
              PDF Material
            </Text>
          </View>
        </Link>
        <Link href={"/(student)/PdfMaterials"} className="w-[45%]">
          <View
            className="flex flex-col items-center justify-center h-[165px] gap-y-[5px] bg-[#Ffffff] rounded-xl p-4 w-full border-[0.5px] border-[#66666666]"
            style={{
              boxShadow:
                " 0px 0px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.06);",
            }}
          >
            <DocumentCopy size="32" color="#2B145A" />
            <Text className="text-[#2B145A] text-sm font-semibold">
              E-Books
            </Text>
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default AllCategories;
