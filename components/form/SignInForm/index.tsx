import React, { useState } from "react";
import { View, Text } from "react-native";
import { useForm } from "react-hook-form";
import { Link } from "expo-router";
import FormInput from "../FormInput";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";
import Button from "@/components/Button";

interface SignInFormData {
  fullname: string;
  password: string;
}

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({ mode: "all" });

  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <View className="mt-6">
      <FormInput
        label="Full name"
        inputMode="text"
        {...register("fullname", { required: true })}
      />
      {errors.fullname && <Text>This field is required</Text>}

      <FormInput
        label="Password"
        password
        {...register("password", { required: true })}
      />
      {errors.password && <Text>This field is required</Text>}

      {/* <View className="flex flex-col gap-y-[6px] mb-5">
        <View className="flex flex-row">
          <Text className="text-[#344054] text-sm font-medium">
            Choose your identity
          </Text>
          <Text className="text-[#FF3E6C] text-sm font-semibold">*</Text>
        </View>
        <View className="p-0 rounded-full text-[#98A2B3] text-sm font-normal bg-[#EBEBEB]">
          <Picker {...register("identity", { required: true })}>
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Facilitator" value="facilitator" />
          </Picker>
        </View>
        {errors.fullname && <Text>This field is required</Text>}
      </View> */}

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
        <Button
          text="Sign In"
          onPress={handleSubmit((data) => {
            console.log(data);
            // Perform sign-up logic here
          })}
        />
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
