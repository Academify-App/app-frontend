import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import Button from "@/components/Button";

interface CountDownTimerProps {
  onResend?: () => void;
}

const CountDownTimer = ({ onResend }: CountDownTimerProps = {}) => {
  // Total seconds remaining (5 minutes = 300 seconds)
  const [timeRemaining, setTimeRemaining] = useState<number>(300);
  const [isActive, setIsActive] = useState<boolean>(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Format time as MM:SS
  const formatTime = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Start the countdown timer
  const startCountdown = () => {
    setIsActive(true);

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Reset timer to 5 minutes (300 seconds)
    setTimeRemaining(300);

    // Count down every second
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          setIsActive(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    intervalRef.current = intervalId;
  };

  // Handle resend button click
  const handleResend = () => {
    // Call the onResend callback if provided
    if (onResend) {
      onResend();
    } else {
      console.log("Resending OTP...");
    }

    // Restart the countdown
    startCountdown();
  };

  // Start the countdown when component mounts
  useEffect(() => {
    startCountdown();

    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <View>
      <View className="mt-6 flex flex-row justify-center">
        <Text className="text-center text-sm font-normal">
          Didn't get the code?{" "}
        </Text>
        <Button
          className="bg-transparent w-12 p-0 border-0"
          onPress={handleResend}
          disabled={isActive}
        >
          <Text className={`font-semibold ${!isActive ? 'text-black' : 'text-gray-400'}`}>
            Resend
          </Text>
        </Button>
      </View>
      <View className="mt-2 flex flex-row justify-center">
        <Text className="text-sm text-center font-medium">Expires in </Text>
        <Text className="text-sm text-center text-[#491B6D] font-medium">
          {formatTime()}
        </Text>
      </View>
    </View>
  );
};

export default CountDownTimer;
