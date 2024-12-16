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

const CoursePrice = () => {
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
      price: formData.price,
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
        Let’s set your price
      </Text>
      <Text className="text-sm text-[#898A8D] font-normal mb-8">
        Note you can change your price anytime.
      </Text>

      <View>
        <Controller
          rules={{
            required: true,
          }}
          name="price"
          control={control}
          render={({ field: { onChange, value } }) => (
            <View className="w-full flex flex-col py-[10px] px-6 mt-[100px] mb-[30px]">
              <TextInput
                className="w-full text-[54px] text-[#5B1295] text-center font-medium h-[148px]"
                placeholderTextColor="#C4C4C4"
                inputMode="numeric"
                cursorColor={"#5B1295"}
                multiline={true}
                textAlignVertical="top"
                maxLength={450}
                onChangeText={onChange}
                value={value.toString()}
              />
            </View>
          )}
        />
        {errors.title && <Text>This is required.</Text>}
      </View>
      <Text className="text-[#898A8D] font-normal text-sm mb-[180px]"></Text>
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

export default CoursePrice;
