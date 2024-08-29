import { Tabs, useSegments } from 'expo-router';
import { Image,Text,View } from 'react-native';
import icons from "../../../constants/icons"

export default function TabLayout() {
  const segments = useSegments()
  const currentRoute = segments.join('/')

  return (
    <Tabs  screenOptions={{headerShown: false,
      tabBarStyle: {
        height: 57,   
        display: `${currentRoute === '(student)/(tabs)/(home)/pdfMaterials' && 'none'}`
      },
    }}
    initialRouteName="(home)"
    >
      <Tabs.Screen name="(home)"
        options={{
          tabBarLabel: ({ focused }) => (
            <View className="pb-1">
              <Text className={`text-[13px] font-roboto-medium text-slate-400 ${focused && 'text-[#6E1FEF]'} `}>Home</Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <Image className="w-[25px] h-[25px]" source={focused ? icons.studentHomeActive : icons.studentHome}/>
          ),
        }}
      />

      <Tabs.Screen name="(materials)"
        options={{
          tabBarLabel: ({ focused }) => (
            <View className="pb-1">
              <Text className={`text-[13px] font-roboto-medium text-slate-400 ${focused && 'text-[#6E1FEF]'} `}>Materials</Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <Image className="w-[25px] h-[25px]" source={focused ? icons.studentBookActive : icons.studentBook}/>
          ),
        }}
      />

      <Tabs.Screen name="(wallet)"
        options={{
          tabBarLabel: ({ focused }) => (
            <View className="pb-1">
              <Text className={`text-[13px] font-roboto-medium text-slate-400 ${focused && 'text-[#6E1FEF]'} `}>Wallet</Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <Image className="w-[25px] h-[25px]" source={focused ? icons.studentWalletActive : icons.studentWallet}/>
          ),
        }}
      />

      <Tabs.Screen name="(analytics)"
        options={{
          tabBarLabel: ({ focused }) => (
            <View className="pb-1">
              <Text className={`text-[13px] font-roboto-medium text-slate-400 ${focused && 'text-[#6E1FEF]'} `}>Analytics</Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <Image className="w-[25px] h-[25px]" source={focused ? icons.studentAnalyticsActive : icons.studentAnalytics}/>
          ),
        }}
      />

      <Tabs.Screen name="(profile)"
        options={{
          tabBarLabel: ({ focused }) => (
            <View className="pb-1">
              <Text className={`text-[13px] font-roboto-medium text-slate-400 ${focused && 'text-[#6E1FEF]'} `}>Profile</Text>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <Image className="w-[25px] h-[25px]" source={focused ? icons.studentProfileActive : icons.studentProfile}/>
          ),
        }}
      />
    </Tabs>
  );
}
