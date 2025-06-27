import axios from "axios";
import setupInterceptors from "axios/interceptors";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

setupInterceptors(axiosInstance);

export default axiosInstance;
