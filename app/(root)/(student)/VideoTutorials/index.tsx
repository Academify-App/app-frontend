import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  RefreshControl,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, SearchNormal1 } from "iconsax-react-native";
import { router, Link } from "expo-router";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { fetchCoursesByCategory } from "@/store/slices/getCoursesByCategorySlice";
import { Play, Star1 } from "iconsax-react-native";

const VideoTutorials = () => {
  const dispatch = useAppDispatch();
  const { courses, isLoading, error } = useAppSelector(
    (state) => state.getCoursesByCategory
  );
  useEffect(() => {
    dispatch(fetchCoursesByCategory("video"));
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchCoursesByCategory("video"));
  };

  function formatNumberWithCommas(number: number | string): string {
    if (number === undefined || number === null) {
      return "0"; // Return a default value when number is undefined or null
    }

    const numStr = number.toString();
    const parts = numStr.split("."); // Split on decimal if present
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const decimalPart = parts.length > 1 ? "." + parts[1] : "";
    return integerPart + decimalPart;
  }

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
            Tutorials
          </Text>
        </View>
        <Text className="text-[#545454CC] text-sm font-normal w-8/12">
          Explore all the materials here and search for according to your
          preference
        </Text>
      </View>
      <View className="px-5">
        <FlatList
          data={courses}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: "/(root)/(student)/VideoTutorials/[details]",
                params: { id: `${item.id.toString()}` },
              }}
              className="flex h-[150px] mb-4"
            >
              <View className="bg-white w-full flex flex-row items-center rounded-2xl border-[0.5px] border-[#D9D9D9CC] h-full overflow-hidden">
                <View className="w-[128px] h-[150px] relative">
                  <ImageBackground
                    source={{ uri: `${item?.cover_url}` }}
                    resizeMode="cover"
                    className="flex-1 justify-center items-center"
                  >
                    <View className="h-full w-full absolute flex justify-center items-center bg-[#00000033]">
                      <Play size="32" color="#FFF" className="relative z-10" />
                    </View>
                  </ImageBackground>
                </View>
                <View className="flex-1 flex-col gap-y-[10px] h-full py-[15px] px-3">
                  <Text className="text-[#9747FF] text-xs font-bold">
                    {item?.department}
                  </Text>
                  <Text className="text-[#2B145A] text-base font-semibold">
                    {item?.title}
                  </Text>
                  <Text className="text-[#9747FF] text-base font-bold">
                    ₦{formatNumberWithCommas(item?.price)}
                  </Text>
                  <View className="flex flex-row justify-between items-center">
                    <View className="flex flex-row">
                      <Star1 size="12" color="#FAC025" variant="Bold" />
                      <Text className="text-[#2B145A] text-xs font-bold ml-1">
                        4.8
                      </Text>
                      <Text>{"  "}</Text>
                      <Text className="text-[#2B145A] text-xs font-bold ml-1">
                        |
                      </Text>
                      <Text>{"  "}</Text>
                      <Text className="text-[#2B145A] text-xs font-bold ml-1">
                        1 video
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Link>
          )}
          keyExtractor={(item) => item?.id.toString()}
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
            <View className="mb-2">
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
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default VideoTutorials;
