import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "../../pages/FirstPage";
import Register from "../../pages/Register";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
