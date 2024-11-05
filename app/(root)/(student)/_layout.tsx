import React from "react";
import { Tabs } from "expo-router";
import { Home, Book, Wallet2, ChartSquare, User } from "iconsax-react-native";

const UserLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#6E1FEF" }}>
      <Tabs.Screen
        name="Home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
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
        name="Materials/index"
        options={{
          title: "Materials",
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
        name="Analytics/index"
        options={{
          title: "Analytics",
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

export default UserLayout;
