import { Heart, Star1 } from "iconsax-react-native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { CourseCardProps } from "@/types/course.types";

const CourseCard = ({
  id,
  cover_url,
  title,
  description,
  price,
  reviews,
  level,
  department,
}: CourseCardProps) => {
  function formatNumberWithCommas(number: number | string): string {
    const numStr = number.toString();
    const parts = numStr.split("."); // Split on decimal if present
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const decimalPart = parts.length > 1 ? "." + parts[1] : "";
    return integerPart + decimalPart;
  }
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
            <View className="flex flex-row items-center">
              <Star1 size="9" color="#FAC025" variant="Bold" />
              <Text
                className={`${id === 1 || id === 4 ? "text-[#BDBDBD]" : "text-[#202244]"} text-[9px] font-medium`}
              >
                4.2
              </Text>
            </View>
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
