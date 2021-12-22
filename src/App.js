import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
  const { userData } = useSelector((state) => state.auth);

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
          element={!userData ? <Navigate to="/login" /> : <Dashboard />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
