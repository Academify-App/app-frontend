import { Star1 } from "iconsax-react-nativejs";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Details = () => {
  return (
    <ScrollView className="h-[260px] flex flex-col gap-y-4">
      <View className="border-[0.5px] border-[#EDEDED] bg-[#FFFFFF] p-3 rounded-2xl">
        <View className="flex flex-row items-center gap-x-[10px]">
          <Image
            source={require("../../../assets/images/onboarding2.jpeg")}
            className="w-[50px] h-[50px] rounded-full"
          />
          <View>
            <Text className="text-[#111111] text-base font-bold capitalize">
              Christopher Davies
            </Text>
            <View className="flex flex-row items-center gap-x-[6px]">
              <View className="flex flex-row gap-[1px]">
                <Star1 size="14" color="#FFB72C" variant="Bold" />
                <Star1 size="14" color="#FFB72C" variant="Bold" />
                <Star1 size="14" color="#FFB72C" variant="Bold" />
                <Star1 size="14" color="#FFB72C" variant="Bold" />
                <Star1 size="14" color="#8D8A8A" variant="Linear" />
              </View>
              <Text className="text-[#8D8A8A] text-xs font-normal">
                4 materials
              </Text>
            </View>
          </View>
        </View>
        <View className="mt-2 flex flex-row gap-x-2">
          <Text className="text-[#111111] text-base font-bold capitalize">
            Dept.:
          </Text>
          <Text className="text-[#484C50] text-base font-bold capitalize">
            History & Int’l Studies
          </Text>
        </View>
      </View>
      <View className="border-[0.5px] border-[#EDEDED] bg-[#FFFFFF] p-3 rounded-2xl">
        <View className="flex flex-row items-center gap-x-[10px] ">
          <Image
            source={require("../../../assets/images/onboarding2.jpeg")}
            className="w-[50px] h-[50px] rounded-[10px]"
          />
          <View className="flex-1">
            <Text
              className="text-[#111111] text-base font-bold capitalize"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              Major World Civilization: Introduction to Major World
              Civilizations
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
