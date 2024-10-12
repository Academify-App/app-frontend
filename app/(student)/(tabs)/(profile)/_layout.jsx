import { Stack } from 'expo-router';

export default function homeLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="(post)" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="profileInfo" options={{headerTitle: "",headerShown:false,}}/>
      </Stack>
    </>
  );
}