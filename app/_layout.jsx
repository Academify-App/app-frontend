import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { AuthProvider } from '../context/AuthContext';
import { PostProvider } from '../context/PostContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';

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
    <GestureHandlerRootView style={{ flex:1 }}>
      <AuthProvider>
        <PostProvider>
          <Stack>
            <Stack.Screen name="(auth)" options={{headerTitle: "",headerShown:false}}/>
            <Stack.Screen name="(student)" options={{headerTitle: "",headerShown:false}}/>
            <Stack.Screen name="+not-found" options={{headerTitle: "",headerShown:false}}/>
          </Stack>
        </PostProvider>
      </AuthProvider>
    </GestureHandlerRootView>
    </>
  );
}0