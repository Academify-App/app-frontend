import React from "react";
import { View } from "react-native";
import Loader from ".";

const FullScreenLoader = () => {
  return (
    <View className="h-screen w-full bg-black/30">
      <Loader size="large" color="#2B145A" />
    </View>
  );
};

export default FullScreenLoader;
