import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrStep,
  setIsSubmitting,
  setError,
  updateFormData,
} from "@/store/slices/addCourseSlice";
import { RootState } from "@/store";
import { AddCourseFormData } from "@/types/addCourse.types";

const CourseTitleForm = () => {
  const dispatch = useDispatch();
  // console.log(coverUrl, url);
  const currStep = useSelector((state: RootState) => state.addCourse.currStep);
  const formData = useSelector((state: RootState) => state.addCourse.formData);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCourseFormData>({
    defaultValues: {
      title: formData.title,
    },
  });

  const onSubmit = (data: AddCourseFormData) => {
    console.log(data, formData);
    dispatch(setCurrStep(currStep + 1));
    dispatch(updateFormData(data));
  };

  return (
    <ScrollView className="w-full px-5">
      <Text className="text-[32px] text-[#323232] font-semibold mb-4">
        Almost done, let’s give your material a title
      </Text>
      <Text className="text-sm text-[#898A8D] font-normal mb-8">
        Kindly add a title to your post to make it more visible to others.
      </Text>

      <View>
        <Controller
          rules={{
            required: true,
          }}
          name="title"
          control={control}
          render={({ field: { onChange, value } }) => (
            <View className="w-full border-[0.5px] border-[#66666666] rounded-xl flex flex-col py-[10px] px-6 mb-[30px]">
              <TextInput
                className="w-full text-base text-[#323232] font-medium h-[148px]"
                placeholderTextColor="#C4C4C4"
                inputMode="text"
                placeholder="Enter your title here"
                multiline={true}
                textAlignVertical="top"
                maxLength={200}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />
        {errors.title && (
          <Text className="text-red-500">This is required.</Text>
        )}
      </View>
      <Text className="text-[#898A8D] font-normal text-sm mb-[250px]">
        Not more than <Text className="text-black font-medium">200</Text>{" "}
        characters
      </Text>
      <ProgressBar />
      <View className="flex flex-row justify-center items-center mt-7">
        <Button
          className="w-full"
          onPress={handleSubmit(onSubmit)}
          // disabled={
          //   !formData.numberOfPages || !formData.department || !formData.level
          // }
        >
          <Text className="text-white text-lg font-medium">Next</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default CourseTitleForm;
