import { useEffect } from "react";

export default function Notification({ message, icon, type = "info", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto-hide after 10s

    return () => clearTimeout(timer);
  }, [onClose]);

  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };
  const textStyles = {
    success: "text-green-500",
    error: "text-red-500",
    warning: "text-yellow-500",
    info: "text-blue-500",
  }


  return (
    <div className={`fixed top-10 right-5 px-5 py-3 rounded-lg text-white shadow-lg flex items-center gap-3 z-50 animate-slideIn`}
      style={{ minWidth: "260px" }}
    >
      <span className="text-xl">{icon}</span>
      <p className={`font-medium ${textStyles[type]}`}>{message}</p>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="ml-3 text-xl font-bold text-white opacity-70 hover:opacity-100"
      >
        ×
      </button>

      {/* Progress Bar */}
      <div
        className={`absolute bottom-0 left-0 h-1 ${typeStyles[type]} animate-progress`}
      ></div>
    </div>
  );
}
