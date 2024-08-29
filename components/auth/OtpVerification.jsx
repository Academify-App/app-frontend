import { useEffect, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import images from '../../constants/images';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AuthContext from '../../context/AuthContext';

const OtpVerification = () => {
  const { OtpSuccess } = useContext(AuthContext)
  
  const translateY = useSharedValue(300);
  
  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 500,
      easing: Easing.out(Easing.exp),
    });
  }, [translateY]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View
      className="z-10 flex-1 w-full justify-center items-center absolute top-0 left-0 h-full"
      style={[{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }, animatedStyle]}
    >
      <View className="w-[80%] h-[40%] rounded-3xl bg-[#2B145A] flex items-center justify-center">
        <View className="flex-1 items-center justify-center">
          <View>
            { OtpSuccess ? 
            (<MaterialCommunityIcons name="checkbox-marked-circle-outline" size={60} color="white" />)
            :
            (<Image source={images.OtpLoader} className="w-[85px] h-[85px]"/>)
            }
          </View>
          { OtpSuccess ? (
            <Text className="text-2xl text-white mt-2">OTP Verified! 👍</Text>
          ) 
          : 
          (
          <View className="mt-4">
            <Text className="font-robotobold text-[28px] text-textColor">Kindly hold on ✋</Text>
            <Text className="mt-2 font-roboto text-[16px] text-center text-textColor">We're verifying your OTP</Text>
          </View>
          )}
        </View>
      </View>
    </Animated.View>
  );
};

export default OtpVerification;
