import React from "react";
import { Tabs } from "expo-router";
import {
  Book,
  Wallet2,
  ChartSquare,
  User,
  Element3,
} from "iconsax-react-native";

const FacilitatorLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#6E1FEF" }}>
      <Tabs.Screen
        name="Dashboard/index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => <Element3 size={24} color={color} />,
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            paddingBottom: 10,
            height: 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
      <Tabs.Screen
        name="AddCourse/index"
        options={{
          title: "Add Course",
          tabBarIcon: ({ color }) => <Book size={24} color={color} />,
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            paddingBottom: 10,
            height: 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
      <Tabs.Screen
        name="Wallet/index"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color }) => <Wallet2 size={24} color={color} />,
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            paddingBottom: 10,
            height: 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
      <Tabs.Screen
        name="MyCourses/index"
        options={{
          title: "My Courses",
          tabBarIcon: ({ color }) => <ChartSquare size={24} color={color} />,
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            paddingBottom: 10,
            height: 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
      <Tabs.Screen
        name="Profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            paddingBottom: 10,
            height: 60,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
    </Tabs>
  );
};

export default FacilitatorLayout;
