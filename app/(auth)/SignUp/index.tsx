import ContinueWithFacebook from "@/components/ContinueWithFacebook";
import ContinueWithGoogle from "@/components/ContinueWithGoogle";
import FormHeading from "@/components/form/formHeading";
import SignUpForm from "@/components/form/SignUpForm";
import { Link } from "expo-router";
import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <ScrollView className="bg-[#341773]">
      <ImageBackground
        source={require("../../../assets/images/Authentications/form-bg.png")}
        resizeMode="contain"
        className="w-full h-[260px] object-contain absolute -right-1/12"
      ></ImageBackground>
      <SafeAreaView className="relative z-10">
        <Text className="text-white mt-9 mb-6 mx-6 text-2xl font-medium">
          Sign up
        </Text>
        <View className="bg-white w-full px-6 py-7 rounded-t-[30px] flex flex-col gap-y-5">
          <FormHeading
            title="Create an account"
            subTitle="To access your dashboard please sign up by entering your correct personal info"
          />
          <SignUpForm />
          <View className="flex flex-row justify-between items-center gap-x-5">
            <View className="border-[1.5px] border-[#66666666] flex-1" />
            <Text className="text-[#8C9093] text-lg font-normal">
              Or Continue with
            </Text>
            <View className="border-[1.5px] border-[#66666666] flex-1" />
          </View>
          <View className="flex flex-col">
            <ContinueWithGoogle />
            <ContinueWithFacebook />
            <Link
              href="/"
              className="w-full text-center text-sm text-[#6E1FEF] underline font-normal mt-3"
            >
              Read Privacy Policy
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
