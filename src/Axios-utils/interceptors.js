// src/Axios-utils/interceptors.js
const setupInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // No useToast here – let UI handle toasts
      return Promise.reject(error);
    }
  );
};

export default setupInterceptors;
