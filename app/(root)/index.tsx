import React, { useEffect } from "react";
import { router, Stack } from "expo-router";
import { RootState } from "@/store";
import { useAppSelector } from "@/store/hooks";

const RootHome = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (user?.identity === "facilitator") {
      router.replace("/(facilitator)/Dashboard");
    } else {
      router.replace("/(student)/Home");
    }
  }, [user]);
  return <Stack />;
};

export default RootHome;
