import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  CloudinaryUploadState,
  CloudinaryUploadResponse,
} from "@/types/cloudinaryUpload.types";
import axios from "axios";

const initialState: CloudinaryUploadState = {
  error: null,
  doc_url: "",
  isLoading: false,
  progress: 0,
};

// {"asset_folder": "", "asset_id": "e16ad1afbfd59e477d0f4d5f702e82c7", "bytes": 61444, "created_at": "2025-01-10T16:31:33Z", "display_name": "fe5992da-5e08-4c7b-a312-6d767c196687_pb6xzc", "etag": "7b62c40a443fa21e39bc2a39078cff54", "existing": false, "format": "pdf", "height": 841, "original_filename": "fe5992da-5e08-4c7b-a312-6d767c196687", "pages": 1, "placeholder": false, "public_id": "fe5992da-5e08-4c7b-a312-6d767c196687_pb6xzc", "resource_type": "image", "secure_url": "https://res.cloudinary.com/dyek6mrq5/image/upload/v1736526693/fe5992da-5e08-4c7b-a312-6d767c196687_pb6xzc.pdf", "signature": "48c51b7a7870fd9b1405f023e2d763749c2d52df", "tags": [], "type": "upload", "url": "http://res.cloudinary.com/dyek6mrq5/image/upload/v1736526693/fe5992da-5e08-4c7b-a312-6d767c196687_pb6xzc.pdf", "version": 1736526693, "version_id": "aca6f15571e487b0aada5ff4185903ca", "width": 595}

export const cloudinaryUploadFile = createAsyncThunk(
  "cloudinary/uploadFile",
  async (data: string, { dispatch }) => {
    const filename = data.split("/").pop() || "file";
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: data,
        name: filename,
        type: "application/octet-stream",
      } as any);
      formData.append(
        "upload_preset",
        process.env.EXPO_PUBLIC_UPLOAD_PRESET as string,
      );
      formData.append(
        "upload_name",
        process.env.EXPO_PUBLIC_CLOUD_NAME as string,
      );
      const response = await axios.post(
        data.includes("pdf") || data.includes("doc") || data.includes("docx")
          ? (`https://api.cloudinary.com/v1_1/${process.env.EXPO_PUBLIC_CLOUD_NAME}/raw/upload` as string)
          : data.includes("png") ||
              data.includes("jpg") ||
              data.includes("jpeg")
            ? (`https://api.cloudinary.com/v1_1/${process.env.EXPO_PUBLIC_CLOUD_NAME}/image/upload` as string)
            : (`https://api.cloudinary.com/v1_1/${process.env.EXPO_PUBLIC_CLOUD_NAME}/video/upload` as string),
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total ?? 100),
            );
            dispatch(setProgress(progress));
          },
        },
      );
      console.log(response.data);
      return response.data as CloudinaryUploadResponse;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("An error occurred while uploading the file");
    }
  },
);

const cloudinaryUploadSlice = createSlice({
  name: "cloudinaryUpload",
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    resetUpload: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(cloudinaryUploadFile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.progress = 0;
      })
      .addCase(cloudinaryUploadFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doc_url = action.payload.secure_url;
        state.progress = 100;
      })
      .addCase(cloudinaryUploadFile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.progress = 0;
      });
  },
});

export const { setProgress, resetUpload, setIsLoading } =
  cloudinaryUploadSlice.actions;
export default cloudinaryUploadSlice.reducer;
