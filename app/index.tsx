import { Redirect } from "expo-router";
import React from "react";
import SplashScreen from "react-native-splash-screen";

const Home = () => {
  return <Redirect href="/(auth)/Onboarding" />;
};

export default Home;
