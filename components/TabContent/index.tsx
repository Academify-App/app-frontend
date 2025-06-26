import { View, ReactNode } from "react-native";
import React from "react";

type TabContentProps = {
  activeTab: string;
  tabContents: {
    id: string;
    content: ReactNode;
  }[];
  containerStyle?: string;
};

const TabContent = ({
  activeTab,
  tabContents,
  containerStyle = "",
}: TabContentProps) => {
  // Find the content for the active tab
  const activeContent = tabContents.find((tab) => tab.id === activeTab);

  return (
    <View className={containerStyle}>
      {activeContent ? activeContent.content : null}
    </View>
  );
};

export default TabContent;
