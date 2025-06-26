import axios from "axios";
import setupInterceptors from "./interceptors";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.example.com",
  timeout: 10000,
});

setupInterceptors(axiosInstance);

export default axiosInstance;
