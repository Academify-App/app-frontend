import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, SearchNormal1 } from "iconsax-react-native";
import { router } from "expo-router";
import CourseCard2 from "@/components/CourseCard2";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { fetchCourses } from "@/store/slices/getCoursesSlice";

const Materials = () => {
  const dispatch = useAppDispatch();
  const { courses, isLoading, error } = useAppSelector(
    (state) => state.getCourses,
  );
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchCourses());
  };

  return (
    <SafeAreaView className="h-full py-3 px-5 bg-[#FCFCFC]">
      <View className="sticky bg-[#FCFCFC]">
        <View className="flex flex-row mb-3">
          <TouchableOpacity
            onPress={() => {
              router.replace("/(student)/Home");
            }}
          >
            <ArrowLeft size="24" color="#292D32" />
          </TouchableOpacity>
          <Text className="text-2xl text-[#323232] font-semibold ml-5">
            All Materials
          </Text>
        </View>
        <Text className="text-[#545454CC] text-sm font-normal w-8/12">
          Explore all the materials here and search according to your preference
        </Text>
      </View>

      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <CourseCard2
            cover_url={item.cover_url}
            title={item.title}
            description={item.description}
            price={item.price}
            reviews={item.reviews}
            level={item.level}
            department={item.department}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginTop: 15 }}
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
          <View className="mt-5 border-[0.7px] border-[#E5E5E5] rounded-[15px] px-[15px] py-[10px] bg-white flex flex-row justify-between items-center">
            <TextInput
              placeholder="Search for resource provider or course"
              placeholderTextColor="#57565766"
              className="text-[#545454] text-xs font-normal w-[90%]"
            />
            <TouchableOpacity className="">
              <SearchNormal1 size="20" color="#646667" />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Materials;
