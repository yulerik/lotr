import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const container = document.getElementById('root')
// create root
const root = ReactDOMClient.createRoot(container)
// init render, render element to the root
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
// during update no need to pass container again
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
