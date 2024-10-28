import React, { useState } from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Link, router } from "expo-router";
import { SignUpFormData } from "@/types/auth.types";
import FormInput from "../FormInput";
import { Picker } from "@react-native-picker/picker";
import Button from "@/components/Button";
import Loader from "@/components/Loader";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    mode: "all",
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      identity: "student",
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    setIsLoading(true);
    // Perform some asynchronous operation
    const params = {
      otp: "123",
      email: data.email,
      topHeading: "Email Verification",
      subHeading: "Verify your email address",
      title: "We sent you 4 digit code to verify your email address",
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
    <View className="mt-6">
      <Controller
        control={control}
        rules={{
          required: "Full name is required",
          minLength: {
            value: 2,
            message: "Name must be at least 2 characters",
          },
        }}
        name="fullname"
        render={({ field: { onChange, value } }) => (
          <FormInput
            isRequired
            label="Full name"
            inputMode="text"
            onChange={onChange}
            value={value}
          />
        )}
      />
      {errors.fullname && (
        <Text className="text-[#FF3E6C] -mt-3">{errors.fullname.message}</Text>
      )}

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
            label="Create password"
            password
            onChange={onChange}
            value={value}
          />
        )}
      />
      {errors.password && (
        <Text className="text-[#FF3E6C] -mt-3">{errors.password.message}</Text>
      )}

      <Controller
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
      )}

      <View className="flex flex-col gap-y-3">
        <Button onPress={handleSubmit(onSubmit)}>
          {!isLoading ? (
            <Text className={`text-lg text-white font-medium`}>Sign Up</Text>
          ) : (
            <Loader size="small" color="#fff" />
          )}
        </Button>

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
