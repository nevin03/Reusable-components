//custom hook to call toast

import { useContext } from "react";
import { ToastContextRef } from "../../../contexts/ToastProvider";

export const useToast = () => {
  const context = useContext(ToastContextRef);
  if (!context) throw new Error("useToast must be used within ToastProvider");

  return {
    showToast: context.showToast,
    success: (msg, duration) => context.showToast(msg, "success", duration),
    error: (msg, duration) => context.showToast(msg, "error", duration),
    warning: (msg, duration) => context.showToast(msg, "warning", duration),
    info: (msg, duration) => context.showToast(msg, "info", duration),
  };
};
