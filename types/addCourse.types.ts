export interface AddCourseFormData {
  category: string | null;
  numberOfPages: number;
  department: string;
  level: string;
  title: string;
  description: string;
  price: number;
  url: string | null;
  cover_url: string | null;
}

export interface AddCourseFormState {
  formData: AddCourseFormData;
  currStep: number;
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
  document: {
    uri: string;
    name: string;
  } | null;
  coverImage: {
    uri: string;
    name: string;
  } | null;
}
