import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "@/services/api";
import {
  AuthState,
  SignInFormData,
  SignUpFormData,
  EmailVerification,
  OTPFormData,
} from "@/types/auth.types";
import { AxiosError } from "axios";
// import { Zel } from "iconsax-react-native";

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: SignInFormData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/login", data);
      if (response && response.data && response.data.token) {
        await AsyncStorage.setItem("token", response.data.token);
      }
      // console.log(response.data);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      console.log("error:", err.message);
      return rejectWithValue(err.message || "An error occured");
    }
  },
);

export const register = createAsyncThunk(
  "auth/register",
  async (data: SignUpFormData, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await api.post("/api/register", data);
      // await AsyncStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error: any) {
      const err = error as AxiosError;
      console.log("error:", err.message);
      return rejectWithValue(err.message || "An error occured");
    }
  },
);

export const emailVerification = createAsyncThunk(
  "auth/emailVerification",
  async (data: EmailVerification, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/send-otp", data);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.response?.data || "An error occured");
    }
  },
);

export const otp = createAsyncThunk(
  "auth/otp",
  async (data: OTPFormData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/verify-otp", data);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.response?.data || "An error occured");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      AsyncStorage.removeItem("token");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // login cases
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // register cases
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // email verification cases
      .addCase(emailVerification.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(emailVerification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(emailVerification.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // otp cases
      .addCase(otp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(otp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(otp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
