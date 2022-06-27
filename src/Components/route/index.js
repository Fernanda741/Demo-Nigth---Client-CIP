import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FirstPage from '../../pages/FirstPage'


export default function MainRoutes () {
    <BrowserRouter>
        <Routes>
            <Route exact path= "/" element = {<FirstPage />} />            
        </Routes>
    </BrowserRouter>
}