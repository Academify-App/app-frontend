import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { UseAppDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  updateFormData,
  setCurrStep,
  resetForm,
  setFormData,
  setIsSubmitting,
  setError,
  setSuccess,
} from "@/store/slices/addCourseSlice";
import { useForm } from "react-hook-form";
import { Lock, ArrowLeft } from "iconsax-react-native";
import Button from "@/components/Button";
import CourseDepartmentForm from "@/components/form/AddCourse/courseDepartment";
import CourseTitleForm from "@/components/form/AddCourse/courseTitle";
import CourseDescriptionForm from "@/components/form/AddCourse/courseDescription";
import CoverPhotoForm from "@/components/form/AddCourse/coverPhoto";
import CategoryForm from "@/components/form/AddCourse/category";
import CoursePreview from "@/components/form/AddCourse/coursePreview";
import CoursePrice from "@/components/form/AddCourse/coursePrice";

const AddCourse = () => {
  const dispatch = UseAppDispatch();
  const { formData, currStep, isSubmitting, error, success } = useSelector(
    (state: RootState) => state.addCourse,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full py-4 px-6 flex flex-row gap-x-5 items-center">
          <Button isDefault onPress={() => router.back()}>
            <ArrowLeft size={24} color="#323232" />
          </Button>
          <Text className="text-2xl font-semibold text-[#323232]">
            Post your material
          </Text>
        </View>
        <View className="w-full h-screen flex flex-col justify-center items-center">
          <Lock size={24} color="#6E1FEF" />
          <Text>Add Courses Coming Soon!</Text>
        </View>
        <View className="flex flex-row justify-center items-center fixed bottom-0">
          <Button className="w-11/12">
            <Text className="text-white text-lg font-medium">Next</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCourse;
