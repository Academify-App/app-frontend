import React, { useState } from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Link, router } from "expo-router";
import FormInput from "../FormInput";
import { PhoneNumberFormData } from "@/types/auth.types";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";
import Button from "@/components/Button";
import Loader from "@/components/Loader";

const PhoneNumberForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneNumberFormData>({
    mode: "all",
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (data: PhoneNumberFormData) => {
    setIsLoading(true);
    // Perform some asynchronous operation
    console.log(data);
    const params = {
      otp: "123",
      email: data.phone,
      topHeading: "Phone no. Verification",
      subHeading: "Verify your phone number",
      title: "We sent you 4 digit code to verify your phone number",
    };
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
      router.push({
        pathname: "/(auth)/[otp]",
        params,
      });
    }, 2000);
  };
  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: "Phone Number is required",
          pattern: {
            value: /^[0-9]{11}$/,
            message: "Phone Number is invalid. Phone number must be 11 digits.",
          },
        }}
        name="phone"
        render={({ field: { onChange, value } }) => (
          <FormInput
            isRequired
            label="Phone Number"
            inputMode="tel"
            onChange={onChange}
            value={value}
          />
        )}
      />
      {errors.phone && (
        <Text className="text-[#FF3E6C] -mt-3">{errors.phone.message}</Text>
      )}

      <View className="mt-1 mb-7 flex flex-row justify-between">
        <View className="flex flex-row items-center justify-center gap-1">
          <Checkbox
            value={isChecked}
            onValueChange={() => setIsChecked(!isChecked)}
          />
          <Text className="text-xs text-[#000000]">
            I’ve read and agree to Academify
            <Text className="text-xs text-[#6E1FEF]">Terms of Service</Text> and
            <Text className="text-xs text-[#6E1FEF]"> Privacy Policy.</Text>
          </Text>
        </View>
      </View>

      <View className="flex flex-col gap-y-3">
        <Button onPress={handleSubmit(onSubmit)}>
          {!isLoading ? (
            <Text className={`text-lg text-white font-medium`}>Continue</Text>
          ) : (
            <Loader size="small" color="#fff" />
          )}
        </Button>
      </View>
    </View>
  );
};

export default PhoneNumberForm;
