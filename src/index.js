import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import DashboardNavigation from "./Components/DashboardNavigation";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardNavigation>
                <Dashboard />
              </DashboardNavigation>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <DashboardNavigation>
                <Orders />
              </DashboardNavigation>
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserAuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
