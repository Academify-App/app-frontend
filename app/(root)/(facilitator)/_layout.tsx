import { Tabs } from "expo-router";
import {
  AddCircle,
  Book,
  Element3,
  User,
  Wallet2,
} from "iconsax-react-nativejs";
import React from "react";

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
        name="AddCourse/index"
        options={{
          title: "Add Course",
          tabBarIcon: ({ color }) => <AddCircle size={24} color={color} />,
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
// 76468267
