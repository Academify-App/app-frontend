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
import { Zel } from "iconsax-react-native";

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: SignInFormData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/login", data);
      await AsyncStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const register = createAsyncThunk(
  "auth/register",
  async (data: SignUpFormData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/register", data);
      await AsyncStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
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
      return rejectWithValue(error);
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
      return rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AsyncStorage.removeItem("token");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export default authSlice.reducer;
