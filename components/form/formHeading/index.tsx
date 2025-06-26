import React from "react";
import { View, Text } from "react-native";

interface FormHeadingProps {
  title: string;
  subTitle: string;
}

const FormHeading = ({ title, subTitle }: FormHeadingProps) => {
  return (
    <View className="w-7/12 flex flex-col gap-y-1">
      <Text className="text-lg text-[#202244] font-semibold">{title}</Text>
      <Text className="text-xs text-[#8D8A8A] font-normal">{subTitle}</Text>
    </View>
  );
};

export default FormHeading;
