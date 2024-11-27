import { AddCourseFormData } from './addCourse.types';
export interface AddCourseFormData {
  category: string;
  numOfPages: number;
  department: string;
  level: string;
  title: string;
  description: string;
  price: number;
  url: string;
  coverUrl: string;
}

export interface AddCourseFormState {
  formData: AddCourseFormData;
  currStep: string;
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
}
