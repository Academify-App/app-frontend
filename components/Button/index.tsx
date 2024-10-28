import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonProps } from "@/types/button.types";

const Button = React.forwardRef(function Button(
  { children, className, onPress, disabled, ...props }: ButtonProps,
  ref
) {
  return (
    <TouchableOpacity
      ref={ref}
      className={`p-4 w-full rounded-full border flex flex-row justify-center items-center bg-[#2B145A] ${className}`}
      {...props}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
});

export default Button;
