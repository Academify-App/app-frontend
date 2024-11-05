import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import Button from "@/components/Button";

const CountDownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isTimeRemaining, setIsTimeRemaining] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCountdown = () => {
    setIsTimeRemaining(true);

    const intervalId = setInterval(() => {
      setTimeRemaining((prevMin) => prevMin - 1);
    }, 60000);

    intervalRef.current = intervalId;
  };

  useEffect(() => {
    if (timeRemaining === 0 && isTimeRemaining) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setIsTimeRemaining(false);

      setInterval(() => {
        setTimeRemaining(5);
        startCountdown();
      }, 300000);
    }
  }, [isTimeRemaining, timeRemaining]);
  return (
    <View>
      <View className="mt-6 flex flex-row justify-center">
        <Text className="text-center text-sm font-normal">
          Didn’t get the code?{" "}
        </Text>
        <Button
          className="bg-transparent w-12 p-0 border-0"
          onPress={startCountdown}
        >
          <Text className="font-semibold">Resend</Text>
        </Button>
      </View>
      <View className="mt-2 flex flex-row justify-center">
        <Text className="text-sm text-center font-medium">Expires in </Text>
        <Text className="text-sm text-center text-[#491B6D] font-medium">
          {timeRemaining}
        </Text>
      </View>
    </View>
  );
};

export default CountDownTimer;
