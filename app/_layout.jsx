import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { AuthProvider } from '../context/AuthContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Roboto-Regular": require('../assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Thin": require('../assets/fonts/Roboto-Thin.ttf'),
    "Roboto-Light": require('../assets/fonts/Roboto-Light.ttf'),
    "Roboto-Medium": require('../assets/fonts/Roboto-Medium.ttf'),
    "Roboto-Bold": require('../assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Black": require('../assets/fonts/Roboto-Black.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(auth)" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="(student)" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="+not-found" options={{headerTitle: "",headerShown:false}}/>
      </Stack>
    </AuthProvider>
    </>
  );
}0