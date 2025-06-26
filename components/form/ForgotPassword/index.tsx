import React, { useState } from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ForgotPasswordData } from "@/types/auth.types";
import FormInput from "../FormInput";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import { router } from "expo-router";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { showError, showSuccess } from "@/utils/alert";
import { register, emailVerification } from "@/store/slices/authSlice";

const ForgotPasswordForm = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>({
    mode: "all",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordData) => {
    // Perform some asynchronous operation
    console.log(data);
    const params = {
      otp: "123",
      email: data.email,
      topHeading: "Verify Email",
      subHeading: "Verify your email address",
      title: "We sent you 4 digit code to verify your email address",
    };
    setTimeout(() => {
      router.push({
        pathname: "/(auth)/[otp]",
        params,
      });
    }, 2000);
  };
  return (
    <View className="mt-6">
      <Controller
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email address is invalid",
          },
        }}
        name="email"
        render={({ field: { onChange, value } }) => (
          <FormInput
            isRequired
            label="Email address"
            inputMode="email"
            onChange={onChange}
            value={value}
          />
        )}
      />
      {errors.email && (
        <Text className="text-[#FF3E6C] -mt-3">{errors.email.message}</Text>
      )}

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

export default ForgotPasswordForm;
