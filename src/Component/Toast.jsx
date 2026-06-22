"use client";

import { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const typeStyles = {
    success: "alert-success",
    error: "alert-error",
    info: "alert-info",
    warning: "alert-warning",
  };

  return (
    <div className="toast toast-top toast-end z-50">
      <div className={`alert ${typeStyles[type]} shadow-lg`}>
        <span>{message}</span>
        <button onClick={onClose} className="btn btn-sm btn-ghost">✕</button>
      </div>
    </div>
  );
}