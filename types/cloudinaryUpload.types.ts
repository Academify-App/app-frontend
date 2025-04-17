export interface CloudinaryUploadState {
  error: string | null;
  doc_url: string | string[];
  isLoading: boolean;
  progress: number;
}

export interface CloudinaryFilePayload {
  uri: string;
  type: string;
  name: string | string[];
}

export interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
}
