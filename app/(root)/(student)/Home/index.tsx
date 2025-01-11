import Button from "@/components/Button";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { showError, showSuccess } from "@/utils/alert";
import { logout } from "@/store/slices/authSlice";
import { router, Link } from "expo-router";
import Loader from "@/components/Loader";
import {
  Heart,
  Notification,
  SearchNormal1,
  Setting4,
  Star1,
  User,
} from "iconsax-react-native";
import Octicons from "@expo/vector-icons/Octicons";
import DashboardHeading from "@/components/DashboardHeading";

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, user } = useAppSelector((state) => state.auth);
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
    <SafeAreaView className="w-full">
      <View className="w-full sticky bg-white py-[10px] px-5">
        <View className="flex flex-row justify-between items-center gap-x-[50px]">
          <View className="flex flex-col gap-y-2">
            <Text className="text-[#250F53] text-2xl font-semibold">
              Hi, {user?.name}
            </Text>
            <Text className="text-[##545454CC] text-xs font-normal">
              What would you like to get Today? Search Below.
            </Text>
          </View>
          <TouchableOpacity className="relative">
            <Notification size="29" color="#000" />
            <Text className="bg-[#FF3E6C] text-center text-white rounded-[14px] text-[10px] absolute -right-3 -top-1 w-6 px-1">
              99+
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-5 border-[0.7px] border-[#E5E5E5] rounded-[15px] px-[10px] py-[13px] bg-white flex flex-row justify-between items-center">
          <View className="flex flex-row items-center gap-x-2 w-[70%]">
            <TouchableOpacity className="">
              <SearchNormal1 size="20" color="#646667" />
            </TouchableOpacity>
            <TextInput
              placeholder="Search for resource provider or course"
              placeholderTextColor="#57565766"
              className="text-[#545454] text-xs font-normal max-w-[90%]"
            />
          </View>
          <TouchableOpacity className="flex flex-row justify-center items-center bg-[#250F53] w-[50px] h-[50px] rounded-[15px]">
            <Setting4 size="32" color="#E5E5E5" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="w-full px-5 py-3">
        <DashboardHeading title="Categories" link="/(student)/Materials" />
        <View className="mt-4 flex flex-row justify-between items-center gap-x-[11px]">
          <Link
            href="/(student)/Materials"
            className="text-center text-[#242424] text-sm font-medium px-[18px] py-[10px] bg-white border-[0.5px] border-[#44444444] rounded-xl"
          >
            All Materials
          </Link>
          <Link
            href="/(student)/Materials"
            className="text-center text-[#242424] text-sm font-medium px-[18px] py-[10px] bg-white border-[0.5px] border-[#44444444] rounded-xl"
          >
            PDF Materials
          </Link>
          <Link
            href="/(student)/Materials"
            className="text-center text-[#242424] text-sm font-medium px-[18px] py-[10px] bg-white border-[0.5px] border-[#44444444] rounded-xl"
          >
            E-Books
          </Link>
        </View>
        <View className="flex flex-row items-center gap-x-[11px] mt-[11px]">
          <Link
            href="/(student)/Materials"
            className="text-center text-[#242424] text-sm font-medium px-[18px] py-[10px] bg-white border-[0.5px] border-[#44444444] rounded-xl"
          >
            Tutorials
          </Link>
          <Link
            href="/(student)/Materials"
            className="text-center text-[#242424] text-sm font-medium px-[18px] py-[10px] bg-white border-[0.5px] border-[#44444444] rounded-xl"
          >
            Projects
          </Link>
        </View>
        <View className="mt-5 ">
          <DashboardHeading
            title="Recent Available Courses"
            link="/(student)/Materials"
          />
          <View className="mt-3 flex">
            <View
              className="relative w-[48%] h-[144px] rounded-xl overflow-hidden"
              style={{
                boxShadow: "0px 2.386px 5.964px 0px rgba(0, 0, 0, 0.08)",
              }}
            >
              <TouchableOpacity className="absolute z-30 top-3 right-3">
                <Heart size="14" color="#fff" variant="Bold" />
              </TouchableOpacity>
              <View className="w-full h-1/2 overflow-hidden">
                <Image
                  source={require("@/assets/images/onboarding1.jpeg")}
                  resizeMode="cover"
                  className="w-full h-[100px]"
                />
              </View>
              <TouchableOpacity className="bg-[#111111] h-1/2 px-2 py-[5px]">
                <View className="flex flex-row justify-between items-center">
                  <Text className="text-[#BDBDBD] text-[9px] font-medium">
                    Political Science
                  </Text>
                  <Text className="text-white text-xs font-bold">N1,500</Text>
                </View>
                <Text className="text-xs text-white font-bold mt-1">
                  Neo-Colonialism
                </Text>
                <View className="flex flex-row justify-between items-center mt-[14px] text-white">
                  <View className="flex flex-row items-center">
                    <Star1 size="9" color="#FAC025" variant="Bold" />
                    <Text className="text-[#BDBDBD] text-[9px] font-medium">
                      4.2
                    </Text>
                  </View>
                  <Text className="text-[#BDBDBD] text-[9px] font-medium">
                    300 level
                  </Text>
                  <Text className="text-[#BDBDBD] text-[9px] font-medium">
                    24 Reviews
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="mt-[23px]">
          <DashboardHeading
            title="Currently Studying"
            link="/(student)/Materials"
          />
          <View className="mt-3 border-[0.5px] border-[#EDEDED] bg-[#210249] rounded-2xl">
            <View className="p-4">
              <View className="flex flex-row justify-between items-start">
                <View className="flex flex-row items-center gap-x-3">
                  <View className="w-[39px] h-[37px] overflow-hidden rounded-[3px]">
                    <Image
                      source={require("@/assets/images/onboarding1.jpeg")}
                      resizeMode="cover"
                      className="w-full h-full"
                    />
                  </View>
                  <View>
                    <Text className="text-white text-sm font-medium">
                      Neo-Colonialism
                    </Text>
                    <View className="mt-1 flex flex-row items-center gap-x-2">
                      <User size="12" color="#D9D9D9" variant="Bold" />
                      <Text className="text-[#D9D9D9] text-xs font-normal">
                        Stephen Great
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="flex flex-row items-center">
                  <Star1 size="11" color="#FAC025" variant="Bold" />
                  <Text className="text-[#fff] text-[11px] font-medium">
                    4.2
                  </Text>
                </View>
              </View>
              <View className="mt-5 flex flex-row justify-between items-center gap-x-[14px]">
                <View className="bg-[#DDE0FF] rounded-[15px] w-[78%] h-[7px]">
                  <View className="bg-[#6E1FEF] w-1/2 h-full rounded-[15px]" />
                </View>
                <Text className="text-white w-11 py-1 text-center bg-[#6E1FEF] rounded-[20px] text-xs font-normal">
                  39%
                </Text>
              </View>
            </View>
            <View className="border-b border-[#D9D9D9] border-dashed" />
            <View className="p-4 flex flex-row justify-between items-center">
              <View className="flex flex-row items-center gap-x-2">
                <Octicons name="stack" size={24} color="black" />
                <Text className="text-[#D9D9D9] text-sm font-normal">
                  46 Pages
                </Text>
              </View>
              <TouchableOpacity className="px-[10px] py-[5px] bg-[#6E1FEF] rounded-[7px]">
                <Text className="text-xs text-white font-medium">Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* <Button onPress={handleLogout}>
          {!isLoading ? (
            <Text className="text-white">Logout</Text>
          ) : (
            <Loader size="small" color="#fff" />
          )}
        </Button> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
