import { CourseCardProps } from "@/types/course.types";
import { useRouter } from "expo-router";
import { Heart, Star1 } from "iconsax-react-nativejs";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CourseCard = ({
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
    <View className={`mt-3 flex w-[48%]`}>
      <View
        className="relative h-[144px] rounded-xl overflow-hidden"
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
          className={`${id === 1 || id === 4 ? "bg-[#111111]" : "bg-[#F2EEFD]"} h-1/2 px-2 py-[5px]`}
          onPress={() => url && id && handleNavigation(url, id.toString())}
        >
          <View className="flex flex-row justify-between items-center">
            <Text
              className={`${id === 1 || id === 4 ? "text-[#BDBDBD]" : "text-[#6B6675]"} text-[9px] font-medium`}
            >
              {department}
            </Text>
            {price && (
              <Text
                className={`${id === 1 || id === 4 ? "text-white" : "text-[#381977]"} text-xs font-bold`}
              >
                ₦{formatNumberWithCommas(price)}
              </Text>
            )}
          </View>
          <Text
            className={`${id === 1 || id === 4 ? "text-white" : "text-[#202244]"} text-xs  font-bold mt-1`}
          >
            {title}
          </Text>
          <View className="flex flex-row justify-between items-center mt-[14px] text-white">
            <Text
              className={`${id === 1 || id === 4 ? "text-[#BDBDBD]" : "text-[#202244]"} text-[9px] font-medium`}
            >
              {reviews?.length && (
                <View className="flex flex-row items-center">
                  <Star1 size="9" color="#FAC025" variant="Bold" />
                  <Text
                    className={`${id === 1 || id === 4 ? "text-[#BDBDBD]" : "text-[#202244]"} text-[9px] font-medium`}
                  >
                    {reviews?.length}
                  </Text>
                </View>
              )}
            </Text>
            <Text
              className={`${id === 1 || id === 4 ? "text-[#BDBDBD]" : "text-[#202244]"} text-[9px] font-medium`}
            >
              {level}
            </Text>
            <Text
              className={`${id === 1 || id === 4 ? "text-[#BDBDBD]" : "text-[#202244]"} text-[9px] font-medium`}
            >
              24 Reviews
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CourseCard;
