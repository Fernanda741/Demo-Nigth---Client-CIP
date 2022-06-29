import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "../../pages/FirstPage";
import Register from "../../pages/Register";
import { ListClients } from "../../pages/ListClients";
import Uptade from "../../pages/Uptade";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/listclients" element={<ListClients />} />
        <Route exact path="/update" element={<Uptade />} />
      </Routes>
    </BrowserRouter>
  );
}
