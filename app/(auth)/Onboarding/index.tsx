/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "iconsax-react-native";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [currStep, setCurrStep] = useState(0);
  const isLastSlide = currStep === onboarding.length - 1;

  return (
    <Swiper
      ref={swiperRef}
      showsButtons={false}
      loop={false}
      dot={
        <View className="h-[6px] w-[6px] ml-1 rounded-full bg-[#EBEBF54D]" />
      }
      activeDot={<View className="h-[6px] w-3 ml-1  rounded-full bg-[#FFF]" />}
      onIndexChanged={(currStep) => {
        setCurrStep(currStep);
      }}
    >
      {onboarding.map((item) => (
        <SafeAreaView
          className="flex flex-col w-full h-full px-8"
          key={item.id}
        >
          <LinearGradient
            colors={["#9747FF", "#9747FF33"]}
            className="absolute h-[120vh] top-0 left-0 right-0"
          />
          <View className="h-[94%] flex flex-col justify-between">
            <View className="w-full flex mt-[10px]">
              {currStep > 0 && (
                <TouchableOpacity
                  onPress={() => swiperRef.current?.scrollBy(-1)}
                >
                  <ArrowLeft size="24" color="#FFFFFF" />
                </TouchableOpacity>
              )}
            </View>
            <View className="flex flex-row justify-center items-center">
              <View className="mt-3 w-[330px] h-[330px] rounded-full overflow-hidden">
                <Image
                  source={item.img}
                  resizeMode="cover"
                  className="w-full h-full"
                />
              </View>
            </View>
            <View className="mt-[46px] flex">
              <LinearGradient
                colors={["#FFFFFF80", "#844FFC80"]}
                className="p-[30px] rounded-[30px]"
              >
                <Text className="text-[34px] font-bold text-white">
                  {item.title}
                </Text>
                <Text className="text-[15px] font-normal mt-4 text-[#EBEBF599]">
                  {item.subTitle}
                </Text>
                {isLastSlide ? (
                  <View className="flex flex-row justify-center gap-x-2 mt-5">
                    <TouchableOpacity
                      className="w-full"
                      onPress={() => router.replace("/(auth)/SignUp")}
                    >
                      <LinearGradient
                        colors={["#9747FF33", "#6E1FEF"]}
                        className="w-full py-[18px] px-4 rounded-[20px] "
                      >
                        <Text className="text-[17px] text-center font-semibold text-[#F2F2F7]">
                          Get Started
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View className="flex flex-row justify-between items-center mt-4">
                    <TouchableOpacity
                      onPress={() => router.replace("/(auth)/SignUp")}
                    >
                      <Text className="text-[17px] font-semibold text-[#EBEBF599]">
                        Skip
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      className="overflow-hidden"
                      onPress={() => swiperRef.current?.scrollBy(1)}
                    >
                      <LinearGradient
                        colors={["#FFFFFFE5", "#FFFFFF99"]}
                        className="w-[85px] py-[18px] px-4 rounded-[20px] "
                      >
                        <Text className="text-[17px] text-center font-semibold text-[#000000]">
                          Next
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                )}
              </LinearGradient>
            </View>
          </View>
        </SafeAreaView>
      ))}
    </Swiper>
  );
};
// bg-gradient-to-b from-[] to-[] border
export default Onboarding;
