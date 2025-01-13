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

export interface Review {
  id: number;
  rating: number;
  value: string;
}

export interface GetCourses {
  id: number;
  category: string;
  numberOfPages: number;
  department: string;
  level: string;
  title: string;
  description: string;
  price: string;
  url: string;
  cover_url: string;
  reviews: Review[];
}

export interface GetCoursesState {
  courses: GetCourses[];
  isLoading: boolean;
  error: string | null;
}

export interface CourseCardProps {
  id?: number;
  cover_url?: string;
  title?: string;
  description?: string;
  price?: string;
  reviews?: Review[];
  level?: string;
  department?: string;
}
