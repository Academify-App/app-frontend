import Button from "@/components/Button";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { showError, showSuccess } from "@/utils/alert";
import { logout } from "@/store/slices/authSlice";
import { router } from "expo-router";
import Loader from "@/components/Loader";

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
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
      <Text>Home Screen</Text>
      <Button onPress={handleLogout}>
        {!isLoading ? (
          <Text className="text-white">Logout</Text>
        ) : (
          <Loader size="small" color="#fff" />
        )}
      </Button>
    </SafeAreaView>
  );
};

export default Home;
