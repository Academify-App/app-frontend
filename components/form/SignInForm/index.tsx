/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Link, router } from "expo-router";
import FormInput from "../FormInput";
import { SignInFormData } from "@/types/auth.types";
import Checkbox from "expo-checkbox";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { showError, showSuccess } from "@/utils/alert";
import { login } from "@/store/slices/authSlice";

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    // Perform some asynchronous operation
    try {
      const result = await dispatch(login(data)).unwrap();
      showSuccess(`Login Successful`);
      setTimeout(() => {
        result.user.identity === "facilitator"
          ? router.replace("/(root)/(facilitator)/Dashboard")
          : router.replace("/(root)/(student)/Home");
      }, 2000);
    } catch (error) {
      showError(`${error}`);
    }
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

      <Controller
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        }}
        name="password"
        render={({ field: { onChange, value } }) => (
          <FormInput
            isRequired
            label="Password"
            password
            onChange={onChange}
            value={value}
          />
        )}
      />
      {errors.password && (
        <Text className="text-[#FF3E6C] -mt-3">{errors.password.message}</Text>
      )}

      {/* <Controller
        control={control}
        rules={{
          required: "Identity is required",
        }}
        name="identity"
        render={({ field: { onChange, value } }) => (
          <View className="flex flex-col gap-y-[6px] mb-5">
            <View className="flex flex-row">
              <Text className="text-[#344054] text-sm font-medium">
                Choose your identity
              </Text>
              <Text className="text-[#FF3E6C] text-sm font-semibold">*</Text>
            </View>
            <View className="p-0 rounded-full text-[#98A2B3] text-sm font-normal bg-[#EBEBEB]">
              <Picker selectedValue={value} onValueChange={onChange}>
                <Picker.Item label="Student" value="student" />
                <Picker.Item label="Facilitator" value="facilitator" />
              </Picker>
            </View>
          </View>
        )}
      />
      {errors.identity && (
        <Text className="text-[#FF3E6C] -mt-3">{errors.identity.message}</Text>
      )} */}

      <View className="mt-1 mb-7 flex flex-row justify-between">
        <View className="flex flex-row items-center justify-center gap-1">
          <Checkbox
            value={isChecked}
            onValueChange={() => setIsChecked(!isChecked)}
          />
          <Text className="text-xs text-[#6B6B6B99]">Remember me</Text>
        </View>
        <Link
          href="/(auth)/ForgotPassword"
          className="text-[#6E1FEF] text-xs font-normal"
        >
          Forgot Password?
        </Link>
      </View>

      <View className="flex flex-col gap-y-3">
        <Button onPress={handleSubmit(onSubmit)}>
          {isLoading ? (
            <Loader size="small" color="#fff" />
          ) : (
            <Text className={`text-lg text-white font-medium`}>Sign In</Text>
          )}
        </Button>
        <View className="flex flex-row gap-x-1 justify-center items-center">
          <Text className="text-xs text-[#333335] font-normal">
            Don’t have an account?{" "}
          </Text>
          <Link
            href="/(auth)/SignUp"
            className="text-xs text-[#6E1FEF] font-medium"
          >
            Sign Up
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SignInForm;
