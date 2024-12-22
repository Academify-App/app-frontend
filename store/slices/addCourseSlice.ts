import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCourseFormState, AddCourseFormData } from "@/types/addCourse.types";
import api from "@/services/api";
import { AxiosError } from "axios";

const initialState: AddCourseFormState = {
  formData: {
    category: null,
    numberOfPages: 0,
    department: "",
    level: "",
    title: "",
    description: "",
    price: 0,
    url: null,
    coverUrl: null,
  },
  currStep: 1,
  isSubmitting: false,
  error: null,
  success: false,
};

// Async thunk for adding course material
export const addCourseMaterial = createAsyncThunk(
  "addCourse/material",
  async (data: AddCourseFormData, { rejectWithValue }) => {
    try {
      const response = await api.get("/materials", data);
      console.log("response:", response.data);
      return response.data; // You may want to return meaningful data here
    } catch (error) {
      const err = error as AxiosError;
      console.log("error:", err.message);
      return rejectWithValue(err.message || "An error occured");
    }
  },
);

const addCourseSlice = createSlice({
  name: "addCourse",
  initialState,
  reducers: {
    selectedCategory: (state, action: PayloadAction<string>) => {
      state.formData.category = action.payload;
    },
    updateFormData: (
      state,
      action: PayloadAction<Partial<AddCourseFormData>>,
    ) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    setFormData: (
      state,
      action: PayloadAction<AddCourseFormState["formData"]>,
    ) => {
      state.formData = action.payload;
    },
    setCurrStep: (
      state,
      action: PayloadAction<AddCourseFormState["currStep"]>,
    ) => {
      state.currStep = action.payload;
    },
    setIsSubmitting: (
      state,
      action: PayloadAction<AddCourseFormState["isSubmitting"]>,
    ) => {
      state.isSubmitting = action.payload;
    },
    setError: (state, action: PayloadAction<AddCourseFormState["error"]>) => {
      state.error = action.payload;
    },
    setSuccess: (
      state,
      action: PayloadAction<AddCourseFormState["success"]>,
    ) => {
      state.success = action.payload;
    },
    resetForm: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCourseMaterial.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
        state.success = false;
      })
      .addCase(addCourseMaterial.fulfilled, (state) => {
        state.isSubmitting = false;
        state.success = true;
      })
      .addCase(addCourseMaterial.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error =
          (action.payload as string) || "An error occurred while submitting.";
      });
  },
});

export const {
  updateFormData,
  setFormData,
  setCurrStep,
  setIsSubmitting,
  setError,
  setSuccess,
  resetForm,
  selectedCategory,
} = addCourseSlice.actions;

export default addCourseSlice.reducer;
