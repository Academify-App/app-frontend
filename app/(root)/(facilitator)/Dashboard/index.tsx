import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { showError, showSuccess } from "@/utils/alert";
import Button from "@/components/Button";
import Card from "@/components/Card";
import {
  Calendar,
  MoreCircle,
  Notification,
  ArrowDown2,
  ArrowUp,
} from "iconsax-react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  totalPdfData,
  totalVideoData,
  purResData,
  regStuData,
  stackedBarData,
  yAxisLabel,
} from "@/constants";
import { PieChart, BarChart } from "react-native-gifted-charts";
import Search from "@/components/Search";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Dashboard = () => {
  let newDate = new Date();
  const [date, setDate] = useState(newDate);
  const [show, setShow] = useState(false);
  const onChange = (event: Event, selectedDate: Date) => {
    const currentDate = selectedDate;
    // let month = months.forEach((m, i) => i + 1 === currentDate.getMonth() && m); ruleType
    setDate(currentDate);
    setShow(false);
  };

  const showDateTime = () => setShow(true);

  const handleLogout = async () => {
    try {
      // const response = await dispatch(logout()).unwrap();
      showSuccess(`Logout Successful`);
      setTimeout(() => {
        router.replace("/(auth)/SignIn");
      }, 2000);
    } catch (error) {
      showError(`${error}`);
    }
  };
  return (
    <SafeAreaView className="px-5">
      <View className="flex flex-row justify-between items-center mb-4">
        <View className="flex flex-col gap-y-1">
          <Text className="text-[#130138] text-2xl font-medium">Dashboard</Text>
          <Text className="text-[#6B6B6B] text-sm font-medium">
            An overview of activities
          </Text>
        </View>
        <View className="flex flex-row gap-x-6">
          <Button className="!w-6 p-0 rounded-none bg-transparent border-0">
            <View className="relative">
              <Notification size={24} color="#6B6B6B" />
              <Text className="w-7 text-white text-[10px] font-medium bg-[#FF3E6C] px-1 py-[1px] rounded-lg text-center absolute left-[70%] -top-1">
                99+
              </Text>
            </View>
          </Button>
          <Button className="!w-6 p-0 rounded-none bg-transparent border-0">
            <MoreCircle size={28} color="#646667" variant="Bulk" />
          </Button>
        </View>
      </View>
      <View className="border border-[#E5E5E5] rounded-[15px] h-[54px] bg-white mb-4 p-4 flex flex-row items-center">
        <Search />
      </View>
      <View className="w-full flex flex-col justify-center items-center">
        <Card className="border-[0.5px] border-[#DBDBDB66] shadow-none">
          <View>
            <View className="flex flex-row justify-between items-center mb-[18px]">
              <Text className="text-[#424142] text-xl font-semibold">
                Overview
              </Text>
              <View className="flex flex-row items-center justify-center gap-x-[2px]">
                <Calendar size="16" color="#6b6b6b" />
                <TouchableOpacity onPress={showDateTime}>
                  <View className="flex flex-row items-center justify-center gap-x-1">
                    <Text className="text-[#6B6B6B] text-xs font-medium">
                      {months.map((m, i) => {
                        if (i === date.getMonth()) {
                          return m;
                        }
                      })}
                    </Text>
                    <ArrowDown2 size="20" color="#6b6b6b" variant="Bold" />
                  </View>
                </TouchableOpacity>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    dateFormat="month"
                    is24Hour={true}
                    onChange={onChange}
                  />
                )}
              </View>
            </View>
            <View className="flex flex-row flex-wrap justify-center items-center gap-[10px] mb-1">
              <Card className="border-0 w-[46.5%] shadow-[0px_2px_4px_0px_#00000014_0px_0px_6px_0px_#00000005] bg-[#250F53]">
                <View>
                  <Text className="text-[#F4EEFF] text-xs font-semibold mb-2">
                    Total PDF Upload
                  </Text>
                  <Text className="text-[#F4EEFF] text-2xl font-semibold mb-5">
                    102
                  </Text>
                  <View className="flex flex-row justify-between items-end">
                    <View className="flex flex-row items-center gap-x-[7px]">
                      <View className="w-[22px] h-[22px] rounded-full bg-[#0F2C20] flex flex-row justify-center items-center rotate-45">
                        <ArrowUp size="12" color="#2BA053" />
                      </View>
                      <Text className="text-[#2BA053] text-xs font-semibold">
                        +50.7%
                      </Text>
                    </View>
                    <View>
                      <PieChart
                        donut
                        innerRadius={13}
                        radius={16}
                        data={totalPdfData}
                        centerLabelComponent={() => {
                          return <Text className="text-[10px]">20%</Text>;
                        }}
                      />
                    </View>
                  </View>
                </View>
              </Card>
              <Card className="border w-[46.5%]">
                <View>
                  <Text className="text-[#242424] text-xs font-semibold mb-2">
                    Total Video Upload
                  </Text>
                  <Text className="text-[#242424] text-2xl font-semibold mb-5">
                    60
                  </Text>
                  <View className="flex flex-row justify-between items-end">
                    <View className="flex flex-row items-center gap-x-[7px]">
                      <View className="w-[22px] h-[22px] rounded-full bg-[#CCEDD8] flex flex-row justify-center items-center rotate-45">
                        <ArrowUp size="12" color="#2BA053" />
                      </View>
                      <Text className="text-[#2BA053] text-xs font-semibold">
                        +9.23%
                      </Text>
                    </View>
                    <View>
                      <PieChart
                        donut
                        innerRadius={13}
                        radius={16}
                        data={totalVideoData}
                        centerLabelComponent={() => {
                          return <Text className="text-[10px]">36%</Text>;
                        }}
                      />
                    </View>
                  </View>
                </View>
              </Card>
              <Card className="border w-[46.5%]">
                <View>
                  <Text className="text-[#242424] text-xs font-semibold mb-2">
                    Purchased Resources
                  </Text>
                  <Text className="text-[#242424] text-2xl font-semibold mb-5">
                    47
                  </Text>
                  <View className="flex flex-row justify-between items-end">
                    <View className="flex flex-row items-center gap-x-[7px]">
                      <View className="w-[22px] h-[22px] rounded-full bg-[#CCEDD8] flex flex-row justify-center items-center rotate-45">
                        <ArrowUp size="12" color="#2BA053" />
                      </View>
                      <Text className="text-[#2BA053] text-xs font-semibold">
                        +18.07%
                      </Text>
                    </View>
                    <View>
                      <PieChart
                        donut
                        innerRadius={13}
                        radius={16}
                        data={purResData}
                        centerLabelComponent={() => {
                          return <Text className="text-[10px]">28%</Text>;
                        }}
                      />
                    </View>
                  </View>
                </View>
              </Card>
              <Card className="border w-[46.5%]">
                <View>
                  <Text className="text-[#242424] text-xs font-semibold mb-2">
                    Registered Students
                  </Text>
                  <Text className="text-[#242424] text-2xl font-semibold mb-5">
                    124
                  </Text>
                  <View className="flex flex-row justify-between items-end">
                    <View className="flex flex-row items-center gap-x-[7px]">
                      <View className="w-[22px] h-[22px] rounded-full bg-[#CCEDD8] flex flex-row justify-center items-center rotate-45">
                        <ArrowUp size="12" color="#2BA053" />
                      </View>
                      <Text className="text-[#2BA053] text-xs font-semibold">
                        +65%
                      </Text>
                    </View>
                    <View>
                      <PieChart
                        donut
                        innerRadius={13}
                        radius={16}
                        data={regStuData}
                        centerLabelComponent={() => {
                          return <Text className="text-[10px]">31%</Text>;
                        }}
                      />
                    </View>
                  </View>
                </View>
              </Card>
            </View>
            <Card>
              <View>
                <View className="mb-1">
                  <Text className="text-xl text-[#424142] font-semibold">
                    Tutorial Activity
                  </Text>
                </View>
                <BarChart
                  width={270}
                  dashWidth={0}
                  rotateLabel={false}
                  barWidth={5}
                  spacing={23}
                  xAxisThickness={0}
                  yAxisThickness={0}
                  yAxisLabelTexts={yAxisLabel}
                  noOfSections={4}
                  barBorderRadius={8}
                  stackData={stackedBarData}
                />
              </View>
            </Card>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
