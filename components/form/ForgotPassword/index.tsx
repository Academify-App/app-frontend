import React from "react";
import { View, Text } from "react-native";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import Button from "@/components/Button";

interface ForgotPasswordData {
  email: string;
}

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>({ mode: "all" });
  return (
    <View className="mt-6">
      <FormInput
        label=""
        inputMode="email"
        {...register("email", { required: true })}
      />
      {errors.email && <Text>This field is required</Text>}

      <View className="flex flex-col gap-y-3">
        <Button
          text="Continue"
          onPress={handleSubmit((data) => {
            console.log(data);
            // Perform sign-up logic here
          })}
        />
      </View>
    </View>
  );
};

export default ForgotPasswordForm;
