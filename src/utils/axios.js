import axios from "axios";
import { toastController } from "@contexts/ToastProvider";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || "Something went wrong";

    if (status === 401) {
      toastController.error("Session expired. Please log in again.");
      localStorage.removeItem("token");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } else if (status === 403) {
      toastController.error("You dont have permission to perform this action.");
    } else {
      toastController.error(message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
