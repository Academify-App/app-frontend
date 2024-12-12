import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import { useForm, useController } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedCategory,
  setCurrStep,
  setIsSubmitting,
  setError,
} from "@/store/slices/addCourseSlice";
import { RootState } from "@/store";
import { showError } from "@/utils/alert";
import { Add, Camera } from "iconsax-react-native";

const CoverPhotoForm = () => {
  const dispatch = useDispatch();
  const { coverUrl, url } = useSelector(
    (state: RootState) => state.addCourse.formData
  );
  console.log(coverUrl, url);
  const currStep = useSelector((state: RootState) => state.addCourse.currStep);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      coverUrl: null,
      url: null,
    },
  });
  const { field: urlField } = useController({
    name: "url",
    control,
  });

  const { field: coverUrlField } = useController({
    name: "coverUrl",
    control,
  });

  const handleUrlSelection = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ],
      });

      if (result.assets && result.assets[0].uri) {
        urlField.onChange({
          uri: result.assets[0].uri,
          name: result.assets[0].name,
        });
      } else {
        showError(`${dispatch(setError("Please select a file"))}`);
      }
    } catch (error) {
      // Ignore errors
      console.log(error);
      showError(`${dispatch(setError("Error selecting document"))}`);
    }
  };

  const handleCoverUrlSelection = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["image/jpeg", "image/png", "image/jpg"],
      });
      if (result.assets && result.assets[0].uri) {
        coverUrlField.onChange({
          uri: result.assets[0].uri,
          name: result.assets[0].name,
        });
      } else {
        console.log("Please select a file");
      }
    } catch (error) {
      // Ignore errors
      console.log(error);
      showError(`${dispatch(setError("Error selecting document"))}`);
    }
  };

  const onSubmit = (data: any) => {
    console.log(data, url?.name, coverUrl?.name);
    dispatch(setCurrStep(currStep + 1));
  };

  return (
    <ScrollView className="w-full px-5">
      <Text className="text-[32px] text-[#323232] font-semibold mb-4">
        Add photos/video of your Material
      </Text>
      <Text className="text-sm text-[#898A8D] font-normal mb-8">
        Kindly upload at least 2 photos to get started. And not more than 50
        videos for tutorials.
      </Text>
      <View className="h-[430px] flex flex-col">
        <TouchableOpacity
          className="w-full h-[123px] rounded-[20px] border border-[#66666633] flex flex-row justify-center items-center mb-6"
          onPress={handleUrlSelection}
        >
          {urlField.value ? (
            <View className="flex flex-row justify-center items-center gap-x-6 ">
              <Text className="text-base text-[#323232] font-semibold">
                {urlField.value && urlField.value.name}
              </Text>
            </View>
          ) : (
            <View className="flex flex-row justify-center items-center gap-x-6 ">
              <Add size="27" color="#292D32" />
              <Text className="text-base text-[#323232] font-semibold">
                Add Doc or Video Material
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          className="w-full h-[123px] rounded-[20px] border border-[#66666633] flex flex-row justify-center items-center mb-6"
          onPress={handleCoverUrlSelection}
        >
          {coverUrlField.value ? (
            <View className="flex flex-row justify-center items-center gap-x-6 ">
              <Text className="text-base text-[#323232] font-semibold">
                {coverUrlField.value && coverUrlField.value.name}
              </Text>
            </View>
          ) : (
            <View className="flex flex-row justify-center items-center gap-x-6 ">
              <Camera size="27" color="#292D32" />
              <Text className="text-base text-[#323232] font-semibold">
                Cover Photos
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <ProgressBar />
      <View className="flex flex-row justify-center items-center mt-7">
        <Button
          className="w-full"
          onPress={handleSubmit(onSubmit)}
          disabled={!urlField.value && !coverUrlField.value}
        >
          <Text className="text-white text-lg font-medium">Next</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default CoverPhotoForm;
