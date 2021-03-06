import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from '../../pages/FirstPage';
import Register from '../../pages/Register';
import { ListClients } from '../../pages/ListClients';
import BillCorrent from '../../pages/BillCorrent'


export default function MainRoutes() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/list-clients" element={<ListClients />} />
        <Route exact path="/bill-corrent" element={<BillCorrent />} />
      </Routes> 
    </BrowserRouter>
  );
}
