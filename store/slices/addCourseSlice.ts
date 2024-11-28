import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCourseFormState, AddCourseFormData } from "@/types/addCourse.types";

const initialState: AddCourseFormState = {
  formData: {
    category: "",
    numOfPages: 0,
    department: "",
    level: "",
    title: "",
    description: "",
    price: 0,
    url: "",
    coverUrl: "",
  },
  currStep: "1",
  isSubmitting: false,
  error: null,
  success: false,
};

const addCourseSlice = createSlice({
  name: "addCourse",
  initialState,
  reducers: {
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
});

export const {
  updateFormData,
  setFormData,
  setCurrStep,
  setIsSubmitting,
  setError,
  setSuccess,
  resetForm,
} = addCourseSlice.actions;
export default addCourseSlice.reducer;
