import React from 'react'
import './index.css'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Fellowship from './components/Fellowship'
import All from './components/All'

export default function App() {

    return (
    <>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='fellowship' element={<Fellowship />} />
            <Route path='characters' element={<All />} />
        </Routes>
        <Outlet />
    </>
    )
}