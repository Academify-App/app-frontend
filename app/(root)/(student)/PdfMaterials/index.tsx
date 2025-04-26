import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, SearchNormal1 } from "iconsax-react-native";
import { router, Link } from "expo-router";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { fetchCoursesByCategory } from "@/store/slices/getCoursesByCategorySlice";

const PdfMaterials = () => {
  const dispatch = useAppDispatch();
  const { courses, isLoading, error } = useAppSelector(
    (state) => state.getCoursesByCategory
  );

  useEffect(() => {
    dispatch(fetchCoursesByCategory("pdf"));
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchCoursesByCategory("pdf"));
  };


  return (
    <SafeAreaView className="h-full py-3 bg-[#FCFCFC]">
      <View className="sticky bg-[#FCFCFC] px-5">
        <View className="flex flex-row mb-3">
          <TouchableOpacity
            onPress={() => {
              router.replace("/(student)/Home");
            }}
          >
            <ArrowLeft size="24" color="#292D32" />
          </TouchableOpacity>
          <Text className="text-2xl text-[#323232] font-semibold ml-5">
            PDF - Materials
          </Text>
        </View>
        <Text className="text-[#545454CC] text-sm font-normal w-8/12">
          Explore all the materials here and search for according to your
          preference
        </Text>
      </View>

      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/(student)/PdfMaterials/[pdfDetails]",
              params: { id: `${item.id.toString()}` },
            }}
            className="flex justify-center items-center w-full"
          >
            <View className="border-b-[1.2px] border-[#E8F1FF] px-5 py-3 flex flex-row justify-between items-center gap-x-[14px] flex-1">
              <View className="w-[45px] h-[45px] rounded-full border-2 border-[#E8F1FF] bg-[#F5F9FF] flex flex-row justify-center items-center">
                <Text className="text-[#9C50E7] font-Roboto text-sm font-bold">
                  {item.id}
                </Text>
              </View>
              <View className="flex-1 flex-row justify-between items-center">
                <View className="w-8/12 flex flex-col gap-y-2">
                  <Text className="text-[#250F53] font-Roboto text-sm font-bold">
                    {item.title}
                  </Text>
                  <Text
                    className="text-[#545454] font-Roboto text-xs font-medium"
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    {item.description}
                  </Text>
                </View>
                <View className="w-3/12 flex flex-col items-end gap-y-2">
                  <Text className="text-[#250F53] font-Roboto text-xs font-medium">
                    {item.numberOfPages} pages
                  </Text>
                  <EvilIcons name="lock" size={32} color="#9C50E7" />
                </View>
              </View>
            </View>
          </Link>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={1}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={handleRefresh}
            colors={["#250F53"]}
          />
        }
        ListEmptyComponent={
          !isLoading ? (
            <View className="flex-1 justify-center items-center py-8">
              <Text className="text-gray-500">No courses found</Text>
            </View>
          ) : null
        }
        ListHeaderComponent={() => (
          <View className=" px-5 mb-2">
            <View className="mt-5 border-[0.7px] border-[#E5E5E5] rounded-[15px] px-[15px] py-[10px] bg-white flex flex-row justify-between items-center">
              <TextInput
                placeholder="Search for resource provider or course"
                placeholderTextColor="#57565766"
                className="text-[#545454] text-xs font-normal w-[90%]"
                // value={searchQuery}
                // onChangeText={setSearchQuery}
                // onSubmitEditing={handleSearch}
                // blurOnSubmit={false}
              />
              <TouchableOpacity
                className=""
                // onPress={handleSearch}
              >
                <SearchNormal1 size="20" color="#646667" />
              </TouchableOpacity>
            </View>
            <Text className="text-[#250F53] font-Roboto text-2xl font-bold mt-3">
              All Courses
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default PdfMaterials;
