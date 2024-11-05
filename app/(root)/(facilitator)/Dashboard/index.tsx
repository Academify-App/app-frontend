import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { showError, showSuccess } from "@/utils/alert";
import Button from "@/components/Button";

const Dashboard = () => {
  const handleLogout = async () => {
    try {
      // const response = await dispatch(logout()).unwrap();
      showSuccess(`Logout Successful`);
      setTimeout(() => {
        router.replace("/(auth)/SignIn");
      }, 2000);
    } catch (error) {
      showError(`${error}`);
    }
  };
  return (
    <SafeAreaView>
      <Button onPress={handleLogout}>
        <Text className="text-white">Logout</Text>
      </Button>
      <View className="w-full h-screen flex flex-col justify-center items-center">
        <Text>Dashboard Screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
