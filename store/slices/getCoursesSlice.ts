import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GetCourses, GetCoursesState } from "@/types/course.types";

const initialState: GetCoursesState = {
  courses: [],
  isLoading: false,
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await axios.get<GetCourses[]>(
      `${process.env.EXPO_PUBLIC_API_URL}materials`,
    );
    return response.data;
  },
);

const getCoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch courses";
      });
  },
});

export default getCoursesSlice.reducer;
