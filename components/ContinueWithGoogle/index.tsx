import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ContinueWithGoogle = () => {
  return (
    <View>
      <TouchableOpacity className="border border-[#66666666] py-[18px] rounded-full flex flex-row justify-center items-center gap-x-2">
        <Image
          source={require("../../assets/images/Authentications/google.png")}
          alt="google icon"
          resizeMode="contain"
          className="w-6 h-6 object-scale-down"
        />
        <Text className="text-base text-[#323232] font-medium">
          Continue with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContinueWithGoogle;
