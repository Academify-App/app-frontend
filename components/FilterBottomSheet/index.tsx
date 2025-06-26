import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  resetFilters,
  setCategories,
  setLevels,
  setPriceRange,
  setRatings,
} from "@/store/slices/filterSlice";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import Checkbox from "expo-checkbox";
import React, { useCallback, useRef } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface FilterBottomSheetProps {
  onApplyFilters?: (filters: any) => void;
  filterRef: React.MutableRefObject<BottomSheetModal | null>;
}

const FilterBottomSheet: React.FC<FilterBottomSheetProps> = ({
  onApplyFilters,
  filterRef,
}) => {
  // Reference for the bottom sheet
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Redux
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filter);

  // Categories options
  const categoryOptions = [
    { label: "PDF", value: "pdf" },
    { label: "E-Book", value: "ebook" },
    { label: "Tutorial", value: "tutorial" },
    { label: "Project", value: "project" },
  ];

  // Level options
  const levelOptions = [
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
  ];

  // Rating options
  const ratingOptions = [
    { label: "5 Stars", value: "5" },
    { label: "4 Stars & Above", value: "4" },
    { label: "3 Stars & Above", value: "3" },
    { label: "2 Stars & Above", value: "2" },
  ];

  // Handle category checkbox change
  const handleCategoryChange = (value: string) => {
    const newCategories = filters.categories.includes(value)
      ? filters.categories.filter((item) => item !== value)
      : [...filters.categories, value];

    dispatch(setCategories(newCategories));
  };

  // Handle level checkbox change
  const handleLevelChange = (value: string) => {
    const newLevels = filters.levels.includes(value)
      ? filters.levels.filter((item) => item !== value)
      : [...filters.levels, value];

    dispatch(setLevels(newLevels));
  };

  // Handle rating checkbox change
  const handleRatingChange = (value: string) => {
    const newRatings = filters.ratings.includes(value)
      ? filters.ratings.filter((item) => item !== value)
      : [...filters.ratings, value];

    dispatch(setRatings(newRatings));
  };

  // Handle price range change
  const handlePriceChange = (type: "min" | "max", value: string) => {
    dispatch(
      setPriceRange({
        ...filters.priceRange,
        [type]: value,
      })
    );
  };

  // Handle apply filters
  const handleApplyFilters = () => {
    if (onApplyFilters) {
      onApplyFilters(filters);
    }
    bottomSheetModalRef.current?.dismiss();
  };

  // Handle reset filters
  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  // Present the bottom sheet
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // Backdrop component
  const renderBackdrop = useCallback(
    (
      props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps
    ) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <>
      {/* <TouchableOpacity
                className="flex flex-row justify-center items-center bg-[#250F53] w-[40px] h-[40px] rounded-[10px]"
                onPress={handlePresentModalPress}
            >
                <Setting4
                    size="18"
                    color="#FFffff"
                />
            </TouchableOpacity> */}

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={filterRef}
          snapPoints={["75%"]}
          backdropComponent={renderBackdrop}
          handleIndicatorStyle={{ backgroundColor: "#E5E5E5" }}
        >
          <BottomSheetView>
            <ScrollView className="px-5 py-3">
              <View className="py-3 border-b border-b-[#E5E5E5]">
                <Text className="text-center text-lg font-semibold text-[#2B145A]">
                  Filter Courses
                </Text>
              </View>

              {/* Categories Section */}
              <View className="mt-4">
                <Text className="text-[#313131] text-base font-medium mb-2">
                  Categories
                </Text>
                <View className="flex flex-row flex-wrap gap-2">
                  {categoryOptions.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      className={`flex flex-row items-center px-3 py-2 rounded-lg border ${filters.categories.includes(item.value) ? "bg-[#F5EDFF] border-[#250F53]" : "border-[#E5E5E5]"}`}
                      onPress={() => handleCategoryChange(item.value)}
                    >
                      <Checkbox
                        value={filters.categories.includes(item.value)}
                        onValueChange={() => handleCategoryChange(item.value)}
                        color={
                          filters.categories.includes(item.value)
                            ? "#250F53"
                            : undefined
                        }
                        className="mr-2"
                      />
                      <Text
                        className={`${filters.categories.includes(item.value) ? "text-[#250F53]" : "text-[#6B6B6B]"} text-sm`}
                      >
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Levels Section */}
              <View className="mt-4">
                <Text className="text-[#313131] text-base font-medium mb-2">
                  Levels
                </Text>
                <View className="flex flex-row flex-wrap gap-2">
                  {levelOptions.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      className={`flex flex-row items-center px-3 py-2 rounded-lg border ${filters.levels.includes(item.value) ? "bg-[#F5EDFF] border-[#250F53]" : "border-[#E5E5E5]"}`}
                      onPress={() => handleLevelChange(item.value)}
                    >
                      <Checkbox
                        value={filters.levels.includes(item.value)}
                        onValueChange={() => handleLevelChange(item.value)}
                        color={
                          filters.levels.includes(item.value)
                            ? "#250F53"
                            : undefined
                        }
                        className="mr-2"
                      />
                      <Text
                        className={`${filters.levels.includes(item.value) ? "text-[#250F53]" : "text-[#6B6B6B]"} text-sm`}
                      >
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Price Range Section */}
              <View className="mt-4">
                <Text className="text-[#313131] text-base font-medium mb-2">
                  Price Range (₦)
                </Text>
                <View className="flex flex-row items-center gap-x-3">
                  <View className="flex-1">
                    <TextInput
                      placeholder="Min"
                      value={filters.priceRange.min}
                      onChangeText={(text) => handlePriceChange("min", text)}
                      keyboardType="numeric"
                      className="border border-[#E5E5E5] rounded-lg px-3 py-2 text-[#6B6B6B]"
                    />
                  </View>
                  <Text className="text-[#6B6B6B]">to</Text>
                  <View className="flex-1">
                    <TextInput
                      placeholder="Max"
                      value={filters.priceRange.max}
                      onChangeText={(text) => handlePriceChange("max", text)}
                      keyboardType="numeric"
                      className="border border-[#E5E5E5] rounded-lg px-3 py-2 text-[#6B6B6B]"
                    />
                  </View>
                </View>
              </View>

              {/* Ratings Section */}
              <View className="mt-4">
                <Text className="text-[#313131] text-base font-medium mb-2">
                  Ratings
                </Text>
                <View className="flex flex-row flex-wrap gap-2">
                  {ratingOptions.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      className={`flex flex-row items-center px-3 py-2 rounded-lg border ${filters.ratings.includes(item.value) ? "bg-[#F5EDFF] border-[#250F53]" : "border-[#E5E5E5]"}`}
                      onPress={() => handleRatingChange(item.value)}
                    >
                      <Checkbox
                        value={filters.ratings.includes(item.value)}
                        onValueChange={() => handleRatingChange(item.value)}
                        color={
                          filters.ratings.includes(item.value)
                            ? "#250F53"
                            : undefined
                        }
                        className="mr-2"
                      />
                      <Text
                        className={`${filters.ratings.includes(item.value) ? "text-[#250F53]" : "text-[#6B6B6B]"} text-sm`}
                      >
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Action Buttons */}
              <View className="mt-6 mb-8 flex flex-row justify-between gap-x-3">
                <TouchableOpacity
                  className="flex-1 py-3 border border-[#250F53] rounded-lg"
                  onPress={handleResetFilters}
                >
                  <Text className="text-center text-[#250F53] font-medium">
                    Reset
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-1 py-3 bg-[#250F53] rounded-lg"
                  onPress={handleApplyFilters}
                >
                  <Text className="text-center text-white font-medium">
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};

export default FilterBottomSheet;
