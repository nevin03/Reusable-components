import { useState, useEffect, useCallback, useRef } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { useToast } from "@components/Toast/useToast";
import axios from "axios";

const useAxios = ({
  url,
  method = "GET",
  data = null,
  params = null,
  headers = {},
  autoFetch = true,
  showErrorToast = true,
}) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);
  const toast = useToast();
  const controllerRef = useRef(null);

  const fetchData = useCallback(
    async (override = {}) => {
      setLoading(true);
      setError(null);
      controllerRef.current = new AbortController();

      try {
        const res = await axiosInstance({
          url: override.url || url,
          method: override.method || method,
          data: override.data ?? data,
          params: override.params ?? params,
          headers: {
            ...headers,
            ...override.headers,
          },
          signal: controllerRef.current.signal,
        });

        setResponse(res.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          const errorMsg =
            err.response?.data?.message ||
            err.response?.data?.error ||
            err.message ||
            "Something went wrong";

          setError(errorMsg);

          if (showErrorToast) {
            toast.error(errorMsg);
          }
        }
      } finally {
        setLoading(false);
      }
    },
    [url, method, data, params, headers, toast, showErrorToast]
  );

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }

    return () => {
      controllerRef.current?.abort();
    };
  }, [autoFetch, fetchData]);

  return {
    data: response,
    loading,
    error,
    refetch: fetchData,
  };
};

export default useAxios;
