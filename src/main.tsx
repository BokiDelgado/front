import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HeroUIProvider } from "@heroui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root.tsx";
import SignIn from "./Views/SignIn/SignIn.tsx";
import SignUp from "./Views/SignUp/SignUp.tsx";
import Dashboard from "./Views/Dashboard/Dashboard.tsx";
import ErrorPage from "./Views/ErrorPage/ErrorPage.tsx";
import UserDashboard from "./Views/UserDashboard/UserDashboard.tsx";
import UserTeam from "./Views/UserTeam/UserTeam.tsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.tsx"; // Importa el componente

// Simula una función de autenticación (debes reemplazarla con tu lógica real)
const isAuthenticated = () => {
  // Aquí puedes verificar si el usuario está autenticado (por ejemplo, revisando un token en localStorage)
  return localStorage.getItem("token") !== null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <SignIn /> },
      { path: "/registro", element: <SignUp /> },
      { path: "/iniciar-sesion", element: <SignIn /> },
      {
        // Ruta protegida para el dashboard del administrador
        path: "/admin",
        element: (
          <ProtectedRoute isAllowed={isAuthenticated()} redirectTo="/iniciar-sesion">
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        // Ruta protegida para el dashboard del usuario
        path: "/user",
        element: (
          <ProtectedRoute isAllowed={isAuthenticated()} redirectTo="/iniciar-sesion">
            <UserDashboard />
          </ProtectedRoute>
        ),
      },
      {
        // Ruta protegida para el equipo del usuario
        path: "/user-team",
        element: (
          <ProtectedRoute isAllowed={isAuthenticated()} redirectTo="/iniciar-sesion">
            <UserTeam />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </StrictMode>
);