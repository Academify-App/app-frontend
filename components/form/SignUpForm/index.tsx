import React, { useState } from "react";
import { View, Text } from "react-native";
import { useForm } from "react-hook-form";
import { Link } from "expo-router";
import FormInput from "../FormInput";
import { Picker } from "@react-native-picker/picker";
import Button from "@/components/Button";

interface SignUpFormData {
  fullname: string;
  email: string;
  password: string;
  identity: string;
}

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({ mode: "onChange" });

  // const [userType, setUserType] = useState();

  return (
    <View className="mt-6">
      <FormInput
        isRequired
        label="Full name"
        inputMode="text"
        {...register("fullname", { required: true })}
      />
      {errors.fullname?.message && <Text>This field is required</Text>}

      <FormInput
        isRequired
        label="Email address"
        inputMode="email"
        {...register("email", {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        })}
      />
      {errors.email?.message && <Text>This field is required</Text>}

      <FormInput
        isRequired
        label="Create password"
        password
        {...register("password", { required: true, minLength: 6 })}
      />
      {errors.password?.message && <Text>This field is required</Text>}

      <View className="flex flex-col gap-y-[6px] mb-5">
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
        {errors.identity?.message && <Text>This field is required</Text>}
      </View>

      <View className="flex flex-col gap-y-3">
        <Button
          text="Sign Up"
          onPress={handleSubmit((data) => {
            console.log(data);
            // Perform sign-up logic here
          })}
        />
        <View className="flex flex-row gap-x-1 justify-center items-center">
          <Text className="text-xs text-[#333335] font-normal">
            Do you have an account?{" "}
          </Text>
          <Link
            href="/(auth)/SignIn"
            className="text-xs text-[#6E1FEF] font-medium"
          >
            Sign In
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SignUpForm;
