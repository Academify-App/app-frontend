import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  className?: string;
  textStyle?: string;
  onPress?: () => void;
}

const Button = React.forwardRef(function Button(
  { text, className, textStyle, onPress, ...props }: ButtonProps,
  ref
) {
  return (
    <TouchableOpacity
      ref={ref}
      className={`p-4 w-full rounded-full border flex flex-row justify-center items-center bg-[#2B145A] ${className}`}
      {...props}
      onPress={onPress}
    >
      <Text className={`text-lg text-white font-medium ${textStyle}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
});

export default Button;
