import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { EyeSlash, Eye } from "iconsax-react-native";

interface FormInputProps {
  label: string;
  isRequired?: boolean;
  password?: boolean;
  inputMode?: string;
  placeholder?: string;
  onChange?: () => void;
  value: string;
}

const FormInput = React.forwardRef(function FormInput(
  {
    label,
    isRequired,
    password,
    inputMode,
    placeholder,
    value,
    onChange,
    ...props
  }: FormInputProps,
  ref
) {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const handlePasswordToogle = () => setIsVisible(!isVisible);

  return (
    <View className="flex flex-col gap-y-[6px] mb-4">
      <View className="flex flex-row">
        <Text className="text-[#344054] text-sm font-medium">{label}</Text>
        {isRequired && (
          <Text className="text-[#FF3E6C] text-sm font-semibold">*</Text>
        )}
      </View>
      {!password && (
        <TextInput
          className={`bg-[#EBEBEB] py-[10px] px-[14px] rounded-full text-[#98A2B3] text-sm font-normal`}
          ref={ref}
          cursorColor="#6E1FEF"
          placeholder={placeholder}
          placeholderTextColor="#98A2B3"
          onChangeText={onChange}
          value={value}
          inputMode={
            inputMode === "email"
              ? "email"
              : inputMode === "url"
                ? "url"
                : inputMode === "search"
                  ? "search"
                  : inputMode === "text"
                    ? "text"
                    : inputMode === "tel"
                      ? "tel"
                      : "numeric"
          }
          {...props}
        />
      )}
      {password && (
        <TextInput
          className={`bg-[#EBEBEB] py-[10px] px-[14px] rounded-full text-[#98A2B3] text-sm font-normal ${password && "pr-9"}`}
          ref={ref}
          cursorColor="#6E1FEF"
          secureTextEntry={!password ? isVisible : !isVisible}
          inputMode="text"
          placeholder={placeholder}
          placeholderTextColor="#98A2B3"
          onChangeText={onChange}
          value={value}
          {...props}
        />
      )}
      {password && (
        <TouchableOpacity
          className="absolute right-3 top-1/2"
          onPress={handlePasswordToogle}
        >
          {!isVisible && <EyeSlash size="20" color="#8D8A8A" />}
          {isVisible && <Eye size="20" color="#8D8A8A" />}
        </TouchableOpacity>
      )}
    </View>
  );
});

export default FormInput;
