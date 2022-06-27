import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  FirstPage  from '../../pages/FirstPage'
import { Clients } from '../../pages/AllClients'



export default function MainRoutes () {
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path= "/" element = {<FirstPage />} />
            <Route exact path="/" element={<Clients />} />              
        </Routes>
    </BrowserRouter>
    )
}