import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import { useForm, useController, set } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrStep,
  setError,
  updateFormData,
  updateCoverImage,
  updateDocument,
} from "@/store/slices/addCourseSlice";
import {
  setProgress,
  resetUpload,
  setIsLoading,
  cloudinaryUploadFile,
} from "@/store/slices/cloudinaryUploadSlice";
import { AppDispatch, RootState } from "@/store";
import { showError } from "@/utils/alert";
import { Add, Camera } from "iconsax-react-native";
import { CloudinaryFilePayload } from "@/types/cloudinaryUpload.types";

const CoverPhotoForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cover_url, url } = useSelector(
    (state: RootState) => state.addCourse.formData,
  );
  const { progress, error, doc_url, isLoading } = useSelector(
    (state: RootState) => state.cloudinaryUpload,
  );
  // console.log(coverUrl, url);
  const { currStep, document, coverImage } = useSelector(
    (state: RootState) => state.addCourse,
  );
  const { control, handleSubmit } = useForm({
    defaultValues: {
      cover_url: cover_url,
      url: url,
    },
  });
  const { field: urlField } = useController({
    name: "url",
    control,
  });

  const { field: coverUrlField } = useController({
    name: "cover_url",
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
      "video/mp4",
      "video/quicktime",
    ];
    dispatch(setIsLoading(true));
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: documentTypes,
        copyToCacheDirectory: true,
      });

      if (result.assets?.[0].uri) {
        const { uri, name } = result.assets[0];

        urlField.onChange({ uri, name });
        const uploadResult = await dispatch(cloudinaryUploadFile(uri)).unwrap();
        dispatch(setIsLoading(false));
        dispatch(updateFormData({ url: uploadResult.secure_url }));
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
    dispatch(setIsLoading(true));
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["image/jpeg", "image/png", "image/jpg"],
      });
      if (result.assets && result.assets[0].uri) {
        const { uri, name } = result.assets[0];

        coverUrlField.onChange({ uri, name });
        const uploadResult = await dispatch(cloudinaryUploadFile(uri)).unwrap();
        console.log(uploadResult);
        dispatch(setIsLoading(false));
        dispatch(
          updateFormData({
            cover_url: uploadResult.secure_url,
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
        <View className="mb-6">
          <TouchableOpacity
            className="w-full h-[123px] rounded-[20px] border border-[#66666633] flex flex-row justify-center items-center"
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
        </View>

        <View className="mb-6">
          <TouchableOpacity
            className="w-full h-[123px] rounded-[20px] border border-[#66666633] flex flex-row justify-center items-center"
            onPress={handleCoverUrlSelection}
          >
            {coverUrlField.value ? (
              <View className="flex flex-col justify-center items-center gap-x-6 ">
                <Image
                  source={{ uri: coverImage?.uri }}
                  className="w-20 h-20 ml-2 rounded"
                />
                <Text className="text-base text-[#323232] text-center font-semibold">
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
        {isLoading && (
          <View className="w-full mt-2 flex flex-row justify-between items-center">
            <View className="w-[90%] bg-[#DDE0FF] rounded-full h-[7px]">
              <View
                className="bg-[#6E1FEF] h-[7px] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </View>
            <Text className="text-sm text-[#6E1FEF] font-medium">
              {progress}%
            </Text>
          </View>
        )}
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
