import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const token = localStorage.getItem("adminTokens");

  if (!token) {
    return <Navigate to="\AdminLogin" replace />;
  }

  return children;
}
