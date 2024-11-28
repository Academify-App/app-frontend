import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import addCourseReducer from "./slices/addCourseSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    addCourse: addCourseReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActionPaths: ["payload"],
  //     },
  //   }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
