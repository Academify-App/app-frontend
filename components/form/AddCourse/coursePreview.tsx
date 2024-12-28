import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import {
  setIsSubmitting,
  addCourseMaterial,
  setSuccess,
  resetForm,
} from "@/store/slices/addCourseSlice";
import { RootState } from "@/store";
import { AddCourseFormData } from "@/types/addCourse.types";
import { Star1 } from "iconsax-react-native";
import Loader from "@/components/Loader";
import { showError } from "@/utils/alert";
import { router } from "expo-router";

const CoursePreview = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isSubmitting, formData, document, coverImage } = useSelector(
    (state: RootState) => state.addCourse,
  );
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<AddCourseFormData>({
    defaultValues: {
      ...formData,
      numberOfPages: Number(formData.numberOfPages),
      price: Number(formData.price),
      cover_url: formData?.cover_url?.toString() || "",
      url: formData?.url?.toString() || "",
    },
  });

  const onSubmit = async (data: AddCourseFormData) => {
    try {
      const result = await dispatch(addCourseMaterial(data)).unwrap();
      dispatch(setSuccess(true));
      setTimeout(() => {
        dispatch(resetForm());
        router.replace("/(root)/(facilitator)/Dashboard");
      }, 3000);
    } catch (error) {
      showError(`${error}`);
    } finally {
      dispatch(setIsSubmitting(false));
    }
  };

  return (
    <>
      <ScrollView className="w-full px-5 pb-5 h-[600px]">
        <Text className="text-[32px] text-[#323232] font-semibold mb-4">
          Review your ads
        </Text>
        <Text className="text-sm text-[#898A8D] font-normal mb-8">
          See what we’ll show to guests. Ensure everything looks good.
        </Text>
        <View className="border border-[#C4C4C480] rounded-xl px-[17px] py-[27px] relative flex flex-col">
          <View>
            <Image
              source={{ uri: coverImage?.uri }}
              className="h-[250px] w-full object-cover rounded-lg"
            />
          </View>
          <Text className="bg-white text-[#313131] w-[110px] py-2 text-center rounded-[20px] absolute top-10 right-7">
            Show preview
          </Text>
          <View className="mt-[14px] mb-[6px] flex flex-row justify-between">
            <View className="flex flex-row justify-between items-center">
              <Text className="text-base font-semibold text-[#202244] line-clamp-1">
                {document?.name}
              </Text>
              <Text className="text-[#FF3E6C]"> - (PDF)</Text>
            </View>
            <View className="flex flex-row items-center gap-x-[2px]">
              <Text>New</Text>
              <Star1 size="16" color="#000000" variant="Bold" />
            </View>
          </View>
          <Text className="text-[#313131] text-2xl font-medium">
            NGN{formData.price}
          </Text>
        </View>
        <Text className="mt-[18px] text-xl text-[#1D1D1D] font-medium">
          Be sure of the following
        </Text>
        <View className="mt-3 py-5 px-4 border-[0.5px] border-[#C4C4C4] rounded-[14px] bg-[#F6F6F7] flex flex-row gap-x-[10px]">
          <View>
            <Text className="text-[#242424] text-base font-medium mb-[6px]">
              Confirm a few details before publish
            </Text>
            <Text className="text-[#323232] text-xs font-normal mb-[6px]">
              We’ll let you know if you need to verify your identify.
            </Text>
          </View>
        </View>

        <View className="mt-3 py-5 px-4 border-[0.5px] border-[#C4C4C4] rounded-[14px] bg-[#F6F6F7] flex flex-row gap-x-[10px]">
          <View>
            <Text className="text-[#242424] text-base font-medium mb-[6px]">
              Confirm a few details before publish
            </Text>
            <Text className="text-[#323232] text-xs font-normal mb-[6px]">
              We’ll let you know if you need to verify your identify.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View className="bottom-[-30px] left-0 right-0 w-full px-5 pb-5 flex flex-col gap-y-7 bg-white">
        <ProgressBar />
        <View className="flex flex-row justify-center items-center mt-7">
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            {isSubmitting ? (
              <Loader size="small" color="#fff" />
            ) : (
              <Text className="text-white text-lg font-medium">Publish</Text>
            )}
          </Button>
        </View>
      </View>
    </>
  );
};

export default CoursePreview;
