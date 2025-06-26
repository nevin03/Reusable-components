// src/Axios-utils/index.js
import axios from "axios";
import setupInterceptors from "./interceptors";

// Create instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.example.com",
  timeout: 10000,
});

// Apply interceptors (no React hook used here!)
setupInterceptors(axiosInstance);

export default axiosInstance;
