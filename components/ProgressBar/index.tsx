import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const ProgressBar = () => {
  const { currStep } = useSelector((state: RootState) => state.addCourse);

  const progressPercentage = (currStep / 7) * 100;
  return (
    <>
      <View className="relative">
        <Text style={{ left: `${progressPercentage}%` }}>
          {progressPercentage.toFixed(0)}%
        </Text>
        <View className="w-full h-[7px] flex flex-row items-center bg-[#D9D9D9]">
          <View
            className="h-full bg-black"
            style={{ width: `${progressPercentage}%` }}
          />
        </View>
      </View>
    </>
  );
};

export default ProgressBar;
