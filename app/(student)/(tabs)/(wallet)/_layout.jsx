import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export default function homeLayout() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor="#2B145A"/>
      <Stack>
        <Stack.Screen name="index" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="history" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="transfer" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="walletTransfer" options={{headerTitle: "",headerShown:false}}/>
        <Stack.Screen name="bankTransfer" options={{headerTitle: "",headerShown:false}}/>
      </Stack>
    </>
  );
}