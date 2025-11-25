import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import React from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    localStorage.setItem("returnUrl", location.pathname);
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
