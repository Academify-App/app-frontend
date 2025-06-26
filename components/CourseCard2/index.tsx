import { CourseCardProps } from "@/types/course.types";
import { useRouter } from "expo-router";
import { Heart, Star1 } from "iconsax-react-nativejs";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CourseCard2 = ({
  cover_url,
  title,
  description,
  price,
  reviews,
  level,
  department,
  id,
  url,
}: CourseCardProps) => {
  const router = useRouter();
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
  // console.log(url);
  const handleNavigation = (url: string, id: string) => {
    if (!url) return;

    const formatUrl = url.toLocaleLowerCase();

    if (formatUrl.endsWith(".pdf")) {
      router.push({
        pathname: "/(student)/PdfMaterials/[pdfDetails]",
        params: { id: id.toString() },
      });
    } else if (formatUrl.endsWith(".mp4")) {
      router.push({
        pathname: "/(student)/VideoTutorials/[details]",
        params: { id: id.toString() },
      });
    }
  };

  return (
    <View
      className="w-[48%] h-[195px] rounded-2xl relative overflow-hidden"
      style={{
        boxShadow: "0px 2.386px 5.964px 0px rgba(0, 0, 0, 0.08)",
      }}
    >
      <TouchableOpacity className="absolute z-30 top-3 right-3">
        <Heart size="14" color="#fff" variant="Bold" />
      </TouchableOpacity>
      <View className="w-full h-1/2 overflow-hidden">
        <Image
          source={{ uri: cover_url }}
          resizeMode="cover"
          className="w-full h-[100px]"
        />
      </View>
      <TouchableOpacity
        className="h-1/2 px-2 py-[12px] bg-white"
        onPress={() => url && id && handleNavigation(url, id.toString())}
      >
        <View className="flex flex-row justify-between items-center mb-[5px]">
          <Text className="text-[#6B6675] text-[9px] font-medium">
            {department}
          </Text>
          <View className="flexx flex-row items-center">
            <Star1 size="9" color="#FAC025" variant="Bold" />
            <Text className="text-[#202244] text-[9px] font-medium">4.2</Text>
          </View>
        </View>
        <Text className="text-[#202244] text-xs font-semibold mb-5">
          {title}
        </Text>
        <View className="flex flex-row justify-between items-center">
          <Text className="text-[#250F53] text-[9px] font-medium">{level}</Text>
          {price && (
            <Text className="text-[#5530A0] text-xs font-semibold">
              ₦{formatNumberWithCommas(price)}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CourseCard2;
