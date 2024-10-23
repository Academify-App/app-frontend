import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Onboarding/index" options={{ headerShown: false }} />
      <Stack.Screen name="SignUp/index" options={{ headerShown: false }} />
      <Stack.Screen name="SignIn/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="ForgotPassword/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailVerification/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PhoneNumber/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="PhoneVerification/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword/index"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default AuthLayout;
