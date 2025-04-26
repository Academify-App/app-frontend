import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GetCourses, GetCoursesByCategoryState } from "@/types/course.types";

const initialState: GetCoursesByCategoryState = {
  courses: [],
  isLoading: false,
  error: null,
  category: "",
};

export const fetchCoursesByCategory = createAsyncThunk(
  "/materials/category/:category",
  async (category: string) => {
    const response = await axios.get<GetCourses[]>(
      `${process.env.EXPO_PUBLIC_API_URL}materials/category/${category}`
    );
    // console.log("response", response.data);
    return response.data;
  }
);

const getCoursesByCategory = createSlice({
  name: "coursesByCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoursesByCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCoursesByCategory.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCoursesByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch courses";
      });
  },
});

export default getCoursesByCategory.reducer;
