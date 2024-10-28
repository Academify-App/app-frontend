import { Stack, router } from "expo-router";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const isFirstTime = await AsyncStorage.getItem("isFirstTime");
        if (isFirstTime !== null) {
          SplashScreen.hideAsync();
          router.replace("/(auth)/SignIn");
        } else {
          await AsyncStorage.setItem("isFirstTime", "true");
          router.replace("/(auth)/Onboarding");
        }
      } catch (error) {
        console.error("Error checking first time launch:", error);
      }
    };
    checkFirstTime();
  }, []);

  return <Stack />;
};

export default Home;
