import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Lock } from "iconsax-react-native";

const Analytics = () => {
  return (
    <SafeAreaView>
      <View className="w-full h-screen flex flex-col justify-center items-center">
        <Lock size={24} color="#6E1FEF" />
        <Text>Analytics Coming Soon!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Analytics;
