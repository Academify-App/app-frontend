import React from "react";
import { View, Text, TextInput } from "react-native";

interface FormInputProps {
  label: string;
  isRequired?: boolean;
}

const FormInput = React.forwardRef(function FormInput(
  { label, isRequired, ...props }: FormInputProps,
  ref
) {
  return (
    <View className="flex flex-col gap-y-[6px] mb-4">
      <View className="flex flex-row">
        <Text className="text-[#344054] text-sm font-medium">{label}</Text>
        {isRequired && (
          <Text className="text-[#FF3E6C] text-sm font-semibold">*</Text>
        )}
      </View>
      <TextInput
        className="bg-[#EBEBEB] py-[10px] px-[14px] rounded-full text-[#98A2B3] text-sm font-normal"
        ref={ref}
        {...props}
      />
    </View>
  );
});

export default FormInput;
