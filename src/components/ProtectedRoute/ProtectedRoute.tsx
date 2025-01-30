import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectTo?: string;
}

export default function ProtectedRoute({
  isAllowed,
  redirectTo = "/iniciar-sesion",
}: ProtectedRouteProps) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}