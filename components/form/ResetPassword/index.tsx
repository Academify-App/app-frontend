import React, { useState } from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ResetPasswordData } from "@/types/auth.types";
import FormInput from "../FormInput";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import { router } from "expo-router";

const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({
    mode: "all",
    defaultValues: {
      password: "",
    },
  });
  const onSubmit = (data: ResetPasswordData) => {
    setIsLoading(true);
    // Perform some asynchronous operation
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
      router.push({
        pathname: "/(auth)/SignIn",
      });
    }, 2000);
  };

  return (
    <View className="mt-6">
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

      <View className="flex flex-col gap-y-3">
        <Button onPress={handleSubmit(onSubmit)}>
          {!isLoading ? (
            <Text className={`text-lg text-white font-medium`}>Submit</Text>
          ) : (
            <Loader size="small" color="#fff" />
          )}
        </Button>
      </View>
    </View>
  );
};

export default ResetPasswordForm;
