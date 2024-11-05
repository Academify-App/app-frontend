export type UserRole = "user" | "facilitator";
export interface SignInFormData {
  email: string;
  password: string;
}

export interface SignUpFormData extends SignInFormData {
  name: string;
  identity: UserRole;
}

export interface ForgotPasswordData {
  email: string;
}

export interface EmailVerification {
  email: string;
}

export interface ResetPasswordData {
  password: string;
}

export interface OTPFormData {
  pin: string;
  email: string;
}

export interface PhoneNumberFormData {
  phone: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  identity: UserRole;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}
