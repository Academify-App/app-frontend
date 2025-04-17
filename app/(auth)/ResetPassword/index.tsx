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
import ResetPasswordForm from "@/components/form/ResetPassword";

const ResetPassword = () => {
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
            Reset Password
          </Text>
        </View>
        <View className="bg-white w-full h-[770px] px-6 py-7 rounded-t-[30px] flex flex-col gap-y-5">
          <View>
            <Text className="text-center text-[#000000] text-lg font-semibold mb-4">
              Enter a new password
            </Text>
            <Text className="text-center text-[#000000] text-base font-normal mb-[27px]">
              Kindly enter a strong password you would remember
            </Text>
          </View>
          <ResetPasswordForm />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ResetPassword;
