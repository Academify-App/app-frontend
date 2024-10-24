import React from "react";
import { View, Text } from "react-native";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import Button from "@/components/Button";

interface ResetPasswordData {
  password: string;
}

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({ mode: "all" });
  return (
    <View className="mt-6">
      <FormInput
        label=""
        password
        {...register("password", { required: true })}
      />
      {errors.password && <Text>This field is required</Text>}

      <View className="flex flex-col gap-y-3">
        <Button
          text="Submit"
          onPress={handleSubmit((data) => {
            console.log(data);
            // Perform sign-up logic here
          })}
        />
      </View>
    </View>
  );
};

export default ResetPasswordForm;