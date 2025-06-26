import { Lock } from "iconsax-react-nativejs";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView>
      <View className="w-full h-screen flex flex-col justify-center items-center">
        <Lock size={24} color="#6E1FEF" />
        <Text>Profile Coming Soon!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
