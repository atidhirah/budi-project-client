import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  // const { userData } = useSelector((state) => state.auth)
  const userData = null;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !userData ? <Navigate to="/login" /> : <Navigate to="/dashboard" />
          }
        />
        <Route
          path="/dashboard"
          element={!userData ? <Navigate to="/login" /> : <DashboardPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
