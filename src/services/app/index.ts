import type { AxiosError, AxiosResponse } from "axios";

const { default: api } = require("../api");

// Function to check the process (GET)
export const checkProcess = async (id: string): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await api.post(`prompt/${id}`);
    console.log("check works,", response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};

// Function to post process "processing" (POST)
export const postProcess = async (data: string): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await api.post(
      `prompt/${data}`,
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};
