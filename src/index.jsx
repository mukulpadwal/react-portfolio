import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* this helps us ability to use roytes within our application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
