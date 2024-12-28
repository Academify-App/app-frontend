import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCurrStep, updateFormData } from "@/store/slices/addCourseSlice";
import { RootState } from "@/store";
import { AddCourseFormData } from "@/types/addCourse.types";

const CourseDepartmentForm = () => {
  const dispatch = useDispatch();
  const currStep = useSelector((state: RootState) => state.addCourse.currStep);
  const formData = useSelector((state: RootState) => state.addCourse.formData);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCourseFormData>({
    defaultValues: {
      numberOfPages: formData.numberOfPages,
      department: formData.department,
      level: formData.level,
    },
  });

  const onSubmit = (data: AddCourseFormData) => {
    dispatch(setCurrStep(currStep + 1));
    dispatch(updateFormData(data));
  };

  return (
    <ScrollView className="w-full px-5">
      <Text className="text-[32px] text-[#323232] font-semibold mb-4">
        Let’s begin with the basics
      </Text>
      <Text className="text-sm text-[#898A8D] font-normal mb-8">
        You’ll be required to add more details later.
      </Text>
      <View>
        <Controller
          rules={{
            required: true,
          }}
          name="numberOfPages"
          control={control}
          render={({ field: { onChange, value } }) => (
            <View className="w-full border-[0.5px] border-[#66666666] rounded-xl flex flex-col py-[10px] px-6 mb-[30px]">
              <Text className="text-[#979797] text-base font-normal mb-[10px]">
                No of pages
              </Text>
              <TextInput
                className="w-full text-base text-[#323232] font-medium"
                placeholderTextColor="#323232"
                inputMode="numeric"
                placeholder="0"
                onChangeText={onChange}
                value={value.toString()}
              />
            </View>
          )}
        />
        {errors.numberOfPages && (
          <Text className="text-red-500">This is required.</Text>
        )}
      </View>

      <View>
        <Controller
          rules={{
            required: true,
          }}
          name="department"
          control={control}
          render={({ field: { onChange, value } }) => (
            <View className="w-full border-[0.5px] border-[#66666666] rounded-xl flex flex-col py-[10px] px-6 mb-[30px]">
              <Text className="text-[#979797] text-base font-normal mb-[10px]">
                Department
              </Text>
              <TextInput
                className="w-full text-base text-[#323232] font-medium"
                placeholderTextColor="#323232"
                inputMode="text"
                placeholder="Political Science"
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />
        {errors.department && (
          <Text className="text-red-500">This is required.</Text>
        )}
      </View>

      <View className="mb-[130px]">
        <Controller
          rules={{
            required: true,
          }}
          name="level"
          control={control}
          render={({ field: { onChange, value } }) => (
            <View className="w-full border-[0.5px] border-[#66666666] rounded-xl flex flex-col py-[10px] px-6 mb-[30px]">
              <Text className="text-[#979797] text-base font-normal mb-[10px]">
                Level
              </Text>
              <TextInput
                className="w-full text-base text-[#323232] font-medium"
                placeholderTextColor="#323232"
                inputMode="text"
                placeholder="300"
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />
        {errors.level && (
          <Text className="text-red-500">This is required.</Text>
        )}
      </View>
      <ProgressBar />
      <View className="flex flex-row justify-center items-center mt-7">
        <Button className="w-full" onPress={handleSubmit(onSubmit)}>
          <Text className="text-white text-lg font-medium">Next</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default CourseDepartmentForm;
