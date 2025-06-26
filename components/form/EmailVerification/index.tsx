import React, { useRef, useState } from "react";
import { View, Text, Platform, StyleSheet, Alert } from "react-native";
import { OTPTextInput, type OTPTextInputHandle } from "@sectiontn/otp-input";
import { Controller, useForm } from "react-hook-form";
import { OTPFormData } from "@/types/auth.types";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import { router } from "expo-router";
import CountDownTimer from "@/components/CountDownTimer";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { showError, showSuccess } from "@/utils/alert";
import { otp, emailVerification } from "@/store/slices/authSlice";

interface EmailVerificationFormProps {
  emailAddress: string;
  userRole: string;
}

const EmailVerificationForm = ({ emailAddress, userRole }: EmailVerificationFormProps) => {
  const OTPRef = useRef<OTPTextInputHandle | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>(emailAddress); const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);// Store email for resending OTP
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPFormData>({
    mode: "all",
    defaultValues: {
      otp: "",
    },
  });

  // Function to handle resending OTP
  const handleResendOTP = async () => {
    await dispatch(emailVerification({ email: emailAddress })).unwrap();
    Alert.alert(
      "OTP Resent",
      "A new OTP has been sent to your email address.",
      [{ text: "OK" }]
    );
  };

  const onSubmit = async (data: OTPFormData) => {
    data = {... data, email: emailAddress}
    try {
      console.log(data);
      const response = await dispatch(otp(data)).unwrap();
      console.log(response);
      showSuccess(`Email Verified Successfully`)
      setTimeout(() => {
        router.push("/(auth)/SignIn")
        // userRole === "user" ? router.push("/(root)/(student)/Home") : router.push("/(root)/(facilitator)/Dashboard");
      }, 2000);
    } catch (error) {
      console.log(error);
      showError(`${error}`);
    }
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
          name="otp"
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
        {errors.otp && (
          <Text className="text-[#FF3E6C]">{errors.otp.message}</Text>
        )}
      </View>

      <View className="mt-2 flex flex-row justify-center">
        <CountDownTimer onResend={handleResendOTP} />
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
