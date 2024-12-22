import React from "react";
import { View, Text } from "react-native";
import { TickCircle } from "iconsax-react-native";

interface SuccessMessageProps {
  message: string;
}
const SuccessMessage = ({ message }: SuccessMessageProps) => {
  return (
    <View className="w-full h-screen flex flex-row justify-center items-center px-[60px]">
      <View className="flex flex-col justify-center items-center gap-y-6">
        <TickCircle size="120" color="#0FA958" />
        <Text className="text-2xl font-medium text-center text-[#0FA958]">
          {message}
        </Text>
      </View>
    </View>
  );
};

export default SuccessMessage;
