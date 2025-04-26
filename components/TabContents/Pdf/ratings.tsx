import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { Star1 } from "iconsax-react-native";

const Ratings = () => {
  return (
    <ScrollView className="flex flex-col">
      <Text className="text-[#202244] text-base font-semibold mb-[22px]">
        Reviews
      </Text>
      <View className="border-b-[0.5px] border-[#44444444] flex flex-row gap-x-[18px] pb-5">
        <View>
          <Image
            source={require("../../../assets/images/onboarding2.jpeg")}
            className="w-[60px] h-[60px] rounded-full"
          />
        </View>
        <View className="flex flex-col gap-y-[10px] flex-1">
          <View className="flex flex-row justify-between items-start flex-1">
            <View>
              <Text className="text-[#000000] text-base font-semibold">
                Alex Moses
              </Text>
              <Text className="text-[#999797] text-xs font-normal">
                26 Jul. 2024
              </Text>
            </View>
            <View className="flex flex-row items-center gap-x-[6px]">
              <View className="flex flex-row gap-[1px]">
                <Star1 size="16" color="#FFB72C" variant="Bold" />
                <Star1 size="16" color="#FFB72C" variant="Bold" />
                <Star1 size="16" color="#FFB72C" variant="Bold" />
                <Star1 size="16" color="#FFB72C" variant="Bold" />
                <Star1 size="16" color="#8D8A8A" variant="Linear" />
              </View>
            </View>
          </View>
          <View className="flex-1">
            <Text
              className="text-[#8D8A8A] text-xs"
              numberOfLines={4}
              ellipsizeMode="tail"
            >
              I've been purchasing handouts from Chris through this app, and
              he’s been a lifesaver! His materials are always well-organized and
              comprehensive. Plus, he's super responsive to any questions I
              have. Highly recommend
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Ratings;
