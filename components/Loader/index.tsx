import React from "react";
import { View, ActivityIndicator } from "react-native";

interface LoaderProps {
  size: "small" | "large";
  color: string;
}

const Loader = ({ size, color }: LoaderProps) => {
  return (
    <View>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
