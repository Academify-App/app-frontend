import Button from "@/components/Button";
import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { showError, showSuccess } from "@/utils/alert";
import { fetchCourses } from "@/store/slices/getCoursesSlice";
import { GetCourses } from "@/types/course.types";
import { logout } from "@/store/slices/authSlice";
import { router, Link } from "expo-router";
import Loader from "@/components/Loader";
import { Notification, SearchNormal1, Star1, User } from "iconsax-react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import DashboardHeading from "@/components/DashboardHeading";
import CourseCard from "@/components/CourseCard";

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, user } = useAppSelector((state) => state.auth);
  const { courses } = useAppSelector((state) => state.getCourses);
  const coursePreview = courses.slice(0, 4);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchCourses());
  };

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
        <View className="mt-5 border-[0.7px] border-[#E5E5E5] rounded-[15px] px-[10px] py-[4px] bg-white flex flex-row justify-between items-center">
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
            <FontAwesome6 name="sliders" size={24} color="#E5E5E5" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full h-[640px] px-5 py-3">
        <DashboardHeading
          title="Categories"
          link="/(student)/Materials"
          linkText="See all"
        />
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
            linkText="See More"
          />
          <FlatList
            data={coursePreview}
            renderItem={({ item }) => (
              <CourseCard
                id={item.id}
                cover_url={item.cover_url}
                title={item.title}
                description={item.description}
                price={item.price}
                reviews={item.reviews}
                level={item.level}
                department={item.department}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            numColumns={2}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={handleRefresh}
                colors={["#250F53"]}
              />
            }
            ListEmptyComponent={
              !isLoading ? (
                <View className="flex-1 justify-center items-center py-8">
                  <Text className="text-gray-500">No courses found</Text>
                </View>
              ) : null
            }
            ListFooterComponent={() => (
              <View className="mt-[23px]">
                <DashboardHeading
                  title="Currently Studying"
                  link="/(student)/Materials"
                  linkText="See More"
                />
                <View className="mt-3 mb-5 border-[0.5px] border-[#EDEDED] bg-[#210249] rounded-2xl">
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
                      <Octicons name="stack" size={24} color="white" />
                      <Text className="text-[#D9D9D9] text-sm font-normal">
                        46 Pages
                      </Text>
                    </View>
                    <TouchableOpacity className="px-[10px] py-[5px] bg-[#6E1FEF] rounded-[7px]">
                      <Text className="text-xs text-white font-medium">
                        Continue
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        {/* <Button onPress={handleLogout}>
          {!isLoading ? (
            <Text className="text-white">Logout</Text>
          ) : (
            <Loader size="small" color="#fff" />
          )}
        </Button> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
