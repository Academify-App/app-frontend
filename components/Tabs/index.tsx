import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type TabsProps = {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  containerStyle?: string;
  tabStyle?: string;
  activeTabStyle?: string;
  textStyle?: string;
  activeTextStyle?: string;
};

const Tabs = ({
  tabs,
  activeTab,
  onTabChange,
  containerStyle = "flex flex-row justify-between border-[0.5px] border-[#EDEDED] bg-[#FFFFFF] mb-2 p-3 rounded-full",
  tabStyle = "py-2 px-4",
  activeTabStyle = "rounded-full py-[10px] px-4 bg-[#250F53]",
  textStyle = "text-[#242424] text-sm font-medium",
  activeTextStyle = "text-[#FFFFFF] font-medium text-sm font-medium",
}: TabsProps) => {
  return (
    <View className={containerStyle}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          onPress={() => onTabChange(tab.id)}
          className={`${tabStyle} ${activeTab === tab.id ? activeTabStyle : ""}`}
        >
          <Text className={activeTab === tab.id ? activeTextStyle : textStyle}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Tabs;
