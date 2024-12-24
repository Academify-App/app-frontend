import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import { useForm, useController } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrStep,
  setError,
  updateFormData,
  updateCoverImage,
  updateDocument,
} from "@/store/slices/addCourseSlice";
import { RootState } from "@/store";
import { showError } from "@/utils/alert";
import { Add, Camera } from "iconsax-react-native";

const CoverPhotoForm = () => {
  const dispatch = useDispatch();
  const { coverUrl, url } = useSelector(
    (state: RootState) => state.addCourse.formData,
  );
  // console.log(coverUrl, url);
  const { currStep, document, coverImage } = useSelector(
    (state: RootState) => state.addCourse,
  );
  const { control, handleSubmit } = useForm({
    defaultValues: {
      coverUrl: coverUrl,
      url: url,
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

  // select document or tutorial function
  const handleSelectDocument = async () => {
    const documentTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.oasis.opendocument.text",
      "text/plain",
      "application/vnd.oasis.opendocument.presentation",
      "application/video.mp4",
      "application/video.mpeg",
      "application/video.mov",
    ];

    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: documentTypes,
        copyToCacheDirectory: true,
      });

      if (result.assets?.[0].uri) {
        const { uri, name } = result.assets[0];
        urlField.onChange({ uri, name });
        dispatch(updateFormData({ url: uri }));
        dispatch(updateDocument({ uri, name }));
      } else {
        dispatch(setError("Please select a file"));
      }
    } catch (error) {
      dispatch(setError("Error selecting document"));
    }
  };

  // selsct cover photo function
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
        dispatch(
          updateFormData({
            coverUrl: result.assets[0].uri,
          }),
        );
        dispatch(
          updateCoverImage({
            uri: result.assets[0].uri,
            name: result.assets[0].name,
          }),
        );
        console.log(coverImage);
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
    console.log(data);
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
          onPress={handleSelectDocument}
        >
          {urlField.value ? (
            <View className="flex flex-row justify-center items-center gap-x-6 ">
              <Text className="text-base text-[#323232] font-semibold">
                {urlField.value && document?.name}
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
              <Image
                source={{ uri: coverImage?.uri }}
                className="w-20 h-20 ml-2 rounded"
              />
              <Text className="text-base text-[#323232] font-semibold">
                {coverUrlField.value && coverImage?.name}
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
