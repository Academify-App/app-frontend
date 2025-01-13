import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { DashboardHeadingPropsType } from "@/types/dashboard.types";

const DashboardHeading = ({
  title,
  link,
  linkText,
}: DashboardHeadingPropsType) => {
  return (
    <View className="flex flex-row justify-between items-center">
      <Text className="text-[#202244] text-lg font-semibold">{title}</Text>
      <Link href={link as any} className="text-[#5C3C9B] text-sm font-normal">
        {linkText}
      </Link>
    </View>
  );
};

export default DashboardHeading;
