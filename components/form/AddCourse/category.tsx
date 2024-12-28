import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { useForm, useController } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectedCategory, setCurrStep } from "@/store/slices/addCourseSlice";
import { MaterialType } from "@/constants";
import { RootState } from "@/store";

const CategoryForm = () => {
  const dispatch = useDispatch();
  const category = useSelector(
    (state: RootState) => state.addCourse.formData.category,
  );
  const currStep = useSelector((state: RootState) => state.addCourse.currStep);
  const { control, handleSubmit } = useForm();
  const { field } = useController({
    control,
    name: "category",
    defaultValue: category,
  });

  const handleCheckboxChange = (option: string) => {
    dispatch(selectedCategory(option));
    field.onChange(option);
  };
  const onSubmit = (data: any) => {
    dispatch(setCurrStep(currStep + 1));
  };

  return (
    <View className="w-full px-[30px] mt-5">
      <Text className="text-[#313131] text-xl font-medium">
        Type of Material
      </Text>
      <Text className="text-[#323232] text-sm font-normal mb-12">
        Let’s know your material type to help you further!
      </Text>
      <View className="flex flex-row flex-wrap h-[500px] gap-4">
        {MaterialType.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => handleCheckboxChange(item.value)}
          >
            <View
              className={`px-5 py-9 w-[150px] flex flex-row items-center justify-center rounded ${category && category.includes(item.value) ? "bg-[#2B145A] " : "bg-[#F5EDFF]"}`}
            >
              <Text
                className={` text-base font-semibold ${category && category.includes(item.value) ? "text-[#F5EDFF] " : "text-[#313131]"}`}
              >
                {item.label}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
      <ProgressBar />
      <View className="flex flex-row justify-center items-center mt-7">
        <Button
          className="w-full"
          onPress={handleSubmit(onSubmit)}
          disabled={!category}
        >
          <Text className="text-white text-lg font-medium">Next</Text>
        </Button>
      </View>
    </View>
  );
};

export default CategoryForm;
