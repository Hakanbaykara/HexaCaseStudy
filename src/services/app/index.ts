import type { AxiosError, AxiosResponse } from "axios";

import api from "../api";
import type { ApiResponse } from "@/types/app";

// Function to post process "processing" (POST)
export const postProcess = async (data: {
  content: string;
}): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await api.post(
      "prompt",
      data,
      {
        timeout: 10000, // 10 seconds timeout
      },
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};

// Function to check the process (GET)
export const checkProcess = async (id: string): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await api.get(`prompt/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};
