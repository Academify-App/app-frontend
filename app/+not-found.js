import { Link } from 'expo-router';
import {Text , TouchableOpacity, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <View className="w-full h-full flex justify-center items-center">
        <View>
          <Text className="font-robotomedium text-2xl">404 Error</Text>
          <Text className="font-roboto mt-1">This page could not be found.</Text>
        </View>
        <Link href="/(auth)">
          <Text className="font-robotobold underline text-[#2B145A] mt-4">Return back to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

