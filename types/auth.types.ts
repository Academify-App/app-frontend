export interface SignInFormData {
  email: string;
  password: string;
}

export interface SignUpFormData extends SignInFormData {
  fullname: string;
  identity: "student" | "facilitator";
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
}

export interface OTPFormData {
  pin: string;
}

export interface PhoneNumberFormData {
  phone: string;
}
