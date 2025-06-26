// src/lib/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // ✅ set your base URL here
  timeout: 10000,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or from context/store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling
    if (error.response?.status === 401) {
      console.warn("Unauthorized - maybe redirect to login.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
