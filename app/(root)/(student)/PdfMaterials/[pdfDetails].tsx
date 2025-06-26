import TabContent from "@/components/TabContent";
import Details from "@/components/TabContents/Pdf/details";
import Profile from "@/components/TabContents/Pdf/profile";
import Ratings from "@/components/TabContents/Pdf/ratings";
import Tabs from "@/components/Tabs";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchCoursesByCategory } from "@/store/slices/getCoursesByCategorySlice";
import { showError, showSuccess } from "@/utils/alert";
import Feather from "@expo/vector-icons/Feather";
import * as FileSystem from "expo-file-system";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeft, Heart, Star1 } from "iconsax-react-nativejs";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PdfDetails = () => {
  const { id } = useLocalSearchParams();
  const dispatch = useAppDispatch();
  const { courses, isLoading, error } = useAppSelector(
    (state) => state.getCoursesByCategory
  );

  const currentItem = courses.filter((item) => item.id.toString() === id);
  const list = currentItem[0];

  useEffect(() => {
    dispatch(fetchCoursesByCategory("pdf"));
  }, [dispatch]);
  const [activeTab, setActiveTab] = useState("details");
  const [downloading, setDownloading] = useState(false);

  // Function to handle tab changes
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  // Function to handle file download
  const handleDownload = async () => {
    if (!list || !list.url) {
      showError("Download URL not available");
      return;
    }

    try {
      setDownloading(true);

      const fileUri =
        FileSystem.documentDirectory + list.title.replace(/\s+/g, "_") + ".pdf";

      const downloadResumable = FileSystem.createDownloadResumable(
        list.url,
        fileUri,
        {},
        (downloadProgress) => {
          const progress =
            downloadProgress.totalBytesWritten /
            downloadProgress.totalBytesExpectedToWrite;
          // You could update a progress state here if you want to show download progress
        }
      );

      const { uri } = await downloadResumable.downloadAsync();

      if (uri) {
        showSuccess(`Downloaded successfully to ${uri}`);
      }
    } catch (error) {
      console.error("Download error:", error);
      showError("Failed to download file");
    } finally {
      setDownloading(false);
    }
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
    <SafeAreaView className="w-full h-screen px-5 py-3">
      <ScrollView>
        <View className="flex flex-row justify-between items-center mb-3">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <ArrowLeft size="24" color="#292D32" />
          </TouchableOpacity>
          <View className="flex flex-row gap-x-4">
            <TouchableOpacity
              onPress={() => {}}
              className="w-8 h-8 rounded-full bg-[#EFEAFC] flex flex-row justify-center items-center"
            >
              <Heart size="16" color="#EE3D48" variant="Bold" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleDownload}
              disabled={downloading}
              className="w-8 h-8 rounded-full bg-[#EFEAFC] flex flex-row justify-center items-center"
            >
              {downloading ? (
                <Feather name="loader" size={16} color="#484C50" />
              ) : (
                <Feather name="download" size={16} color="#484C50" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-[#EFEAFC] rounded-3xl p-5 mb-4">
          <Image
            source={{
              uri: `${list?.cover_url.toString()}`,
            }}
            className="w-full h-[203px] rounded-3xl"
          />
        </View>
        <Text className="text-[#2B145A] font-Roboto text-lg font-medium mb-2">
          {list?.title}
        </Text>
        {list?.reviews.length ? (
          <View className="flex flex-row gap-x-2">
            <View className="flex flex-row gap-[1px]">
              <Star1 size="14" color="#FFB72C" variant="Bold" />
              <Star1 size="14" color="#FFB72C" variant="Bold" />
              <Star1 size="14" color="#FFB72C" variant="Bold" />
              <Star1 size="14" color="#FFB72C" variant="Bold" />
              <Star1 size="14" color="#8D8A8A" variant="Linear" />
            </View>
            <Text className="text-xs font-normal text-[#8D8A8A] mb-3">
              250 Ratings | 58 Downloads
            </Text>
          </View>
        ) : (
          <View className="flex flex-row gap-x-2">
            <View className="flex flex-row gap-[1px]">
              <Star1 size="14" color="#8D8A8A" variant="Linear" />
            </View>
            <Text className="text-xs font-normal text-[#8D8A8A] mb-3">
              0 Ratings | 0 Downloads
            </Text>
          </View>
        )}
        <View className="flex flex-row justify-between items-center mb-5">
          <View className="flex flex-row items-center gap-x-[6px]">
            <Text className="text-[#612EF7] text-xl font-bold">
              ₦{formatNumberWithCommas(list?.price)}
            </Text>
            {/* <Text className="line-through text-[#8D8A8A] text-sm">N3800</Text> */}
          </View>
          {/* <TouchableOpacity>
            <EvilIcons name="lock" size={32} color="#292D32" />
          </TouchableOpacity> */}
        </View>

        {/* Tabs Section */}
        <Tabs
          tabs={[
            { id: "details", label: "Details" },
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
              id: "details",
              content: (
                <View className="h-[270px]">
                  <Details />
                </View>
              ),
            },
            {
              id: "profile",
              content: (
                <View className="h-[270px]">
                  <Profile />
                </View>
              ),
            },
            {
              id: "ratings",
              content: (
                <View className="h-[270px]">
                  <Ratings />
                </View>
              ),
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PdfDetails;
