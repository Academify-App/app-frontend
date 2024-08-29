import { Stack } from "expo-router"
import { StatusBar } from "react-native"

const AuthLayout = () => {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#3d1879" />
    <Stack>
      <Stack.Screen name="index" options={{headerTitle: "",headerShown:false}}/>
      <Stack.Screen name="sign-up" options={{headerTitle: "",headerShown:false}}/>
      <Stack.Screen name="email-verification" options={{headerTitle: "",headerShown:false}}/>
      <Stack.Screen name="phone-verification" options={{headerTitle: "",headerShown:false}}/>
      <Stack.Screen name="number-verification" options={{headerTitle: "",headerShown:false}}/>
      <Stack.Screen name="forgot-password" options={{headerTitle: "",headerShown:false}}/>
      <Stack.Screen name="reset-password" options={{headerTitle: "",headerShown:false}}/>
    </Stack>
    </>
  )
}

export default AuthLayout
