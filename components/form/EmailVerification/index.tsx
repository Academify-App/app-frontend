import React, { useRef, useState } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { OTPTextInput, type OTPTextInputHandle } from "@sectiontn/otp-input";
import { Controller, useForm } from "react-hook-form";
import { OTPFormData } from "@/types/auth.types";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import { router } from "expo-router";

const EmailVerificationForm = () => {
  const OTPRef = useRef<OTPTextInputHandle | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPFormData>({
    mode: "all",
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = (data: OTPFormData) => {
    setIsLoading(true);
    // Perform some asynchronous operation
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/(auth)/PhoneNumber");
    }, 2000);
  };

  return (
    <View>
      <View className="w-10/12 mx-auto">
        <Controller
          control={control}
          rules={{
            required: "Please input the correct OTP pin",
            minLength: {
              value: 4,
              message: "Pin must be 4 characters",
            },
          }}
          name="pin"
          render={({ field: { onChange, value } }) => (
            <OTPTextInput
              ref={OTPRef}
              inputCount={4}
              tintColor={"#9747FF"}
              offTintColor={"#66666666"}
              onTextChangeHandler={onChange}
              editable={true}
              autoFocus={true}
              keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
              textInputStyle={styles.RoundedTextInput}
            />
          )}
        />
        {errors.pin && (
          <Text className="text-[#FF3E6C]">{errors.pin.message}</Text>
        )}
      </View>
      <View className="mt-6 flex flex-row justify-center">
        <Text className="text-center text-sm font-normal">
          Didn’t get the code?{" "}
        </Text>
        <Button className="bg-transparent w-12 p-0 border-0">
          <Text className="font-semibold">Resend</Text>
        </Button>
      </View>
      <View className="mt-2 flex flex-row justify-center">
        <Text className="text-sm text-center font-medium">Expires in </Text>
        <Text className="text-sm text-center text-[#491B6D] font-medium">
          01:00
        </Text>
      </View>
      <Button className="mt-9" onPress={handleSubmit(onSubmit)}>
        {!isLoading ? (
          <Text className="text-lg text-white font-medium">Submit</Text>
        ) : (
          <Loader size="small" color="#fff" />
        )}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  RoundedTextInput: {
    borderRadius: 8,
    borderWidth: 1,
    width: 60,
    height: 70,
  },
});

export default EmailVerificationForm;
