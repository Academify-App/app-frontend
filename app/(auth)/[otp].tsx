import { Link, router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { OTPVerificationParams } from "@/types/otp.types";
import EmailVerificationForm from "@/components/form/EmailVerification";
import PhoneVerificationForm from "@/components/form/PhoneVerification";
import VerifyEmailForm from "@/components/form/VerifyEmail";

const OTPVerification = () => {
  const { topHeading, subHeading, title, email, phone } =
    useLocalSearchParams();

  return (
    <ScrollView className="bg-[#341773]">
      <ImageBackground
        source={require("../../assets/images/Authentications/form-bg.png")}
        resizeMode="contain"
        className="w-full h-[260px] object-contain absolute -right-1/12"
      ></ImageBackground>
      <SafeAreaView className="relative z-10">
        <View className="mt-9 mb-6 mx-6 flex flex-row">
          <Text className="text-white text-2xl font-medium">{topHeading}</Text>
        </View>
        <View className="bg-white w-full h-[770px] px-6 py-7 rounded-t-[30px] flex flex-col gap-y-5">
          <View>
            <Text className="text-center text-[#000000] text-lg font-semibold mb-4">
              {subHeading}
            </Text>
            <Text className="text-center text-[#000000] text-base font-normal mb-[27px]">
              {title}{" "}
              <Text className="text-center text-[#000000] text-base font-semibold mb-[27px]">
                {email || phone}.
              </Text>{" "}
            </Text>
            <Text className="text-center text-[#000000] text-base font-normal mb-[27px]">
              Enter in the field below.
            </Text>
          </View>
          {topHeading === "Email Verification" && <EmailVerificationForm />}
          {topHeading === "Phone no. Verification" && <PhoneVerificationForm />}
          {topHeading === "Verify Email" && <VerifyEmailForm />}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default OTPVerification;
