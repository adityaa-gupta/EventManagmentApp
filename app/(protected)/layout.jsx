"use client";

import useAuth from "@hooks/useAuth";
import useAuthStore from "@store/useAuthStore";

const ProtectedRoute = ({ children }) => {
  useAuth();
  const { isAuthenticated, isLoading } = useAuthStore();
  return isLoading ? (
    <div>Loading...</div>
  ) : isAuthenticated ? (
    children
  ) : (
    <div>Not authenticated</div>
  );
};

export default ProtectedRoute;
