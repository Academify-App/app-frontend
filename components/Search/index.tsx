import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { SearchNormal1 } from "iconsax-react-native";

const Search = () => {
  return (
    <View className="w-full flex flex-row justify-between items-center">
      <TextInput
        placeholder="Search for student by name"
        placeholderTextColor="#57565766"
        cursorColor="#250F53"
        inputMode="search"
        className="h-full w-11/12 text-[#250F53] text-sm"
      />
      <TouchableOpacity>
        <SearchNormal1 size="18" color="#646667" variant="Broken" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
