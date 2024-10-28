import { RouteParamInput } from "expo-router";
// export interface OTPVerificationParams {
//   otp?: string;
//   email: string;
//   topHeading: string;
//   subHeading: string;
//   title: string;
// }

export type OTPVerificationParams = RouteParamInput<"/(auth)/[otp]">;
