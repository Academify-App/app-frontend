import TabContent from "@/components/TabContent";
import Profile from "@/components/TabContents/Pdf/profile";
import Ratings from "@/components/TabContents/Pdf/ratings";
import VideoList from "@/components/TabContents/Video/videoList";
import Tabs from "@/components/Tabs";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchCoursesByCategory } from "@/store/slices/getCoursesByCategorySlice";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeft, Star1 } from "iconsax-react-nativejs";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const VideoDetails = () => {
  const { id } = useLocalSearchParams();
  const dispatch = useAppDispatch();
  const { courses, isLoading, error } = useAppSelector(
    (state) => state.getCoursesByCategory
  );

  useEffect(() => {
    dispatch(fetchCoursesByCategory("video"));
  }, [dispatch]);
  const currentItem = courses.filter((item) => item.id.toString() === id);
  const list = currentItem[0];
  const [activeTab, setActiveTab] = useState("allVideos");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
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
    <SafeAreaView className="w-full h-screen bg-white">
      <ScrollView>
        <View className="h-[260px] bg-[#2B145A] px-5 py-3">
          <View className="flex flex-row justify-between items-center mb-3">
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <ArrowLeft size="24" color="#FFFFFF" />
            </TouchableOpacity>
            <View className="flex flex-row gap-x-4">
              <TouchableOpacity
                onPress={() => {}}
                className="flex flex-row justify-center items-center"
              >
                <MaterialCommunityIcons
                  name="bookmark-minus"
                  size={24}
                  color="#9747FF"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex flex-col justify-center items-center">
            <View className="flex flex-row justify-center items-center border border-[#ffffff] rounded-full">
              <Image
                source={require("../../../../assets/images/onboarding2.jpeg")}
                className="w-[60px] h-[60px] rounded-full"
              />
            </View>
            <Text className="mt-4 text-xl text-[#ffffff] font-medium">
              Miles Mbappe
            </Text>
            <Text className="my-1 text-[#D9D9D9] text-sm font-semibold">
              {list?.title}
            </Text>
            <Text className="mb-3 text-[#D9D9D9] text-sm font-semibold">
              Level: {list?.level}{" "}
            </Text>
            <View className="w-full flex flex-row justify-between items-center">
              <View className="flex flex-row p-[5px] bg-white rounded-lg">
                <Star1 size="12" color="#FAC025" variant="Bold" />
                <Text className="text-[#2B145A] text-xs font-bold ml-1">
                  4.8
                </Text>
              </View>
              <View className="flex flex-row items-center">
                <Text className="text-base text-[#D96CFF] font-bold">
                  ₦{formatNumberWithCommas(list?.price)}
                </Text>
                <Text className="text-sm text-[#9D9B9D] line-through font-medium ml-1">
                  N2,600
                </Text>
              </View>
              <Text className="text-[#FFFFFF] text-xs font-bold">1 Video</Text>
            </View>
          </View>
        </View>
        <View className="px-5 py-5">
          <Tabs
            tabs={[
              { id: "allVideos", label: "All Videos" },
              { id: "profile", label: "Profile" },
              { id: "ratings", label: "Ratings" },
            ]}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          {/* Tab Content */}
          <TabContent
            activeTab={activeTab}
            tabContents={[
              {
                id: "allVideos",
                content: (
                  <View className="h-[430px]">
                    <VideoList id={id?.toString()} />
                  </View>
                ),
              },
              {
                id: "profile",
                content: (
                  <View className="h-[430px]">
                    <Profile />
                  </View>
                ),
              },
              {
                id: "ratings",
                content: (
                  <View className="h-[430px]">
                    <Ratings />
                  </View>
                ),
              },
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoDetails;
