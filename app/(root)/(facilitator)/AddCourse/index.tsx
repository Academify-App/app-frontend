import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setCurrStep } from "@/store/slices/addCourseSlice";
import { ArrowLeft } from "iconsax-react-native";
import Button from "@/components/Button";
import CourseDepartmentForm from "@/components/form/AddCourse/courseDepartment";
import CourseTitleForm from "@/components/form/AddCourse/courseTitle";
import CourseDescriptionForm from "@/components/form/AddCourse/courseDescription";
import CoverPhotoForm from "@/components/form/AddCourse/coverPhoto";
import CategoryForm from "@/components/form/AddCourse/category";
import CoursePreview from "@/components/form/AddCourse/coursePreview";
import CoursePrice from "@/components/form/AddCourse/coursePrice";
import SuccessMessage from "@/components/SuccesMessage";

const AddCourse = () => {
  const dispatch = useDispatch();
  const { success, currStep } = useSelector(
    (state: RootState) => state.addCourse,
  );
  return (
    <SafeAreaView>
      {!success && (
        <View>
          <View className="w-full py-4 px-6 flex flex-row gap-x-5 items-center">
            {currStep <= 1 && (
              <Button isDefault onPress={() => router.back()}>
                <ArrowLeft size={24} color="#323232" />
              </Button>
            )}
            {currStep > 1 && (
              <Button
                isDefault
                onPress={() => dispatch(setCurrStep(currStep - 1))}
              >
                <ArrowLeft size={24} color="#323232" />
              </Button>
            )}
            {currStep === 1 && (
              <Text className="text-2xl font-semibold text-[#323232]">
                Post your material
              </Text>
            )}
          </View>
          <View className="w-full flex flex-col justify-center items-center">
            {currStep === 1 && <CategoryForm />}
            {currStep === 2 && <CoverPhotoForm />}
            {currStep === 3 && <CourseDepartmentForm />}
            {currStep === 4 && <CourseTitleForm />}
            {currStep === 5 && <CourseDescriptionForm />}
            {currStep === 6 && <CoursePrice />}
            {currStep === 7 && <CoursePreview />}
          </View>
        </View>
      )}
      {success && (
        <SuccessMessage
          message={"You have successfully published your resources"}
        />
      )}
    </SafeAreaView>
  );
};

export default AddCourse;
