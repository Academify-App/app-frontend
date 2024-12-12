export interface AddCourseFormData {
  category: string | null;
  numberOfPages: number;
  department: string;
  level: string;
  title: string;
  description: string;
  price: number;
  url: {
    uri: string;
    name: string;
  } | null;
  coverUrl: {
    uri: string;
    name: string;
  } | null;
}

export interface AddCourseFormState {
  formData: AddCourseFormData;
  currStep: number;
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
}
