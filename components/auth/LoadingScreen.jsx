import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import images from '../../constants/images';
import { Image } from 'react-native';

const LoadingScreen = () => {
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
      className="z-20 flex w-full justify-center items-center absolute top-0 left-0 min-h-screen"
      style={[{ backgroundColor: 'white' }, animatedStyle]}
    >
    <Image source={images.loading} className="w-[170px] h-[170px]"/>
    </Animated.View>
  );
};

export default LoadingScreen;
