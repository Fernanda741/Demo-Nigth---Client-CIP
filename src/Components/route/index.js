import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "../../pages/FirstPage";
import Register from "../../pages/Register";
import { ListClients } from "../../pages/ListClients";
import ComponentMenu from "../../Components/Menu";
import { ComponentFooter } from "../Footer";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <ComponentMenu />
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/listclients" element={<ListClients />} />
      </Routes>
      {/*<ComponentFooter />*/}
    </BrowserRouter>
  );
}
