export interface FormData {
  email: string;
  message: string;
}

export interface ContactSubmission extends FormData {
  timestamp: string;
}

export type SubmitStatus = 'success' | 'error' | null;

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}