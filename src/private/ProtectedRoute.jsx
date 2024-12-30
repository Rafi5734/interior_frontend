import { Navigate } from "react-router-dom";
import { isAuthenticated, isAdmin } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" replace />; // Redirect to login if not authenticated
  }
  if (!isAdmin()) {
    return <Navigate to="/" replace />; // Redirect to home if not an admin
  }
  return children; // Render the protected component
};

export default ProtectedRoute;
