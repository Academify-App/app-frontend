// import Constants from "expo-constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { API_URL } from "@env";

// const API_URL = Constants.manifest2?.extra?.API_URL;

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      await AsyncStorage.removeItem("token");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
