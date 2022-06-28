import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  FirstPage  from '../../pages/FirstPage'
import { ListClients } from '../../pages/ListClients';



export default function MainRoutes () {
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path= "/" element = {<FirstPage />} />
            <Route exact path="/listclients" element={<ListClients />} />              
        </Routes>
    </BrowserRouter>
    )
    
}