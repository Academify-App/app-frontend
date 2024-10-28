import { Link, router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "iconsax-react-native";
import ForgotPasswordForm from "@/components/form/ForgotPassword";

const ForgotPassword = () => {
  return (
    <ScrollView className="bg-[#341773]">
      <ImageBackground
        source={require("../../../assets/images/Authentications/form-bg.png")}
        resizeMode="contain"
        className="w-full h-[260px] object-contain absolute -right-1/12"
      ></ImageBackground>
      <SafeAreaView className="relative z-10">
        <View className="mt-9 mb-6 mx-6 flex flex-row">
          <TouchableOpacity className="" onPress={() => router.back()}>
            <ArrowLeft size="24" color="#FFFFFF" />
          </TouchableOpacity>
          <Text className="text-white text-2xl font-medium ml-12">
            Forgot Password
          </Text>
        </View>
        <View className="bg-white w-full h-[770px] px-6 py-7 rounded-t-[30px] flex flex-col gap-y-5">
          {/* <FormHeading
            title="Create an account"
            subTitle="To access your dashboard please sign up by entering your correct personal info"
          /> */}
          <View>
            <Text className="text-center text-[#000000] text-lg font-semibold mb-4">
              Enter your email address
            </Text>
            <Text className="text-center text-[#000000] text-base font-normal mb-[27px]">
              Kindly enter your email to reset your password{" "}
            </Text>
          </View>
          <ForgotPasswordForm />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ForgotPassword;
